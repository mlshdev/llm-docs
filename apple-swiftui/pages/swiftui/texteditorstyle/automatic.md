> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/texteditorstyle/automatic](https://developer.apple.com/documentation/swiftui/texteditorstyle/automatic)

# automatic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The default text editor style, based on the text editor’s context.

## Declaration

```swift
@MainActor @export(implementation) @preconcurrency static var automatic: AutomaticTextEditorStyle { get }
```

<a id="discussion"></a>

## Discussion

The default style represents the recommended style based on the current platform and the text editor’s context within the view hierarchy.

## See Also

### Getting built-in styles

- [plain](plain.md): Conforms when `Self` is `PlainTextEditorStyle`. A text editor style with no decoration.
- [roundedBorder](roundedborder.md): Conforms when `Self` is `RoundedBorderTextEditorStyle`. A text editor style with a system-defined rounded border.
