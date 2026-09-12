> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/messagesintent/sendmessage](https://developer.apple.com/documentation/appintents/appschema/messagesintent/sendmessage)

# sendMessage

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An intent schema that sends a message with the associated parameters.

## Declaration

```swift
var sendMessage: some AppSchemaIntent { get }
```

<a id="discussion"></a>

## Discussion

To make your app’s actions available to Apple Intelligence, conform your [AppIntent](../../appintent.md) to a schema that describes your action to the system. If your app’s functionality aligns with the `messages` domain and one of your app’s actions matches the `sendMessage` schema, you can generate the properties and protocol conformance the schema requires for your intent implementation with the `@AppIntent( .messages.sendMessage)` Swift macro. To make your app work with Siri, see [Apple Intelligence and Siri AI](../../apple-intelligence-and-siri-ai.md).

The following example shows an intent that conforms to the `sendMessage` schema:

```swift
@AppIntent(schema: .messages.sendMessage)
struct SendMessageIntent {
    var content: AttributedString?
    var destination: <#MessageDestination#>
    var subject: AttributedString?
    var attachments: [IntentFile]
    var audioMessage: IntentFile?
    var locations: [GeoToolbox.PlaceDescriptor]
    var links: [URL]
    var scheduledDate: Date?

    func perform() async throws -> some ReturnsValue<[<#MessageEntity#>]> {
        <#code#>
    }
}
```

The schema supports the following system experiences:

- Siri
- Shortcuts

For more information about the App Intents framework and the experiences it supports, see [Getting started with the App Intents framework](../../getting-started-with-the-app-intents-framework.md).

## See Also

### Actions

- [draftMessage](draftmessage.md): An intent schema that opens app to start or continue composing a message via touch.
- [editSentMessage](editsentmessage.md): An intent schema that edits an already sent message with new content.
- [setMessageReadStatus](setmessagereadstatus.md): An intent schema that changes the message read status to a given value.
- [unsendMessage](unsendmessage.md): An intent schema that unsends a sent message.
- [AppSchema.MessagesIntent](../messagesintent.md): Identifies intent schemas in the messages domain.
