> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v2-subscriptionlocalizations](https://developer.apple.com/documentation/appstoreconnectapi/post-v2-subscriptionlocalizations)

# Create a subscription localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.4.1+

Create a localized display name and description for an auto-renewable subscription configured with the v2 API.

## URL

```http
POST https://api.appstoreconnect.apple.com/v2/subscriptionLocalizations
```

## HTTP Body

Content type: `application/json`

Type: `SubscriptionLocalizationV2CreateRequest`

## Response Codes

- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `201` Created — `SubscriptionLocalizationV2Response`:
- `409` Conflict — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.4.1 release notes](app-store-connect-api-4-4-1-release-notes.md)
- [Submitting subscriptions and subscription groups for App Review](submitting-subscriptions-and-subscription-groups-for-app-review.md)
- [Working with subscription versions](working-with-subscription-versions.md)

## See Also

### Endpoints

- [Read subscription localization information](get-v2-subscriptionlocalizations-_id_.md): Get the display name and description for a specific locale of a subscription configured with the v2 API.
- [Modify a subscription localization](patch-v2-subscriptionlocalizations-_id_.md): Update the display name and description for a specific locale of a subscription configured with the v2 API.
- [Delete a subscription localization](delete-v2-subscriptionlocalizations-_id_.md): Delete a localized display name and description for a subscription configured with the v2 API.
