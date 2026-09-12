> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/header](https://developer.apple.com/documentation/retentionmessaging/header)

# header

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Type  
**Availability:** Retention Messaging API 1.0+

The header text you provide that appears above the body text in a message.

## Declaration

```
string header
```

<a id="Discussion"></a>

## Discussion

Provide the `header` as a UTF-8-encoded string. The maximum string length is `66`.

The header text appears above the [body](body.md) text in a [message](message.md), or above the image.

Body text appears below an optional image.

## See Also

### Messages

- [messageIdentifier](messageidentifier.md): A unique identifier for a message, which you provide when you upload the message.
- [messageState](messagestate.md): The approval state of the message.
- [body](body.md): The body text you provide for a message.
- [BulletPoint](bulletpoint.md): The text and its bullet-point image to include in a retention message’s bulleted list.
- [bulletPointText](bulletpointtext.md): The text you provide for an individual bullet-list item.
- [headerPosition](headerposition.md): The position where the header text appears in a message.
