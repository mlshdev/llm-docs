> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicrectangulartextgaugeview](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicrectangulartextgaugeview)

# CLKComplicationTemplateGraphicRectangularTextGaugeView

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

A template for displaying a header row with a SwiftUI view and text, a second row of text, and a gauge.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
final class CLKComplicationTemplateGraphicRectangularTextGaugeView<Label> where Label : View
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicRectangular](clkcomplicationfamily/graphicrectangular.md) family. [Figure 1](clkcomplicationtemplategraphicrectangulartextgaugeview.md#3667408) shows the layout of the complication and where it appears on the clock face.

![A diagram showing the layout of the complication that calls out the header label, text providers, and gauge provider.](https://developer.apple.com/images/com.apple.clockkit/media-3667408@2x.png)

The following table lists the dimensions of the SwiftUI view displayed by this template.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 12 points | 12 points |
| 41 mm | 12.5 points | 12.5 points |
| 44 mm | 13.5 points | 13.5 points |
| 45 mm | 14.5 points | 14.5 points |

## Topics

### Creating the Template

- [init(headerLabel:headerTextProvider:bodyTextProvider:gaugeProvider:)](clkcomplicationtemplategraphicrectangulartextgaugeview/init%28headerlabel_headertextprovider_bodytextprovider_gaugeprovider_%29.md): Deprecated. Creates a new template that has a header row with a SwiftUI view and text, body text, and a gauge.

### Accessing the Content

- [headerLabel](clkcomplicationtemplategraphicrectangulartextgaugeview/headerlabel.md): Deprecated. The SwiftUI view displayed by the template.
- [headerTextProvider](clkcomplicationtemplategraphicrectangulartextgaugeview/headertextprovider.md): Deprecated. The header text to display in the complication.
- [bodyTextProvider](clkcomplicationtemplategraphicrectangulartextgaugeview/bodytextprovider.md): Deprecated. The main body text to display in the complication.
- [gaugeProvider](clkcomplicationtemplategraphicrectangulartextgaugeview/gaugeprovider.md): Deprecated. The gauge to display in the complication.

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

- [CLKComplicationTemplateGraphicRectangularStandardBodyView](clkcomplicationtemplategraphicrectangularstandardbodyview.md): Deprecated. A template for displaying a SwiftUI label and up to three rows of text.
- [CLKComplicationTemplateGraphicRectangularLargeView](clkcomplicationtemplategraphicrectangularlargeview.md): Deprecated. A template for displaying a large rectangle containing header text and a SwiftUI view.
- [CLKComplicationTemplateGraphicRectangularFullView](clkcomplicationtemplategraphicrectangularfullview.md): Deprecated. A template for displaying a SwiftUI view that fills the entire template.
