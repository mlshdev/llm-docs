> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/text/bold()](https://developer.apple.com/documentation/swiftui/text/bold())

# bold()

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Applies a bold or emphasized treatment to the fonts of the text.

## Declaration

```swift
nonisolated func bold() -> Text
```

<a id="return-value"></a>

## Return Value

Bold or emphasized text.

## Mentioned In

- [Configuring views](../configuring-views.md)

<a id="discussion"></a>

## Discussion

For fonts created from text styles, it could mean applying emphasized styling, which does not necessarily mean the bold weight specifically, so this modifier is not to be confused with [fontWeight(\_:)](fontweight%28__%29.md).

For example:

```swift
Text("hello").font(.body).bold()
```

will most likely get you the emphasized version of body text style, which is often in [semibold](../font/weight/semibold.md) weight. While

```swift
Text("hello").font(.body).fontWeight(.bold)
```

will specifically get you the body text style font in the [bold](../font/weight/bold.md) weight.

## See Also

### Styling the view’s text

- [foregroundStyle(\_:)](foregroundstyle%28__%29.md): Sets the style of the text displayed by this view.
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
- [baselineOffset(\_:)](baselineoffset%28__%29.md): Sets the vertical offset for the text relative to its baseline.
- [Text.Case](case.md): A scheme for transforming the capitalization of characters within text.
- [Text.DateStyle](datestyle.md): A predefined style used to display a `Date`.
