> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantschemas/wordprocessorentity/page](https://developer.apple.com/documentation/appintents/assistantschemas/wordprocessorentity/page)

# page

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The app entity describes a page in a text document.

## Declaration

```swift
var page: some AssistantSchemas.Entity { get }
```

<a id="Overview"></a>

## Overview

Use Swift macros that generate additional properties and add protocol conformance for your app entity implementation. The following example shows an app entity that conforms to the `.wordProcessor.page` schema:

```swift
@AppEntity(schema: .wordProcessor.page)
struct WordProcessorPageEntity: AppEntity {
    struct Query: EntityStringQuery {
        func entities(for identifiers: [WordProcessorPageEntity.ID]) async throws -> [WordProcessorPageEntity] { [] }
        func entities(matching string: String) async throws -> [WordProcessorPageEntity] { [] }
    }

    static var defaultQuery = Query()
    var displayRepresentation: DisplayRepresentation { "Text Document Page" }

    let id = UUID()

    @Property
    var document: WordProcessorDocumentEntity

    @Property
    var pageIndex: Int
}
```
