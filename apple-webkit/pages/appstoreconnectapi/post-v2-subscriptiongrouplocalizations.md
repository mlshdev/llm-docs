> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v2-subscriptiongrouplocalizations](https://developer.apple.com/documentation/appstoreconnectapi/post-v2-subscriptiongrouplocalizations)

# Create a subscription group localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.4.1+

Create a localized custom name for a subscription group configured with the v2 API.

## URL

```http
POST https://api.appstoreconnect.apple.com/v2/subscriptionGroupLocalizations
```

## HTTP Body

Content type: `application/json`

Type: `SubscriptionGroupLocalizationV2CreateRequest`

## Response Codes

- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `201` Created — `SubscriptionGroupLocalizationV2Response`:
- `409` Conflict — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.4.1 release notes](app-store-connect-api-4-4-1-release-notes.md)
- [Creating auto-renewable subscription groups](creating-auto-renewable-subscription-groups.md)
- [Submitting subscriptions and subscription groups for App Review](submitting-subscriptions-and-subscription-groups-for-app-review.md)
- [Working with subscription group versions](working-with-subscription-group-versions.md)

## See Also

### Endpoints

- [Read subscription group localization information](get-v2-subscriptiongrouplocalizations-_id_.md): Get the custom name for a specific locale of a subscription group configured with the v2 API.
- [Modify a subscription group localization](patch-v2-subscriptiongrouplocalizations-_id_.md): Update the custom name for a specific locale of a subscription group configured with the v2 API.
- [Delete a subscription group localization](delete-v2-subscriptiongrouplocalizations-_id_.md): Delete a localized custom name for a subscription group configured with the v2 API.
