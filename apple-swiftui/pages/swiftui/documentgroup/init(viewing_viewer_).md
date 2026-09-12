> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/documentgroup/init(viewing:viewer:)](https://developer.apple.com/documentation/swiftui/documentgroup/init(viewing:viewer:))

# init(viewing:viewer:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Creates a document group capable of viewing file documents.

> Conform your type to ReadableDocument instead.

## Declaration

```swift
nonisolated init(viewing documentType: Document.Type, @ContentBuilder viewer: @escaping (FileDocumentConfiguration<Document>) -> Content)
```

## Parameters

- `documentType`: The type of document your app can view.
- `viewer`: The viewing UI for the provided document.

<a id="discussion"></a>

## Discussion

Use this method to create a document group that can view files of a specific type. The example below creates a new document viewer for `MyImageFormatDocument` and displays them with `MyImageFormatViewer`:

```swift
@main
struct MyApp: App {
    var body: some Scene {
        DocumentGroup(viewing: MyImageFormatDocument.self) { file in
            MyImageFormatViewer(image: file.document)
        }
    }
}
```

With the `viewing:` initializer, SwiftUI considers your app as a viewer for given content types (readable content types declared on the document type). No File \> New menu item is added on macOS, no New Document button appears in the iOS document browser, and the [isEditable](../filedocumentconfiguration/iseditable.md) property is `false`, preventing accidental writes. Use the [init(newDocument:editor:)](init%28newdocument_editor_%29.md) initializer instead if your app needs to create or edit documents.

You tell the system about the app’s role with respect to the document type by setting the [CFBundleTypeRole](https://developer.apple.com/documentation/bundleresources/information-property-list/cfbundledocumenttypes/cfbundletyperole) `Info.plist` key with a value of `Viewer`.

## See Also

### Deprecated

- [init(newDocument:editor:)](init%28newdocument_editor_%29.md): Deprecated. Conforms when `Document` conforms to `FileDocument` and `Content` conforms to `View`. Creates a document group for creating and editing file documents.
