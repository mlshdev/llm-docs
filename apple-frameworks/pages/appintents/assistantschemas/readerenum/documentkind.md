> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantschemas/readerenum/documentkind](https://developer.apple.com/documentation/appintents/assistantschemas/readerenum/documentkind)

# documentKind

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The file type for a document.

## Declaration

```swift
var documentKind: some AssistantSchemas.Enum { get }
```

<a id="Overview"></a>

## Overview

Use Swift macros that generate additional properties and add protocol conformance for your app enum implementation. The following example shows an app enum that conforms to the `.reader.documentKind` schema:

```swift
@AppEnum(schema: .reader.documentKind)
enum ReaderDocumentKind: AppEnum, Codable {
    case image
    case pdf

    static var caseDisplayRepresentations: [Self: DisplayRepresentation] {
        [
            .image: .init(title: "Image", image: .init(systemName: "photo")),
            .pdf: .init(title: "PDF", image: .init(systemName: "doc.text")),
        ]
    }
}
```

For more information about the `.reader` app intent domain, see [Reader](../../app-schema-domain-reader.md). For general information about app intent domains, see [Making actions and content discoverable by Apple Intelligence](../../making-actions-and-content-discoverable-by-apple-intelligence.md).
