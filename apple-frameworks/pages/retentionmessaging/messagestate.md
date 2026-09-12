> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/messagestate](https://developer.apple.com/documentation/retentionmessaging/messagestate)

# messageState

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Type  
**Availability:** Retention Messaging API 1.0+

The approval state of the message.

## Declaration

```
string messageState
```

## Possible Values

- `PENDING`: The message is awaiting approval.
- `APPROVED`: The message is approved.
- `REJECTED`: The message is rejected.

## Mentioned In

- [Setting up retention messages](setting-up-retention-messages.md)

<a id="discussion"></a>

## Discussion

Call [Get Message List](get-message-list.md) to get the list of messages and their current states.

For messages with images, see [Get Image List](get-image-list.md) to get the image state also.

## See Also

### Messages

- [messageIdentifier](messageidentifier.md): A unique identifier for a message, which you provide when you upload the message.
- [body](body.md): The body text you provide for a message.
- [BulletPoint](bulletpoint.md): The text and its bullet-point image to include in a retention message’s bulleted list.
- [bulletPointText](bulletpointtext.md): The text you provide for an individual bullet-list item.
- [header](header.md): The header text you provide that appears above the body text in a message.
- [headerPosition](headerposition.md): The position where the header text appears in a message.
