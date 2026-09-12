> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicextralargecircularopengaugesimpletext](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicextralargecircularopengaugesimpletext)

# CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeSimpleText (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

A template for displaying text inside an open gauge, with additional text at the bottom of the gauge.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeSimpleText
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicExtraLarge](clkcomplicationfamily/graphicextralarge.md) family. [Figure 1](clkcomplicationtemplategraphicextralargecircularopengaugesimpletext.md#3667232) shows the layout of the complication and where it appears on the clock face.

![A diagram showing the layout of the complication that calls out the content produced by the gauge, center text, and bottom text providers.](https://developer.apple.com/images/com.apple.clockkit/media-3667232@2x.png)

## Topics

### Creating the Template

- [init(gaugeProvider:bottomTextProvider:centerTextProvider:)](clkcomplicationtemplategraphicextralargecircularopengaugesimpletext/init%28gaugeprovider_bottomtextprovider_centertextprovider_%29.md): Deprecated. Creates a new template with an open circular gauge, a small text element at the bottom, and a larger text element in the center.

### Setting the Complication Data

- [bottomTextProvider](clkcomplicationtemplategraphicextralargecircularopengaugesimpletext/bottomtextprovider.md): Deprecated. The text to display at the bottom of the gauge.
- [centerTextProvider](clkcomplicationtemplategraphicextralargecircularopengaugesimpletext/centertextprovider.md): Deprecated. The text to display in the center of the gauge.
- [gaugeProvider](clkcomplicationtemplategraphicextralargecircularopengaugesimpletext/gaugeprovider.md): Deprecated. The gauge to display in the complication.

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
- [CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeRangeText](clkcomplicationtemplategraphicextralargecircularopengaugerangetext.md): Deprecated. A template for displaying text inside an open gauge, with additional leading and trailing text.
- [CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeImage](clkcomplicationtemplategraphicextralargecircularclosedgaugeimage.md): Deprecated. A template for displaying an extra-large, full-color circular image inside a closed circular gauge.
- [CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeView](clkcomplicationtemplategraphicextralargecircularclosedgaugeview.md): Deprecated. A template for displaying an extra-large SwiftUI view inside a closed circular gauge.
- [CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeText](clkcomplicationtemplategraphicextralargecircularclosedgaugetext.md): Deprecated. A template for displaying text inside an extra-large closed circular gauge.

# CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeSimpleText (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

A template for displaying text inside an open gauge, with additional text at the bottom of the gauge.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeSimpleText : CLKComplicationTemplateGraphicExtraLargeCircular
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyGraphicExtraLarge](clkcomplicationfamily/graphicextralarge.md) family. [Figure 1](clkcomplicationtemplategraphicextralargecircularopengaugesimpletext.md#3667232) shows the layout of the complication and where it appears on the clock face.

![A diagram showing the layout of the complication that calls out the content produced by the gauge, center text, and bottom text providers.](https://developer.apple.com/images/com.apple.clockkit/media-3667232@2x.png)

## Topics

### Creating the Template

- [initWithGaugeProvider:bottomTextProvider:centerTextProvider:](clkcomplicationtemplategraphicextralargecircularopengaugesimpletext/init%28gaugeprovider_bottomtextprovider_centertextprovider_%29.md): Deprecated. Creates a new template with an open circular gauge, a small text element at the bottom, and a larger text element in the center.
- [templateWithGaugeProvider:bottomTextProvider:centerTextProvider:](clkcomplicationtemplategraphicextralargecircularopengaugesimpletext/templatewithgaugeprovider_bottomtextprovider_centertextprovider_.md): Deprecated. Returns a new template with an open circular gauge, a small text element at the bottom, and a larger text element in the center.

### Setting the Complication Data

- [bottomTextProvider](clkcomplicationtemplategraphicextralargecircularopengaugesimpletext/bottomtextprovider.md): Deprecated. The text to display at the bottom of the gauge.
- [centerTextProvider](clkcomplicationtemplategraphicextralargecircularopengaugesimpletext/centertextprovider.md): Deprecated. The text to display in the center of the gauge.
- [gaugeProvider](clkcomplicationtemplategraphicextralargecircularopengaugesimpletext/gaugeprovider.md): Deprecated. The gauge to display in the complication.

## Relationships

### Inherits From

- [CLKComplicationTemplateGraphicExtraLargeCircular](clkcomplicationtemplategraphicextralargecircular.md)

## See Also

### Open and closed gauges

- [CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeImage](clkcomplicationtemplategraphicextralargecircularopengaugeimage.md): Deprecated. A template for displaying an extra-large, full-color circular image, an open gauge, and text.
- [CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeRangeText](clkcomplicationtemplategraphicextralargecircularopengaugerangetext.md): Deprecated. A template for displaying text inside an open gauge, with additional leading and trailing text.
- [CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeImage](clkcomplicationtemplategraphicextralargecircularclosedgaugeimage.md): Deprecated. A template for displaying an extra-large, full-color circular image inside a closed circular gauge.
- [CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeText](clkcomplicationtemplategraphicextralargecircularclosedgaugetext.md): Deprecated. A template for displaying text inside an extra-large closed circular gauge.
