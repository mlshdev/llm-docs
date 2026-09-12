> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilistcontentconfiguration-swift.struct/textproperties-swift.struct/textalignment](https://developer.apple.com/documentation/uikit/uilistcontentconfiguration-swift.struct/textproperties-swift.struct/textalignment)

# UIListContentConfiguration.TextProperties.TextAlignment

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Constants that specify the visual alignment of the text.

## Declaration

```swift
enum TextAlignment
```

## Topics

### Text alignment

- [UIListContentConfiguration.TextProperties.TextAlignment.center](textalignment/center.md): The text has centered alignment.
- [UIListContentConfiguration.TextProperties.TextAlignment.justified](textalignment/justified.md): The text has justified alignment.
- [UIListContentConfiguration.TextProperties.TextAlignment.natural](textalignment/natural.md): The text uses the default alignment that the system associates with the current localization of the app.

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
- [transform](transform.md): The transform to apply to the text.
- [UIListContentConfiguration.TextProperties.TextTransform](texttransform.md): Constants that specify the transform to apply to the text.
- [showsExpansionTextWhenTruncated](showsexpansiontextwhentruncated.md): A Boolean value that determines whether the full text displays when the pointer hovers over the truncated text.
