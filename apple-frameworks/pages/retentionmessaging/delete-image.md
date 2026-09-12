> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/delete-image](https://developer.apple.com/documentation/retentionmessaging/delete-image)

# Delete Image

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Web Service Endpoint  
**Availability:** Retention Messaging API 1.0+

Deletes a previously uploaded image.

## URL

```http
DELETE https://api.storekit.apple.com/inApps/v1/messaging/image/{imageIdentifier}
```

## Sandbox URL

```http
DELETE https://api.storekit-sandbox.apple.com/inApps/v1/messaging/image/{imageIdentifier}
```

## Path Parameters

- `imageIdentifier` — `imageIdentifier` (required): The identifier of the image to delete.

## Response Codes

- `200` OK: Request succeeded.
- `400` Bad Request: The request is invalid and unacceptable.
- `401` Unauthorized: The JSON Web Token (JWT) in the authorization header is invalid. For more information, see [Generating JSON Web Tokens for API requests](../appstoreserverapi/generating-json-web-tokens-for-api-requests.md)..
- `403` Forbidden — `ImageInUseError`: The request is forbidden because the image is in use.
- `404` Not Found — `ImageNotFoundError`: The system can’t find the image.
- `429` — `RateLimitExceededError`: The request exceeded the rate limit. For more information, see [Identifying rate limits](identifying-rate-limits.md).
- `500` Internal Server Error — `GeneralInternalError`: Server error. Try again later.

## Mentioned In

- [Identifying rate limits](identifying-rate-limits.md)

<a id="Discussion"></a>

## Discussion

Call this endpoint to delete an image. After successfully deleting the image, its `imageIdentifier` no longer exists. Don’t use the `imageIdentifier` of a deleted image in any new messages.

> **Note**

> When you include an image in a message, you need to delete the message before you can delete the image.

This endpoint isn’t idempotent. If the system doesn’t find the image, this endpoint throws an error.

## See Also

### Image configuration

- [Upload Image](upload-image.md): Uploads an image to use for retention messaging.
- [Get Image List](get-image-list.md): Gets the image identifier and state for all uploaded images.
- [GetImageListResponse](getimagelistresponse.md): A response that contains status information for all images.
- [GetImageListResponseItem](getimagelistresponseitem.md): An image identifier and state information for an image.
