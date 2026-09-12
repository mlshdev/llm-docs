> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantschemas/readerintent/rotatedocuments](https://developer.apple.com/documentation/appintents/assistantschemas/readerintent/rotatedocuments)

# rotateDocuments

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The app intent conforms to the schema for rotating a document.

## Declaration

```swift
var rotateDocuments: some AssistantSchemas.Intent { get }
```

<a id="Overview"></a>

## Overview

Use Swift macros that generate additional properties and add protocol conformance for your app intent implementation. The following example shows an app intent that conforms to the `.reader.rotateDocuments` schema:

```swift
@AppIntent(schema: .reader.rotateDocuments)
struct ReaderRotateDocumentsIntent: AppIntent {
    @Parameter
    var documents: [ReaderDocumentEntity]

    @Parameter
    var isClockwise: Bool

    func perform() async throws -> some IntentResult & ReturnsValue<[ReaderDocumentEntity]> {
        return .result(value: [ReaderDocumentEntity()])
    }
}
```

For more information about the `.reader` app intent domain, see [Reader](../../app-schema-domain-reader.md). For general information about app intent domains, see [Making actions and content discoverable by Apple Intelligence](../../making-actions-and-content-discoverable-by-apple-intelligence.md).
