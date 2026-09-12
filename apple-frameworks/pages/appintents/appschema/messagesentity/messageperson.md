> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/messagesentity/messageperson](https://developer.apple.com/documentation/appintents/appschema/messagesentity/messageperson)

# messagePerson

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An entity schema for a message person.

## Declaration

```swift
var messagePerson: some AppSchemaEntity { get }
```

<a id="discussion"></a>

## Discussion

To make your app’s content available to Apple Intelligence, conform your [AppEntity](../../appentity.md) to a schema that describes your content to the system. If your app’s functionality aligns with the `messages` domain and its content matches the `messagePerson` schema, you can generate the properties and protocol conformance the schema requires for your app entity implementation with the `@AppEntity( .messages.messagePerson)` Swift macro. To make your app work with Siri, see [Apple Intelligence and Siri AI](../../apple-intelligence-and-siri-ai.md).

The following example shows an app entity that conforms to the `messagePerson` schema:

```swift
@AppEntity(schema: .messages.messagePerson)
struct MessagePerson {
    // MARK: Static

    static let defaultQuery = MessagePersonQuery()

    // MARK: Properties

    let id: <#Identifiable.ID#>

    var person: IntentPerson

    var displayRepresentation: DisplayRepresentation {
        <#DisplayRepresentation#>
    }

    // MARK: Query

    struct MessagePersonQuery: EntityQuery {
        func entities(for identifiers: [MessagePerson.ID]) async throws -> [MessagePerson] {
            <#code#>
        }
    }
}
```

The schema supports the following system experiences:

- Siri
- Shortcuts

For more information about the App Intents framework and the experiences it supports, see [Getting started with the App Intents framework](../../getting-started-with-the-app-intents-framework.md).

## See Also

### Content and parameter types

- [conversation](conversation.md): An entity schema for a conversation.
- [customAttachment](customattachment.md): An entity schema for a custom attachment.
- [message](message.md): An entity schema for a message.
- [AppSchema.MessagesEntity](../messagesentity.md): Identifies entity schemas in the messages domain.
