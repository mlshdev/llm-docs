> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-subscriptiongraceperiod](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-subscriptiongraceperiod)

# Get the subscription grace period ID for an app

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/relationships/subscriptionGracePeriod
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `AppSubscriptionGracePeriodLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting subscription group and subscription grace period information

- [Read the billing grace period value for an app](get-v1-apps-_id_-subscriptiongraceperiod.md): Get the Boolean value that represents the grace period opt-in state for your app.
- [List all subscription groups for an app](get-v1-apps-_id_-subscriptiongroups.md): Get a list of subscription groups for a specific app.
- [List subscription group IDs for an app](get-v1-apps-_id_-relationships-subscriptiongroups.md)
