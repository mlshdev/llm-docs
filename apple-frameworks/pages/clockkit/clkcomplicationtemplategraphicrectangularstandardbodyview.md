> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicrectangularstandardbodyview](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicrectangularstandardbodyview)

# CLKComplicationTemplateGraphicRectangularStandardBodyView

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

A template for displaying a SwiftUI label and up to three rows of text.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
final class CLKComplicationTemplateGraphicRectangularStandardBodyView<Label> where Label : View
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicRectangular](clkcomplicationfamily/graphicrectangular.md) family.  shows the layout of the complication and where it appears on the clock face.

![A diagram showing the layout of the complication that calls out the content produced by the header label and text providers.](https://developer.apple.com/images/com.apple.clockkit/media-3667290@2x.png)

The following table lists the dimensions of the image you use in this template.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 12 points | 12 points |
| 41 mm | 12.5 points | 12.5 points |
| 44 mm | 13.5 points | 13.5 points |
| 45 mm | 14.5 points | 14.5 points |

## Topics

### Creating the Template

- [init(headerLabel:headerTextProvider:body1TextProvider:body2TextProvider:)](clkcomplicationtemplategraphicrectangularstandardbodyview/init%28headerlabel_headertextprovider_body1textprovider_body2textprovider_%29.md): Deprecated. Creates a new template that has a header row with a SwiftUI view and text, and two rows of body text.

### Accessing the Content

- [headerLabel](clkcomplicationtemplategraphicrectangularstandardbodyview/headerlabel.md): Deprecated. The SwiftUI view displayed by the template.
- [headerTextProvider](clkcomplicationtemplategraphicrectangularstandardbodyview/headertextprovider.md): Deprecated. The text provider for the header text.
- [body1TextProvider](clkcomplicationtemplategraphicrectangularstandardbodyview/body1textprovider.md): Deprecated. The text provider for the first row of body text.
- [body2TextProvider](clkcomplicationtemplategraphicrectangularstandardbodyview/body2textprovider.md): Deprecated. The text provider for the second row of body text.

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

### Rectangular templates

- [CLKComplicationTemplateGraphicRectangularTextGaugeView](clkcomplicationtemplategraphicrectangulartextgaugeview.md): Deprecated. A template for displaying a header row with a SwiftUI view and text, a second row of text, and a gauge.
- [CLKComplicationTemplateGraphicRectangularLargeView](clkcomplicationtemplategraphicrectangularlargeview.md): Deprecated. A template for displaying a large rectangle containing header text and a SwiftUI view.
- [CLKComplicationTemplateGraphicRectangularFullView](clkcomplicationtemplategraphicrectangularfullview.md): Deprecated. A template for displaying a SwiftUI view that fills the entire template.
