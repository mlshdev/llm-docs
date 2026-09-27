> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-33695ec62253; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/post-v1-inapppurchaseimages

# Create an image for an In-App Purchase (v1)

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

Reserve an image asset to appear in the App Store, representing an In-App Purchase.

> This endpoint is deprecated. Use [Create an In-App Purchase image](post-v2-inapppurchaseimages.md) instead.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/inAppPurchaseImages
```

## HTTP Body

Content type: `application/json`

Type: `InAppPurchaseImageCreateRequest`

## Response Codes

- `201` Created — `InAppPurchaseImageResponse`:
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

- [Read In-App Purchase image information (v1)](get-v1-inapppurchaseimages-_id_.md): Deprecated. Read details about a specific In-App Purchase image.
- [List In-App Purchase images](get-v2-inapppurchases-_id_-images.md): Deprecated. List all images for a specific In-App Purchase.
- [Commit an image for an In-App Purchase (v1)](patch-v1-inapppurchaseimages-_id_.md): Deprecated. Commit an uploaded image asset for an In-App Purchase.
- [Delete an In-App Purchase image (v1)](delete-v1-inapppurchaseimages-_id_.md): Deprecated. Delete the image asset that appears on the App Store listing that represents an In-App Purchase.
