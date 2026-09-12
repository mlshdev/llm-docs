> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicextralargecircularview](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicextralargecircularview)

# CLKComplicationTemplateGraphicExtraLargeCircularView

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

A template for displaying a circular SwiftUI view.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
final class CLKComplicationTemplateGraphicExtraLargeCircularView<Content> where Content : View
```

## Mentioned In

- [Adding text to a complication](adding-text-to-a-complication.md)
- [Building complications with SwiftUI](building-complications-with-swiftui.md)

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicExtraLarge](clkcomplicationfamily/graphicextralarge.md) family. [Figure 1](clkcomplicationtemplategraphicextralargecircularview.md#3667292) shows the layout of the complication and where it appears on the clock face.

![A diagram showing the layout of the complication that calls out the content.](https://developer.apple.com/images/com.apple.clockkit/media-3667292@2x.png)

The table below lists the dimensions of the view displayed by the template. The template automatically masks the view to a circle.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 120 points | 120 points |
| 41 mm | 127 points | 127 points |
| 44 mm | 132 points | 132 points |
| 45 mm | 143 points | 143 points |

## Topics

### Creating the Template

- [init(\_:)](clkcomplicationtemplategraphicextralargecircularview/init%28__%29.md): Deprecated. Creates a template that has a circular view.

### Accessing the Content

- [content](clkcomplicationtemplategraphicextralargecircularview/content.md): Deprecated. The SwiftUI view displayed by the template.

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

- [CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeView](clkcomplicationtemplategraphicextralargecircularopengaugeview.md): Deprecated. A template for displaying a SwiftUI view, an open gauge, and text.
- [CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeView](clkcomplicationtemplategraphicextralargecircularclosedgaugeview.md): Deprecated. A template for displaying an extra-large SwiftUI view inside a closed circular gauge.
- [CLKComplicationTemplateGraphicExtraLargeCircularStackViewText](clkcomplicationtemplategraphicextralargecircularstackviewtext.md): Deprecated. A template for displaying a SwiftUI view and text.
