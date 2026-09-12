> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-subscriptionimages](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-subscriptionimages)

# Create an image for a subscription (v1)

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+ (deprecated in 4.4.1)

Reserve an image asset to appear in the App Store, representing a subscription.

> This endpoint is deprecated. Use [Create a subscription image](post-v2-subscriptionimages.md) instead.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/subscriptionImages
```

## HTTP Body

Content type: `application/json`

Type: `SubscriptionImageCreateRequest`

## Response Codes

- `201` Created — `SubscriptionImageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Creating and configuring win-back offers](creating-and-configuring-win-back-offers.md)

<a id="Discussion"></a>

## Discussion

> **Note**

>  Changes that you make to product metadata with the App Store Connect API can take up to 1 hour to appear in the sandbox environment.

## See Also

### Endpoints

- [Read subscription image information (v1)](get-v1-subscriptionimages-_id_.md): Deprecated. Read details about a specific subscription image.
- [List Subscription Images](get-v1-subscriptions-_id_-images.md): Deprecated. List all images for a specific subscription.
- [List subscription image ids](get-v1-subscriptions-_id_-relationships-images.md): Deprecated. List all images IDs for a specific subscription.
- [Commit a subscription image (v1)](patch-v1-subscriptionimages-_id_.md): Deprecated. Commit an uploaded subscription image.
- [Delete a subscription image (v1)](delete-v1-subscriptionimages-_id_.md): Deprecated. Delete the image asset that appears on the App Store listing that represents a subscription.
