> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilistcontentconfiguration-swift.struct/textproperties-swift.struct](https://developer.apple.com/documentation/uikit/uilistcontentconfiguration-swift.struct/textproperties-swift.struct)

# UIListContentConfiguration.TextProperties

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Properties that affect the list content configuration’s text.

## Declaration

```swift
struct TextProperties
```

## Topics

### Configuring text properties

- [font](textproperties-swift.struct/font.md): The font for the text.
- [color](textproperties-swift.struct/color.md): The color of the text.
- [colorTransformer](textproperties-swift.struct/colortransformer.md): The color transformer for resolving the text color.
- [resolvedColor()](textproperties-swift.struct/resolvedcolor%28%29.md): Generates the resolved color for the specified color, using the text color and color transformer.
- [alignment](textproperties-swift.struct/alignment.md): The alignment for the text.
- [lineBreakMode](textproperties-swift.struct/linebreakmode.md): The line break mode to use for the text.
- [numberOfLines](textproperties-swift.struct/numberoflines.md): The maximum number of lines for the text.
- [adjustsFontSizeToFitWidth](textproperties-swift.struct/adjustsfontsizetofitwidth.md): A Boolean value that determines whether the configuration automatically adjusts the font size of the text when necessary to fit in the available width.
- [minimumScaleFactor](textproperties-swift.struct/minimumscalefactor.md): The smallest multiplier for the font size that the configuration uses to make the text fit.
- [allowsDefaultTighteningForTruncation](textproperties-swift.struct/allowsdefaulttighteningfortruncation.md): A Boolean value that determines whether the configuration tightens the text before truncating.
- [adjustsFontForContentSizeCategory](textproperties-swift.struct/adjustsfontforcontentsizecategory.md): A Boolean value that determines whether the configuration automatically updates the font when the content size category changes.
- [UIListContentConfiguration.TextProperties.TextAlignment](textproperties-swift.struct/textalignment.md): Constants that specify the visual alignment of the text.
- [transform](textproperties-swift.struct/transform.md): The transform to apply to the text.
- [UIListContentConfiguration.TextProperties.TextTransform](textproperties-swift.struct/texttransform.md): Constants that specify the transform to apply to the text.
- [showsExpansionTextWhenTruncated](textproperties-swift.struct/showsexpansiontextwhentruncated.md): A Boolean value that determines whether the full text displays when the pointer hovers over the truncated text.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Customizing appearance

- [imageProperties](imageproperties-swift.property.md): Properties for configuring the image.
- [textProperties](textproperties-swift.property.md): Properties for configuring the primary text.
- [secondaryTextProperties](secondarytextproperties.md): Properties for configuring the secondary text.
- [UIListContentConfiguration.ImageProperties](imageproperties-swift.struct.md): Properties that affect the list content configuration’s image.
