> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/texteditorstyle/makebody(configuration:)](https://developer.apple.com/documentation/swiftui/texteditorstyle/makebody(configuration:))

# makeBody(configuration:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Creates a view that represents the body of a text editor.

## Declaration

```swift
@ContentBuilder @MainActor @preconcurrency func makeBody(configuration: Self.Configuration) -> Self.Body
```

## Parameters

- `configuration`: The properties of the text editor.

<a id="discussion"></a>

## Discussion

The system calls this method for each [TextEditor](../texteditor.md) instance in a view hierarchy where this style is the current text editor style.

## See Also

### Creating custom styles

- [TextEditorStyle.Configuration](configuration.md): The properties of a text editor.
- [Body](body.md): A view that represents the body of a text editor.
