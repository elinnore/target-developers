/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  siteMetadata: {
    home: {
      title: 'Adobe Target Developer Guide',
      path: '/target/'
    },
    pages: [
      {
        title: 'Before You Implement',
        path: '/before-implement/'
      },
      {
        title: 'Implement',
        menu: [
          {
            title: 'Client-side',
            description: 'Implement using AEP Web SDK or at.js',
            path: '/implement/client-side/implement-target-for-client-side-web.md'
          },
          {
            title: 'Server-side',
            description: 'Node.js, Java, .NET, Python',
            path: '/implement/server-side/'
          },
          {
            title: 'Hybrid',
            description: 'Client- and Server-side combination',
            path: '/implement/hybrid/'
          },
          {
            title: 'Mobile',
            description: 'AEP Mobile SDK',
            path: '/implement/mobile/'
          },
          {
            title: 'APIs',
            description: 'Get Started, Delivery API',
            path: '/implement/api-guides/'
          }
        ]
      },
      {
        title: 'API Guides',
        path: '/api-guides/'
      },
      {
        title: 'API Reference',
        menu: [
          {
          title: 'Delivery API',
          description: 'Adobe Target Delivery API',
          path: '/api/delivery-api/index.md'
          },
          {
          title: 'Admin and Profile API',
          description: 'Adobe Target Admin and Profile API',
          path: '/api/admin-api/index.md'
          }
        ]
      },
      {
        title: 'SDK Guides',
        path: '/sdk-guides/'
      },
      {
        title: 'SDK Reference',
        menu: [
          {
            title: 'SDK Overview',
            description: 'Adobe Target SDK Overview',
            path: '/sdk/'
          },
          {
          title: 'Node.js SDK',
          description: 'Adobe Target Node.js SDK',
          path: '/sdk/node-js/'
          },
          {
          title: 'Java SDK',
          description: 'Adobe Target Java SDK',
          path: '/sdk/java/'
          },
          {
          title: '.NET SDK',
          description: 'Adobe Target .NET SDK',
          path: '/sdk/net/'
          },
          {
          title: 'Python SDK',
          description: 'Adobe Target Python SDK',
          path: '/sdk/python/'
          }
        ]
      },
      {
        title: 'Support',
        path: '/support/'
      }
    ],
    subPages: [
      {
        title: 'Before You Implement',
        path: '/before-implement/',
        pages: [
          {
            title: 'Before you implement',
            path: '/before-implement/'
          },
          {
            title: 'Prepare to implement',
            path: '/before-implement/prepare-to-implement-target.md'
          }
        ]
      },
      {
        title: 'Privacy and security',
        path: '/before-implement/privacy/privacy.md',
        pages: [
          {
            title: 'Privacy overview',
            path: '/before-implement/privacy/privacy.md'
          },
          {
            title: 'Privacy and data protection regulations',
            path: '/before-implement/privacy/cmp-privacy-and-general-data-protection-regulation.md'
          },
          {
            title: 'Target cookies',
            path: '/before-implement/privacy/cookie-behavior.md'
          },
          {
            title: 'Delete the Target cookie',
            path: '/before-implement/privacy/cookie-deleting.md'
          },
          {
            title: 'Google Chrome SameSite cookie policies',
            path: '/before-implement/privacy/google-chrome-samesite-cookie-policies.md'
          },
          {
            title: 'Apple Intelligent Tracking Prevention (ITP) 2.x',
            path: '/before-implement/privacy/apple-itp-2x.md'
          },
          {
            title: 'Content Security Policy (CSP) directives',
            path: '/before-implement/privacy/content-security-policy.md'
          },
          {
            title: 'Allowlist Target edge nodes',
            path: '/before-implement/privacy/allowlist-edges.md'
          }
        ]
      },
      {
        title: 'Methods to get data into Target',
        path: '/before-implement/methods-to-get-data-into-target/methods-to-get-data-into-target.md',
        pages: [
          {
            title: 'Methods overview',
            path: '/before-implement/methods-to-get-data-into-target/methods-to-get-data-into-target.md'
          },
          {
            title: 'Page parameters',
            path: '/before-implement/methods-to-get-data-into-target/page-parameters.md'
          },
          {
            title: 'In-page profile attributes',
            path: '/before-implement/methods-to-get-data-into-target/in-page-profile-attributes.md'
          },
          {
            title: 'Script profile attributes',
            path: '/before-implement/methods-to-get-data-into-target/script-profile-attributes.md'
          },
          {
            title: 'Data providers',
            path: '/before-implement/methods-to-get-data-into-target/data-providers.md'
          },
          {
            title: 'Bulk profile update API',
            path: '/before-implement/methods-to-get-data-into-target/bulk-profile-update-api.md'
          },
          {
            title: 'Single profile update API',
            path: '/before-implement/methods-to-get-data-into-target/single-profile-update-api.md'
          },
          {
            title: 'Customer attributes',
            path: '/before-implement/methods-to-get-data-into-target/customer-attributes.md'
          },
          {
            title: 'Profile API settings',
            path: '/before-implement/methods-to-get-data-into-target/profile-api-settings.md'
          }
        ]
      },
      {
        title: 'Target security overview',
        path: '/before-implement/target-security-overview.md'
      },
      {
        title: 'Supported browsers',
        path: '/before-implement/supported-browsers.md'
      },
      {
        title: 'Transport Layer Security (TLS) encryption changes',
        path: '/before-implement/tls-transport-layer-security-encryption.md'
      },
      {
        title: 'CNAME and Adobe Target',
        path: '/before-implement/implement-cname-support-in-target.md'
      },
      {
        title: 'Implement Target overview',
        path: '/implement/implementing-target.md'
      },
      {
        title: 'Client-side web: implement Target',
        path: '/implement/client-side/implement-target-for-client-side-web.md',
        pages: [
          {
            title: 'Overview: implement Target for client-side web',
            path: '/implement/client-side/implement-target-for-client-side-web.md'
          },
          {
            title: 'AEP Web SDK implementation overview',
            path: '/implement/client-side/aep-web-sdk.md'
          },
          {
            title: 'at.js implementation',
            path: '/implement/client-side/how-atjs-works/',
            pages: [
              {
                title: 'How at.js works',
                path: '/implement/client-side/how-atjs-works/how-atjs-works.md'
              },
              {
                title: 'How at.js manages flicker',
                path: '/implement/client-side/how-atjs-works/manage-flicker-with-atjs.md'
              },
              {
                title: 'at.js integrations',
                path: '/implement/client-side/how-atjs-works/target-atjs-integrations.md'
              }
            ]
          },
          {
            title: 'How to deploy at.js',
            path: '/implement/client-side/how-to-deployatjs/',
            pages: [
              {
                title: 'How to deploy at.js',
                path: '/implement/client-side/how-to-deployatjs/how-to-deployatjs.md'
              },
              {
                title: 'Implement Target using Adobe Experience Platform',
                path: '/implement/client-side/how-to-deployatjs/implement-target-using-adobe-launch.md'
              },
              {
                title: 'Implement Target without a tag manager',
                path: '/implement/client-side/how-to-deployatjs/implement-target-without-a-tag-manager.md'
              },
              {
                title: 'Implement Target using Dynamic Tag Manager (DTM)',
                path: '/implement/client-side/how-to-deployatjs/implement-target-using-dtm.md'
              },
              {
                title: 'Implement Target for Single Page Applications (SPAs)',
                path: '/implement/client-side/how-to-deployatjs/target-atjs-single-page-application.md'
              }
            ]
          },
          {
            title: 'at.js functions',
            path: '/implement/client-side/atjs-functions/',
            pages: [
              {
                title: 'at.js functions overview',
                path: '/implement/client-side/atjs-functions/atjs-functions.md'
              },
              {
                title: 'adobe.target.getOffer()',
                path: '/implement/client-side/atjs-functions/adobe-target-getoffer.md'
              },
              {
                title: 'adobe.target.getOffers() - at.js 2.x',
                path: '/implement/client-side/atjs-functions/adobe-target-getoffers-atjs-2.md'
              },
              {
                title: 'adobe.target.applyOffer()',
                path: '/implement/client-side/atjs-functions/adobe-target-applyoffer.md'
              },
              {
                title: 'adobe.target.applyOffers() - at.js 2.x',
                path: '/implement/client-side/atjs-functions/adobe-target-applyoffers-atjs-2.md'
              },
              {
                title: 'adobe.target.triggerView() - at.js 2.x',
                path: '/implement/client-side/atjs-functions/adobe-target-triggerview-atjs-2.md'
              },
              {
                title: 'adobe.target.trackEvent()',
                path: '/implement/client-side/atjs-functions/adobe-target-trackevent.md'
              },
              {
                title: 'mboxCreate() - at.js 1.x',
                path: '/implement/client-side/atjs-functions/mboxcreate-atjs.md'
              },
              {
                title: 'targetGlobalSettings()',
                path: '/implement/client-side/atjs-functions/targetglobalsettings.md'
              },
              {
                title: 'mboxDefine() and mboxUpdate() - at.js 1.x',
                path: '/implement/client-side/atjs-functions/mboxdefine-mboxupdate-atjs-1x.md'
              },
              {
                title: 'targetPageParams()',
                path: '/implement/client-side/atjs-functions/targetpageparams.md'
              },
              {
                title: 'targetPageParamsAll()',
                path: '/implement/client-side/atjs-functions/targetpageparamsall.md'
              },
              {
                title: 'registerExtension() - at.js 1.x',
                path: '/implement/client-side/atjs-functions/registerextension-atjs-1x.md'
              },
              {
                title: 'sendNotifications() - at.js 2.1',
                path: '/implement/client-side/atjs-functions/adobe.target.sendnotifications-atjs-21.md'
              },
              {
                title: 'at.js custom events',
                path: '/implement/client-side/atjs-functions/atjs-custom-events.md'
              },
              {
                title: 'Debug at.js using the Adobe Experience Cloud Debugger',
                path: '/implement/client-side/target-debugging-atjs/target-debugging-atjs.md'
              },
              {
                title: 'Use cloud-based instances with Target',
                path: '/implement/client-side/target-debugging-atjs/targeting-using-cloud-based-instances.md'
              }
            ]
          },
          {
            title: 'at.js frequently asked questions',
            path: '/implement/client-side/target-atjs-faq/target-atjs-faq.md',
            pages: [
              {
                title: 'at.js FAQs',
                path: '/implement/client-side/target-atjs-faq/target-atjs-faq.md'
              }
            ]
          },
          {
            title: 'at.js version details',
            path: '/implement/client-side/target-atjs-versions.md'
          },
          {
            title: 'Upgrading from at.js 1.x to at.js 2.x',
            path: '/implement/client-side/upgrading-from-atjs-1x-to-atjs-20.md'
          },
          {
            title: 'at.js cookies',
            path: '/implement/client-side/atjs-cookies.md'
          },
          {
            title: 'Understand the Global mbox',
            path: '/implement/client-side/global-mbox',
            pages: [
              {
                title: 'Global mbox overview',
                path: '/implement/client-side/global-mbox/global-mbox-overview.md'
              },
              {
                title: 'Customize a global mbox',
                path: '/implement/client-side/global-mbox/customize-global-mbox.md'
              },
              {
                title: 'Use a global mbox from a legacy implementation',
                path: '/implement/client-side/global-mbox/mbox-global-target-standard.md'
              },
              {
                title: 'Pass parameters to a global mbox',
                path: '/implement/client-side/global-mbox/pass-parameters-to-global-mbox.md'
              },
              {
                title: 'Global mbox frequently asked questions',
                path: '/implement/client-side/global-mbox/global-mbox-faq'
              }
            ]
          },
        ]
      },
      {
        title: 'Target for mobile apps overview',
        path: '/implement/mobile/target-mobile-app.md'
      },
      {
        title: 'How Target works in mobile apps',
        path: '/implement/mobile/how-target-works-mobile-apps.md'
      },
      {
        title: 'Enable Target in the SDK',
        path: '/implement/mobile/enable-target-in-sdk.md'
      },
      {
        title: 'iOS - create a Target location and success metric',
        path: '/implement/mobile/mobile-create-location-and-metric.md'
      },
      {
        title: 'iOS - send custom user data',
        path: '/implement/mobile/mobile-custom-user-data.md'
      },
      {
        title: 'Target mobile preview',
        path: '/implement/mobile/target-mobile-preview.md'
      },
      {
        title: 'Prefetch offer content',
        path: '/implement/mobile/prefetch-offer-content.md'
      },
      {
        title: 'Target for mobile apps FAQ',
        path: '/implement/mobile/mobile-faq.md'
      },
      {
        title: 'Use Location Service',
        path: '/implement/mobile/use-location-service'
      },
      {
        title: 'Server-side: implement Target overview',
        path: '/implement/server-side/server-side-overview.md'
      },
      {
        title: 'Transition from Target legacy APIs to Adobe I/O',
        path: '/implement/server-side/transition-from-target-legacy-apis.md'
      },
      {
        title: 'On-device decisioning',
        path: '/implement/server-side/on-device-decisioning.md'
      },
      {
        title: 'Hybrid implementation',
        path: '/implement/hybrid/hybrid-implementation.md'
      },
      {
        title: 'Email: implement Target overview',
        path: '/implement/email/non-js-based-implementation.md'
      },
      {
        title: 'Create an Adbox for an image',
        path: '/implement/email/testing-content-with-the-adbox.md'
      },
      {
        title: 'Test an email image Adbox',
        path: '/implement/email/testing-email-image-adbox.md'
      },
      {
        title: 'Work with redirectors',
        path: '/implement/email/working with redirectors.md'
      },
      {
        title: 'Get Started',
        path: '/api-guides/',
        header: true,
        pages: [
          {
            title: 'Target API Overview',
            path: '/api-guides/'
          },
          {
            title: 'How to Configure Authentication for Adobe Target APIs',
            path: '/api-guides/configure-authentication.md'
          }
        ]
      },
      {
        title: 'Use Recommendations APIs',
        path: '/api-guides/recs-api/',
        header: true,
        pages: [
          {
            title: 'Recs API Overview',
            path: '/api-guides/recs-api/'
          },
          {
            title: 'Manage Your Catalog with APIs',
            path: '/api-guides/recs-api/manage-catalog.md'
          },
          {
            title: 'Manage Custom Criteria',
            path: '/api-guides/recs-api/manage-custom-criteria.md'
          },
          {
            title: 'Use the Delivery API with Recommendations',
            path: '/api-guides/recs-api/fetch-recs-server-side-delivery-api.md'
          }
        ]
      },
      {
        title: 'Target SDK Overview',
        path: '/sdk-guides/',
        header: true,
        pages: [
          {
            title: 'Welcome',
            path: '/sdk-guides/'
          },
          {
            title: 'Getting started',
            path: '/sdk-guides/getting-started/'
          },
          {
            title: 'Sample apps',
            path: '/sdk-guides/sample-apps/'
          },
        ]
      },
      {
        title: 'Core Principles',
        path: '/sdk-guides/core-principles/',
        header: true,
        pages: [
          {
            title: 'Adobe Target core principles',
            path: '/sdk-guides/core-principles/',
          },
          {
            title: 'User identification & bucketing',
            path: '/sdk-guides/core-principles/user-identification-and-bucketing.md'
          },
          {
            title: 'Audience targeting',
            path: '/sdk-guides/core-principles/audience-targeting.md'
          },
          {
            title: 'Event tracking',
            path: '/sdk-guides/core-principles/event-tracking.md'
          },
          {
            title: 'User permissions & properties',
            path: '/sdk-guides/core-principles/user-permissions-and-properties.md'
          }
        ]
      },
      {
        title: 'Integration',
        path: '/sdk-guides/integration-with-experience-cloud/',
        header: true,
        pages: [
          {
            title: 'Integration Overview',
            path: '/sdk-guides/integration-with-experience-cloud/',
          },
          {
            title: 'Experience Cloud ID (ECID) Service',
            path: '/sdk-guides/integration-with-experience-cloud/ecid.md'
          },
          {
            title: 'Analytics for Target (A4T) reporting',
            path: '/sdk-guides/integration-with-experience-cloud/a4t-reporting.md'
          },
          {
            title: 'AAM Segments',
            path: '/sdk-guides/integration-with-experience-cloud/aam-segments.md'
          }
        ]
      },
      {
        title: 'On-Device Decisioning',
        path: '/sdk-guides/on-device-decisioning/',
        header: true,
        pages: [
          {
            title: 'Introduction to On-Device Decisioning',
            path: '/sdk-guides/on-device-decisioning/'
          },
          {
            title: 'Rule artifact',
            path: '/sdk-guides/on-device-decisioning/rule-artifact-overview.md'
          },
          {
            title: 'Execute A/B tests with feature flags',
            path: '/sdk-guides/on-device-decisioning/execute-ab-tests-with-feature-flags.md'
          },
          {
            title: 'Execute feature tests with attributes',
            path: '/sdk-guides/on-device-decisioning/execute-feature-tests-with-attributes.md'
          },
          {
            title: 'Manage rollouts for feature tests',
            path: '/sdk-guides/on-device-decisioning/manage-rollouts-for-feature-tests.md'
          },
          {
            title: 'Deliver personalization',
            path: '/sdk-guides/on-device-decisioning/deliver-personalization.md'
          },
          {
            title: 'Supported features',
            path: '/sdk-guides/on-device-decisioning/supported-features.md'
          },
          {
            title: 'Troubleshooting',
            path: '/sdk-guides/on-device-decisioning/troubleshooting.md'
          }
        ]
      },
      {
        title: 'Best Practices',
        path: '/sdk-guides/best-practices/',
        header: true,
        pages: [
          {
            title: 'When to use on-device vs. edge decisioning',
            path: '/sdk-guides/best-practices/'
          },
        ]
      },
      {
        title: 'Node.js SDK',
        path: '/sdk/node-js/',
        pages: [
          {
            title: 'Overview',
            path: '/sdk/node-js/',
          },
          {
            title: 'Install SDK',
            path: '/sdk/node-js/install-sdk.md'
          },
          {
            title: 'Initialize SDK',
            path: '/sdk/node-js/initialize-sdk.md'
          },
          {
            title: 'Get Offers',
            path: '/sdk/node-js/get-offers.md'
          },
          {
            title: 'Get Attributes',
            path: '/sdk/node-js/get-attributes.md'
          },
          {
            title: 'Send Notifications',
            path: '/sdk/node-js/send-notifications.md'
          },
          {
            title: 'SDK Events',
            path: '/sdk/node-js/sdk-events.md'
          },
          {
            title: 'Logger',
            path: '/sdk/node-js/logger.md'
          }
        ]
      },
      {
        title: 'Java SDK',
        path: '/sdk/java/',
        pages: [
          {
            title: 'Overview',
            path: '/sdk/java/'
          },
          {
            title: 'Install SDK',
            path: '/sdk/java/install-sdk.md'
          },
          {
            title: 'Initialize SDK',
            path: '/sdk/java/initialize-sdk.md'
          },
          {
            title: 'Get Offers',
            path: '/sdk/java/get-offers.md'
          },
          {
            title: 'Get Attributes',
            path: '/sdk/java/get-attributes.md'
          },
          {
            title: 'Send Notifications',
            path: '/sdk/java/send-notifications.md'
          },
          {
            title: 'SDK Events',
            path: '/sdk/java/sdk-events.md'
          },
          {
            title: 'Logger',
            path: '/sdk/java/logger.md'
          },
          {
            title: 'Asynchronous Requests',
            path: '/sdk/java/asynchronous-requests.md'
          },
          {
            title: 'Proxy Configuration',
            path: '/sdk/java/proxy-configuration.md'
          },
          {
            title: 'Utility Methods',
            path: '/sdk/java/utility-methods.md'
          }
        ]
      },
      {
        title: '.NET SDK',
        path: '/sdk/net/',
        pages: [
          {
            title: 'Overview',
            path: '/sdk/net/'
          },
          {
            title: 'Install SDK',
            path: '/sdk/net/install-sdk.md'
          },
          {
            title: 'Initialize SDK',
            path: '/sdk/net/initialize-sdk.md'
          },
          {
            title: 'Get Offers',
            path: '/sdk/net/get-offers.md'
          },
          {
            title: 'Get Attributes',
            path: '/sdk/net/get-attributes.md'
          },
          {
            title: 'Send Notifications',
            path: '/sdk/net/send-notifications.md'
          },
          {
            title: 'SDK Events',
            path: '/sdk/net/sdk-events.md'
          },
          {
            title: 'Asynchronous Requests',
            path: '/sdk/net/asynchronous-requests.md'
          },
        ]
      },
      {
        title: 'Python SDK',
        path: '/sdk/python/',
        pages: [
          {
            title: 'Overview',
            path: '/sdk/python/'
          },
          {
            title: 'Install SDK',
             path: '/sdk/python/install-sdk.md'
           },
          {
            title: 'Initialize SDK',
            path: '/sdk/python/initialize-sdk.md'
          },
          {
            title: 'Get Offers',
            path: '/sdk/python/get-offers.md'
          },
          {
            title: 'Get Attributes',
            path: '/sdk/python/get-attributes.md'
          },
          {
            title: 'Send Notifications',
            path: '/sdk/python/send-notifications.md'
          },
          {
            title: 'SDK Events',
            path: '/sdk/python/sdk-events.md'
          },
          {
            title: 'Asynchronous Requests',
            path: '/sdk/python/asynchronous-requests.md'
          },
          {
            title: 'Logger',
            path: '/sdk/python/logger.md'
          },
        ]
      },
      {
        title: 'Overview',
        path: '/support/',
        header: true,
        pages: [
          {
            title: 'Help',
            path: '/support/'
          },
          {
            title: 'FAQ',
            path: '/support/FAQ/'
          },
          {
            title: 'How to contribute',
            path: '/support/contribute/'
          }
        ]
      },
      {
        title: 'Community',
        path: '/support/community/',
        header: true,
        pages: [
          {
            title: 'Information',
            path: '/support/community/'
          }
        ]
      }
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || '/target/'
};