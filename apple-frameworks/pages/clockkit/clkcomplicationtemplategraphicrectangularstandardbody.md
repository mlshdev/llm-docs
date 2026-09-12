> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicrectangularstandardbody](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicrectangularstandardbody)

# CLKComplicationTemplateGraphicRectangularStandardBody (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A template for displaying a large rectangle containing text.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateGraphicRectangularStandardBody
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicRectangular](clkcomplicationfamily/graphicrectangular.md) family. [Figure 1](clkcomplicationtemplategraphicrectangularstandardbody.md#3030705) shows the layout of the image and where the template might appear on the clock face.

![Diagram showing the layout of header text and two rows of body text.](https://developer.apple.com/images/com.apple.clockkit/media-3030705@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as @2x images for display on Apple Watch, so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 24 pixels | 24 pixels |
| 41 mm | 25 pixels | 25 pixels |
| 44 mm | 27 pixels | 27 pixels |
| 45 mm | 29 pixels | 29 pixels |

This template supports full-color images.

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Supporting Multiple Watch Sizes`.

## Topics

### Creating the Template

- [init(headerTextProvider:body1TextProvider:)](clkcomplicationtemplategraphicrectangularstandardbody/init%28headertextprovider_body1textprovider_%29.md): Deprecated. Creates a new template that has a row of header text and a row of body text.
- [init(headerTextProvider:body1TextProvider:body2TextProvider:)](clkcomplicationtemplategraphicrectangularstandardbody/init%28headertextprovider_body1textprovider_body2textprovider_%29.md): Deprecated. Creates a new template that has a row of header text and two rows of body text.
- [init(headerImageProvider:headerTextProvider:body1TextProvider:)](clkcomplicationtemplategraphicrectangularstandardbody/init%28headerimageprovider_headertextprovider_body1textprovider_%29.md): Deprecated. Creates a new template that has a header row with an image and text, and a row of body text.
- [init(headerImageProvider:headerTextProvider:body1TextProvider:body2TextProvider:)](clkcomplicationtemplategraphicrectangularstandardbody/init%28headerimageprovider_headertextprovider_body1textprovider_body2textprovider_%29.md): Deprecated. Creates a new template that has a header row with an image and text, and two rows of body text.

### Setting the Complication Data

- [headerTextProvider](clkcomplicationtemplategraphicrectangularstandardbody/headertextprovider.md): Deprecated. The header text to display in the complication.
- [headerImageProvider](clkcomplicationtemplategraphicrectangularstandardbody/headerimageprovider.md): Deprecated. The header image to display.
- [body1TextProvider](clkcomplicationtemplategraphicrectangularstandardbody/body1textprovider.md): Deprecated. The main body text to display in the complication.
- [body2TextProvider](clkcomplicationtemplategraphicrectangularstandardbody/body2textprovider.md): Deprecated. The secondary body text to display in the complication.

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

### Text and gauges

- [CLKComplicationTemplateGraphicRectangularStandardBodyView](clkcomplicationtemplategraphicrectangularstandardbodyview.md): Deprecated. A template for displaying a SwiftUI label and up to three rows of text.
- [CLKComplicationTemplateGraphicRectangularTextGauge](clkcomplicationtemplategraphicrectangulartextgauge.md): Deprecated. A template for displaying a large rectangle containing text and a gauge.
- [CLKComplicationTemplateGraphicRectangularTextGaugeView](clkcomplicationtemplategraphicrectangulartextgaugeview.md): Deprecated. A template for displaying a header row with a SwiftUI view and text, a second row of text, and a gauge.

# CLKComplicationTemplateGraphicRectangularStandardBody (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A template for displaying a large rectangle containing text.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateGraphicRectangularStandardBody : CLKComplicationTemplate
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyGraphicRectangular](clkcomplicationfamily/graphicrectangular.md) family. [Figure 1](clkcomplicationtemplategraphicrectangularstandardbody.md#3030705) shows the layout of the image and where the template might appear on the clock face.

![Diagram showing the layout of header text and two rows of body text.](https://developer.apple.com/images/com.apple.clockkit/media-3030705@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as @2x images for display on Apple Watch, so the point-based dimensions are half the listed size.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 24 pixels | 24 pixels |
| 41 mm | 25 pixels | 25 pixels |
| 44 mm | 27 pixels | 27 pixels |
| 45 mm | 29 pixels | 29 pixels |

This template supports full-color images.

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Supporting Multiple Watch Sizes`.

## Topics

### Creating the Template

- [initWithHeaderTextProvider:body1TextProvider:](clkcomplicationtemplategraphicrectangularstandardbody/init%28headertextprovider_body1textprovider_%29.md): Deprecated. Creates a new template that has a row of header text and a row of body text.
- [initWithHeaderTextProvider:body1TextProvider:body2TextProvider:](clkcomplicationtemplategraphicrectangularstandardbody/init%28headertextprovider_body1textprovider_body2textprovider_%29.md): Deprecated. Creates a new template that has a row of header text and two rows of body text.
- [initWithHeaderImageProvider:headerTextProvider:body1TextProvider:](clkcomplicationtemplategraphicrectangularstandardbody/init%28headerimageprovider_headertextprovider_body1textprovider_%29.md): Deprecated. Creates a new template that has a header row with an image and text, and a row of body text.
- [initWithHeaderImageProvider:headerTextProvider:body1TextProvider:body2TextProvider:](clkcomplicationtemplategraphicrectangularstandardbody/init%28headerimageprovider_headertextprovider_body1textprovider_body2textprovider_%29.md): Deprecated. Creates a new template that has a header row with an image and text, and two rows of body text.
- [templateWithHeaderTextProvider:body1TextProvider:](clkcomplicationtemplategraphicrectangularstandardbody/templatewithheadertextprovider_body1textprovider_.md): Deprecated. Returns a new template that has a row of header text and a row of body text.
- [templateWithHeaderTextProvider:body1TextProvider:body2TextProvider:](clkcomplicationtemplategraphicrectangularstandardbody/templatewithheadertextprovider_body1textprovider_body2textprovider_.md): Deprecated. Returns a new template that has a row of header text and two rows of body text.
- [templateWithHeaderImageProvider:headerTextProvider:body1TextProvider:](clkcomplicationtemplategraphicrectangularstandardbody/templatewithheaderimageprovider_headertextprovider_body1textprovider_.md): Deprecated. Returns a new template that has a header row with an image and text, and a row of body text.
- [templateWithHeaderImageProvider:headerTextProvider:body1TextProvider:body2TextProvider:](clkcomplicationtemplategraphicrectangularstandardbody/templatewithheaderimageprovider_headertextprovider_body1textprovider_body2textprovider_.md): Deprecated. Returns a new template that has a header row with an image and text, and two rows of body text.

### Setting the Complication Data

- [headerTextProvider](clkcomplicationtemplategraphicrectangularstandardbody/headertextprovider.md): Deprecated. The header text to display in the complication.
- [headerImageProvider](clkcomplicationtemplategraphicrectangularstandardbody/headerimageprovider.md): Deprecated. The header image to display.
- [body1TextProvider](clkcomplicationtemplategraphicrectangularstandardbody/body1textprovider.md): Deprecated. The main body text to display in the complication.
- [body2TextProvider](clkcomplicationtemplategraphicrectangularstandardbody/body2textprovider.md): Deprecated. The secondary body text to display in the complication.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

## See Also

### Text and gauges

- [CLKComplicationTemplateGraphicRectangularTextGauge](clkcomplicationtemplategraphicrectangulartextgauge.md): Deprecated. A template for displaying a large rectangle containing text and a gauge.
