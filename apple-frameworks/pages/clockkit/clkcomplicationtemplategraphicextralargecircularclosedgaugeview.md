> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicextralargecircularclosedgaugeview](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicextralargecircularclosedgaugeview)

# CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeView

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

A template for displaying an extra-large SwiftUI view inside a closed circular gauge.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
final class CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeView<Label> where Label : View
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicExtraLarge](clkcomplicationfamily/graphicextralarge.md) family. [Figure 1](clkcomplicationtemplategraphicextralargecircularclosedgaugeview.md#3667262) shows the layout of the complication and where it appears on the clock face.

![A diagram showing the layout of the complication that calls out the content produced by the gauge and label.](https://developer.apple.com/images/com.apple.clockkit/media-3667262@2x.png)

The table below lists the dimensions of the view displayed by the template. The image provider automatically masks the image to a circle.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 77 points | 77 points |
| 41 mm | 81.5 points | 81.5 points |
| 44 mm | 87 points | 87 points |
| 41 mm | 81.5 points | 81.5 points |

## Topics

### Creating the Template

- [init(gaugeProvider:label:)](clkcomplicationtemplategraphicextralargecircularclosedgaugeview/init%28gaugeprovider_label_%29.md): Deprecated. Creates a new template with a closed circular gauge and a SwiftUI view in the center.

### Accessing the Content

- [gaugeProvider](clkcomplicationtemplategraphicextralargecircularclosedgaugeview/gaugeprovider.md): Deprecated. The gauge provider for the template.
- [label](clkcomplicationtemplategraphicextralargecircularclosedgaugeview/label.md): Deprecated. The SwiftUI view displayed by the template.

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
- [CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeView](clkcomplicationtemplategraphicextralargecircularopengaugeview.md): Deprecated. A template for displaying a SwiftUI view, an open gauge, and text.
- [CLKComplicationTemplateGraphicExtraLargeCircularStackViewText](clkcomplicationtemplategraphicextralargecircularstackviewtext.md): Deprecated. A template for displaying a SwiftUI view and text.
