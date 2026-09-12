> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/upload-message](https://developer.apple.com/documentation/retentionmessaging/upload-message)

# Upload Message

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Web Service Endpoint  
**Availability:** Retention Messaging API 1.0+

Uploads a message to use for retention messaging.

## URL

```http
PUT https://api.storekit.apple.com/inApps/v1/messaging/message/{messageIdentifier}
```

## Sandbox URL

```http
PUT https://api.storekit-sandbox.apple.com/inApps/v1/messaging/message/{messageIdentifier}
```

## Path Parameters

- `messageIdentifier` — `messageIdentifier` (required): A UUID you provide to uniquely identify the message you upload.

## HTTP Body

Content type: `application/json`

Type: `UploadMessageRequestBody`

The message text to upload.

## Response Codes

- `200` OK: Request succeeded.
- `400` Bad Request — `(BodyTooLongError | HeaderTooLongError | AltTextTooLongError | BadRequestImageSizeError | BadRequestTooManyBulletPointsError | BadRequestBulletPointTextTooLongError | BadRequestAboveImageRequiresAnImageError)`: The request is invalid and unacceptable.
- `401` Unauthorized: The JSON Web Token (JWT) in the authorization header is invalid. For more information, see [Generating JSON Web Tokens for API requests](../appstoreserverapi/generating-json-web-tokens-for-api-requests.md).
- `403` Forbidden — `MaximumNumberOfMessagesReachedError`: The request is forbidden because the system reached the maximum number of uploaded messages.
- `409` Conflict — `MessageAlreadyExistsError`: The message identifier already exists.
- `429` — `RateLimitExceededError`: The request exceeded the rate limit. For more information, see [Identifying rate limits](identifying-rate-limits.md).
- `500` Internal Server Error — `GeneralInternalError`: Server error. Try again later.

## Mentioned In

- [Setting up retention messages](setting-up-retention-messages.md)
- [Identifying rate limits](identifying-rate-limits.md)

<a id="Discussion"></a>

## Discussion

Call this endpoint to upload the text for retention messages. You provide a unique `messageIdentifier` to identify each message you upload. You can optionally include an image and bullet points with the message.

You define a message by providing the following strings and objects in the [UploadMessageRequestBody](uploadmessagerequestbody.md):

- The body, which contains the main text of the message.
- A header, which contains text to display above the message body or above the image.
- An optional [UploadMessageImage](uploadmessageimage.md) that represents an image you upload with alternative text.
- An optional array of [BulletPoint](bulletpoint.md) text, along with images to use as the bullet point icons.

> **Important**

> Only text-based retention messages can include images. If you’re uploading text for a promotional-offer message or a switch-plan message, don’t include an image.

To change the position of the header text in a retention message, use [headerPosition](headerposition.md) to indicate whether to place the header above the message body or above the image.

Each string needs to be a UTF-8-encoded value with a maximum length as indicated below:

| Field | Maximum length | Related error code |
| --- | --- | --- |
| [header](header.md) | 66 | [HeaderTooLongError](headertoolongerror.md) |
| [body](body.md) | 144 | [BodyTooLongError](bodytoolongerror.md) |
| [altText](alttext.md) | 150 | [AltTextTooLongError](alttexttoolongerror.md) |
| [bulletPointText](bulletpointtext.md) | 66 | [BadRequestBulletPointTextTooLongError](badrequestbulletpointtexttoolongerror.md) |

The maximum number of messages you can configure for each app is 2000. For example, you may choose to upload a message for a product identifier for each locale your app supports. The endpoint returns a `MaximumNumberOfMessagesReachedError` response if you exceed the maximum limit. Call [Delete Message](delete-message.md) to delete messages.

> **Tip**

> Keep a record of the message and image contents on your system.

This endpoint isn’t idempotent. If you have a previously configured message with the same `messageIdentifier`, the endpoint returns [MessageAlreadyExistsError](messagealreadyexistserror.md).

<a id="Determine-whether-a-message-is-ready-to-display"></a>

### Determine whether a message is ready to display

Immediately after you upload an message, its [messageState](messagestate.md) is `PENDING`. Apple checks the message, and sets the message state to `APPROVED` to indicate the system can display it in retention messaging. Call the [Get Message List](get-message-list.md) endpoint to check the current state of all messages. If a message includes an image, call [Get Image List](get-image-list.md) to check the current state of the image separately. Both the message and its image, if any, need to be in an `APPROVED` state before the system can display a message.

In the sandbox testing environment, the system automatically sets message and image states to `APPROVED`.

## See Also

### Message configuration

- [Delete Message](delete-message.md): Deletes a previously uploaded message.
- [Get Message List](get-message-list.md): Gets the message identifier and state of all uploaded messages.
- [UploadMessageRequestBody](uploadmessagerequestbody.md): The request body for uploading a message, which includes the message text and an optional image reference and bullet points.
- [UploadMessageImage](uploadmessageimage.md): The definition of an image with its alternative text.
- [GetMessageListResponse](getmessagelistresponse.md): A response that contains status information for all messages.
- [GetMessageListResponseItem](getmessagelistresponseitem.md): A message identifier and status information for a message.
