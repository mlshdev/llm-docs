> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/linespacing(_:)](https://developer.apple.com/documentation/swiftui/view/linespacing(_:))

# lineSpacing(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sets the amount of space between lines of text in this view.

## Declaration

```swift
nonisolated func lineSpacing(_ lineSpacing: CGFloat) -> some View

```

## Parameters

- `lineSpacing`: The amount of space between the bottom of one line and the top of the next line in points.

<a id="discussion"></a>

## Discussion

Use `lineSpacing(_:)` to set the amount of spacing from the bottom of one line to the top of the next for text elements in the view.

In the [Text](../text.md) view in the example below, 10 points separate the bottom of one line to the top of the next as the text field wraps inside this view. Applying `lineSpacing(_:)` to a view hierarchy applies the line spacing to all text elements contained in the view.

```swift
Text("This is a string in a TextField with 10 point spacing applied between the bottom of one line and the top of the next.")
    .frame(width: 200, height: 200, alignment: .leading)
    .lineSpacing(10)
```

![A screenshot showing the effects of setting line spacing on the text](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-view-lineSpacing@2x.png)

## See Also

### Formatting multiline text

- [lineSpacing](../environmentvalues/linespacing.md): The distance in points between the bottom of one line fragment and the top of the next.
- [multilineTextAlignment(\_:)](multilinetextalignment%28__%29.md): Sets the alignment of a text view that contains multiple lines of text.
- [multilineTextAlignment](../environmentvalues/multilinetextalignment.md): An environment value that indicates how a text view aligns its lines when the content wraps or contains newlines.
