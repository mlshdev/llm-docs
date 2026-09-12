> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/remindersentity/section](https://developer.apple.com/documentation/appintents/appschema/remindersentity/section)

# section

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An entity schema for a section.

## Declaration

```swift
var section: some AppSchemaEntity { get }
```

<a id="discussion"></a>

## Discussion

To make your app’s content available to Apple Intelligence, conform your [AppEntity](../../appentity.md) to a schema that describes your content to the system. If your app’s functionality aligns with the `reminders` domain and its content matches the `section` schema, you can generate the properties and protocol conformance the schema requires for your app entity implementation with the `@AppEntity( .reminders.section)` Swift macro. To make your app work with Siri, see [Apple Intelligence and Siri AI](../../apple-intelligence-and-siri-ai.md).

The following example shows an app entity that conforms to the `section` schema:

```swift
@AppEntity(schema: .reminders.section)
struct SectionEntity {
    // MARK: Static

    static let defaultQuery = SectionEntityQuery()

    // MARK: Properties

    let id: <#Identifiable.ID#>

    var name: String
    var list: <#ListEntity#>

    var displayRepresentation: DisplayRepresentation {
        <#DisplayRepresentation#>
    }

    // MARK: Query

    struct SectionEntityQuery: EntityQuery {
        func entities(for identifiers: [SectionEntity.ID]) async throws -> [SectionEntity] {
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

- [group](group.md): An entity schema for a group.
- [list](list.md): An entity schema for a list.
- [locationTrigger](locationtrigger.md): An entity schema for a location trigger.
- [reminder](reminder.md): An entity schema for a reminder.
- [AppSchema.RemindersEntity](../remindersentity.md): Identifies entity schemas in the reminders domain.
