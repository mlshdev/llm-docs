> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/font/system(_:design:weight:)](https://developer.apple.com/documentation/swiftui/font/system(_:design:weight:))

# system(\_:design:weight:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Gets a system font that uses the specified style, design, and weight.

## Declaration

```swift
static func system(_ style: Font.TextStyle, design: Font.Design? = nil, weight: Font.Weight? = nil) -> Font
```

<a id="discussion"></a>

## Discussion

Use this method to create a system font that has the specified properties. The following example creates a system font with the [Font.TextStyle.body](textstyle/body.md) text style, a [Font.Design.serif](design/serif.md) design, and a [bold](weight/bold.md) weight, and applies the font to a [Text](../text.md) view using the [font(\_:)](../view/font%28__%29.md) view modifier:

```swift
Text("Hello").font(.system(.body, design: .serif, weight: .bold))
```

The `design` and `weight` parameters are both optional. If you omit either, the system uses a default value for that parameter. The default values are typically [Font.Design.default](design/default.md) and [regular](weight/regular.md), respectively, but might vary depending on the context.

## See Also

### Getting system fonts

- [system(size:weight:design:)](system%28size_weight_design_%29-697b2.md): Specifies a system font to use, along with the style, weight, and any design parameters you want applied to the text.
- [Font.Design](design.md): A design to use for fonts.
- [Font.TextStyle](textstyle.md): A dynamic text style to use for fonts.
- [Font.Weight](weight.md): A weight to use for fonts.
