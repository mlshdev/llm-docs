> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/get-message-list](https://developer.apple.com/documentation/retentionmessaging/get-message-list)

# Get Message List

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Web Service Endpoint  
**Availability:** Retention Messaging API 1.0+

Gets the message identifier and state of all uploaded messages.

## URL

```http
GET https://api.storekit.apple.com/inApps/v1/messaging/message/list
```

## Sandbox URL

```http
GET https://api.storekit-sandbox.apple.com/inApps/v1/messaging/message/list
```

## Response Codes

- `200` OK — `GetMessageListResponse`: Request succeeded.
- `429` — `RateLimitExceededError`: The request exceeded the rate limit. For more information, see [Identifying rate limits](identifying-rate-limits.md).
- `500` Internal Server Error — `GeneralInternalError`: Server error. Try again later.

## Mentioned In

- [Identifying rate limits](identifying-rate-limits.md)
- [Setting up retention messages](setting-up-retention-messages.md)

<a id="Discussion"></a>

## Discussion

Call this endpoint to get a list of all uploaded message identifiers and check their current state, [messageState](messagestate.md).

> **Note**

> If a message includes an image, also check the image state by calling [Get Image List](get-image-list.md). The system displays retention messages with images only if both the message and the image are in an `APPROVED` state.

## See Also

### Message configuration

- [Upload Message](upload-message.md): Uploads a message to use for retention messaging.
- [Delete Message](delete-message.md): Deletes a previously uploaded message.
- [UploadMessageRequestBody](uploadmessagerequestbody.md): The request body for uploading a message, which includes the message text and an optional image reference and bullet points.
- [UploadMessageImage](uploadmessageimage.md): The definition of an image with its alternative text.
- [GetMessageListResponse](getmessagelistresponse.md): A response that contains status information for all messages.
- [GetMessageListResponseItem](getmessagelistresponseitem.md): A message identifier and status information for a message.
