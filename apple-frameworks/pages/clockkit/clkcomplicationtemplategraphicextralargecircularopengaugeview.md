> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicextralargecircularopengaugeview](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicextralargecircularopengaugeview)

# CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeView

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

A template for displaying a SwiftUI view, an open gauge, and text.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeView<Label> where Label : View
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicExtraLarge](clkcomplicationfamily/graphicextralarge.md) family. [Figure 1](clkcomplicationtemplategraphicextralargecircularopengaugeview.md#3667407) shows the layout of the complication and where it appears on the clock face.

![A diagram showing the layout of the complication that calls out the content produced by the gauge provider, text provider, and label.](https://developer.apple.com/images/com.apple.clockkit/media-3667407@2x.png)

The table below lists the dimensions of the view displayed by the template. The template masks the view to a circle.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 31 points | 31 points |
| 41 mm | 33 points | 33 points |
| 44 mm | 33 points | 33 points |
| 45 mm | 37 points | 37 points |

## Topics

### Creating the Template

- [init(gaugeProvider:centerTextProvider:bottomLabel:)](clkcomplicationtemplategraphicextralargecircularopengaugeview/init%28gaugeprovider_centertextprovider_bottomlabel_%29.md): Deprecated. Creates a new template that has an open circular gauge, a small amount of text in the center, and a small SwiftUI view at the bottom.

### Accessing the Content

- [gaugeProvider](clkcomplicationtemplategraphicextralargecircularopengaugeview/gaugeprovider.md): Deprecated. The gauge provider for the template.
- [centerTextProvider](clkcomplicationtemplategraphicextralargecircularopengaugeview/centertextprovider.md): Deprecated. The text provider for the center text.
- [bottomLabel](clkcomplicationtemplategraphicextralargecircularopengaugeview/bottomlabel.md): Deprecated. The SwiftUI view displayed by the template.

## Relationships

### Inherits From

- [CLKComplicationTemplateGraphicExtraLargeCircular](clkcomplicationtemplategraphicextralargecircular.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Extra large templates

- [CLKComplicationTemplateGraphicExtraLargeCircularView](clkcomplicationtemplategraphicextralargecircularview.md): Deprecated. A template for displaying a circular SwiftUI view.
- [CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeView](clkcomplicationtemplategraphicextralargecircularclosedgaugeview.md): Deprecated. A template for displaying an extra-large SwiftUI view inside a closed circular gauge.
- [CLKComplicationTemplateGraphicExtraLargeCircularStackViewText](clkcomplicationtemplategraphicextralargecircularstackviewtext.md): Deprecated. A template for displaying a SwiftUI view and text.
