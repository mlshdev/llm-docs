> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/mailentity/mailbox](https://developer.apple.com/documentation/appintents/appschema/mailentity/mailbox)

# mailbox

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

An entity schema for a mailbox.

## Declaration

```swift
var mailbox: some AppSchemaEntity { get }
```

<a id="discussion"></a>

## Discussion

To make your app’s content available to Apple Intelligence, conform your [AppEntity](../../appentity.md) to a schema that describes your content to the system. If your app’s functionality aligns with the `mail` domain and its content matches the `mailbox` schema, you can generate the properties and protocol conformance the schema requires for your app entity implementation with the `@AppEntity( .mail.mailbox)` Swift macro. To make your app work with Siri, see [Apple Intelligence and Siri AI](../../apple-intelligence-and-siri-ai.md).

The following example shows an app entity that conforms to the `mailbox` schema:

```swift
@AppEntity(schema: .mail.mailbox)
struct MailboxEntity {
    // MARK: Static

    static let defaultQuery = MailboxEntityQuery()

    // MARK: Properties

    let id: <#Identifiable.ID#>

    var name: String
    var account: <#MailAccountEntity#>

    var displayRepresentation: DisplayRepresentation {
        <#DisplayRepresentation#>
    }

    // MARK: Query

    struct MailboxEntityQuery: EntityQuery {
        func entities(for identifiers: [MailboxEntity.ID]) async throws -> [MailboxEntity] {
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
- [message](message.md): An entity schema for a message.
- [thread](thread.md): An entity schema for a thread.
- [AppSchema.MailEntity](../mailentity.md): Identifies entity schemas in the mail domain.
