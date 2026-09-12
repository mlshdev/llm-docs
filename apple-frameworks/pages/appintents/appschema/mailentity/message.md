> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/mailentity/message](https://developer.apple.com/documentation/appintents/appschema/mailentity/message)

# message

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

An entity schema for a message.

## Declaration

```swift
var message: some AppSchemaEntity { get }
```

<a id="discussion"></a>

## Discussion

To make your app’s content available to Apple Intelligence, conform your [AppEntity](../../appentity.md) to a schema that describes your content to the system. If your app’s functionality aligns with the `mail` domain and its content matches the `message` schema, you can generate the properties and protocol conformance the schema requires for your app entity implementation with the `@AppEntity( .mail.message)` Swift macro. To make your app work with Siri, see [Apple Intelligence and Siri AI](../../apple-intelligence-and-siri-ai.md).

The following example shows an app entity that conforms to the `message` schema:

```swift
@AppEntity(schema: .mail.message)
struct MailMessageEntity {
    // MARK: Static

    static let defaultQuery = MailMessageEntityQuery()

    // MARK: Properties

    let id: <#Identifiable.ID#>

    var to: [IntentPerson]
    var cc: [IntentPerson]
    var bcc: [IntentPerson]
    var subject: String?
    var body: AttributedString?
    var attachments: [IntentFile]
    var sender: IntentPerson
    var dateSent: Date
    var dateReceived: Date
    var isRead: Bool
    var isJunk: Bool
    var isFlagged: Bool
    var category: <#MailCategory#>?
    var account: <#MailAccountEntity#>
    var mailbox: <#MailboxEntity#>

    var displayRepresentation: DisplayRepresentation {
        <#DisplayRepresentation#>
    }

    // MARK: Query

    struct MailMessageEntityQuery: EntityQuery {
        func entities(for identifiers: [MailMessageEntity.ID]) async throws -> [MailMessageEntity] {
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

- [account](account.md): An entity schema for an account.
- [draft](draft.md): An entity schema for a draft.
- [mailbox](mailbox.md): An entity schema for a mailbox.
- [thread](thread.md): An entity schema for a thread.
- [AppSchema.MailEntity](../mailentity.md): Identifies entity schemas in the mail domain.
