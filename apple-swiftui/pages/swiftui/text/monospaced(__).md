> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/text/monospaced(_:)](https://developer.apple.com/documentation/swiftui/text/monospaced(_:))

# monospaced(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Modifies the font of the text to use the fixed-width variant of the current font, if possible.

## Declaration

```swift
nonisolated func monospaced(_ isActive: Bool = true) -> Text
```

## Parameters

- `isActive`: A Boolean value that indicates whether monospaced styling is added. Default value is `true`.

<a id="return-value"></a>

## Return Value

Monospaced text.

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
- [monospacedDigit()](monospaceddigit%28%29.md): Modifies the text view’s font to use fixed-width digits, while leaving other characters proportionally spaced.
- [kerning(\_:)](kerning%28__%29.md): Sets the spacing, or kerning, between characters.
- [tracking(\_:)](tracking%28__%29.md): Sets the tracking for the text.
- [baselineOffset(\_:)](baselineoffset%28__%29.md): Sets the vertical offset for the text relative to its baseline.
- [Text.Case](case.md): A scheme for transforming the capitalization of characters within text.
- [Text.DateStyle](datestyle.md): A predefined style used to display a `Date`.
