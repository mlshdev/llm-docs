> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscription-localizations-v1](https://developer.apple.com/documentation/appstoreconnectapi/subscription-localizations-v1)

# Subscription localizations (v1)

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

Create, modify, and delete localized metadata for auto-renewable subscriptions.

<a id="overview"></a>

## Overview

> **Important**

>  This is deprecated. Use [Subscription Localizations](subscription-localizations.md) instead.

## Topics

### Endpoints

- [List all localizations for an auto-renewable subscription](get-v1-subscriptions-_id_-subscriptionlocalizations.md): Deprecated. Get a list of the subscription localizations for a specific auto-renewable subscription.
- [List localization IDs for an auto-renewable subscription](get-v1-subscriptions-_id_-relationships-subscriptionlocalizations.md): Deprecated.
- [Read subscription localization information (v1)](get-v1-subscriptionlocalizations-_id_.md): Deprecated. Get the specific localized metadata for an auto-renewable subscription.
- [Create a subscription localization (v1)](post-v1-subscriptionlocalizations.md): Deprecated. Create a localized display name and description for an auto-renewable subscription.
- [Modify a subscription localization (v1)](patch-v1-subscriptionlocalizations-_id_.md): Deprecated. Update a specific localized subscription display name and description for an auto-renewable subscription.
- [Delete a subscription localization (v1)](delete-v1-subscriptionlocalizations-_id_.md): Deprecated. Delete localized metadata that you configured for an auto-renewable subscription.

### Objects

- [SubscriptionLocalizationCreateRequest](subscriptionlocalizationcreaterequest.md): Deprecated. The request body you use to create a subscription localization.
- [SubscriptionLocalizationUpdateRequest](subscriptionlocalizationupdaterequest.md): Deprecated. The request body you use to update a subscription localization update request.
- [SubscriptionLocalizationResponse](subscriptionlocalizationresponse.md): Deprecated. The response body for endpoints that create, read, or modify a single subscription localization.
- [SubscriptionLocalization](subscriptionlocalization.md): Deprecated. The localized display name and description for an auto-renewable subscription shown to customers on the App Store.

## See Also

### Managing Auto-Renewable Subscriptions

- [Managing auto-renewable subscriptions](managing-auto-renewable-subscriptions.md): Create and manage subscriptions with the App Store Connect API.
- [Working with subscription versions](working-with-subscription-versions.md): Manage draft versions of an auto-renewable subscription’s localized metadata and review images before submitting for App Review.
- [Configuring subscription prices across territories](configuring-subscription-prices-across-territories.md): Set plan types and equalized prices for an auto-renewable subscription with the App Store Connect API.
- [Querying adjusted subscription price equalizations](querying-adjusted-subscription-price-equalizations.md): Compare a subscription price point against the equalized price points that Apple recommends across territories, adjusted for local pricing rules.
- [Subscription Versions](subscription-versions.md): Create and read draft versions of an auto-renewable subscription, with their localized metadata and review images.
- [Subscriptions](subscriptions.md): Create, modify, and delete auto-renewable subscriptions for your app.
- [Subscription Localizations](subscription-localizations.md): Create, modify, and delete localized metadata for auto-renewable subscriptions.
- [Subscription price points and subscription prices](subscription-price-points-and-subscription-prices.md): Manage scheduled price changes for auto-renewable subscriptions and get price point information.
- [Subscription images](subscription-images.md): Create, modify, and delete promotion images for auto-renewable subscriptions.
- [Subscription images (v1)](subscription-images-v1.md): Deprecated. Create, modify, and delete promotion images for your auto-renewable subscription.
- [Subscription availability](subscription-availability.md): Read and modify territory availability for an auto-renewable subscription.
- [Subscription plan availability](subscription-plan-availability.md): Create and manage subscription plan availability for auto-renewable subscriptions.
- [Billing Grace Periods](billing-grace-periods.md): Get information about the grace period and modify the opt-in value.
