> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/linelimit(_:reservesspace:)](https://developer.apple.com/documentation/swiftui/view/linelimit(_:reservesspace:))

# lineLimit(\_:reservesSpace:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Sets a limit for the number of lines text can occupy in this view.

## Declaration

```swift
nonisolated func lineLimit(_ limit: Int, reservesSpace: Bool) -> some View

```

## Parameters

- `limit`: The line limit.
- `reservesSpace`: Whether text reserves space so that it always occupies the height required to display the specified number of lines.

<a id="discussion"></a>

## Discussion

Use this modifier to specify a limit to the lines that a [Text](../text.md) or a vertical [TextField](../textfield.md) may occupy. If passed a value of true for the `reservesSpace` parameter, and the text of such views occupies less space than the provided limit, that view expands to occupy the minimum number of lines. When the text occupies more space than the provided limit, a [Text](../text.md) view truncates its content while a [TextField](../textfield.md) becomes scrollable.

```swift
GroupBox {
    Text("Title")
        .font(.headline)
        .lineLimit(2, reservesSpace: true)
    Text("Subtitle")
        .font(.subheadline)
        .lineLimit(4, reservesSpace: true)
}
```

## See Also

### Limiting line count for multiline text

- [lineLimit(\_:)](linelimit%28__%29.md): Sets to a closed range the number of lines that text can occupy in this view.
- [lineLimit](../environmentvalues/linelimit.md): The maximum number of lines that text can occupy in a view.
