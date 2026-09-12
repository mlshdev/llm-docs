> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/messageidentifier](https://developer.apple.com/documentation/retentionmessaging/messageidentifier)

# messageIdentifier

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Type  
**Availability:** Retention Messaging API 1.0+

A unique identifier for a message, which you provide when you upload the message.

## Declaration

```
uuid messageIdentifier
```

<a id="discussion"></a>

## Discussion

You create the UUID to identify a message when you call [Upload Message](upload-message.md). Use this identifier to refer to the same message throughout the API.

## See Also

### Messages

- [messageState](messagestate.md): The approval state of the message.
- [body](body.md): The body text you provide for a message.
- [BulletPoint](bulletpoint.md): The text and its bullet-point image to include in a retention message’s bulleted list.
- [bulletPointText](bulletpointtext.md): The text you provide for an individual bullet-list item.
- [header](header.md): The header text you provide that appears above the body text in a message.
- [headerPosition](headerposition.md): The position where the header text appears in a message.
