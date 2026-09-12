> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptiongraceperiods-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptiongraceperiods-_id_)

# Read the billing grace period value

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Get the Boolean value that represents the billing grace period opt-in state and the duration of the billing grace period.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptionGracePeriods/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[subscriptionGracePeriods]` — `[string]`: **Allowed values:** `optIn`, `sandboxOptIn`, `duration`, `renewalType`

## Response Codes

- `200` OK — `SubscriptionGracePeriodResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
https://api.appstoreconnect.apple.com/v1/subscriptionGracePeriods/6446671329
```

**Response**

```json
{
  "data" : {
    "type" : "subscriptionGracePeriods",
    "id" : "6446671329",
    "attributes" : {
      "optIn" : true,
      "sandboxOptIn" : false,
      "duration" : "THREE_DAYS",
      "renewalType" : "ALL_RENEWALS"
    },
    "links" : {
      "self" : "https://api.appstoreconnect.apple.com/v1/subscriptionGracePeriods/6446671329"
    }
  },
  "links" : {
    "self" : "https://api.appstoreconnect.apple.com/v1/subscriptionGracePeriods/6446671329"
  }
}

```

## See Also

### Endpoints

- [Read the billing grace period value for an app](get-v1-apps-_id_-subscriptiongraceperiod.md): Get the Boolean value that represents the grace period opt-in state for your app.
- [Get the subscription grace period ID for an app](get-v1-apps-_id_-relationships-subscriptiongraceperiod.md)
- [Modify the billing grace period opt-in status and duration](patch-v1-subscriptiongraceperiods-_id_.md): Change the Boolean value representing the billing grace period opt-in status.
