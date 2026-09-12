> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-subscriptiongraceperiod](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-subscriptiongraceperiod)

# Read the billing grace period value for an app

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Get the Boolean value that represents the grace period opt-in state for your app.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/subscriptionGracePeriod
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app resource ID from the [List apps](get-v1-apps.md) response.

## Query Parameters

- `fields[subscriptionGracePeriods]` — `[string]`: Additional fields to include for each subscription grace period resource returned by the response.
  **Allowed values:** `optIn`, `sandboxOptIn`, `duration`, `renewalType`

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
https://api.appstoreconnect.apple.com/v1/apps/6446671329/subscriptionGracePeriod
```

**Response**

```json
  "data" : {
    "type" : "subscriptionGracePeriods",
    "id" : "6446671329",
    "attributes" : {
      "optIn" : true,
      "sandboxOptIn" : false,
      "duration" : SIXTEEN_DAYS,
      "renewalType" : ALL_RENEWALS
    },
    "links" : {
      "self" : "https://api.appstoreconnect.apple.com/v1/subscriptionGracePeriods/6446671329"
    }
  },
  "links" : {
    "self" : "https://api.appstoreconnect.apple.com/v1/apps/6446671329/subscriptionGracePeriod"
  }
}
```

## See Also

### Getting subscription group and subscription grace period information

- [List all subscription groups for an app](get-v1-apps-_id_-subscriptiongroups.md): Get a list of subscription groups for a specific app.
- [Get the subscription grace period ID for an app](get-v1-apps-_id_-relationships-subscriptiongraceperiod.md)
- [List subscription group IDs for an app](get-v1-apps-_id_-relationships-subscriptiongroups.md)
