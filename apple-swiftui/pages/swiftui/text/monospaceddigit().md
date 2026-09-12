> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/text/monospaceddigit()](https://developer.apple.com/documentation/swiftui/text/monospaceddigit())

# monospacedDigit()

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the text view’s font to use fixed-width digits, while leaving other characters proportionally spaced.

## Declaration

```swift
nonisolated func monospacedDigit() -> Text
```

<a id="return-value"></a>

## Return Value

A text view with a modified font that uses fixed-width numeric characters, while leaving other characters proportionally spaced.

<a id="discussion"></a>

## Discussion

This modifier only affects numeric characters, and leaves all other characters unchanged.

The following example shows the effect of `monospacedDigit()` on a text view. It arranges two text views in a [VStack](../vstack.md), each displaying a formatted date that contains many instances of the character 1. The second text view uses the `monospacedDigit()`. Because 1 is usually a narrow character in proportional fonts, applying the modifier widens all of the 1s, and the text view as a whole. The non-digit characters in the text view remain unaffected.

```swift
let myDate = DateComponents(
    calendar: Calendar(identifier: .gregorian),
    timeZone: TimeZone(identifier: "EST"),
    year: 2011,
    month: 1,
    day: 11,
    hour: 11,
    minute: 11
).date!

var body: some View {
    VStack(alignment: .leading) {
        Text(myDate.formatted(date: .long, time: .complete))
            .font(.system(size: 20))
        Text(myDate.formatted(date: .long, time: .complete))
            .font(.system(size: 20))
            .monospacedDigit()
    }
    .padding()
    .navigationTitle("monospacedDigit() Modifier")
}
```

![Two vertically stacked text views, displaying the date January 11,](https://developer.apple.com/images/com.apple.SwiftUI/Text-monospacedDigit-1@2x.png)

If the base font of the text view doesn’t support fixed-width digits, the font remains unchanged.

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
- [kerning(\_:)](kerning%28__%29.md): Sets the spacing, or kerning, between characters.
- [tracking(\_:)](tracking%28__%29.md): Sets the tracking for the text.
- [baselineOffset(\_:)](baselineoffset%28__%29.md): Sets the vertical offset for the text relative to its baseline.
- [Text.Case](case.md): A scheme for transforming the capitalization of characters within text.
- [Text.DateStyle](datestyle.md): A predefined style used to display a `Date`.
