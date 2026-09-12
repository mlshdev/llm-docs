> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/opendocument](https://developer.apple.com/documentation/swiftui/environmentvalues/opendocument)

# openDocument

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

An action in the environment that presents an existing document.

## Declaration

```swift
var openDocument: OpenDocumentAction { get }
```

<a id="discussion"></a>

## Discussion

Use the `openDocument` environment value to get the instance of the [OpenDocumentAction](../opendocumentaction.md) structure for a given [Environment](../environment.md). Then call the instance to present an existing document. You call the instance directly because it defines a [callAsFunction(at:)](../opendocumentaction/callasfunction%28at_%29.md) method that Swift calls when you call the instance.

For example, you can create a button that opens the document at the specified URL:

```swift
struct OpenDocumentButton: View {
    var url: URL
    @Environment(\.openDocument) private var openDocument

    var body: some View {
        Button(url.deletingPathExtension().lastPathComponent) {
            Task {
                do {
                    try await openDocument(at: url)
                } catch {
                    // Handle error
                }
            }
        }
    }
}
```

The above example uses a `do-catch` statement to handle any errors that the open document action might throw. It also places the action inside a task and awaits the result because the action operates asynchronously.

To present an existing document, your app must define a [DocumentGroup](../documentgroup.md) that handles the content type of the specified file. For a document that’s already open, the system brings the existing window to the front. Otherwise, the system opens a new window.

## See Also

### Opening a document programmatically

- [newDocument](newdocument.md): An action in the environment that presents a new document.
- [OpenDocumentAction](../opendocumentaction.md): An action that presents an existing document.
