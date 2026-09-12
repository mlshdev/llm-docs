> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api](https://developer.apple.com/documentation/apple-ads-platform-api)

# Apple Ads Platform API

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Web Service  
**Availability:** Apple Ads Platform API 1.0+

Programmatically manage App Store and Apple Maps advertising campaigns through a single RESTful API.

<a id="Overview"></a>

## Overview

Apple Ads helps people discover and engage with your app or business. With the Apple Ads Platform API, you can build campaigns with budgets, and create ad groups that include keywords, audience refinement criteria, and scheduling. Through a single RESTful interface, you can also create and manage ads and creative assets, configure targeting and bidding, and monitor performance through reports, insights, and recommendations.

New to the API? Start with the workflow guides. [Advertising Your App on the App Store](apple-ads-platform-api/journey-app-store-ads.md) and [Advertising Your Business on Apple Maps](apple-ads-platform-api/journey-apple-maps-brand-ads.md) walk you through launching your first campaign on each placement.

## Topics

### Essentials

- [Implementing OAuth for the Apple Ads Platform API](apple-ads-platform-api/implementing-oauth-for-the-apple-ads-platform-api.md): Generate a key pair and request an access token to authenticate with the Apple Ads Platform API.
- [Calling the Apple Ads Platform API](apple-ads-platform-api/calling-apple-ads-platform-api.md): Authenticate requests, structure endpoint calls, and interpret responses when using the Apple Ads Platform API.
- [Using Client Libraries](apple-ads-platform-api/client-libraries.md): Integrate the Apple Ads Platform API using an Apple-maintained client library instead of a custom HTTP client.
- [Applying Rate Limits](apple-ads-platform-api/rate-limits.md): Track your remaining quota and pace requests.
- [Advertising Your App on the App Store](apple-ads-platform-api/journey-app-store-ads.md): Set up and launch an App Store campaign, from account verification through keyword targeting to performance reporting.
- [Advertising Your Business on Apple Maps](apple-ads-platform-api/journey-apple-maps-brand-ads.md): Identify your brand, upload creative assets, build location groups, and create campaigns, ad groups, creatives, and ads to promote it on Apple Maps.

### Account Management

- [Managing Ad Accounts and API Access](apple-ads-platform-api/access-overview.md): Authenticate your requests, scope them to an ad account, and apply role-based access levels.
- [Org & Me Endpoints](apple-ads-platform-api/org-me.md): Retrieve the authenticated user’s identity, organization details, and ad account access list.
- [Ad Account Endpoints](apple-ads-platform-api/ad-account-endpoints.md): Create, retrieve, and update ad accounts, and discover delegable advertiser resources.
- [Account Management Data Objects](apple-ads-platform-api/account-management-data-objects.md): Reference the data objects for account management, access control, and organization resources.
- [Account Management Data Types](apple-ads-platform-api/account-management-data-types.md): Reference the enumerations and scalar types for account management, access control, and organization resources.

### Search Apps

- [Search Apps Endpoints](apple-ads-platform-api/search-apps-endpoints.md): Browse the endpoints for searching apps and retrieving app details.
- [Search Apps Data Objects](apple-ads-platform-api/search-apps-data-objects.md): Browse the response objects returned by the search apps and app details endpoints.

### App Eligibility

- [App Eligibility Endpoints](apple-ads-platform-api/app-eligibility-endpoints.md): Check whether apps qualify to run ads and look up rejection reasons for creatives.
- [App Eligibility Data Objects](apple-ads-platform-api/app-eligibility-data-objects.md): Reference the request and response objects used by the app eligibility and rejection reason endpoints.

### Ads on Apple Maps

- [Ads on Apple Maps Endpoints](apple-ads-platform-api/brands-endpoints.md): Query and retrieve brands, business categories, and creative rejection reasons.
- [Managing Location Groups](apple-ads-platform-api/location-groups-overview.md): Organize business locations into named groups that define which locations an ad group’s targeting applies to in Apple Maps campaigns.
- [Understanding Locations](apple-ads-platform-api/locations-overview.md): Query and inspect the business locations associated with your brand for use in Apple Maps campaigns.
- [Brands Data Objects](apple-ads-platform-api/brands-data-objects.md): Reference the request and response objects for brand, location, and location group endpoints.
- [Brands Data Types](apple-ads-platform-api/brands-data-types.md): Look up the enumerations and metric types used in Apple Maps campaigns.

### Campaigns

- [Campaigns Endpoints](apple-ads-platform-api/campaigns-endpoints.md): Create, retrieve, update, and delete campaigns using these endpoints.
- [Campaigns Data Objects](apple-ads-platform-api/campaigns-data-objects.md): Reference the request and response schemas for creating, retrieving, and updating campaigns.
- [Campaigns Data Types](apple-ads-platform-api/campaign-data-types.md): Look up the enumerated values and scalar types used across campaign fields.

### Ad Groups

- [Ad Groups Endpoints](apple-ads-platform-api/adgroups-endpoints.md): Create, retrieve, update, and delete ad groups.
- [Ad Groups Data Objects](apple-ads-platform-api/adgroups-data-objects.md): Reference the request and response objects for ad group endpoints.
- [Ad Groups Data Types](apple-ads-platform-api/adgroups-data-types.md): Reference the enumerations and scalar types for ad groups.

### Geo Targeting

- [Geo Targeting Endpoints](apple-ads-platform-api/geo-targeting-endpoints.md): Retrieve geographic location metadata used for geo targeting.
- [Geo Targeting Data Objects](apple-ads-platform-api/geo-targeting-data-objects.md): Reference the request and response objects for geo targeting.
- [Geo Targeting Data Types](apple-ads-platform-api/geo-targeting-data-types.md): Reference the enumerations and scalar types for geo targeting.

### Keywords

- [Managing Keywords and Negative Keywords](apple-ads-platform-api/keywords-and-negative-keywords.md): Create and manage keywords and negative keywords for ad groups and campaigns.
- [Keywords Endpoints](apple-ads-platform-api/keywords-endpoints.md): Endpoints for creating, retrieving, updating, and deleting keywords.
- [Negative Keywords Endpoints](apple-ads-platform-api/negative-keywords-endpoints.md): Endpoints for creating, retrieving, updating, and deleting negative keywords.
- [Keywords Data Objects](apple-ads-platform-api/keywords-data-objects.md): Request, response, and data objects for managing keywords in ad group campaigns.
- [Negative Keywords Data Objects](apple-ads-platform-api/negative-keywords-objects.md): Request and response objects for negative keyword endpoints.
- [Keywords Shared Data Types](apple-ads-platform-api/keywords-shared-data-types.md): Shared enumerations used by keyword and negative keyword objects.

### Ads

- [Ads Endpoints](apple-ads-platform-api/ads-endpoints.md): Create, retrieve, update, and delete ads using these endpoints.
- [Ads Data Objects](apple-ads-platform-api/ads-data-objects.md): Reference the request and response objects used by ad endpoints.
- [Ads Data Types](apple-ads-platform-api/ads-data-types.md): Reference the enumerations and scalar types used by ad objects and endpoints.

### Creatives

- [Creatives Endpoints](apple-ads-platform-api/creatives-endpoints.md): Create, retrieve, update, and delete ad creatives through these endpoints.
- [Ad Creatives Data Objects](apple-ads-platform-api/creatives-data-objects.md): Reference the request and response payloads used by ad creative endpoints.
- [Ad Creative Data Types](apple-ads-platform-api/creative-data-types.md): Look up the allowed values for creative type, status, and destination type fields.

### Assets

- [Assets Endpoints](apple-ads-platform-api/assets-endpoints.md): Upload, query, retrieve, and delete Apple Maps creative assets.
- [Assets Data Objects](apple-ads-platform-api/assets-data-objects.md): Reference the request and response objects for asset endpoints.
- [Assets Data Types](apple-ads-platform-api/assets-data-types.md): Look up the enumerations and scalar types used for assets.

### Product Pages

- [Product Pages Endpoints](apple-ads-platform-api/product-pages-endpoints.md): Retrieve product pages and their localized details.
- [Product Pages Data Objects](apple-ads-platform-api/product-pages-data-objects.md): Reference the response objects returned by product page endpoints.

### Bulk Operations

- [Bulk Operations Endpoints](apple-ads-platform-api/bulk-operations-endpoints.md): Create and update keywords and negative keywords in bulk.
- [Bulk Data Objects](apple-ads-platform-api/bulk-data-objects.md): Use these objects to build bulk keyword and negative keyword requests and read their responses.

### Budget Orders

- [Budget Orders Endpoints](apple-ads-platform-api/budget-orders-endpoints.md): Create, retrieve, update, and delete budget orders through these endpoints.
- [Budget Order Data Objects](apple-ads-platform-api/budget-orders-data-objects.md): Use these objects to build budget order requests and read their responses.
- [Budget Order Data Types](apple-ads-platform-api/budget-orders-data-types.md): Track budget order status, status reasons, and payment model with these enumerated types.

### Reports

- [Managing Reports](apple-ads-platform-api/reports.md): Retrieve performance data for campaigns, ad groups, ads, keywords, and search terms.
- [App Store Reports Endpoints](apple-ads-platform-api/apps-reports-endpoints.md): Endpoints for retrieving App Store campaign, ad group, ad, keyword, and search term performance data.
- [Brands Reports Endpoints](apple-ads-platform-api/brands-reports-endpoints.md): Retrieve performance data for Apple Maps campaigns, ad groups, ads, keywords, and search terms.
- [Apps Data Objects](apple-ads-platform-api/apps-reports-objects.md): Request, response, and metadata objects for Apps report endpoints.
- [Brands Data Objects](apple-ads-platform-api/brands-reports-objects.md): Explore the request, response, and metadata objects that Brands report endpoints use.
- [Shared Objects](apple-ads-platform-api/reports-shared-objects.md): Shared request and response objects used across Apps and Brands report endpoints.

### Insights

- [Insights Endpoints](apple-ads-platform-api/insights-endpoints.md): Query impression share and search term popularity data for your apps.
- [Insights Data Objects](apple-ads-platform-api/insights-data-objects.md): Build the request and response objects for impression share and search term popularity queries.

### Recommendations

- [Recommendations Endpoints](apple-ads-platform-api/recommendations-endpoints.md): Endpoints for querying, applying, and dismissing budget and Target CPA recommendations.
- [Recommendations Data Objects](apple-ads-platform-api/recommendations-data-objects.md): Request and response objects for recommendation endpoints.
- [Recommendations Query and Filter Objects](apple-ads-platform-api/recommendations-query-filter-objects.md): Query, filter, pagination, and sorting objects for recommendation requests.

### Suggestions

- [Suggestions Endpoints](apple-ads-platform-api/suggestions-endpoints.md): Endpoints for querying keyword, phrase, category, and Target CPA suggestions.
- [Suggestions Data Objects](apple-ads-platform-api/suggestions-data-objects.md): Response objects for keyword, phrase, category, and Target CPA suggestion endpoints.

### Change History

- [Change History Endpoints](apple-ads-platform-api/change-history-endpoints.md): Query audit summaries and retrieve change detail records for entities in an ad account.
- [Change History Response Objects](apple-ads-platform-api/change-history-response-objects.md): Parse the audit summary and change detail objects returned by change history endpoints.
- [Change History Query Objects](apple-ads-platform-api/change-history-query-objects.md): Build the filter, sort, and pagination inputs for change history query requests.
- [Change History Enumerations](apple-ads-platform-api/change-history-enumerations.md): Look up the enumerated values accepted in change history query and response fields.

### Changelog

- [Apple Ads Platform API Changelog](apple-ads-platform-api/changelog-apple-ads-platform-api.md): A log of changes to the Apple Ads Platform API.
