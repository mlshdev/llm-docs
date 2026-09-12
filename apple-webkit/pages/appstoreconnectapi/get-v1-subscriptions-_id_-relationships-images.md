> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptions-_id_-relationships-images](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptions-_id_-relationships-images)

# List subscription image ids

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+ (deprecated in 4.4.1)

List all images IDs for a specific subscription.

> This relationship is deprecated. Use [List image IDs for a subscription version](get-v1-subscriptionversions-_id_-relationships-images.md) instead.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptions/{id}/relationships/images
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `SubscriptionImagesLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [Create an image for a subscription (v1)](post-v1-subscriptionimages.md): Deprecated. Reserve an image asset to appear in the App Store, representing a subscription.
- [Read subscription image information (v1)](get-v1-subscriptionimages-_id_.md): Deprecated. Read details about a specific subscription image.
- [List Subscription Images](get-v1-subscriptions-_id_-images.md): Deprecated. List all images for a specific subscription.
- [Commit a subscription image (v1)](patch-v1-subscriptionimages-_id_.md): Deprecated. Commit an uploaded subscription image.
- [Delete a subscription image (v1)](delete-v1-subscriptionimages-_id_.md): Deprecated. Delete the image asset that appears on the App Store listing that represents a subscription.
