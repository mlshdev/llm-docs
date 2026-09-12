> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/headerposition](https://developer.apple.com/documentation/retentionmessaging/headerposition)

# headerPosition

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Type  
**Availability:** Retention Messaging API 1.4+

The position where the header text appears in a message.

## Declaration

```
string headerPosition
```

## Possible Values

- `ABOVE_BODY`: Position the header text above the message body. This is the default value.
- `ABOVE_IMAGE`: Position the header text above the image.

## Mentioned In

- [Retention Messaging API changelog](retention-messaging-changelog.md)

<a id="Discussion"></a>

## Discussion

The `headerPosition` defaults to `ABOVE_BODY`. Include it in your request if you want the header to appear above the image instead.

## See Also

### Messages

- [messageIdentifier](messageidentifier.md): A unique identifier for a message, which you provide when you upload the message.
- [messageState](messagestate.md): The approval state of the message.
- [body](body.md): The body text you provide for a message.
- [BulletPoint](bulletpoint.md): The text and its bullet-point image to include in a retention message’s bulleted list.
- [bulletPointText](bulletpointtext.md): The text you provide for an individual bullet-list item.
- [header](header.md): The header text you provide that appears above the body text in a message.
