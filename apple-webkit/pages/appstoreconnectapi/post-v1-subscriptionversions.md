> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-subscriptionversions](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-subscriptionversions)

# Create a subscription version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.4.1+

Create a draft version of an auto-renewable subscription, capturing its current localized metadata and review images for App Review submission.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/subscriptionVersions
```

## HTTP Body

Content type: `application/json`

Type: `SubscriptionVersionCreateRequest`

## Response Codes

- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `201` Created — `SubscriptionVersionResponse`:
- `409` Conflict — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.4.1 release notes](app-store-connect-api-4-4-1-release-notes.md)
- [Submitting subscriptions and subscription groups for App Review](submitting-subscriptions-and-subscription-groups-for-app-review.md)
- [Working with subscription versions](working-with-subscription-versions.md)

## See Also

### Endpoints

- [Read subscription version information](get-v1-subscriptionversions-_id_.md): Get information about a specific draft version of an auto-renewable subscription.
- [Read the image for a subscription version](get-v1-subscriptionversions-_id_-image.md): Get the review image attached to a draft version of an auto-renewable subscription.
- [List images for a subscription version](get-v1-subscriptionversions-_id_-images.md): List the review images attached to a draft version of an auto-renewable subscription.
- [List localizations for a subscription version](get-v1-subscriptionversions-_id_-localizations.md): List the localized display names and descriptions captured in a draft version of an auto-renewable subscription.
- [Read the image ID for a subscription version](get-v1-subscriptionversions-_id_-relationships-image.md): Get the related resource ID for the review image attached to a draft version of an auto-renewable subscription.
- [List image IDs for a subscription version](get-v1-subscriptionversions-_id_-relationships-images.md): Get the related resource IDs for the review images attached to a draft version of an auto-renewable subscription.
- [List localization IDs for a subscription version](get-v1-subscriptionversions-_id_-relationships-localizations.md): Get the related resource IDs for the localizations captured in a draft version of an auto-renewable subscription.
- [List versions for a subscription](get-v1-subscriptions-_id_-versions.md): List the draft versions of an auto-renewable subscription.
- [List version IDs for a subscription](get-v1-subscriptions-_id_-relationships-versions.md): Get the related resource IDs for the draft versions of an auto-renewable subscription.
