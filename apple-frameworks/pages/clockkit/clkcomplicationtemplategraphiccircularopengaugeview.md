> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccircularopengaugeview](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccircularopengaugeview)

# CLKComplicationTemplateGraphicCircularOpenGaugeView

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

A template for displaying a SwiftUI view, an open gauge, and text.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
final class CLKComplicationTemplateGraphicCircularOpenGaugeView<Label> where Label : View
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicCircular](clkcomplicationfamily/graphiccircular.md) family. [Figure 1](clkcomplicationtemplategraphiccircularopengaugeview.md#3667249) shows the layout of the view and where the template might appear on the clock face.

![A diagram showing the layout of the complication that calls out the content produced by the gauge provider, text provider, and label.](https://developer.apple.com/images/com.apple.clockkit/media-3667249@2x.png)

The following table lists the dimensions of the view displayed by this template. The image provider automatically masks the image to a circle.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 11 points | 11 points |
| 41 mm | 11.5 points | 11.5 points |
| 44 mm | 12 points | 12 points |
| 45 mm | 13 points | 13 points |

## Topics

### Creating the Template

- [init(gaugeProvider:centerTextProvider:bottomLabel:)](clkcomplicationtemplategraphiccircularopengaugeview/init%28gaugeprovider_centertextprovider_bottomlabel_%29.md): Deprecated. Creates a new template that has an open circular gauge, a small amount of text in the center, and a small SwiftUI view at the bottom.

### Accesing the Content

- [gaugeProvider](clkcomplicationtemplategraphiccircularopengaugeview/gaugeprovider.md): Deprecated. The gauge provider for the template.
- [centerTextProvider](clkcomplicationtemplategraphiccircularopengaugeview/centertextprovider.md): Deprecated. The text provider for the center text.
- [bottomLabel](clkcomplicationtemplategraphiccircularopengaugeview/bottomlabel.md): Deprecated. The SwiftUI view displayed by the template.

## Relationships

### Inherits From

- [CLKComplicationTemplateGraphicCircular](clkcomplicationtemplategraphiccircular.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Circular templates

- [CLKComplicationTemplateGraphicCircularView](clkcomplicationtemplategraphiccircularview.md): Deprecated. A template for displaying a circular view.
- [CLKComplicationTemplateGraphicCircularClosedGaugeView](clkcomplicationtemplategraphiccircularclosedgaugeview.md): Deprecated. A template for displaying a SwiftUI view inside a closed circular gauge.
- [CLKComplicationTemplateGraphicCircularStackViewText](clkcomplicationtemplategraphiccircularstackviewtext.md): Deprecated. A template for displaying a SwiftUI view and text.
