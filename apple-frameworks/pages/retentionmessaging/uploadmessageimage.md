> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/uploadmessageimage](https://developer.apple.com/documentation/retentionmessaging/uploadmessageimage)

# UploadMessageImage

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Object  
**Availability:** Retention Messaging API 1.0+

The definition of an image with its alternative text.

## Declaration

```
object UploadMessageImage
```

## Properties

- `imageIdentifier` — `imageIdentifier` (required): The unique identifier of an image.
- `altText` — `altText` (required): The alternative text you provide for the corresponding image.
  **Maximum length:** `150`

## Mentioned In

- [Setting up retention messages](setting-up-retention-messages.md)

## See Also

### Message configuration

- [Upload Message](upload-message.md): Uploads a message to use for retention messaging.
- [Delete Message](delete-message.md): Deletes a previously uploaded message.
- [Get Message List](get-message-list.md): Gets the message identifier and state of all uploaded messages.
- [UploadMessageRequestBody](uploadmessagerequestbody.md): The request body for uploading a message, which includes the message text and an optional image reference and bullet points.
- [GetMessageListResponse](getmessagelistresponse.md): A response that contains status information for all messages.
- [GetMessageListResponseItem](getmessagelistresponseitem.md): A message identifier and status information for a message.
