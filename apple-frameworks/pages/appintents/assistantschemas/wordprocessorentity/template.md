> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantschemas/wordprocessorentity/template](https://developer.apple.com/documentation/appintents/assistantschemas/wordprocessorentity/template)

# template

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The app entity describes a text document template.

## Declaration

```swift
var template: some AssistantSchemas.Entity { get }
```

<a id="Overview"></a>

## Overview

Use Swift macros that generate additional properties and add protocol conformance for your app entity implementation. The following example shows an app entity that conforms to the `.wordProcessor.template` schema:

```swift
@AppEntity(schema: .wordProcessor.template)
struct WordProcessorDocumentTemplateEntity: AppEntity {
    struct Query: EntityStringQuery {
        func entities(for identifiers: [WordProcessorDocumentTemplateEntity.ID]) async throws -> [WordProcessorDocumentTemplateEntity] { [] }
        func entities(matching string: String) async throws -> [WordProcessorDocumentTemplateEntity] { [] }
    }

    static var defaultQuery = Query()
    var displayRepresentation: DisplayRepresentation { "Text Document Template" }

    let id = UUID()

    @Property
    var name: String
}
```
