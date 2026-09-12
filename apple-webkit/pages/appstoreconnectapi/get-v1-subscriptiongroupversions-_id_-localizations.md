> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptiongroupversions-_id_-localizations](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptiongroupversions-_id_-localizations)

# List the localizations of a subscription group version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.4.1+

List the localized custom names captured in a draft version of a subscription group.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptionGroupVersions/{id}/localizations
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[subscriptionGroupLocalizations]` — `[string]`: **Allowed values:** `name`, `customAppName`, `locale`, `version`
- `fields[subscriptionGroupVersions]` — `[string]`: **Allowed values:** `version`, `state`, `subscriptionGroup`, `localizations`
- `limit` — `integer`: **Maximum:** `200`
- `include` — `[string]`: **Allowed values:** `version`

## Response Codes

- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `200` OK — `SubscriptionGroupLocalizationsV2Response`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.4.1 release notes](app-store-connect-api-4-4-1-release-notes.md)
- [Creating auto-renewable subscription groups](creating-auto-renewable-subscription-groups.md)
- [Working with subscription group versions](working-with-subscription-group-versions.md)

## See Also

### Endpoints

- [Create a subscription group version](post-v1-subscriptiongroupversions.md): Create a draft version of a subscription group, capturing its current localized metadata for App Review submission.
- [Read subscription group version information](get-v1-subscriptiongroupversions-_id_.md): Get information about a specific draft version of a subscription group.
- [Get the resource IDs of the localizations of a subscription group version](get-v1-subscriptiongroupversions-_id_-relationships-localizations.md): Get the related resource IDs for the localizations captured in a draft version of a subscription group.
- [List the versions of a subscription group](get-v1-subscriptiongroups-_id_-versions.md): List the draft versions of a subscription group.
- [Get the resource IDs of the versions of a subscription group](get-v1-subscriptiongroups-_id_-relationships-versions.md): Get the related resource IDs for the draft versions of a subscription group.
