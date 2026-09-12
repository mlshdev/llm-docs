> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/newdocumentbutton/init(_:contenttype:source:)](https://developer.apple.com/documentation/swiftui/newdocumentbutton/init(_:contenttype:source:))

# init(\_:contentType:source:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

Creates and opens new documents, tagging them with a creation source.

## Declaration

```swift
nonisolated init(_ label: Text? = nil, contentType: UTType? = nil, source: DocumentCreationSource)
```

## Parameters

- `label`: A label for the button.
- `contentType`: An optional content type of the document to create. If not provided, the first content type of the first document type listed in the app definition is used.
- `source`: A source for the document creation flow. When a document is created, you can retrieve its source from [FileDocumentConfiguration](../filedocumentconfiguration.md) or [URLDocumentConfiguration](../urldocumentconfiguration.md).

<a id="discussion"></a>

## Discussion

```swift
extension DocumentCreationSource {
    static let brainstorming: Self =
        DocumentCreationSource(id: "brainstorming")
}

DocumentGroupLaunchScene("Meeting Minutes") {
    NewDocumentButton(Text("New meeting minutes…"))
    NewDocumentButton(
        Text("New brainstorming meeting…"),
        source: .brainstorming
    )
}
```

## See Also

### Creating and opening a document with a creation source

- [init(\_:contentType:source:\_:)](init%28__contenttype_source___%29.md): Conforms when `Label` is `Text`. Creates and opens new URL-based documents from a template picker.
- [init(\_:contentType:source:prepareDocumentURL:)](init%28__contenttype_source_preparedocumenturl_%29.md): Conforms when `Label` is `Text`. Creates and opens new URL-based documents from a template picker.
