> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/font/monospaceddigit()](https://developer.apple.com/documentation/swiftui/font/monospaceddigit())

# monospacedDigit()

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a modified font that uses fixed-width digits, while leaving other characters proportionally spaced.

## Declaration

```swift
func monospacedDigit() -> Font
```

<a id="return-value"></a>

## Return Value

A font that uses fixed-width numeric characters.

<a id="discussion"></a>

## Discussion

This modifier only affects numeric characters, and leaves all other characters unchanged. If the base font doesn’t support fixed-width, or *monospace* digits, the font remains unchanged.

The following example shows two text fields arranged in a [VStack](../vstack.md). Both text fields specify the 12-point system font, with the second adding the `monospacedDigit()` modifier to the font. Because the text includes the digit 1, normally a narrow character in proportional fonts, the second text field becomes wider than the first.

```swift
@State private var userText = "Effect of monospacing digits: 111,111."

var body: some View {
    VStack {
        TextField("Proportional", text: $userText)
            .font(.system(size: 12))
        TextField("Monospaced", text: $userText)
            .font(.system(size: 12).monospacedDigit())
    }
    .padding()
    .navigationTitle(Text("Font + monospacedDigit()"))
}
```

![A macOS window showing two text fields arranged vertically. Each](https://developer.apple.com/images/com.apple.SwiftUI/Environment-Font-monospacedDigit-1@2x.png)

## See Also

### Styling a font

- [bold()](bold%28%29.md): Adds bold or emphasized styling to the font.
- [italic()](italic%28%29.md): Adds italics to the font.
- [monospaced()](monospaced%28%29.md): Returns a fixed-width font from the same family as the base font.
- [smallCaps()](smallcaps%28%29.md): Adjusts the font to enable all small capitals.
- [lowercaseSmallCaps()](lowercasesmallcaps%28%29.md): Adjusts the font to enable lowercase small capitals.
- [uppercaseSmallCaps()](uppercasesmallcaps%28%29.md): Adjusts the font to enable uppercase small capitals.
- [weight(\_:)](weight%28__%29.md): Sets the weight of the font.
- [width(\_:)](width%28__%29.md): Sets the width of the font.
- [Font.Width](width.md): A width to use for fonts that have multiple widths.
- [leading(\_:)](leading%28__%29.md): Adjusts the line spacing of a font.
- [Font.Leading](leading.md): A line spacing adjustment that you can apply to a font.
