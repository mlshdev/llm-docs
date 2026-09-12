> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/newdocumentbutton/init(_:for:contenttype:preparedocument:)](https://developer.apple.com/documentation/swiftui/newdocumentbutton/init(_:for:contenttype:preparedocument:))

# init(\_:for:contentType:prepareDocument:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 18.0+ (deprecated in 27.0) · iPadOS 18.0+ (deprecated in 27.0) · Mac Catalyst 18.0+ (deprecated in 27.0) · macOS 15.0+ (deprecated in 27.0) · visionOS 2.0+ (deprecated in 27.0)

> Conform your document type to ReadableDocument instead.

## Declaration

```swift
@export(implementation) nonisolated init<D>(_ title: LocalizedStringResource, for documentType: D.Type = D.self, contentType: UTType? = nil, prepareDocument: @escaping () async throws -> D? = { nil }) where D : FileDocument
```

## Parameters

- `title`: A title resource for the button.
- `documentType`: A type of the document to create.
- `contentType`: An optional content type of the document to create.
- `prepareDocument`: A closure is called when a user presses the button. At this point, you can present a document template picker or another UI that allows users to choose a theme, configuration, or a template to create a document from. Return a prepared document, or throw an error if document creation failed. Return `nil` to request creation of an empty document.
