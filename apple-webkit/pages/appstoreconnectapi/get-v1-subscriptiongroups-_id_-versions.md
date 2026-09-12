> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptiongroups-_id_-versions](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptiongroups-_id_-versions)

# List the versions of a subscription group

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.4.1+

List the draft versions of a subscription group.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptionGroups/{id}/versions
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `filter[state]` — `[string]`: **Allowed values:** `PREPARE_FOR_SUBMISSION`, `READY_FOR_REVIEW`, `WAITING_FOR_REVIEW`, `IN_REVIEW`, `ACCEPTED`, `APPROVED`, `REPLACED_WITH_NEW_VERSION`, `REJECTED`, `DEVELOPER_REJECTED`
- `fields[subscriptionGroupVersions]` — `[string]`: **Allowed values:** `version`, `state`, `subscriptionGroup`, `localizations`
- `fields[subscriptionGroups]` — `[string]`: **Allowed values:** `referenceName`, `subscriptions`, `subscriptionGroupLocalizations`, `versions`
- `fields[subscriptionGroupLocalizations]` — `[string]`: **Allowed values:** `name`, `customAppName`, `locale`, `version`
- `limit` — `integer`: **Maximum:** `200`
- `include` — `[string]`: **Allowed values:** `subscriptionGroup`, `localizations`
- `limit[localizations]` — `integer`: **Maximum:** `50`

## Response Codes

- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `200` OK — `SubscriptionGroupVersionsResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.4.1 release notes](app-store-connect-api-4-4-1-release-notes.md)
- [Creating auto-renewable subscription groups](creating-auto-renewable-subscription-groups.md)
- [Working with subscription group versions](working-with-subscription-group-versions.md)

## See Also

### Endpoints

- [Create a subscription group version](post-v1-subscriptiongroupversions.md): Create a draft version of a subscription group, capturing its current localized metadata for App Review submission.
- [Read subscription group version information](get-v1-subscriptiongroupversions-_id_.md): Get information about a specific draft version of a subscription group.
- [List the localizations of a subscription group version](get-v1-subscriptiongroupversions-_id_-localizations.md): List the localized custom names captured in a draft version of a subscription group.
- [Get the resource IDs of the localizations of a subscription group version](get-v1-subscriptiongroupversions-_id_-relationships-localizations.md): Get the related resource IDs for the localizations captured in a draft version of a subscription group.
- [Get the resource IDs of the versions of a subscription group](get-v1-subscriptiongroups-_id_-relationships-versions.md): Get the related resource IDs for the draft versions of a subscription group.
