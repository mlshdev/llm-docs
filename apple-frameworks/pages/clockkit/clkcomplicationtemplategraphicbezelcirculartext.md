> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicbezelcirculartext](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicbezelcirculartext)

# CLKComplicationTemplateGraphicBezelCircularText (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A template for displaying a circular complication with text along the bezel.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateGraphicBezelCircularText
```

<a id="overview"></a>

## Overview

The graphic bezel templates display a circular template, and text that wraps around the watch face.

This template belongs to the [CLKComplicationFamily.graphicBezel](clkcomplicationfamily/graphicbezel.md) family. [Figure 1](clkcomplicationtemplategraphicbezelcirculartext.md#3030704) shows the layout of the image and where the template might appear on the clock face.

![Diagram showing the layout of text along the bezel and the circular template.](https://developer.apple.com/images/com.apple.clockkit/media-3030704@2x.png)

The text is optional; this template can either display a circular template with text, or the circular template by itself.

## Topics

### Creating the Template

- [init(circularTemplate:)](clkcomplicationtemplategraphicbezelcirculartext/init%28circulartemplate_%29.md): Deprecated. Creates a circular template.
- [init(circularTemplate:textProvider:)](clkcomplicationtemplategraphicbezelcirculartext/init%28circulartemplate_textprovider_%29.md): Deprecated. Creates a circular template with text that wraps around the bezel.

### Setting the Complication Data

- [circularTemplate](clkcomplicationtemplategraphicbezelcirculartext/circulartemplate.md): Deprecated. The circular template to display.
- [textProvider](clkcomplicationtemplategraphicbezelcirculartext/textprovider.md): Deprecated. The text to display along the bezel.

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

### Graphic template families

- [Circular complication templates](circular-complication-templates.md): Display graphical data in a compact circle.
- [Corner complication templates](corner-complication-templates.md): Display graphically rich data in the watch face’s corner.
- [Rectangular complication templates.](rectangular-complication-templates.md): Displays large, rectangular complications for charts, images, or multiple lines of text.
- [Extra large circular templates](extra-large-circular-templates.md): Display large, easy-to-read content on the X-Large watch face.

# CLKComplicationTemplateGraphicBezelCircularText (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A template for displaying a circular complication with text along the bezel.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateGraphicBezelCircularText : CLKComplicationTemplate
```

<a id="overview"></a>

## Overview

The graphic bezel templates display a circular template, and text that wraps around the watch face.

This template belongs to the [CLKComplicationFamilyGraphicBezel](clkcomplicationfamily/graphicbezel.md) family. [Figure 1](clkcomplicationtemplategraphicbezelcirculartext.md#3030704) shows the layout of the image and where the template might appear on the clock face.

![Diagram showing the layout of text along the bezel and the circular template.](https://developer.apple.com/images/com.apple.clockkit/media-3030704@2x.png)

The text is optional; this template can either display a circular template with text, or the circular template by itself.

## Topics

### Creating the Template

- [initWithCircularTemplate:](clkcomplicationtemplategraphicbezelcirculartext/init%28circulartemplate_%29.md): Deprecated. Creates a circular template.
- [initWithCircularTemplate:textProvider:](clkcomplicationtemplategraphicbezelcirculartext/init%28circulartemplate_textprovider_%29.md): Deprecated. Creates a circular template with text that wraps around the bezel.
- [templateWithCircularTemplate:](clkcomplicationtemplategraphicbezelcirculartext/templatewithcirculartemplate_.md): Deprecated. Returns a circular template.
- [templateWithCircularTemplate:textProvider:](clkcomplicationtemplategraphicbezelcirculartext/templatewithcirculartemplate_textprovider_.md): Deprecated. Returns a circular template with text that wraps around the bezel.

### Setting the Complication Data

- [circularTemplate](clkcomplicationtemplategraphicbezelcirculartext/circulartemplate.md): Deprecated. The circular template to display.
- [textProvider](clkcomplicationtemplategraphicbezelcirculartext/textprovider.md): Deprecated. The text to display along the bezel.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

## See Also

### Graphic template families

- [Circular complication templates](circular-complication-templates.md): Display graphical data in a compact circle.
- [Corner complication templates](corner-complication-templates.md): Display graphically rich data in the watch face’s corner.
- [Rectangular complication templates.](rectangular-complication-templates.md): Displays large, rectangular complications for charts, images, or multiple lines of text.
- [Extra large circular templates](extra-large-circular-templates.md): Display large, easy-to-read content on the X-Large watch face.
