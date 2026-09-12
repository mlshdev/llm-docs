> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilistcontentconfiguration-swift.struct/textproperties-swift.struct/texttransform](https://developer.apple.com/documentation/uikit/uilistcontentconfiguration-swift.struct/textproperties-swift.struct/texttransform)

# UIListContentConfiguration.TextProperties.TextTransform

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Constants that specify the transform to apply to the text.

## Declaration

```swift
enum TextTransform
```

## Topics

### Text transforms

- [UIListContentConfiguration.TextProperties.TextTransform.none](texttransform/none.md): The text doesn’t have a transform.
- [UIListContentConfiguration.TextProperties.TextTransform.capitalized](texttransform/capitalized.md): Displays the text with the first character capitalized.
- [UIListContentConfiguration.TextProperties.TextTransform.lowercase](texttransform/lowercase.md): Displays the text in all lowercase characters.
- [UIListContentConfiguration.TextProperties.TextTransform.uppercase](texttransform/uppercase.md): Displays the text in all uppercase characters.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Configuring text properties

- [font](font.md): The font for the text.
- [color](color.md): The color of the text.
- [colorTransformer](colortransformer.md): The color transformer for resolving the text color.
- [resolvedColor()](resolvedcolor%28%29.md): Generates the resolved color for the specified color, using the text color and color transformer.
- [alignment](alignment.md): The alignment for the text.
- [lineBreakMode](linebreakmode.md): The line break mode to use for the text.
- [numberOfLines](numberoflines.md): The maximum number of lines for the text.
- [adjustsFontSizeToFitWidth](adjustsfontsizetofitwidth.md): A Boolean value that determines whether the configuration automatically adjusts the font size of the text when necessary to fit in the available width.
- [minimumScaleFactor](minimumscalefactor.md): The smallest multiplier for the font size that the configuration uses to make the text fit.
- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that determines whether the configuration tightens the text before truncating.
- [adjustsFontForContentSizeCategory](adjustsfontforcontentsizecategory.md): A Boolean value that determines whether the configuration automatically updates the font when the content size category changes.
- [UIListContentConfiguration.TextProperties.TextAlignment](textalignment.md): Constants that specify the visual alignment of the text.
- [transform](transform.md): The transform to apply to the text.
- [showsExpansionTextWhenTruncated](showsexpansiontextwhentruncated.md): A Boolean value that determines whether the full text displays when the pointer hovers over the truncated text.
