> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplatemodularlargestandardbody](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatemodularlargestandardbody)

# CLKComplicationTemplateModularLargeStandardBody (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying a header row and two lines of text.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateModularLargeStandardBody
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.modularLarge](clkcomplicationfamily/modularlarge.md) family.

![A diagram showing the layout of the modular large standard body complication. The diagram shows the header row, two lines of text, and an optional header image.](https://developer.apple.com/images/com.apple.clockkit/media-2933747@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as `@2x` images for display on Apple Watch, so the point-based dimensions are half the listed size. The width of the image must be between the specified minimum and maximum (inclusive).

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 38 mm | 22 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 64 pixels maximum | 22 pixels |
| 40 mm | 24 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 74 pixels maximum | 24 pixels |
| 41 mm | 25 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 78 pixels maximum | 25 pixels |
| 42 mm | 24 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 74 pixels maximum | 24 pixels |
| 44 mm | 28 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 84 pixels maximum | 28 pixels |
| 45 mm | 29 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 88 pixels maximum | 29 pixels |

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Manage Assets`.

## Topics

### Creating the Template

- [init(headerTextProvider:body1TextProvider:)](clkcomplicationtemplatemodularlargestandardbody/init%28headertextprovider_body1textprovider_%29.md): Deprecated. Creates a new template that has a row of header text and a row of body text.
- [init(headerTextProvider:body1TextProvider:body2TextProvider:)](clkcomplicationtemplatemodularlargestandardbody/init%28headertextprovider_body1textprovider_body2textprovider_%29.md): Deprecated. Creates a new template that has a row of header text and two rows of body text.
- [init(headerImageProvider:headerTextProvider:body1TextProvider:)](clkcomplicationtemplatemodularlargestandardbody/init%28headerimageprovider_headertextprovider_body1textprovider_%29.md): Deprecated. Creates a new template that has a header row with an image and text, and a row of body text.
- [init(headerImageProvider:headerTextProvider:body1TextProvider:body2TextProvider:)](clkcomplicationtemplatemodularlargestandardbody/init%28headerimageprovider_headertextprovider_body1textprovider_body2textprovider_%29.md): Deprecated. Creates a new template that has a header row with an image and text, and two rows of body text.

### Setting the Complication Data

- [headerImageProvider](clkcomplicationtemplatemodularlargestandardbody/headerimageprovider.md): Deprecated. An optional image to display in the header.
- [headerTextProvider](clkcomplicationtemplatemodularlargestandardbody/headertextprovider.md): Deprecated. The text to display in the header line.
- [body1TextProvider](clkcomplicationtemplatemodularlargestandardbody/body1textprovider.md): Deprecated. The top line of body text.
- [body2TextProvider](clkcomplicationtemplatemodularlargestandardbody/body2textprovider.md): Deprecated. An optional second line of body text.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Body templates

- [CLKComplicationTemplateModularLargeTallBody](clkcomplicationtemplatemodularlargetallbody.md): Deprecated. A template for displaying a header row and row of tall body text.

# CLKComplicationTemplateModularLargeStandardBody (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying a header row and two lines of text.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateModularLargeStandardBody : CLKComplicationTemplate
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyModularLarge](clkcomplicationfamily/modularlarge.md) family.

![A diagram showing the layout of the modular large standard body complication. The diagram shows the header row, two lines of text, and an optional header image.](https://developer.apple.com/images/com.apple.clockkit/media-2933747@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as `@2x` images for display on Apple Watch, so the point-based dimensions are half the listed size. The width of the image must be between the specified minimum and maximum (inclusive).

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 38 mm | 22 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 64 pixels maximum | 22 pixels |
| 40 mm | 24 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 74 pixels maximum | 24 pixels |
| 41 mm | 25 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 78 pixels maximum | 25 pixels |
| 42 mm | 24 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 74 pixels maximum | 24 pixels |
| 44 mm | 28 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 84 pixels maximum | 28 pixels |
| 45 mm | 29 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 88 pixels maximum | 29 pixels |

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Manage Assets`.

## Topics

### Creating the Template

- [initWithHeaderTextProvider:body1TextProvider:](clkcomplicationtemplatemodularlargestandardbody/init%28headertextprovider_body1textprovider_%29.md): Deprecated. Creates a new template that has a row of header text and a row of body text.
- [initWithHeaderTextProvider:body1TextProvider:body2TextProvider:](clkcomplicationtemplatemodularlargestandardbody/init%28headertextprovider_body1textprovider_body2textprovider_%29.md): Deprecated. Creates a new template that has a row of header text and two rows of body text.
- [initWithHeaderImageProvider:headerTextProvider:body1TextProvider:](clkcomplicationtemplatemodularlargestandardbody/init%28headerimageprovider_headertextprovider_body1textprovider_%29.md): Deprecated. Creates a new template that has a header row with an image and text, and a row of body text.
- [initWithHeaderImageProvider:headerTextProvider:body1TextProvider:body2TextProvider:](clkcomplicationtemplatemodularlargestandardbody/init%28headerimageprovider_headertextprovider_body1textprovider_body2textprovider_%29.md): Deprecated. Creates a new template that has a header row with an image and text, and two rows of body text.
- [templateWithHeaderTextProvider:body1TextProvider:](clkcomplicationtemplatemodularlargestandardbody/templatewithheadertextprovider_body1textprovider_.md): Deprecated. Returns a new template that has a row of header text and a row of body text.
- [templateWithHeaderTextProvider:body1TextProvider:body2TextProvider:](clkcomplicationtemplatemodularlargestandardbody/templatewithheadertextprovider_body1textprovider_body2textprovider_.md): Deprecated. Returns a new template that has a row of header text and two rows of body text.
- [templateWithHeaderImageProvider:headerTextProvider:body1TextProvider:](clkcomplicationtemplatemodularlargestandardbody/templatewithheaderimageprovider_headertextprovider_body1textprovider_.md): Deprecated. Returns a new template that has a header row with an image and text, and a row of body text.
- [templateWithHeaderImageProvider:headerTextProvider:body1TextProvider:body2TextProvider:](clkcomplicationtemplatemodularlargestandardbody/templatewithheaderimageprovider_headertextprovider_body1textprovider_body2textprovider_.md): Deprecated. Returns a new template that has a header row with an image and text, and two rows of body text.

### Setting the Complication Data

- [headerImageProvider](clkcomplicationtemplatemodularlargestandardbody/headerimageprovider.md): Deprecated. An optional image to display in the header.
- [headerTextProvider](clkcomplicationtemplatemodularlargestandardbody/headertextprovider.md): Deprecated. The text to display in the header line.
- [body1TextProvider](clkcomplicationtemplatemodularlargestandardbody/body1textprovider.md): Deprecated. The top line of body text.
- [body2TextProvider](clkcomplicationtemplatemodularlargestandardbody/body2textprovider.md): Deprecated. An optional second line of body text.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

## See Also

### Body templates

- [CLKComplicationTemplateModularLargeTallBody](clkcomplicationtemplatemodularlargetallbody.md): Deprecated. A template for displaying a header row and row of tall body text.
