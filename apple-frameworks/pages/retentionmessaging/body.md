> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/body](https://developer.apple.com/documentation/retentionmessaging/body)

# body

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Type  
**Availability:** Retention Messaging API 1.0+

The body text you provide for a message.

## Declaration

```
string body
```

<a id="Discussion"></a>

## Discussion

Provide the `body` as a UTF-8-encoded string. The maximum string length is `144`.

The `body` text appears, along with the [header](header.md) text, in a [message](message.md).

## See Also

### Messages

- [messageIdentifier](messageidentifier.md): A unique identifier for a message, which you provide when you upload the message.
- [messageState](messagestate.md): The approval state of the message.
- [BulletPoint](bulletpoint.md): The text and its bullet-point image to include in a retention message’s bulleted list.
- [bulletPointText](bulletpointtext.md): The text you provide for an individual bullet-list item.
- [header](header.md): The header text you provide that appears above the body text in a message.
- [headerPosition](headerposition.md): The position where the header text appears in a message.
