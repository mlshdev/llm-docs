> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-subscriptiongroups](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-subscriptiongroups)

# Create a subscription group

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Create a subscription group for an app.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/subscriptionGroups
```

## HTTP Body

Content type: `application/json`

Type: `SubscriptionGroupCreateRequest`

## Response Codes

- `201` Created — `SubscriptionGroupResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Creating auto-renewable subscription groups](creating-auto-renewable-subscription-groups.md)

<a id="Discussion"></a>

## Discussion

> **Note**

>  Changes that you make to product metadata with the App Store Connect API can take up to 1 hour to appear in the sandbox environment.

## See Also

### Endpoints

- [List all subscription groups for an app](get-v1-apps-_id_-subscriptiongroups.md): Get a list of subscription groups for a specific app.
- [List subscription group IDs for an app](get-v1-apps-_id_-relationships-subscriptiongroups.md)
- [Read subscription group information](get-v1-subscriptiongroups-_id_.md): Get the details of a specific subscription group.
- [Modify a subscription group](patch-v1-subscriptiongroups-_id_.md): Update the reference name for a specific subscription group.
- [Delete a subscription group](delete-v1-subscriptiongroups-_id_.md): Delete a specific empty subscription group.
- [List all subscription group localizations](get-v1-subscriptiongroups-_id_-subscriptiongrouplocalizations.md): Deprecated. Get a list of all localized metadata for a specific subscription group.
- [List localization IDs for a subscription group](get-v1-subscriptiongroups-_id_-relationships-subscriptiongrouplocalizations.md): Deprecated.
- [List all subscriptions for a subscription group](get-v1-subscriptiongroups-_id_-subscriptions.md): Get a list of all auto-renewable subscriptions in a subscription group.
- [List subscription IDs for a subscription group](get-v1-subscriptiongroups-_id_-relationships-subscriptions.md)
