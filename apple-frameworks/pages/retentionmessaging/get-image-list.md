> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/get-image-list](https://developer.apple.com/documentation/retentionmessaging/get-image-list)

# Get Image List

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Web Service Endpoint  
**Availability:** Retention Messaging API 1.0+

Gets the image identifier and state for all uploaded images.

## URL

```http
GET https://api.storekit.apple.com/inApps/v1/messaging/image/list
```

## Sandbox URL

```http
GET https://api.storekit-sandbox.apple.com/inApps/v1/messaging/image/list
```

## Response Codes

- `200` OK — `GetImageListResponse`: Request succeeded.
- `429` — `RateLimitExceededError`: The request exceeded the rate limit. For more information, see [Identifying rate limits](identifying-rate-limits.md).
- `500` Internal Server Error — `GeneralInternalError`: Server error. Try again later.

## Mentioned In

- [Identifying rate limits](identifying-rate-limits.md)
- [Setting up retention messages](setting-up-retention-messages.md)

<a id="Discussion"></a>

## Discussion

Call this endpoint to get all uploaded image identifiers and check their current state, [imageState](imagestate.md).

Images need to be in an `APPROVED` state before the system can display messages that contain them.

## See Also

### Image configuration

- [Upload Image](upload-image.md): Uploads an image to use for retention messaging.
- [Delete Image](delete-image.md): Deletes a previously uploaded image.
- [GetImageListResponse](getimagelistresponse.md): A response that contains status information for all images.
- [GetImageListResponseItem](getimagelistresponseitem.md): An image identifier and state information for an image.
