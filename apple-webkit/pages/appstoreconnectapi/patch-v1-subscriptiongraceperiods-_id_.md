> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-subscriptiongraceperiods-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-subscriptiongraceperiods-_id_)

# Modify the billing grace period opt-in status and duration

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Change the Boolean value representing the billing grace period opt-in status.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/subscriptionGracePeriods/{id}
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `SubscriptionGracePeriodUpdateRequest`

There are now new duration options that can be set by using [SubscriptionGracePeriodDuration](subscriptiongraceperiodduration.md)

## Response Codes

- `200` OK — `SubscriptionGracePeriodResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Managing auto-renewable subscriptions](managing-auto-renewable-subscriptions.md)

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
https://api.appstoreconnect.apple.com/v1/subscriptionGracePeriods/6446671329     
-d $'{
  "data": {
    "type": "subscriptionGracePeriods",
    "id": "6446671329",
    "attributes": {
      "sandboxOptIn": true,
      "optIn": true,
      "renewalType": "PAID_TO_PAID_ONLY",
      "duration": "TWENTY_EIGHT_DAYS"
    }
  }
}'
```

**Response**

```json
{
  "data" : {
    "type" : "subscriptionGracePeriods",
    "id" : "6446671329",
    "attributes" : {
      "optIn" : true,
      "sandboxOptIn" : true,
      "duration" : "TWENTY_EIGHT_DAYS",
      "renewalType" : "PAID_TO_PAID_ONLY"
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
- [Read the billing grace period value](get-v1-subscriptiongraceperiods-_id_.md): Get the Boolean value that represents the billing grace period opt-in state and the duration of the billing grace period.
