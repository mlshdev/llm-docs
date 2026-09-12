> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccircularclosedgaugeview](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccircularclosedgaugeview)

# CLKComplicationTemplateGraphicCircularClosedGaugeView

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

A template for displaying a SwiftUI view inside a closed circular gauge.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
final class CLKComplicationTemplateGraphicCircularClosedGaugeView<Label> where Label : View
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicCircular](clkcomplicationfamily/graphiccircular.md) family. [Figure 1](clkcomplicationtemplategraphiccircularclosedgaugeview.md#3667247) shows the layout of the view and where the template might appear on the clock face.

![A diagram showing the layout of the complication that calls out the content produced by the gauge provider and the label.](https://developer.apple.com/images/com.apple.clockkit/media-3667247@2x.png)

The following table lists the dimensions of the SwiftUI view displayed by the template. The template masks the view to a circle.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 27 points | 27 points |
| 41 mm | 28.5 points | 28.5 points |
| 44 mm | 31 points | 31 points |
| 45 mm | 32 points | 32 points |

## Topics

### Creating the Template

- [init(gaugeProvider:label:)](clkcomplicationtemplategraphiccircularclosedgaugeview/init%28gaugeprovider_label_%29.md): Deprecated. Creates a new template with a closed circular gauge, and a SwiftUI view in the center.

### Accessing the Content

- [gaugeProvider](clkcomplicationtemplategraphiccircularclosedgaugeview/gaugeprovider.md): Deprecated. The gauge provider for the template.
- [label](clkcomplicationtemplategraphiccircularclosedgaugeview/label.md): Deprecated. The SwiftUI view displayed by the template.

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
- [CLKComplicationTemplateGraphicCircularOpenGaugeView](clkcomplicationtemplategraphiccircularopengaugeview.md): Deprecated. A template for displaying a SwiftUI view, an open gauge, and text.
- [CLKComplicationTemplateGraphicCircularStackViewText](clkcomplicationtemplategraphiccircularstackviewtext.md): Deprecated. A template for displaying a SwiftUI view and text.
