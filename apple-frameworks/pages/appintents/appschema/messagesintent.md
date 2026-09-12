> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/messagesintent](https://developer.apple.com/documentation/appintents/appschema/messagesintent)

# AppSchema.MessagesIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Identifies intent schemas in the messages domain.

## Declaration

```swift
protocol MessagesIntent : AppSchema.Kind
```

## Topics

### Instance Properties

- [draftMessage](messagesintent/draftmessage.md): An intent schema that opens app to start or continue composing a message via touch.
- [editSentMessage](messagesintent/editsentmessage.md): An intent schema that edits an already sent message with new content.
- [sendMessage](messagesintent/sendmessage.md): An intent schema that sends a message with the associated parameters.
- [setMessageReadStatus](messagesintent/setmessagereadstatus.md): An intent schema that changes the message read status to a given value.
- [unsendMessage](messagesintent/unsendmessage.md): An intent schema that unsends a sent message.

## Relationships

### Inherits From

- [AppSchema.Kind](kind.md)

### Conforming Types

- [AppSchema.Intent](intent.md)

## See Also

### Actions

- [draftMessage](messagesintent/draftmessage.md): An intent schema that opens app to start or continue composing a message via touch.
- [editSentMessage](messagesintent/editsentmessage.md): An intent schema that edits an already sent message with new content.
- [sendMessage](messagesintent/sendmessage.md): An intent schema that sends a message with the associated parameters.
- [setMessageReadStatus](messagesintent/setmessagereadstatus.md): An intent schema that changes the message read status to a given value.
- [unsendMessage](messagesintent/unsendmessage.md): An intent schema that unsends a sent message.
