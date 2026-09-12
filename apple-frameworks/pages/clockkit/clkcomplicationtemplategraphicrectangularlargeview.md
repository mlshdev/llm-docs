> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicrectangularlargeview](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicrectangularlargeview)

# CLKComplicationTemplateGraphicRectangularLargeView

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

A template for displaying a large rectangle containing header text and a SwiftUI view.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
final class CLKComplicationTemplateGraphicRectangularLargeView<Content> where Content : View
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicRectangular](clkcomplicationfamily/graphicrectangular.md) family. [Figure 1](clkcomplicationtemplategraphicrectangularlargeview.md#3667291) shows the layout of the complication and where it appears on the clock face.

![A diagram showing the layout of the complication that calls out the header text provider and the content.](https://developer.apple.com/images/com.apple.clockkit/media-3667291@2x.png)

The following table lists the dimensions of the view displayed by this template. The template automatically masks the view to a rounded rectangle with a 8-pixel corner radius.

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 40 mm | 150 points | 47 points |
| 41 mm | 159 points | 50 points |
| 44 mm | 171 points | 54 points |
| 45 mm | 178.5 points | 56 points |

## Topics

### Creating the Template

- [init(headerTextProvider:content:)](clkcomplicationtemplategraphicrectangularlargeview/init%28headertextprovider_content_%29.md): Deprecated. Creates a new template with a text provider and a SwiftUI view.

### Accessing the Content

- [headerTextProvider](clkcomplicationtemplategraphicrectangularlargeview/headertextprovider.md): Deprecated. The text provider for a row of text.
- [content](clkcomplicationtemplategraphicrectangularlargeview/content.md): Deprecated. The SwiftUI view displayed by the template.

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

### Rectangular templates

- [CLKComplicationTemplateGraphicRectangularStandardBodyView](clkcomplicationtemplategraphicrectangularstandardbodyview.md): Deprecated. A template for displaying a SwiftUI label and up to three rows of text.
- [CLKComplicationTemplateGraphicRectangularTextGaugeView](clkcomplicationtemplategraphicrectangulartextgaugeview.md): Deprecated. A template for displaying a header row with a SwiftUI view and text, a second row of text, and a gauge.
- [CLKComplicationTemplateGraphicRectangularFullView](clkcomplicationtemplategraphicrectangularfullview.md): Deprecated. A template for displaying a SwiftUI view that fills the entire template.
