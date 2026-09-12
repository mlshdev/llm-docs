> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/font/leading(_:)](https://developer.apple.com/documentation/swiftui/font/leading(_:))

# leading(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Adjusts the line spacing of a font.

## Declaration

```swift
func leading(_ leading: Font.Leading) -> Font
```

## Parameters

- `leading`: The line spacing adjustment to apply.

<a id="return-value"></a>

## Return Value

A modified font that uses the specified line spacing, or the original font if it doesn’t support line spacing adjustments.

<a id="discussion"></a>

## Discussion

You can change a font’s line spacing while maintaining other characteristics of the font by applying this modifier. For example, you can decrease spacing of the [body](body.md) font by applying the [Font.Leading.tight](leading/tight.md) value to it:

```swift
let myFont = Font.body.leading(.tight)
```

The availability of leading adjustments depends on the font. For some fonts, the modifier has no effect and returns the original font.

## See Also

### Styling a font

- [bold()](bold%28%29.md): Adds bold or emphasized styling to the font.
- [italic()](italic%28%29.md): Adds italics to the font.
- [monospaced()](monospaced%28%29.md): Returns a fixed-width font from the same family as the base font.
- [monospacedDigit()](monospaceddigit%28%29.md): Returns a modified font that uses fixed-width digits, while leaving other characters proportionally spaced.
- [smallCaps()](smallcaps%28%29.md): Adjusts the font to enable all small capitals.
- [lowercaseSmallCaps()](lowercasesmallcaps%28%29.md): Adjusts the font to enable lowercase small capitals.
- [uppercaseSmallCaps()](uppercasesmallcaps%28%29.md): Adjusts the font to enable uppercase small capitals.
- [weight(\_:)](weight%28__%29.md): Sets the weight of the font.
- [width(\_:)](width%28__%29.md): Sets the width of the font.
- [Font.Width](width.md): A width to use for fonts that have multiple widths.
- [Font.Leading](leading.md): A line spacing adjustment that you can apply to a font.
