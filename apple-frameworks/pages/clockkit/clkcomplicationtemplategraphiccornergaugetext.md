> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccornergaugetext](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccornergaugetext)

# CLKComplicationTemplateGraphicCornerGaugeText (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A template for displaying text and a gauge in the clock face’s corner.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateGraphicCornerGaugeText
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicCorner](clkcomplicationfamily/graphiccorner.md) family.  shows the layout of the image and where the template might appear on the clock face.

![Diagram showing the layout of the outer text and a gauge with leading and trailing text.](https://developer.apple.com/images/com.apple.clockkit/media-3030691@2x.png)

The system always displays the outer text as white. The gauge’s text can be multicolored.

## Topics

### Creating the Template

- [init(gaugeProvider:outerTextProvider:)](clkcomplicationtemplategraphiccornergaugetext/init%28gaugeprovider_outertextprovider_%29.md): Deprecated. Creates a template that has a gauge and an outer text element.
- [init(gaugeProvider:leadingTextProvider:trailingTextProvider:outerTextProvider:)](clkcomplicationtemplategraphiccornergaugetext/init%28gaugeprovider_leadingtextprovider_trailingtextprovider_outertextprovider_%29.md): Deprecated. Creates a template that has a gauge with leading and trailing text, and an outer text element.

### Setting the Complication Data

- [outerTextProvider](clkcomplicationtemplategraphiccornergaugetext/outertextprovider.md): Deprecated. The outer text to display in the complication.
- [gaugeProvider](clkcomplicationtemplategraphiccornergaugetext/gaugeprovider.md): Deprecated. The gauge to display in the complication.
- [leadingTextProvider](clkcomplicationtemplategraphiccornergaugetext/leadingtextprovider.md): Deprecated. The text to display on the leading edge of the gague.
- [trailingTextProvider](clkcomplicationtemplategraphiccornergaugetext/trailingtextprovider.md): Deprecated. The text to display on the trailing edge of the gauge.

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

### Gauges

- [CLKComplicationTemplateGraphicCornerGaugeImage](clkcomplicationtemplategraphiccornergaugeimage.md): Deprecated. A template for displaying an image and a gauge in the clock face’s corner.
- [CLKComplicationTemplateGraphicCornerGaugeView](clkcomplicationtemplategraphiccornergaugeview.md): Deprecated. A template for displaying a SwiftUI view and a gauge in the clock face’s corner.

# CLKComplicationTemplateGraphicCornerGaugeText (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A template for displaying text and a gauge in the clock face’s corner.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateGraphicCornerGaugeText : CLKComplicationTemplate
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyGraphicCorner](clkcomplicationfamily/graphiccorner.md) family.  shows the layout of the image and where the template might appear on the clock face.

![Diagram showing the layout of the outer text and a gauge with leading and trailing text.](https://developer.apple.com/images/com.apple.clockkit/media-3030691@2x.png)

The system always displays the outer text as white. The gauge’s text can be multicolored.

## Topics

### Creating the Template

- [initWithGaugeProvider:outerTextProvider:](clkcomplicationtemplategraphiccornergaugetext/init%28gaugeprovider_outertextprovider_%29.md): Deprecated. Creates a template that has a gauge and an outer text element.
- [initWithGaugeProvider:leadingTextProvider:trailingTextProvider:outerTextProvider:](clkcomplicationtemplategraphiccornergaugetext/init%28gaugeprovider_leadingtextprovider_trailingtextprovider_outertextprovider_%29.md): Deprecated. Creates a template that has a gauge with leading and trailing text, and an outer text element.
- [templateWithGaugeProvider:outerTextProvider:](clkcomplicationtemplategraphiccornergaugetext/templatewithgaugeprovider_outertextprovider_.md): Deprecated. Returns a template that has a gauge and an outer text element.
- [templateWithGaugeProvider:leadingTextProvider:trailingTextProvider:outerTextProvider:](clkcomplicationtemplategraphiccornergaugetext/templatewithgaugeprovider_leadingtextprovider_trailingtextprovider_outertextprovider_.md): Deprecated. Returns a template that has a gauge with leading and trailing text, and an outer text element.

### Setting the Complication Data

- [outerTextProvider](clkcomplicationtemplategraphiccornergaugetext/outertextprovider.md): Deprecated. The outer text to display in the complication.
- [gaugeProvider](clkcomplicationtemplategraphiccornergaugetext/gaugeprovider.md): Deprecated. The gauge to display in the complication.
- [leadingTextProvider](clkcomplicationtemplategraphiccornergaugetext/leadingtextprovider.md): Deprecated. The text to display on the leading edge of the gague.
- [trailingTextProvider](clkcomplicationtemplategraphiccornergaugetext/trailingtextprovider.md): Deprecated. The text to display on the trailing edge of the gauge.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

## See Also

### Gauges

- [CLKComplicationTemplateGraphicCornerGaugeImage](clkcomplicationtemplategraphiccornergaugeimage.md): Deprecated. A template for displaying an image and a gauge in the clock face’s corner.
