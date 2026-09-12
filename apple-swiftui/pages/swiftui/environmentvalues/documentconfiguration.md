> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/documentconfiguration](https://developer.apple.com/documentation/swiftui/environmentvalues/documentconfiguration)

# documentConfiguration

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The configuration of a document in a [DocumentGroup](../documentgroup.md).

## Declaration

```swift
var documentConfiguration: DocumentConfiguration? { get }
```

<a id="discussion"></a>

## Discussion

The value is `nil` for views that are not enclosed in a [DocumentGroup](../documentgroup.md).

For example, if the app shows the document path in the footer of each document, it can get the URL from the environment:

```swift
struct ContentView: View {
    @Binding var document: TextDocument
    @Environment(\.documentConfiguration) private var configuration: DocumentConfiguration?

    var body: some View {
        …
        Label(
            configuration?.fileURL?.path ??
                "", systemImage: "folder.circle"
        )
    }
}
```

## See Also

### Accessing document configuration

- [DocumentConfiguration](../documentconfiguration.md): The configuration of a document in a [DocumentGroup](../documentgroup.md).
- [undoManager](undomanager.md): The undo manager used to register a view’s undo operations.
