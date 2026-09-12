> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/text/baselineoffset(_:)](https://developer.apple.com/documentation/swiftui/text/baselineoffset(_:))

# baselineOffset(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sets the vertical offset for the text relative to its baseline.

## Declaration

```swift
nonisolated func baselineOffset(_ baselineOffset: CGFloat) -> Text
```

## Parameters

- `baselineOffset`: The amount to shift the text vertically (up or down) relative to its baseline.

<a id="return-value"></a>

## Return Value

Text that’s above or below its baseline.

<a id="discussion"></a>

## Discussion

Change the baseline offset to move the text in the view (in points) up or down relative to its baseline. The bounds of the view expand to contain the moved text.

```swift
HStack(alignment: .top) {
    Text("Hello")
        .baselineOffset(-10)
        .border(Color.red)
    Text("Hello")
        .border(Color.green)
    Text("Hello")
        .baselineOffset(10)
        .border(Color.blue)
}
.background(Color(white: 0.9))
```

By drawing a border around each text view, you can see how the text moves, and how that affects the view.

![Three text views, each with the word “Hello” outlined by a border and](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-Text-baselineOffset@2x.png)

The first view, with a negative offset, grows downward to handle the lowered text. The last view, with a positive offset, grows upward. The enclosing [HStack](../hstack.md) instance, shown in gray, ensures all the text views remain aligned at their top edge, regardless of the offset.

## See Also

### Styling the view’s text

- [foregroundStyle(\_:)](foregroundstyle%28__%29.md): Sets the style of the text displayed by this view.
- [bold()](bold%28%29.md): Applies a bold or emphasized treatment to the fonts of the text.
- [bold(\_:)](bold%28__%29.md): Applies a bold font weight to the text.
- [italic()](italic%28%29.md): Applies italics to the text.
- [italic(\_:)](italic%28__%29.md): Applies italics to the text.
- [strikethrough(\_:color:)](strikethrough%28__color_%29.md): Applies a strikethrough to the text.
- [strikethrough(\_:pattern:color:)](strikethrough%28__pattern_color_%29.md): Applies a strikethrough to the text.
- [underline(\_:color:)](underline%28__color_%29.md): Applies an underline to the text.
- [underline(\_:pattern:color:)](underline%28__pattern_color_%29.md): Applies an underline to the text.
- [monospaced(\_:)](monospaced%28__%29.md): Modifies the font of the text to use the fixed-width variant of the current font, if possible.
- [monospacedDigit()](monospaceddigit%28%29.md): Modifies the text view’s font to use fixed-width digits, while leaving other characters proportionally spaced.
- [kerning(\_:)](kerning%28__%29.md): Sets the spacing, or kerning, between characters.
- [tracking(\_:)](tracking%28__%29.md): Sets the tracking for the text.
- [Text.Case](case.md): A scheme for transforming the capitalization of characters within text.
- [Text.DateStyle](datestyle.md): A predefined style used to display a `Date`.
