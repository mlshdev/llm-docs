> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/messagesintent/draftmessage](https://developer.apple.com/documentation/appintents/appschema/messagesintent/draftmessage)

# draftMessage

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An intent schema that opens app to start or continue composing a message via touch.

## Declaration

```swift
var draftMessage: some AppSchemaIntent { get }
```

<a id="discussion"></a>

## Discussion

To make your app’s actions available to Apple Intelligence, conform your [AppIntent](../../appintent.md) to a schema that describes your action to the system. If your app’s functionality aligns with the `messages` domain and one of your app’s actions matches the `draftMessage` schema, you can generate the properties and protocol conformance the schema requires for your intent implementation with the `@AppIntent( .messages.draftMessage)` Swift macro. To make your app work with Siri, see [Apple Intelligence and Siri AI](../../apple-intelligence-and-siri-ai.md).

The following example shows an intent that conforms to the `draftMessage` schema:

```swift
@AppIntent(schema: .messages.draftMessage)
struct DraftMessageIntent {
    var destination: <#MessageDestination#>?
    var subject: AttributedString?
    var content: AttributedString?
    var attachments: [IntentFile]
    var audioMessage: IntentFile?
    var locations: [GeoToolbox.PlaceDescriptor]
    var links: [URL]
    var scheduledDate: Date?

    func perform() async throws -> some IntentResult {
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

- [editSentMessage](editsentmessage.md): An intent schema that edits an already sent message with new content.
- [sendMessage](sendmessage.md): An intent schema that sends a message with the associated parameters.
- [setMessageReadStatus](setmessagereadstatus.md): An intent schema that changes the message read status to a given value.
- [unsendMessage](unsendmessage.md): An intent schema that unsends a sent message.
- [AppSchema.MessagesIntent](../messagesintent.md): Identifies intent schemas in the messages domain.
