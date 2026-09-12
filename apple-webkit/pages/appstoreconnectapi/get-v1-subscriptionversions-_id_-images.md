> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptionversions-_id_-images](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptionversions-_id_-images)

# List images for a subscription version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.4.1+

List the review images attached to a draft version of an auto-renewable subscription.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptionVersions/{id}/images
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[subscriptionImages]` — `[string]`: **Allowed values:** `fileSize`, `fileName`, `assetToken`, `imageAsset`, `uploadOperations`, `assetDeliveryState`
- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `200` OK — `SubscriptionImagesV2Response`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.4.1 release notes](app-store-connect-api-4-4-1-release-notes.md)

## See Also

### Endpoints

- [Create a subscription version](post-v1-subscriptionversions.md): Create a draft version of an auto-renewable subscription, capturing its current localized metadata and review images for App Review submission.
- [Read subscription version information](get-v1-subscriptionversions-_id_.md): Get information about a specific draft version of an auto-renewable subscription.
- [Read the image for a subscription version](get-v1-subscriptionversions-_id_-image.md): Get the review image attached to a draft version of an auto-renewable subscription.
- [List localizations for a subscription version](get-v1-subscriptionversions-_id_-localizations.md): List the localized display names and descriptions captured in a draft version of an auto-renewable subscription.
- [Read the image ID for a subscription version](get-v1-subscriptionversions-_id_-relationships-image.md): Get the related resource ID for the review image attached to a draft version of an auto-renewable subscription.
- [List image IDs for a subscription version](get-v1-subscriptionversions-_id_-relationships-images.md): Get the related resource IDs for the review images attached to a draft version of an auto-renewable subscription.
- [List localization IDs for a subscription version](get-v1-subscriptionversions-_id_-relationships-localizations.md): Get the related resource IDs for the localizations captured in a draft version of an auto-renewable subscription.
- [List versions for a subscription](get-v1-subscriptions-_id_-versions.md): List the draft versions of an auto-renewable subscription.
- [List version IDs for a subscription](get-v1-subscriptions-_id_-relationships-versions.md): Get the related resource IDs for the draft versions of an auto-renewable subscription.
