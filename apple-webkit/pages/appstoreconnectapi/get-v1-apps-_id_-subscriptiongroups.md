> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-subscriptiongroups](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-subscriptiongroups)

# List all subscription groups for an app

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Get a list of subscription groups for a specific app.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/subscriptionGroups
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app resource ID from the [List apps](get-v1-apps.md) response.

## Query Parameters

- `fields[subscriptionGroupLocalizations]` — `[string]`: Additional fields to include for each subscription group localization resource returned by the response.
  **Allowed values:** `name`, `customAppName`, `locale`, `state`, `subscriptionGroup`
- `fields[subscriptionGroups]` — `[string]`: Additional fields to include for each subscription group resource returned by the response.
  **Allowed values:** `referenceName`, `subscriptions`, `subscriptionGroupLocalizations`, `versions`
- `fields[subscriptions]` — `[string]`: Additional fields to include for each subscription resource returned by the response.
  **Allowed values:** `name`, `productId`, `familySharable`, `state`, `subscriptionPeriod`, `reviewNote`, `groupLevel`, `subscriptionLocalizations`, `appStoreReviewScreenshot`, `group`, `introductoryOffers`, `promotionalOffers`, `offerCodes`, `prices`, `pricePoints`, `promotedPurchase`, `subscriptionAvailability`, `winBackOffers`, `images`, `planAvailabilities`, `versions`
- `filter[referenceName]` — `[string]`: Filter the returned subscription groups by reference name.
- `filter[subscriptions.state]` — `[string]`: Filter the returned subscription groups by subscriptions state.
  **Allowed values:** `MISSING_METADATA`, `READY_TO_SUBMIT`, `WAITING_FOR_REVIEW`, `IN_REVIEW`, `DEVELOPER_ACTION_NEEDED`, `PENDING_BINARY_APPROVAL`, `APPROVED`, `DEVELOPER_REMOVED_FROM_SALE`, `REMOVED_FROM_SALE`, `REJECTED`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `subscriptions`, `subscriptionGroupLocalizations`, `versions`
- `limit` — `integer`: The maximum number of subscription group resources to return.
  **Maximum:** `200`
- `limit[subscriptionGroupLocalizations]` — `integer`: The maximum number of related subscription group localizations resources to return.
  **Maximum:** `50`
- `limit[subscriptions]` — `integer`: The maximum number of related subscriptions resources to return.
  **Maximum:** `50`
- `sort` — `[string]`: Attributes by which to sort.
  **Allowed values:** `referenceName`, `-referenceName`
- `fields[subscriptionGroupVersions]` — `[string]`: **Allowed values:** `version`, `state`, `subscriptionGroup`, `localizations`
- `limit[versions]` — `integer`: **Maximum:** `50`

## Response Codes

- `200` OK — `SubscriptionGroupsResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting subscription group and subscription grace period information

- [Read the billing grace period value for an app](get-v1-apps-_id_-subscriptiongraceperiod.md): Get the Boolean value that represents the grace period opt-in state for your app.
- [Get the subscription grace period ID for an app](get-v1-apps-_id_-relationships-subscriptiongraceperiod.md)
- [List subscription group IDs for an app](get-v1-apps-_id_-relationships-subscriptiongroups.md)
