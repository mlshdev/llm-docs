> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/text/tracking(_:)](https://developer.apple.com/documentation/swiftui/text/tracking(_:))

# tracking(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sets the tracking for the text.

## Declaration

```swift
nonisolated func tracking(_ tracking: CGFloat) -> Text
```

## Parameters

- `tracking`: The amount of additional space, in points, that the view should add to each character cluster after layout. Value of `0` sets the tracking to the system default value.

<a id="return-value"></a>

## Return Value

Text with the specified amount of tracking.

<a id="discussion"></a>

## Discussion

Tracking adds space, measured in points, between the characters in the text view. A positive value increases the spacing between characters, while a negative value brings the characters closer together.

```swift
VStack(alignment: .leading) {
    Text("ABCDEF").tracking(-3)
    Text("ABCDEF")
    Text("ABCDEF").tracking(3)
}
```

The code above uses an unusually large amount of tracking to make it easy to see the effect.

![Three text views showing character groups with progressively](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-Text-tracking@2x.png)

The effect of tracking resembles that of the [kerning(\_:)](kerning%28__%29.md) modifier, but adds or removes trailing whitespace, rather than changing character offsets. Also, using any nonzero amount of tracking disables nonessential ligatures, whereas kerning attempts to maintain ligatures.

> **Important**

> If you add both the [tracking(\_:)](tracking%28__%29.md) and [kerning(\_:)](kerning%28__%29.md) modifiers to a view, the view applies the tracking and ignores the kerning.

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
- [baselineOffset(\_:)](baselineoffset%28__%29.md): Sets the vertical offset for the text relative to its baseline.
- [Text.Case](case.md): A scheme for transforming the capitalization of characters within text.
- [Text.DateStyle](datestyle.md): A predefined style used to display a `Date`.
