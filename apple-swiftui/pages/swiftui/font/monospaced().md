> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/font/monospaced()](https://developer.apple.com/documentation/swiftui/font/monospaced())

# monospaced()

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a fixed-width font from the same family as the base font.

## Declaration

```swift
func monospaced() -> Font
```

<a id="return-value"></a>

## Return Value

A fixed-width font from the same family as the base font, if one is available, and a default fixed-width font otherwise.

<a id="discussion"></a>

## Discussion

If there’s no suitable font face in the same family, SwiftUI returns a default fixed-width font.

The following example adds the `monospaced()` modifier to the default system font, then applies this font to a [Text](../text.md) view:

```swift
struct ContentView: View {
    let myFont = Font
        .system(size: 24)
        .monospaced()

    var body: some View {
        Text("Hello, world!")
            .font(myFont)
            .padding()
            .navigationTitle("Monospaced")
    }
}
```

![A macOS window showing the text Hello, world in a 24-point](https://developer.apple.com/images/com.apple.SwiftUI/Environment-Font-monospaced-1@2x.png)

SwiftUI may provide different fixed-width replacements for standard user interface fonts (such as [title](title.md), or a system font created with [system(\_:design:)](system%28__design_%29.md)) than for those same fonts when created by name with [custom(\_:size:)](custom%28__size_%29.md).

The [font(\_:)](../view/font%28__%29.md) modifier applies the font to all text within the view. To mix fixed-width text with other styles in the same `Text` view, use the [init(\_:)](https://developer.apple.com/documentation/swiftui/text/init%28_:%29-1a4oh) initializer to use an appropropriately-styled [AttributedString](https://developer.apple.com/documentation/foundation/attributedstring) for the text view’s content. You can use the [init(markdown:options:baseURL:)](https://developer.apple.com/documentation/foundation/attributedstring/init%28markdown:options:baseurl:%29-52n3u) initializer to provide a Markdown-formatted string containing the backtick-syntax (\`…\`) to apply code voice to specific ranges of the attributed string.

## See Also

### Styling a font

- [bold()](bold%28%29.md): Adds bold or emphasized styling to the font.
- [italic()](italic%28%29.md): Adds italics to the font.
- [monospacedDigit()](monospaceddigit%28%29.md): Returns a modified font that uses fixed-width digits, while leaving other characters proportionally spaced.
- [smallCaps()](smallcaps%28%29.md): Adjusts the font to enable all small capitals.
- [lowercaseSmallCaps()](lowercasesmallcaps%28%29.md): Adjusts the font to enable lowercase small capitals.
- [uppercaseSmallCaps()](uppercasesmallcaps%28%29.md): Adjusts the font to enable uppercase small capitals.
- [weight(\_:)](weight%28__%29.md): Sets the weight of the font.
- [width(\_:)](width%28__%29.md): Sets the width of the font.
- [Font.Width](width.md): A width to use for fonts that have multiple widths.
- [leading(\_:)](leading%28__%29.md): Adjusts the line spacing of a font.
- [Font.Leading](leading.md): A line spacing adjustment that you can apply to a font.
