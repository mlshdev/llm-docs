> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-subscriptionplanavailabilities-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-subscriptionplanavailabilities-_id_)

# Modify a subscription plan availability

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.4+

Update the plan availability configuration for a specific subscription.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/subscriptionPlanAvailabilities/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `subscriptionPlanAvailability` resource ID from the [List plan availabilities for a subscription](get-v1-subscriptions-_id_-planavailabilities.md) response.

## HTTP Body

Content type: `application/json`

Type: `SubscriptionPlanAvailabilityUpdateRequest`

## Response Codes

- `200` OK — `SubscriptionPlanAvailabilityResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating and modifying plan availability

- [Create a subscription plan availability](post-v1-subscriptionplanavailabilities.md): Create the plan availability configuration for an auto-renewable subscription.
- [Read subscription plan availability information](get-v1-subscriptionplanavailabilities-_id_.md): Get information about a specific subscription plan availability.
