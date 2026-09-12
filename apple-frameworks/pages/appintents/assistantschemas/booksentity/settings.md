> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantschemas/booksentity/settings](https://developer.apple.com/documentation/appintents/assistantschemas/booksentity/settings)

# settings

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The app entity describes settings for an audiobook or ebook.

## Declaration

```swift
var settings: some AssistantSchemas.Entity { get }
```

<a id="Overview"></a>

## Overview

Use Swift macros that generate additional properties and add protocol conformance for your app entity implementation. The following example shows an app entity that conforms to the `.books.settings` schema:

```swift
@AppEntity(schema: .books.settings)
struct BookSettingsEntity: AppEntity {
    struct Query: EntityStringQuery {
        func entities(for identifiers: [BookSettingsEntity.ID]) async throws -> [BookSettingsEntity] { [] }
        func entities(matching string: String) async throws -> [BookSettingsEntity] { [] }
    }

    static var defaultQuery = Query()
    var displayRepresentation: DisplayRepresentation { "Book Settings" }

    let id = UUID()

    @Property
    var font: BookFont

    @Property
    var fontSize: BookFontSize

    @Property
    var theme: BookTheme

    @Property
    var pageNavigationSetting: BookPageNavigationSetting

    @Property
    var isTextJustified: Bool

    @Property
    var isAllowMultipleColumns: Bool}
```

For more information about the `.books` app intent domain, see [Books](../../app-schema-domain-books.md). For general information about app intent domains, see [Making actions and content discoverable by Apple Intelligence](../../making-actions-and-content-discoverable-by-apple-intelligence.md).
