> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/text/kerning(_:)](https://developer.apple.com/documentation/swiftui/text/kerning(_:))

# kerning(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sets the spacing, or kerning, between characters.

## Declaration

```swift
nonisolated func kerning(_ kerning: CGFloat) -> Text
```

## Parameters

- `kerning`: The spacing to use between individual characters in this text. Value of `0` sets the kerning to the system default value.

<a id="return-value"></a>

## Return Value

Text with the specified amount of kerning.

<a id="discussion"></a>

## Discussion

Kerning defines the offset, in points, that a text view should shift characters from the default spacing. Use positive kerning to widen the spacing between characters. Use negative kerning to tighten the spacing between characters.

```swift
VStack(alignment: .leading) {
    Text("ABCDEF").kerning(-3)
    Text("ABCDEF")
    Text("ABCDEF").kerning(3)
}
```

The last character in the first case, which uses negative kerning, experiences cropping because the kerning affects the trailing edge of the text view as well.

![Three text views showing character groups, with progressively](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-Text-kerning-1@2x.png)

Kerning attempts to maintain ligatures. For example, the Hoefler Text font uses a ligature for the letter combination *ffl*, as in the word *raffle*, shown here with a small negative and a small positive kerning:

![Two text views showing the word raffle in the Hoefler Text font, the](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-Text-kerning-2@2x.png)

The *ffl* letter combination keeps a constant shape as the other letters move together or apart. Beyond a certain point in either direction, however, kerning does disable nonessential ligatures.

![Two text views showing the word raffle in the Hoefler Text font, the](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-Text-kerning-3@2x.png)

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
- [tracking(\_:)](tracking%28__%29.md): Sets the tracking for the text.
- [baselineOffset(\_:)](baselineoffset%28__%29.md): Sets the vertical offset for the text relative to its baseline.
- [Text.Case](case.md): A scheme for transforming the capitalization of characters within text.
- [Text.DateStyle](datestyle.md): A predefined style used to display a `Date`.
