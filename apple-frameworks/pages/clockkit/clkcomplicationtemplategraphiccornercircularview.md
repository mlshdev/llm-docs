> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccornercircularview](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccornercircularview)

# CLKComplicationTemplateGraphicCornerCircularView

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

A template for displaying a SwiftUI view in the clock face’s corner.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
final class CLKComplicationTemplateGraphicCornerCircularView<Content> where Content : View
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicCorner](clkcomplicationfamily/graphiccorner.md) family. [Figure 1](clkcomplicationtemplategraphiccornercircularview.md#3667248) shows the layout of the view and where the template might appear on the clock face.

![A diagram showing the layout of the complication that calls out the content.](https://developer.apple.com/images/com.apple.clockkit/media-3667248@2x.png)

The following table lists the dimensions of the SwiftUI view displayed by the template. The template masks the view to a circle.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 32 points | 32 points |
| 41 mm | 34 points | 34 points |
| 44 mm | 36 points | 36 points |
| 45 mm | 38 points | 38 points |

## Topics

### Creating the Template

- [init(\_:)](clkcomplicationtemplategraphiccornercircularview/init%28__%29.md): Deprecated. Creates a template that has a circular SwiftUI view.

### Accessing the Content

- [content](clkcomplicationtemplategraphiccornercircularview/content.md): Deprecated. The SwiftUI view displayed by the template.

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

- [CLKComplicationTemplateGraphicCornerGaugeView](clkcomplicationtemplategraphiccornergaugeview.md): Deprecated. A template for displaying a SwiftUI view and a gauge in the clock face’s corner.
- [CLKComplicationTemplateGraphicCornerTextView](clkcomplicationtemplategraphiccornertextview.md): Deprecated. A template for displaying a SwiftUI view and text in the clock face’s corner.
