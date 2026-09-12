> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-subscriptionintroductoryoffers-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-subscriptionintroductoryoffers-_id_)

# Modify an introductory offer

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Update a specific introductory offer for an auto-renewable subscription.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/subscriptionIntroductoryOffers/{id}
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `SubscriptionIntroductoryOfferUpdateRequest`

## Response Codes

- `200` OK — `SubscriptionIntroductoryOfferResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

> **Note**

>  Changes that you make to product metadata with the App Store Connect API can take up to 1 hour to appear in the sandbox environment.

## See Also

### Endpoints

- [Create an introductory offer](post-v1-subscriptionintroductoryoffers.md): Create an introductory offer for an auto-renewable subscription.
- [Delete an introductory offer for a subscription](delete-v1-subscriptionintroductoryoffers-_id_.md): Delete a specific introductory offer for an auto-renewable subscription.
