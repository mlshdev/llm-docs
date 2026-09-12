> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/newdocumentbutton/init(_:contenttype:source:preparedocumenturl:)](https://developer.apple.com/documentation/swiftui/newdocumentbutton/init(_:contenttype:source:preparedocumenturl:))

# init(\_:contentType:source:prepareDocumentURL:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

Creates and opens new URL-based documents from a template picker.

## Declaration

```swift
nonisolated init(_ title: LocalizedStringKey, contentType: UTType, source: DocumentCreationSource, prepareDocumentURL: @escaping () async throws -> URL? = { nil })
```

## Parameters

- `title`: A title key for the button.
- `contentType`: The content type of the document to create.
- `source`: A source for the document creation flow. When a document is created, you can retrieve its source from [FileDocumentConfiguration](../filedocumentconfiguration.md) or [URLDocumentConfiguration](../urldocumentconfiguration.md).
- `prepareDocumentURL`: Called when the user taps the button.

## See Also

### Creating and opening a document with a creation source

- [init(\_:contentType:source:)](init%28__contenttype_source_%29.md): Conforms when `Label` is `Text`. Creates and opens new documents, tagging them with a creation source.
- [init(\_:contentType:source:\_:)](init%28__contenttype_source___%29.md): Conforms when `Label` is `Text`. Creates and opens new URL-based documents from a template picker.
