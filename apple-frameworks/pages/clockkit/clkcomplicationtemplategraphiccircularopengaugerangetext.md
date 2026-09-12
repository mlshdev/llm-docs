> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccircularopengaugerangetext](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccircularopengaugerangetext)

# CLKComplicationTemplateGraphicCircularOpenGaugeRangeText (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A template for displaying text inside an open gauge, with leading and trailing text for the gauge.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateGraphicCircularOpenGaugeRangeText
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicCircular](clkcomplicationfamily/graphiccircular.md) family. [Figure 1](clkcomplicationtemplategraphiccircularopengaugerangetext.md#3030687) shows the layout of the image and where the template might appear on the clock face.

![Diagram showing the layout of text surrounded by an open gauge with leading and trailing text.](https://developer.apple.com/images/com.apple.clockkit/media-3030687@2x.png)

## Topics

### Creating the Template

- [init(gaugeProvider:leadingTextProvider:trailingTextProvider:centerTextProvider:)](clkcomplicationtemplategraphiccircularopengaugerangetext/init%28gaugeprovider_leadingtextprovider_trailingtextprovider_centertextprovider_%29.md): Deprecated. Creates a new template that has an open circular gauge with leading and trailing text, and a center text element.

### Setting the Complication Data

- [centerTextProvider](clkcomplicationtemplategraphiccircularopengaugerangetext/centertextprovider.md): Deprecated. The text to display in the center of the gauge.
- [gaugeProvider](clkcomplicationtemplategraphiccircularopengaugerangetext/gaugeprovider.md): Deprecated. The gauge to display in the complication.
- [leadingTextProvider](clkcomplicationtemplategraphiccircularopengaugerangetext/leadingtextprovider.md): Deprecated. The text to display on the leading edge of the gauge.
- [trailingTextProvider](clkcomplicationtemplategraphiccircularopengaugerangetext/trailingtextprovider.md): Deprecated. The text to display on the trailing edge of the gauge.

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

### Open and closed gauges

- [CLKComplicationTemplateGraphicCircularOpenGaugeImage](clkcomplicationtemplategraphiccircularopengaugeimage.md): Deprecated. A template for displaying a full-color circular image, an open gauge, and text.
- [CLKComplicationTemplateGraphicCircularOpenGaugeView](clkcomplicationtemplategraphiccircularopengaugeview.md): Deprecated. A template for displaying a SwiftUI view, an open gauge, and text.
- [CLKComplicationTemplateGraphicCircularOpenGaugeSimpleText](clkcomplicationtemplategraphiccircularopengaugesimpletext.md): Deprecated. A template for displaying text inside an open gauge, with a single piece of text for the gauge.
- [CLKComplicationTemplateGraphicCircularClosedGaugeImage](clkcomplicationtemplategraphiccircularclosedgaugeimage.md): Deprecated. A template for displaying a full-color circular image and a closed circular gauge.
- [CLKComplicationTemplateGraphicCircularClosedGaugeView](clkcomplicationtemplategraphiccircularclosedgaugeview.md): Deprecated. A template for displaying a SwiftUI view inside a closed circular gauge.
- [CLKComplicationTemplateGraphicCircularClosedGaugeText](clkcomplicationtemplategraphiccircularclosedgaugetext.md): Deprecated. A template for displaying text inside a closed circular gauge.

# CLKComplicationTemplateGraphicCircularOpenGaugeRangeText (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A template for displaying text inside an open gauge, with leading and trailing text for the gauge.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateGraphicCircularOpenGaugeRangeText : CLKComplicationTemplateGraphicCircular
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyGraphicCircular](clkcomplicationfamily/graphiccircular.md) family. [Figure 1](clkcomplicationtemplategraphiccircularopengaugerangetext.md#3030687) shows the layout of the image and where the template might appear on the clock face.

![Diagram showing the layout of text surrounded by an open gauge with leading and trailing text.](https://developer.apple.com/images/com.apple.clockkit/media-3030687@2x.png)

## Topics

### Creating the Template

- [initWithGaugeProvider:leadingTextProvider:trailingTextProvider:centerTextProvider:](clkcomplicationtemplategraphiccircularopengaugerangetext/init%28gaugeprovider_leadingtextprovider_trailingtextprovider_centertextprovider_%29.md): Deprecated. Creates a new template that has an open circular gauge with leading and trailing text, and a center text element.
- [templateWithGaugeProvider:leadingTextProvider:trailingTextProvider:centerTextProvider:](clkcomplicationtemplategraphiccircularopengaugerangetext/templatewithgaugeprovider_leadingtextprovider_trailingtextprovider_centertextprovider_.md): Deprecated. Returns a new template that has an open circular gauge with leading and trailing text, and a center text element.

### Setting the Complication Data

- [centerTextProvider](clkcomplicationtemplategraphiccircularopengaugerangetext/centertextprovider.md): Deprecated. The text to display in the center of the gauge.
- [gaugeProvider](clkcomplicationtemplategraphiccircularopengaugerangetext/gaugeprovider.md): Deprecated. The gauge to display in the complication.
- [leadingTextProvider](clkcomplicationtemplategraphiccircularopengaugerangetext/leadingtextprovider.md): Deprecated. The text to display on the leading edge of the gauge.
- [trailingTextProvider](clkcomplicationtemplategraphiccircularopengaugerangetext/trailingtextprovider.md): Deprecated. The text to display on the trailing edge of the gauge.

## Relationships

### Inherits From

- [CLKComplicationTemplateGraphicCircular](clkcomplicationtemplategraphiccircular.md)

## See Also

### Open and closed gauges

- [CLKComplicationTemplateGraphicCircularOpenGaugeImage](clkcomplicationtemplategraphiccircularopengaugeimage.md): Deprecated. A template for displaying a full-color circular image, an open gauge, and text.
- [CLKComplicationTemplateGraphicCircularOpenGaugeSimpleText](clkcomplicationtemplategraphiccircularopengaugesimpletext.md): Deprecated. A template for displaying text inside an open gauge, with a single piece of text for the gauge.
- [CLKComplicationTemplateGraphicCircularClosedGaugeImage](clkcomplicationtemplategraphiccircularclosedgaugeimage.md): Deprecated. A template for displaying a full-color circular image and a closed circular gauge.
- [CLKComplicationTemplateGraphicCircularClosedGaugeText](clkcomplicationtemplategraphiccircularclosedgaugetext.md): Deprecated. A template for displaying text inside a closed circular gauge.
