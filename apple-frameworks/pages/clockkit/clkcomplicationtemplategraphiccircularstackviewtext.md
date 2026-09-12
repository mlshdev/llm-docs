> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccircularstackviewtext](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccircularstackviewtext)

# CLKComplicationTemplateGraphicCircularStackViewText

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

A template for displaying a SwiftUI view and text.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
final class CLKComplicationTemplateGraphicCircularStackViewText<Content> where Content : View
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicCircular](clkcomplicationfamily/graphiccircular.md) family. [Figure 1](clkcomplicationtemplategraphiccircularstackviewtext.md#3667405) shows the layout of the complication and where it appears on the clock face.

![A diagram showing the layout of the complication that calls out the image provider and content.](https://developer.apple.com/images/com.apple.clockkit/media-3667405@2x.png)

The following table lists the dimensions of the SwiftUI view displayed by the template.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 28 points | 14 points |
| 44 mm | 31 points | 16 points |

## Topics

### Creating the Template

- [init(content:textProvider:)](clkcomplicationtemplategraphiccircularstackviewtext/init%28content_textprovider_%29.md): Deprecated. Creates a template that has a view and a small amount of text.

### Accessing the Content

- [content](clkcomplicationtemplategraphiccircularstackviewtext/content.md): Deprecated. The SwiftUI view displayed by the template.
- [textProvider](clkcomplicationtemplategraphiccircularstackviewtext/textprovider.md): Deprecated. The text to display below the view.

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
- [CLKComplicationTemplateGraphicCircularClosedGaugeView](clkcomplicationtemplategraphiccircularclosedgaugeview.md): Deprecated. A template for displaying a SwiftUI view inside a closed circular gauge.
