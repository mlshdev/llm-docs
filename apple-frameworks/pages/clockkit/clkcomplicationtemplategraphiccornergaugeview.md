> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccornergaugeview](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccornergaugeview)

# CLKComplicationTemplateGraphicCornerGaugeView

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

A template for displaying a SwiftUI view and a gauge in the clock face’s corner.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
final class CLKComplicationTemplateGraphicCornerGaugeView<Label> where Label : View
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicCorner](clkcomplicationfamily/graphiccorner.md) family. [Figure 1](clkcomplicationtemplategraphiccornergaugeview.md#3667261) shows the layout of the view and where the template might appear on the clock face.

![A diagram showing the layout of the complication that calls out the content produced by the gauge provider, text provider, and label.](https://developer.apple.com/images/com.apple.clockkit/media-3667261@2x.png)

The following table lists the dimensions of the view displayed by this template. ClockKIt masks the view to a circle.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 20 points | 20 points |
| 41 mm | 21 points | 21 points |
| 44 mm | 22 points | 22 points |
| 45 mm | 24 points | 24 points |

## Topics

### Creating the Template

- [init(gaugeProvider:leadingTextProvider:trailingTextProvider:label:)](clkcomplicationtemplategraphiccornergaugeview/init%28gaugeprovider_leadingtextprovider_trailingtextprovider_label_%29.md): Deprecated. Creates a new template with the provided gauge and view.

### Accessing the Content

- [label](clkcomplicationtemplategraphiccornergaugeview/label.md): Deprecated. The SwiftUI view displayed by the template.
- [gaugeProvider](clkcomplicationtemplategraphiccornergaugeview/gaugeprovider.md): Deprecated. The gauge to display in the complication.
- [leadingTextProvider](clkcomplicationtemplategraphiccornergaugeview/leadingtextprovider.md): Deprecated. The text provider for the gauge’s leading text.
- [trailingTextProvider](clkcomplicationtemplategraphiccornergaugeview/trailingtextprovider.md): Deprecated. The text provider for the gauge’s trailing text.

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

### Corner templates

- [CLKComplicationTemplateGraphicCornerCircularView](clkcomplicationtemplategraphiccornercircularview.md): Deprecated. A template for displaying a SwiftUI view in the clock face’s corner.
- [CLKComplicationTemplateGraphicCornerTextView](clkcomplicationtemplategraphiccornertextview.md): Deprecated. A template for displaying a SwiftUI view and text in the clock face’s corner.
