> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/newdocument](https://developer.apple.com/documentation/swiftui/environmentvalues/newdocument)

# newDocument

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

An action in the environment that presents a new document.

## Declaration

```swift
var newDocument: NewDocumentAction { get }
```

<a id="discussion"></a>

## Discussion

Use the `newDocument` environment value to get the instance of the [NewDocumentAction](../newdocumentaction.md) structure for a given [Environment](../environment.md). Then call the instance to present a new document. You call the instance directly because it defines a [callAsFunction(\_:)](../newdocumentaction/callasfunction%28__%29.md) method that Swift calls when you call the instance.

For example, you can define a button that creates a new document from the selected text:

```swift
struct NewDocumentFromSelection: View {
    @FocusedBinding(\.selectedText) private var selectedText: String?
    @Environment(\.newDocument) private var newDocument

    var body: some View {
        Button("New Document With Selection") {
            newDocument(TextDocument(text: selectedText))
        }
        .disabled(selectedText?.isEmpty != false)
    }
}
```

The above example assumes that you define a `TextDocument` that conforms to the [FileDocument](../filedocument.md) or [ReferenceFileDocument](../referencefiledocument.md) protocol, and a [DocumentGroup](../documentgroup.md) that handles the associated file type.

## See Also

### Opening a document programmatically

- [openDocument](opendocument.md): An action in the environment that presents an existing document.
- [OpenDocumentAction](../opendocumentaction.md): An action that presents an existing document.
