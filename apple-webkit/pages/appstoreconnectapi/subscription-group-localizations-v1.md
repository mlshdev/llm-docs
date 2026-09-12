> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscription-group-localizations-v1](https://developer.apple.com/documentation/appstoreconnectapi/subscription-group-localizations-v1)

# Subscription group localizations (v1)

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

Create, modify, and delete localized metadata for subscription groups.

<a id="overview"></a>

## Overview

> **Important**

>  This is deprecated. Use [Subscription Group Localizations](subscription-group-localizations.md) instead.

## Topics

### Endpoints

- [Create a subscription group localization (v1)](post-v1-subscriptiongrouplocalizations.md): Deprecated. Create a localized display name and optional custom app name for a subscription group.
- [Read subscription group localization information (v1)](get-v1-subscriptiongrouplocalizations-_id_.md): Deprecated. Get the specific localized subscription group display name and optional custom app name for a subscription group.
- [Modify a subscription group localization (v1)](patch-v1-subscriptiongrouplocalizations-_id_.md): Deprecated. Update a specific localized display name and optional custom app name for a subscription group.
- [Delete a subscription group localization (v1)](delete-v1-subscriptiongrouplocalizations-_id_.md): Deprecated. Delete localized metadata that you configured for a subscription group.

### Objects

- [SubscriptionGroupLocalization](subscriptiongrouplocalization.md): Deprecated. The localized display name and optional custom app name for a subscription group, shown to customers on the App Store.
- [SubscriptionGroupLocalizationResponse](subscriptiongrouplocalizationresponse.md): Deprecated. The response body for endpoints that create, read, or modify a single subscription group localization.
- [SubscriptionGroupLocalizationCreateRequest](subscriptiongrouplocalizationcreaterequest.md): Deprecated. The request body you use to create a subscription group localization.
- [SubscriptionGroupLocalizationUpdateRequest](subscriptiongrouplocalizationupdaterequest.md): Deprecated. The request body you use to update a subscription group localization update request.

## See Also

### Managing Subscription Groups

- [Creating auto-renewable subscription groups](creating-auto-renewable-subscription-groups.md): Configure subscription groups with the App Store Connect API.
- [Working with subscription group versions](working-with-subscription-group-versions.md): Manage draft versions of a subscription group’s localized metadata before submitting for App Review.
- [Subscription Group Versions](subscription-group-versions.md): Create and read draft versions of a subscription group with their localized metadata.
- [Subscription Groups](subscription-groups.md): Create, modify, and delete subscription groups for your app.
- [Subscription Group Localizations](subscription-group-localizations.md): Create, modify, and delete localized metadata for subscription groups.
