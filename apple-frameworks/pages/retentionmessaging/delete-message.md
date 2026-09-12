> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/delete-message](https://developer.apple.com/documentation/retentionmessaging/delete-message)

# Delete Message

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Web Service Endpoint  
**Availability:** Retention Messaging API 1.0+

Deletes a previously uploaded message.

## URL

```http
DELETE https://api.storekit.apple.com/inApps/v1/messaging/message/{messageIdentifier}
```

## Sandbox URL

```http
DELETE https://api.storekit-sandbox.apple.com/inApps/v1/messaging/message/{messageIdentifier}
```

## Path Parameters

- `messageIdentifier` — `messageIdentifier` (required): The identifier of the message to delete.

## Response Codes

- `200` OK: Request succeeded.
- `400` Bad Request: The request is invalid and unacceptable.
- `401` Unauthorized: The JSON Web Token (JWT) in the authorization header is invalid. For more information, see [Generating JSON Web Tokens for API requests](../appstoreserverapi/generating-json-web-tokens-for-api-requests.md).
- `404` Not Found — `MessageNotFoundError`: The system can’t find the message.
- `429` — `RateLimitExceededError`: The request exceeded the rate limit. For more information, see [Identifying rate limits](identifying-rate-limits.md).
- `500` Internal Server Error — `GeneralInternalError`: Server error. Try again later.

## Mentioned In

- [Identifying rate limits](identifying-rate-limits.md)

<a id="Discussion"></a>

## Discussion

Call this endpoint to delete a message. After successfully deleting the message, its `messageIdentifier` no longer exists.

To avoid errors, don’t use the `messageIdentifier` of deleted messages in [RealtimeResponseBody](realtimeresponsebody.md) when your server replies to the `Get Retention Message` endpoint.

> **Note**

> This endpoint isn’t idempotent. If the system doesn’t find the message, this endpoint throws an error.

To delete an image associated with a message, call [Delete Image](delete-image.md) after you delete the message.

## See Also

### Message configuration

- [Upload Message](upload-message.md): Uploads a message to use for retention messaging.
- [Get Message List](get-message-list.md): Gets the message identifier and state of all uploaded messages.
- [UploadMessageRequestBody](uploadmessagerequestbody.md): The request body for uploading a message, which includes the message text and an optional image reference and bullet points.
- [UploadMessageImage](uploadmessageimage.md): The definition of an image with its alternative text.
- [GetMessageListResponse](getmessagelistresponse.md): A response that contains status information for all messages.
- [GetMessageListResponseItem](getmessagelistresponseitem.md): A message identifier and status information for a message.
