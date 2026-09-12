> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/browserentity/window](https://developer.apple.com/documentation/appintents/appschema/browserentity/window)

# window

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

An entity schema for a window.

## Declaration

```swift
var window: some AppSchemaEntity { get }
```

<a id="discussion"></a>

## Discussion

To make your app’s content available to Apple Intelligence, conform your [AppEntity](../../appentity.md) to a schema that describes your content to the system. If your app’s functionality aligns with the `browser` domain and its content matches the `window` schema, you can generate the properties and protocol conformance the schema requires for your app entity implementation with the `@AppEntity( .browser.window)` Swift macro. To make your app work with Siri, see [Apple Intelligence and Siri AI](../../apple-intelligence-and-siri-ai.md).

The following example shows an app entity that conforms to the `window` schema:

```swift
@AppEntity(schema: .browser.window)
struct WindowEntity {
    // MARK: Static

    static let defaultQuery = WindowEntityQuery()

    // MARK: Properties

    let id: <#Identifiable.ID#>

    var tabs: [<#TabEntity#>]
    var isPrivate: Bool

    var displayRepresentation: DisplayRepresentation {
        <#DisplayRepresentation#>
    }

    // MARK: Query

    struct WindowEntityQuery: EntityQuery {
        func entities(for identifiers: [WindowEntity.ID]) async throws -> [WindowEntity] {
            <#code#>
        }
    }
}
```

The schema supports the following system experiences:

- Shortcuts

For more information about the App Intents framework and the experiences it supports, see [Getting started with the App Intents framework](../../getting-started-with-the-app-intents-framework.md).

## See Also

### Content and parameter types

- [bookmark](bookmark.md): An entity schema for a bookmark.
- [readingListItem](readinglistitem.md): An entity schema for a reading list item.
- [tab](tab.md): An entity schema for a tab.
- [tabGroup](tabgroup.md): An entity schema for a tab group.
- [AppSchema.BrowserEntity](../browserentity.md): Identifies entity schemas in the browser domain.
