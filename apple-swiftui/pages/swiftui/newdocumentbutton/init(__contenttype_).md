> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/newdocumentbutton/init(_:contenttype:)](https://developer.apple.com/documentation/swiftui/newdocumentbutton/init(_:contenttype:))

# init(\_:contentType:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Creates and opens new documents.

## Declaration

```swift
@export(implementation) nonisolated init(_ title: LocalizedStringResource, contentType: UTType? = nil)
```

## Parameters

- `title`: A title resource to use as the button title.
- `contentType`: An optional content type of the document to create.

## See Also

### Creating and opening a document

- [init(\_:contentType:prepareDocumentURL:)](init%28__contenttype_preparedocumenturl_%29.md): Conforms when `Label` is `Text`. Creates and opens new documents.
