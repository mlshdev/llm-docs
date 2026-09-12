> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/linelimit(_:)](https://developer.apple.com/documentation/swiftui/view/linelimit(_:))

# lineLimit(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Sets to a closed range the number of lines that text can occupy in this view.

## Declaration

```swift
nonisolated func lineLimit(_ limit: ClosedRange<Int>) -> some View

```

## Parameters

- `limit`: The line limit.

<a id="discussion"></a>

## Discussion

Use this modifier to specify a closed range of lines that a [Text](../text.md) view or a vertical [TextField](../textfield.md) can occupy. When the text of such views occupies more space than the provided limit, a [Text](../text.md) view truncates its content while a [TextField](../textfield.md) becomes scrollable.

```swift
Form {
    TextField("Title", text: $model.title)
    TextField("Notes", text: $model.notes, axis: .vertical)
        .lineLimit(1...3)
}
```

## See Also

### Limiting line count for multiline text

- [lineLimit(\_:reservesSpace:)](linelimit%28__reservesspace_%29.md): Sets a limit for the number of lines text can occupy in this view.
- [lineLimit](../environmentvalues/linelimit.md): The maximum number of lines that text can occupy in a view.
