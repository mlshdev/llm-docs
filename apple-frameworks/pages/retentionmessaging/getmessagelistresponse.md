> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/getmessagelistresponse](https://developer.apple.com/documentation/retentionmessaging/getmessagelistresponse)

# GetMessageListResponse

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Object  
**Availability:** Retention Messaging API 1.0+

A response that contains status information for all messages.

## Declaration

```
object GetMessageListResponse
```

## Properties

- `messageIdentifiers` — `[GetMessageListResponseItem]`: An array of all message identifiers and their message states.

<a id="Discussion"></a>

## Discussion

The [Get Message List](get-message-list.md) endpoint returns this response.

## See Also

### Message configuration

- [Upload Message](upload-message.md): Uploads a message to use for retention messaging.
- [Delete Message](delete-message.md): Deletes a previously uploaded message.
- [Get Message List](get-message-list.md): Gets the message identifier and state of all uploaded messages.
- [UploadMessageRequestBody](uploadmessagerequestbody.md): The request body for uploading a message, which includes the message text and an optional image reference and bullet points.
- [UploadMessageImage](uploadmessageimage.md): The definition of an image with its alternative text.
- [GetMessageListResponseItem](getmessagelistresponseitem.md): A message identifier and status information for a message.
