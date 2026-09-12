> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/upload-image](https://developer.apple.com/documentation/retentionmessaging/upload-image)

# Upload Image

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Web Service Endpoint  
**Availability:** Retention Messaging API 1.0+

Uploads an image to use for retention messaging.

## URL

```http
PUT https://api.storekit.apple.com/inApps/v1/messaging/image/{imageIdentifier}
```

## Sandbox URL

```http
PUT https://api.storekit-sandbox.apple.com/inApps/v1/messaging/image/{imageIdentifier}
```

## Path Parameters

- `imageIdentifier` — `imageIdentifier` (required): A UUID you provide to uniquely identify the image you upload.

## Query Parameters

- `imageSize` — `imageSize`: The size of the image you upload.
  **Default:** `FULL_SIZE`

## HTTP Body

Content type: `image/png`

Type: `binary`

The image file to upload.

## Response Codes

- `200` OK: Request succeeded.
- `400` Bad Request — `InvalidImageError`: The request is invalid and unacceptable.
- `401` Unauthorized: The JSON Web Token (JWT) in the authorization header is invalid. For more information, see [Generating JSON Web Tokens for API requests](../appstoreserverapi/generating-json-web-tokens-for-api-requests.md).
- `403` Forbidden — `MaximumNumberOfMessagesReachedError`: The request is forbidden because the system reached the maximum number of uploaded images.
- `409` Conflict — `ImageAlreadyExistsError`: The image identifier already exists.
- `429` — `RateLimitExceededError`: The request exceeded the rate limit. For more information, see [Identifying rate limits](identifying-rate-limits.md).
- `500` Internal Server Error — `GeneralInternalError`: Server error. Try again later.

## Mentioned In

- [Identifying rate limits](identifying-rate-limits.md)
- [Retention Messaging API changelog](retention-messaging-changelog.md)
- [Setting up retention messages](setting-up-retention-messages.md)

<a id="Discussion"></a>

## Discussion

Call this endpoint to upload an image that you can associate with a message or a bullet point within the message. You provide a unique `imageIdentifier` to identify each image you upload.

You can upload image files that meet the following requirements:

- Format: PNG
- Doesn’t have transparency

> **Note**

> Ensure the images you upload work equally well with both light and dark modes.

The maximum number of images you can configure for each app is 2000. The endpoint returns a `MaximumNumberOfImagesReachedError` response if an attempt to upload an image exceeds this limit. Call [Delete Image](delete-image.md) to delete images.

Use full-size images for a message, or the smaller bullet point-size images to use as bullet points.

<a id="Upload-full-size-images"></a>

### Upload full-size images

A full-size image is up to 3840 × 2160 pixels, where the width must be 3840 pixels, and the height can be between 160 to 2160 pixels.

You can add alternative text for images when you call [Upload Message](upload-message.md) and associate an image with a message using [UploadMessageImage](uploadmessageimage.md).

<a id="Upload-images-for-bullet-points"></a>

### Upload images for bullet points

Images you use for bullet points are 1024 x 1024 pixels. You can add alternative text for the bullet point images when you supply `bulletPoints` in the [UploadMessageRequestBody](uploadmessagerequestbody.md).

> **Note**

> This endpoint isn’t idempotent. If you attempt to upload an image and reuse a previously configured `imageIdentifier`, the endpoint returns the [ImageAlreadyExistsError](imagealreadyexistserror.md) response.

<a id="Determine-whether-an-image-is-ready-to-display"></a>

### Determine whether an image is ready to display

Immediately after you upload an image, its [imageState](imagestate.md) is `PENDING`. Apple checks the images, and sets the image state to `APPROVED` to indicate the system can display them in retention messaging. Call the [Get Image List](get-image-list.md) endpoint to check the current state of images you upload.

In the sandbox testing environment, the system automatically sets the message and image states to `APPROVED`.

## See Also

### Image configuration

- [Delete Image](delete-image.md): Deletes a previously uploaded image.
- [Get Image List](get-image-list.md): Gets the image identifier and state for all uploaded images.
- [GetImageListResponse](getimagelistresponse.md): A response that contains status information for all images.
- [GetImageListResponseItem](getimagelistresponseitem.md): An image identifier and state information for an image.
