> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/getmessagelistresponseitem](https://developer.apple.com/documentation/retentionmessaging/getmessagelistresponseitem)

# GetMessageListResponseItem

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Object  
**Availability:** Retention Messaging API 1.0+

A message identifier and status information for a message.

## Declaration

```
object GetMessageListResponseItem
```

## Properties

- `messageIdentifier` — `messageIdentifier`: The identifier of the message.
- `messageState` — `messageState`: The current state of the message.

<a id="Discussion"></a>

## Discussion

The [Get Message List](get-message-list.md) endpoint returns an array of these values in its response.

## See Also

### Message configuration

- [Upload Message](upload-message.md): Uploads a message to use for retention messaging.
- [Delete Message](delete-message.md): Deletes a previously uploaded message.
- [Get Message List](get-message-list.md): Gets the message identifier and state of all uploaded messages.
- [UploadMessageRequestBody](uploadmessagerequestbody.md): The request body for uploading a message, which includes the message text and an optional image reference and bullet points.
- [UploadMessageImage](uploadmessageimage.md): The definition of an image with its alternative text.
- [GetMessageListResponse](getmessagelistresponse.md): A response that contains status information for all messages.
