> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontentunavailabletextproperties](https://developer.apple.com/documentation/uikit/uicontentunavailabletextproperties)

# UIContentUnavailableTextProperties

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Properties configuring the appearance of text in a content-unavailable view.

## Declaration

```objectivec
@interface UIContentUnavailableTextProperties : NSObject
```

## Topics

### Instance Properties

- [adjustsFontSizeToFitWidth](uicontentunavailabletextproperties/adjustsfontsizetofitwidth.md): A Boolean value indicating whether the view modifies the font size of the text to fit the available width.
- [allowsDefaultTighteningForTruncation](uicontentunavailabletextproperties/allowsdefaulttighteningfortruncation.md): A Boolean value that determines whether the view tightens text before truncating.
- [color](uicontentunavailabletextproperties/color.md): The color of the text.
- [font](uicontentunavailabletextproperties/font.md): The font of the text.
- [lineBreakMode](uicontentunavailabletextproperties/linebreakmode.md): The technique for wrapping and truncating the text.
- [minimumScaleFactor](uicontentunavailabletextproperties/minimumscalefactor.md): The minimum scale factor for the text.
- [numberOfLines](uicontentunavailabletextproperties/numberoflines.md): The maximum number of lines for the text.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Unavailable content configurations

- [UIContentUnavailableConfiguration](uicontentunavailableconfiguration-c.class.md): A content configuration for a content-unavailable view.
- [UIContentUnavailableConfigurationState](uicontentunavailableconfigurationstate-c.class.md): An object that encapsulates state for a content-unavailable view.
- [UIContentUnavailableButtonProperties](uicontentunavailablebuttonproperties.md): Properties configuring the appearance and behavior of a button in a content-unavailable view.
- [UIContentUnavailableImageProperties](uicontentunavailableimageproperties.md): Properties configuring the appearance of images in a content-unavailable view.
- [UIContentUnavailableAlignment](uicontentunavailablealignment.md): Defines the alignment of views in a content-unavailable view.
