> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-33695ec62253; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-inapppurchaseimages-_id_

# Delete an In-App Purchase image (v1)

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

Delete the image asset that appears on the App Store listing that represents an In-App Purchase.

> This endpoint is deprecated. Use [Delete an In-App Purchase image](delete-v2-inapppurchaseimages-_id_.md) instead.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/inAppPurchaseImages/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `inAppPurchaseImages` resource ID from the [List In-App Purchase images](get-v2-inapppurchases-_id_-images.md) response.

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

> **Note**

>  Changes that you make to product metadata with the App Store Connect API can take up to 1 hour to appear in the sandbox environment.

## See Also

### Endpoints

- [Create an image for an In-App Purchase (v1)](post-v1-inapppurchaseimages.md): Deprecated. Reserve an image asset to appear in the App Store, representing an In-App Purchase.
- [Read In-App Purchase image information (v1)](get-v1-inapppurchaseimages-_id_.md): Deprecated. Read details about a specific In-App Purchase image.
- [List In-App Purchase images](get-v2-inapppurchases-_id_-images.md): Deprecated. List all images for a specific In-App Purchase.
- [Commit an image for an In-App Purchase (v1)](patch-v1-inapppurchaseimages-_id_.md): Deprecated. Commit an uploaded image asset for an In-App Purchase.
