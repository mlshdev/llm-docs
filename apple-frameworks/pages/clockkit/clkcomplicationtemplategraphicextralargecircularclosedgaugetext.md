> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicextralargecircularclosedgaugetext](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicextralargecircularclosedgaugetext)

# CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeText (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

A template for displaying text inside an extra-large closed circular gauge.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeText
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicExtraLarge](clkcomplicationfamily/graphicextralarge.md) family. [Figure 1](clkcomplicationtemplategraphicextralargecircularclosedgaugetext.md#3667235) shows the layout of the complication and where it appears on the clock face.

![A diagram showing the layout of the complication that calls out the content produced by the gauge and text providers.](https://developer.apple.com/images/com.apple.clockkit/media-3667235@2x.png)

## Topics

### Creating the Template

- [init(gaugeProvider:centerTextProvider:)](clkcomplicationtemplategraphicextralargecircularclosedgaugetext/init%28gaugeprovider_centertextprovider_%29.md): Deprecated. Creates a new template with a closed circular gauge with text in the center.

### Setting the Complication Data

- [centerTextProvider](clkcomplicationtemplategraphicextralargecircularclosedgaugetext/centertextprovider.md): Deprecated. The text to display in the center of the gauge.
- [gaugeProvider](clkcomplicationtemplategraphicextralargecircularclosedgaugetext/gaugeprovider.md): Deprecated. The gauge to display in the complication.

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

### Open and closed gauges

- [CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeImage](clkcomplicationtemplategraphicextralargecircularopengaugeimage.md): Deprecated. A template for displaying an extra-large, full-color circular image, an open gauge, and text.
- [CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeView](clkcomplicationtemplategraphicextralargecircularopengaugeview.md): Deprecated. A template for displaying a SwiftUI view, an open gauge, and text.
- [CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeSimpleText](clkcomplicationtemplategraphicextralargecircularopengaugesimpletext.md): Deprecated. A template for displaying text inside an open gauge, with additional text at the bottom of the gauge.
- [CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeRangeText](clkcomplicationtemplategraphicextralargecircularopengaugerangetext.md): Deprecated. A template for displaying text inside an open gauge, with additional leading and trailing text.
- [CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeImage](clkcomplicationtemplategraphicextralargecircularclosedgaugeimage.md): Deprecated. A template for displaying an extra-large, full-color circular image inside a closed circular gauge.
- [CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeView](clkcomplicationtemplategraphicextralargecircularclosedgaugeview.md): Deprecated. A template for displaying an extra-large SwiftUI view inside a closed circular gauge.

# CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeText (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

A template for displaying text inside an extra-large closed circular gauge.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeText : CLKComplicationTemplateGraphicExtraLargeCircular
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyGraphicExtraLarge](clkcomplicationfamily/graphicextralarge.md) family. [Figure 1](clkcomplicationtemplategraphicextralargecircularclosedgaugetext.md#3667235) shows the layout of the complication and where it appears on the clock face.

![A diagram showing the layout of the complication that calls out the content produced by the gauge and text providers.](https://developer.apple.com/images/com.apple.clockkit/media-3667235@2x.png)

## Topics

### Creating the Template

- [initWithGaugeProvider:centerTextProvider:](clkcomplicationtemplategraphicextralargecircularclosedgaugetext/init%28gaugeprovider_centertextprovider_%29.md): Deprecated. Creates a new template with a closed circular gauge with text in the center.
- [templateWithGaugeProvider:centerTextProvider:](clkcomplicationtemplategraphicextralargecircularclosedgaugetext/templatewithgaugeprovider_centertextprovider_.md): Deprecated. Returns a new template with a closed circular gauge with text in the center.

### Setting the Complication Data

- [centerTextProvider](clkcomplicationtemplategraphicextralargecircularclosedgaugetext/centertextprovider.md): Deprecated. The text to display in the center of the gauge.
- [gaugeProvider](clkcomplicationtemplategraphicextralargecircularclosedgaugetext/gaugeprovider.md): Deprecated. The gauge to display in the complication.

## Relationships

### Inherits From

- [CLKComplicationTemplateGraphicExtraLargeCircular](clkcomplicationtemplategraphicextralargecircular.md)

## See Also

### Open and closed gauges

- [CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeImage](clkcomplicationtemplategraphicextralargecircularopengaugeimage.md): Deprecated. A template for displaying an extra-large, full-color circular image, an open gauge, and text.
- [CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeSimpleText](clkcomplicationtemplategraphicextralargecircularopengaugesimpletext.md): Deprecated. A template for displaying text inside an open gauge, with additional text at the bottom of the gauge.
- [CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeRangeText](clkcomplicationtemplategraphicextralargecircularopengaugerangetext.md): Deprecated. A template for displaying text inside an open gauge, with additional leading and trailing text.
- [CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeImage](clkcomplicationtemplategraphicextralargecircularclosedgaugeimage.md): Deprecated. A template for displaying an extra-large, full-color circular image inside a closed circular gauge.
