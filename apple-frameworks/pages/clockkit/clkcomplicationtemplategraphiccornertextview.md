> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccornertextview](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccornertextview)

# CLKComplicationTemplateGraphicCornerTextView

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

A template for displaying a SwiftUI view and text in the clock face’s corner.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
final class CLKComplicationTemplateGraphicCornerTextView<Label> where Label : View
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicCorner](clkcomplicationfamily/graphiccorner.md) family.  shows the layout of the view and where the template might appear on the clock face.

![A diagram showing the layout of the complication that calls out the content produced by the text provider and label.](https://developer.apple.com/images/com.apple.clockkit/media-3667263@2x.png)

The following table lists the dimensions of the view displayed by the template. The template masks the view to a circle.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 20 points | 20 points |
| 41 mm | 21 points | 21 points |
| 44 mm | 22 points | 22 points |
| 45 mm | 24 points | 24 points |

## Topics

### Creating the Template

- [init(textProvider:label:)](clkcomplicationtemplategraphiccornertextview/init%28textprovider_label_%29.md): Deprecated. Creates a template with a line of text and a SwiftUI view.

### Accessing the Content

- [textProvider](clkcomplicationtemplategraphiccornertextview/textprovider.md): Deprecated. The text provider for the text.
- [label](clkcomplicationtemplategraphiccornertextview/label.md): Deprecated. The SwiftUI view displayed by the template.

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
- [CLKComplicationTemplateGraphicCornerGaugeView](clkcomplicationtemplategraphiccornergaugeview.md): Deprecated. A template for displaying a SwiftUI view and a gauge in the clock face’s corner.
