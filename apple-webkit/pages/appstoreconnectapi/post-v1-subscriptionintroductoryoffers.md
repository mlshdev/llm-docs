> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-subscriptionintroductoryoffers](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-subscriptionintroductoryoffers)

# Create an introductory offer

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Create an introductory offer for an auto-renewable subscription.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/subscriptionIntroductoryOffers
```

## HTTP Body

Content type: `application/json`

Type: `SubscriptionIntroductoryOfferCreateRequest`

## Response Codes

- `201` Created — `SubscriptionIntroductoryOfferResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

> **Note**

>  Changes that you make to product metadata with the App Store Connect API can take up to 1 hour to appear in the sandbox environment.

## See Also

### Endpoints

- [Modify an introductory offer](patch-v1-subscriptionintroductoryoffers-_id_.md): Update a specific introductory offer for an auto-renewable subscription.
- [Delete an introductory offer for a subscription](delete-v1-subscriptionintroductoryoffers-_id_.md): Delete a specific introductory offer for an auto-renewable subscription.
