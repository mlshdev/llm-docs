> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccircularclosedgaugetext](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccircularclosedgaugetext)

# CLKComplicationTemplateGraphicCircularClosedGaugeText (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A template for displaying text inside a closed circular gauge.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateGraphicCircularClosedGaugeText
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicCircular](clkcomplicationfamily/graphiccircular.md) family. [Figure 1](clkcomplicationtemplategraphiccircularclosedgaugetext.md#3030685) shows the layout of the image and where the template might appear on the clock face.

![Diagram showing the layout of text surrounded by a closed gauge.](https://developer.apple.com/images/com.apple.clockkit/media-3030685@2x.png)

## Topics

### Creating the Template

- [init(gaugeProvider:centerTextProvider:)](clkcomplicationtemplategraphiccircularclosedgaugetext/init%28gaugeprovider_centertextprovider_%29.md): Deprecated. Creates a new template that has a closed circular gauge with a small amount of text in the center.

### Setting the Complication Data

- [centerTextProvider](clkcomplicationtemplategraphiccircularclosedgaugetext/centertextprovider.md): Deprecated. The text to display in the center of the gauge.
- [gaugeProvider](clkcomplicationtemplategraphiccircularclosedgaugetext/gaugeprovider.md): Deprecated. The gauge to display in the complication.

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
- [CLKComplicationTemplateGraphicCircularOpenGaugeRangeText](clkcomplicationtemplategraphiccircularopengaugerangetext.md): Deprecated. A template for displaying text inside an open gauge, with leading and trailing text for the gauge.
- [CLKComplicationTemplateGraphicCircularClosedGaugeImage](clkcomplicationtemplategraphiccircularclosedgaugeimage.md): Deprecated. A template for displaying a full-color circular image and a closed circular gauge.
- [CLKComplicationTemplateGraphicCircularClosedGaugeView](clkcomplicationtemplategraphiccircularclosedgaugeview.md): Deprecated. A template for displaying a SwiftUI view inside a closed circular gauge.

# CLKComplicationTemplateGraphicCircularClosedGaugeText (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A template for displaying text inside a closed circular gauge.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateGraphicCircularClosedGaugeText : CLKComplicationTemplateGraphicCircular
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyGraphicCircular](clkcomplicationfamily/graphiccircular.md) family. [Figure 1](clkcomplicationtemplategraphiccircularclosedgaugetext.md#3030685) shows the layout of the image and where the template might appear on the clock face.

![Diagram showing the layout of text surrounded by a closed gauge.](https://developer.apple.com/images/com.apple.clockkit/media-3030685@2x.png)

## Topics

### Creating the Template

- [initWithGaugeProvider:centerTextProvider:](clkcomplicationtemplategraphiccircularclosedgaugetext/init%28gaugeprovider_centertextprovider_%29.md): Deprecated. Creates a new template that has a closed circular gauge with a small amount of text in the center.
- [templateWithGaugeProvider:centerTextProvider:](clkcomplicationtemplategraphiccircularclosedgaugetext/templatewithgaugeprovider_centertextprovider_.md): Deprecated. Returns a new template that has a closed circular gauge with a small amount of text in the center.

### Setting the Complication Data

- [centerTextProvider](clkcomplicationtemplategraphiccircularclosedgaugetext/centertextprovider.md): Deprecated. The text to display in the center of the gauge.
- [gaugeProvider](clkcomplicationtemplategraphiccircularclosedgaugetext/gaugeprovider.md): Deprecated. The gauge to display in the complication.

## Relationships

### Inherits From

- [CLKComplicationTemplateGraphicCircular](clkcomplicationtemplategraphiccircular.md)

## See Also

### Open and closed gauges

- [CLKComplicationTemplateGraphicCircularOpenGaugeImage](clkcomplicationtemplategraphiccircularopengaugeimage.md): Deprecated. A template for displaying a full-color circular image, an open gauge, and text.
- [CLKComplicationTemplateGraphicCircularOpenGaugeSimpleText](clkcomplicationtemplategraphiccircularopengaugesimpletext.md): Deprecated. A template for displaying text inside an open gauge, with a single piece of text for the gauge.
- [CLKComplicationTemplateGraphicCircularOpenGaugeRangeText](clkcomplicationtemplategraphiccircularopengaugerangetext.md): Deprecated. A template for displaying text inside an open gauge, with leading and trailing text for the gauge.
- [CLKComplicationTemplateGraphicCircularClosedGaugeImage](clkcomplicationtemplategraphiccircularclosedgaugeimage.md): Deprecated. A template for displaying a full-color circular image and a closed circular gauge.
