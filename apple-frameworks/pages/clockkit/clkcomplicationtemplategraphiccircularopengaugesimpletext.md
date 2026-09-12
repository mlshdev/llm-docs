> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccircularopengaugesimpletext](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccircularopengaugesimpletext)

# CLKComplicationTemplateGraphicCircularOpenGaugeSimpleText (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A template for displaying text inside an open gauge, with a single piece of text for the gauge.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateGraphicCircularOpenGaugeSimpleText
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicCircular](clkcomplicationfamily/graphiccircular.md) family. [Figure 1](clkcomplicationtemplategraphiccircularopengaugesimpletext.md#3030688) shows the layout of the image and where the template might appear on the clock face.

![Diagram showing the layout of text with an open gauge and subtext.](https://developer.apple.com/images/com.apple.clockkit/media-3030688@2x.png)

## Topics

### Creating the Template

- [init(gaugeProvider:bottomTextProvider:centerTextProvider:)](clkcomplicationtemplategraphiccircularopengaugesimpletext/init%28gaugeprovider_bottomtextprovider_centertextprovider_%29.md): Deprecated. Creates a new template with an open circular gauge, a small text element at the bottom, and a larger text element in the center.

### Setting the Complication Data

- [centerTextProvider](clkcomplicationtemplategraphiccircularopengaugesimpletext/centertextprovider.md): Deprecated. The text to display in the center of the gauge.
- [bottomTextProvider](clkcomplicationtemplategraphiccircularopengaugesimpletext/bottomtextprovider.md): Deprecated. The text to display at the bottom of the gauge.
- [gaugeProvider](clkcomplicationtemplategraphiccircularopengaugesimpletext/gaugeprovider.md): Deprecated. The gauge to display in the complication.

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
- [CLKComplicationTemplateGraphicCircularOpenGaugeRangeText](clkcomplicationtemplategraphiccircularopengaugerangetext.md): Deprecated. A template for displaying text inside an open gauge, with leading and trailing text for the gauge.
- [CLKComplicationTemplateGraphicCircularClosedGaugeImage](clkcomplicationtemplategraphiccircularclosedgaugeimage.md): Deprecated. A template for displaying a full-color circular image and a closed circular gauge.
- [CLKComplicationTemplateGraphicCircularClosedGaugeView](clkcomplicationtemplategraphiccircularclosedgaugeview.md): Deprecated. A template for displaying a SwiftUI view inside a closed circular gauge.
- [CLKComplicationTemplateGraphicCircularClosedGaugeText](clkcomplicationtemplategraphiccircularclosedgaugetext.md): Deprecated. A template for displaying text inside a closed circular gauge.

# CLKComplicationTemplateGraphicCircularOpenGaugeSimpleText (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A template for displaying text inside an open gauge, with a single piece of text for the gauge.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateGraphicCircularOpenGaugeSimpleText : CLKComplicationTemplateGraphicCircular
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyGraphicCircular](clkcomplicationfamily/graphiccircular.md) family. [Figure 1](clkcomplicationtemplategraphiccircularopengaugesimpletext.md#3030688) shows the layout of the image and where the template might appear on the clock face.

![Diagram showing the layout of text with an open gauge and subtext.](https://developer.apple.com/images/com.apple.clockkit/media-3030688@2x.png)

## Topics

### Creating the Template

- [initWithGaugeProvider:bottomTextProvider:centerTextProvider:](clkcomplicationtemplategraphiccircularopengaugesimpletext/init%28gaugeprovider_bottomtextprovider_centertextprovider_%29.md): Deprecated. Creates a new template with an open circular gauge, a small text element at the bottom, and a larger text element in the center.
- [templateWithGaugeProvider:bottomTextProvider:centerTextProvider:](clkcomplicationtemplategraphiccircularopengaugesimpletext/templatewithgaugeprovider_bottomtextprovider_centertextprovider_.md): Deprecated. Returns a new template with an open circular gauge, a small text element at the bottom, and a larger text element in the center.

### Setting the Complication Data

- [centerTextProvider](clkcomplicationtemplategraphiccircularopengaugesimpletext/centertextprovider.md): Deprecated. The text to display in the center of the gauge.
- [bottomTextProvider](clkcomplicationtemplategraphiccircularopengaugesimpletext/bottomtextprovider.md): Deprecated. The text to display at the bottom of the gauge.
- [gaugeProvider](clkcomplicationtemplategraphiccircularopengaugesimpletext/gaugeprovider.md): Deprecated. The gauge to display in the complication.

## Relationships

### Inherits From

- [CLKComplicationTemplateGraphicCircular](clkcomplicationtemplategraphiccircular.md)

## See Also

### Open and closed gauges

- [CLKComplicationTemplateGraphicCircularOpenGaugeImage](clkcomplicationtemplategraphiccircularopengaugeimage.md): Deprecated. A template for displaying a full-color circular image, an open gauge, and text.
- [CLKComplicationTemplateGraphicCircularOpenGaugeRangeText](clkcomplicationtemplategraphiccircularopengaugerangetext.md): Deprecated. A template for displaying text inside an open gauge, with leading and trailing text for the gauge.
- [CLKComplicationTemplateGraphicCircularClosedGaugeImage](clkcomplicationtemplategraphiccircularclosedgaugeimage.md): Deprecated. A template for displaying a full-color circular image and a closed circular gauge.
- [CLKComplicationTemplateGraphicCircularClosedGaugeText](clkcomplicationtemplategraphiccircularclosedgaugetext.md): Deprecated. A template for displaying text inside a closed circular gauge.
