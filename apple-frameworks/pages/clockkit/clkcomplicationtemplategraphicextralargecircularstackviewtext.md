> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicextralargecircularstackviewtext](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicextralargecircularstackviewtext)

# CLKComplicationTemplateGraphicExtraLargeCircularStackViewText

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

A template for displaying a SwiftUI view and text.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
final class CLKComplicationTemplateGraphicExtraLargeCircularStackViewText<Content> where Content : View
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicExtraLarge](clkcomplicationfamily/graphicextralarge.md) family. [Figure 1](clkcomplicationtemplategraphicextralargecircularstackviewtext.md#3667264) shows the layout of the complication and where it appears on the clock face.

![A diagram showing the layout of the complication that calls out the content and text provider.](https://developer.apple.com/images/com.apple.clockkit/media-3667264@2x.png)

The table below lists the dimensions of the view displayed by the template.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 40 points | 20 points |
| 44 mm | 43.5 points | 22 points |

## Topics

### Creating the Template

- [init(content:textProvider:)](clkcomplicationtemplategraphicextralargecircularstackviewtext/init%28content_textprovider_%29.md): Deprecated. Creates a template that has a view and a small amount of text.

### Accessing the Content

- [content](clkcomplicationtemplategraphicextralargecircularstackviewtext/content.md): Deprecated. The SwiftUI view displayed by the template.
- [textProvider](clkcomplicationtemplategraphicextralargecircularstackviewtext/textprovider.md): Deprecated. The text to display below the view.

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
- [CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeView](clkcomplicationtemplategraphicextralargecircularclosedgaugeview.md): Deprecated. A template for displaying an extra-large SwiftUI view inside a closed circular gauge.
