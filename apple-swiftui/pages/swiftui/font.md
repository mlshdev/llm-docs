> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/font](https://developer.apple.com/documentation/swiftui/font)

# Font

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An environment-dependent font.

## Declaration

```swift
@frozen struct Font
```

<a id="overview"></a>

## Overview

The system resolves a font’s value at the time it uses the font in a given environment because [Font](font.md) is a late-binding token.

## Topics

### Getting standard fonts

- [extraLargeTitle2](font/extralargetitle2.md): Create a font with the second level extra large title text style.
- [extraLargeTitle](font/extralargetitle.md): Create a font with the extra large title text style.
- [largeTitle](font/largetitle.md): A font with the large title text style.
- [title](font/title.md): A font with the title text style.
- [title2](font/title2.md): Create a font for second level hierarchical headings.
- [title3](font/title3.md): Create a font for third level hierarchical headings.
- [headline](font/headline.md): A font with the headline text style.
- [subheadline](font/subheadline.md): A font with the subheadline text style.
- [body](font/body.md): A font with the body text style.
- [callout](font/callout.md): A font with the callout text style.
- [caption](font/caption.md): A font with the caption text style.
- [caption2](font/caption2.md): Create a font with the alternate caption text style.
- [footnote](font/footnote.md): A font with the footnote text style.

### Getting system fonts

- [system(\_:design:weight:)](font/system%28__design_weight_%29.md): Gets a system font that uses the specified style, design, and weight.
- [system(size:weight:design:)](font/system%28size_weight_design_%29-697b2.md): Specifies a system font to use, along with the style, weight, and any design parameters you want applied to the text.
- [Font.Design](font/design.md): A design to use for fonts.
- [Font.TextStyle](font/textstyle.md): A dynamic text style to use for fonts.
- [Font.Weight](font/weight.md): A weight to use for fonts.

### Creating custom fonts

- [custom(\_:fixedSize:)](font/custom%28__fixedsize_%29.md): Create a custom font with the given `name` and a fixed `size` that does not scale with Dynamic Type.
- [custom(\_:size:relativeTo:)](font/custom%28__size_relativeto_%29.md): Create a custom font with the given `name` and `size` that scales relative to the given `textStyle`.
- [custom(\_:size:)](font/custom%28__size_%29.md): Create a custom font with the given `name` and `size` that scales with the body text style.

### Getting a font from another font

- [init(\_:)](font/init%28__%29.md): Creates a custom font from a platform font instance.

### Styling a font

- [bold()](font/bold%28%29.md): Adds bold or emphasized styling to the font.
- [italic()](font/italic%28%29.md): Adds italics to the font.
- [monospaced()](font/monospaced%28%29.md): Returns a fixed-width font from the same family as the base font.
- [monospacedDigit()](font/monospaceddigit%28%29.md): Returns a modified font that uses fixed-width digits, while leaving other characters proportionally spaced.
- [smallCaps()](font/smallcaps%28%29.md): Adjusts the font to enable all small capitals.
- [lowercaseSmallCaps()](font/lowercasesmallcaps%28%29.md): Adjusts the font to enable lowercase small capitals.
- [uppercaseSmallCaps()](font/uppercasesmallcaps%28%29.md): Adjusts the font to enable uppercase small capitals.
- [weight(\_:)](font/weight%28__%29.md): Sets the weight of the font.
- [width(\_:)](font/width%28__%29.md): Sets the width of the font.
- [Font.Width](font/width.md): A width to use for fonts that have multiple widths.
- [leading(\_:)](font/leading%28__%29.md): Adjusts the line spacing of a font.
- [Font.Leading](font/leading.md): A line spacing adjustment that you can apply to a font.

### Deprecated symbols

- [system(\_:design:)](font/system%28__design_%29.md): Deprecated. Gets a system font with the given text style and design.
- [system(size:weight:design:)](font/system%28size_weight_design_%29-73a88.md): Deprecated. Specifies a system font to use, along with the style, weight, and any design parameters you want applied to the text.

### Structures

- [Font.Context](font/context.md): Information used to resolve a font.
- [Font.Resolved](font/resolved.md): A concrete font value.

### Instance Methods

- [bold(\_:)](font/bold%28__%29.md): Adds or removes bold or emphasized styling on the font.
- [italic(\_:)](font/italic%28__%29.md): Adds/removes italics on the font.
- [lowercaseSmallCaps(\_:)](font/lowercasesmallcaps%28__%29.md): Adjusts the font to enable/disable lowercase small capitals.
- [monospaced(\_:)](font/monospaced%28__%29.md): Returns a font adding or removing fixed-width design from the same family as the base font.
- [pointSize(\_:)](font/pointsize%28__%29.md): Sets the point size of the font explicitly.
- [resolve(in:)](font/resolve%28in_%29.md): Evaluates this font to a resolved font given the current context.
- [scaled(by:)](font/scaled%28by_%29.md): Scales the point size of the font.
- [smallCaps(\_:)](font/smallcaps%28__%29.md): Adjusts the font to enable/disable all small capitals.
- [uppercaseSmallCaps(\_:)](font/uppercasesmallcaps%28__%29.md): Adjusts the font to enable/disable uppercase small capitals.

### Type Properties

- [default](font/default.md): The effective SwiftUI font used in any given environment.

### Type Methods

- [system(size:weight:design:)](font/system%28size_weight_design_%29.md): Specifies a system font to use, along with the style, weight, and any design parameters you want applied to the text.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting a font

- [Applying custom fonts to text](applying-custom-fonts-to-text.md): Add and use a font in your app that scales with Dynamic Type.
- [font(\_:)](view/font%28__%29.md): Sets the default font for text in this view.
- [fontDesign(\_:)](view/fontdesign%28__%29.md): Sets the font design of the text in this view.
- [fontWeight(\_:)](view/fontweight%28__%29.md): Sets the font weight of the text in this view.
- [fontWidth(\_:)](view/fontwidth%28__%29.md): Sets the font width of the text in this view.
- [font](environmentvalues/font.md): The default font of this environment.
