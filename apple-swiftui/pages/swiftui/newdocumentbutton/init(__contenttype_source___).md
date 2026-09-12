> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/newdocumentbutton/init(_:contenttype:source:_:)](https://developer.apple.com/documentation/swiftui/newdocumentbutton/init(_:contenttype:source:_:))

# init(\_:contentType:source:\_:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

Creates and opens new URL-based documents from a template picker.

## Declaration

```swift
nonisolated init(_ label: Text? = nil, contentType: UTType, source: DocumentCreationSource, _ prepareDocumentURL: @escaping () async throws -> URL? = { nil })
```

## Parameters

- `label`: A label for the button.
- `contentType`: The content type of the document to create.
- `source`: A source for the document creation flow. When a document is created, you can retrieve its source from [FileDocumentConfiguration](../filedocumentconfiguration.md) or [URLDocumentConfiguration](../urldocumentconfiguration.md).
- `prepareDocumentURL`: Called when the user taps the button. Present a template picker or other UI, then return the URL of the prepared document, `nil` to request an empty document, or throw on cancellation.

<a id="discussion"></a>

## Discussion

```swift
NewDocumentButton(
    contentType: .text,
    source: .template
) {
    try await withCheckedThrowingContinuation { continuation in
        documentCreationContinuation = continuation
        showTemplatePicker = true
    }
}
```

## See Also

### Creating and opening a document with a creation source

- [init(\_:contentType:source:)](init%28__contenttype_source_%29.md): Conforms when `Label` is `Text`. Creates and opens new documents, tagging them with a creation source.
- [init(\_:contentType:source:prepareDocumentURL:)](init%28__contenttype_source_preparedocumenturl_%29.md): Conforms when `Label` is `Text`. Creates and opens new URL-based documents from a template picker.
