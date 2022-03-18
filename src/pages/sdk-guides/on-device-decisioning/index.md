# Introduction to on-device decisioning

The next-generation Adobe Target SDKs now offer on-device decisioning, which provides the ability to cache your A/B and Experience Targeting (XT) campaigns on your server and perform in-memory decisioning at near-zero latency, without blocking network requests to Adobe Target's Edge Network. Adobe Target also offers the flexibility of delivering the most relevant and up-to-date experience from your experimentation and ML-driven personalization campaigns via a live server call. In other words, when performance is most important, you can choose to utilize on-device decisioning, but when the most relevant and up-to-date experience is needed, a server call can be made instead. See [when to use on-device vs. edge decisioning](https://adobetarget-sdks.gitbook.io/docs/best-practices/when-to-use-server-side-vs-on-device-decisioning) to learn about use cases that warrant using one over the other.

## How does it work?

When you install and initialize an Adobe Target SDK with on-device decisioning enabled, a *rule artifact* is downloaded and cached locally on your server, from the Akamai CDN closest to your server. When a request to retrieve an Adobe Target experience is made within your server-side application, the decision regarding which content to return is made in-memory, based on the metadata encoded in the cached rule artifact, which defines all of your on-device decisioning A/B and XT activities.

*Insert image-sdk-local-decisioning-architecture-diagram.png*

## What are the benefits?

* **Deliver near-zero latency decisions.** Bucketing and decisioning are performed in-memory and on-device to avoid blocking network requests.
* **Enhance application performance.** Run experiments and deliver personalization to your customers and users without compromising end-user experiences.
* **Improve Google Site Quality Score.** With decisioning happening in-memory and on the server-side, improve the Google Site Quality score of your online business to make it more discoverable by consumers.
* **Learn from real-time analytics.** Gain insights from your activity performance in real-time via Adobe Target or A4T reporting, enabling you to pivot your strategy at critical moments.

## Supported functionality

### Activities

On-device decisioning supports the following activity types created by the [Form-based Experience Composer](https://docs.adobe.com/help/en/target/using/experiences/form-experience-composer.html):

* A/B Test
* Experience Targeting (XT)

### Allocation Method

On-device decisioning supports the following allocation method:

* Manual

### Audience Targeting

On-device decisioning supports the following audience rules:

|Audience Rule|On-device Decisioning|
| --- | --- |
|[Geo](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/geo.html)|Yes|
|[Network](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/network.html)|No|
|[Mobile](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/mobile.html)|No|
|[Custom Parameters](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/custom-parameters.html)|Yes|
|[Operating System](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/operating-system.html)|Yes|
|[Site Pages](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/site-pages.html)|Yes|
|[Browser](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/browser.html)|Yes|
|[Visitor Profile](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/visitor-profile.html)|No|
|[Traffic Sources](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/traffic-sources.html)|No|
|[Time Frame](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/time-frame.html)|Yes|
|[Experience Cloud Audiences](https://experienceleague.adobe.com/docs/target/using/integrate/mmp.html) (Audiences from Adobe Audience Manager, Adobe Analytics, and Adobe Experience Manager|No|

## How do I provision my client to use on-device decisioning?

On-device decisioning is available for all Adobe Target customers who use Adobe Target server-side SDKs. In order to enable this feature, navigate to **Administration** > **Implementation** > **Account details** in the Adobe Target UI, and enable the **On-Device Decisioning** toggle.

**NOTE**: You must have the Admin or Approver *user role* to enable or disable the On-Device Decisioning toggle.

*Insert image-odd4.png*

After enabling the On-Device Decisioning toggle, Adobe Target will begin generating and propagating *rule artifacts* for your client.

**NOTE**: Ensure you enable the toggle before you initialize the Adobe Target SDK to use on-device decisioning. The rule artifacts will first need to generate and propagate to the Akamai CDNs in order for on-device decisioning to work.

### Include all existing on-device decisioning qualified activities in the artifact toggle

Toggle this **on** when you would like all your live Target activities that qualify for on-device decisioning to be automatically included in the artifact.

Leaving this toggle **off** means you will need to re-create and activate any on-device decisioning activities in order for them to be included in the generated rules artifact.

## How do I know an activity is on-device decisioning capable?

After you create an activity, a label called **Decisioning Method**, visible in the activity detail page, indicates whether the activity is on-device decisioning capable.

*Insert image-odd9.png*

You can also see all activities that are on-device decisioning capable on the **Activities** page by adding the column **Decisioning Method** to the list of activities.

*Insert image-odd7.png*

**NOTE**: After creating and activating an activity that is on-device decisioning capable, it may take up 5-10 minutes before it is included in the rules artifact that is generated and propagated to the Akamai CDN PoPs.

## What is the summary of steps I need to follow to ensure my on-device decisioning activities are delivered successfully via Adobe Target's server-side SDK?

1. Access the Adobe Target UI and navigate to **Administration** > **Implementation** > **Account details** to enable the **On-Device Decisioning** toggle.
1. Enable the **Include all existing on-device decisioning qualified activities in the artifact** toggle.
1. Create and activate an activity type that is *supported* by on-device decisioning, and verify that the **Decisioning Method** is **On-Device Decisioning** for that activity.
1. Install and initialize the *Node.js* or *Java* SDK with `decisioningMethod = on-device`.
1. Implement `getOffers()` or `getAttributes()` in your code to retrieve an experience on-device.
1. Deploy your code.

For examples demonstrating how to get started with steps 1-3 above, see *Getting started (Node.js)*, or *Getting started (Java)*.