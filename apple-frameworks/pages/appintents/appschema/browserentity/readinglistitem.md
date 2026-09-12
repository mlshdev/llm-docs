> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/browserentity/readinglistitem](https://developer.apple.com/documentation/appintents/appschema/browserentity/readinglistitem)

# readingListItem

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An entity schema for a reading list item.

## Declaration

```swift
var readingListItem: some AppSchemaEntity { get }
```

<a id="discussion"></a>

## Discussion

To make your app’s content available to Apple Intelligence, conform your [AppEntity](../../appentity.md) to a schema that describes your content to the system. If your app’s functionality aligns with the `browser` domain and its content matches the `readingListItem` schema, you can generate the properties and protocol conformance the schema requires for your app entity implementation with the `@AppEntity( .browser.readingListItem)` Swift macro. To make your app work with Siri, see [Apple Intelligence and Siri AI](../../apple-intelligence-and-siri-ai.md).

The following example shows an app entity that conforms to the `readingListItem` schema:

```swift
@AppEntity(schema: .browser.readingListItem)
struct ReadingListItemEntity {
    // MARK: Static

    static let defaultQuery = ReadingListItemEntityQuery()

    // MARK: Properties

    let id: <#Identifiable.ID#>

    var title: String
    var url: URL

    var displayRepresentation: DisplayRepresentation {
        <#DisplayRepresentation#>
    }

    // MARK: Query

    struct ReadingListItemEntityQuery: EntityQuery {
        func entities(for identifiers: [ReadingListItemEntity.ID]) async throws -> [ReadingListItemEntity] {
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

- [bookmark](bookmark.md): An entity schema for a bookmark.
- [tab](tab.md): An entity schema for a tab.
- [tabGroup](tabgroup.md): An entity schema for a tab group.
- [window](window.md): An entity schema for a window.
- [AppSchema.BrowserEntity](../browserentity.md): Identifies entity schemas in the browser domain.
