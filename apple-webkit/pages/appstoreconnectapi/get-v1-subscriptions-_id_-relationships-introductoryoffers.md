> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptions-_id_-relationships-introductoryoffers](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptions-_id_-relationships-introductoryoffers)

# List all introductory offer resource ids for an auto-renewable subscription

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Get a list of resource IDs representing introductory offers for an auto-renewable subscription.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptions/{id}/relationships/introductoryOffers
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `SubscriptionIntroductoryOffersLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting introductory offers

- [List all introductory offers for a subscription](get-v1-subscriptions-_id_-introductoryoffers.md): Get a list of introductory offers for a specific auto-renewable subscription.
- [Delete an introductory offer from a subscription](delete-v1-subscriptions-_id_-relationships-introductoryoffers.md): Delete a specific introductory offer for an auto-renewable subscription.
