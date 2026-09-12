> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicextralargecircularopengaugerangetext](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicextralargecircularopengaugerangetext)

# CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeRangeText (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

A template for displaying text inside an open gauge, with additional leading and trailing text.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeRangeText
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicExtraLarge](clkcomplicationfamily/graphicextralarge.md) family. [Figure 1](clkcomplicationtemplategraphicextralargecircularopengaugerangetext.md#3667406) shows the layout of the complication and where it appears on the clock face.

![A diagram showing the layout of the complication that calls out the content produced by the gauge, leading text, trailing text, and center text providers.](https://developer.apple.com/images/com.apple.clockkit/media-3667406@2x.png)

## Topics

### Creating the Template

- [init(gaugeProvider:leadingTextProvider:trailingTextProvider:centerTextProvider:)](clkcomplicationtemplategraphicextralargecircularopengaugerangetext/init%28gaugeprovider_leadingtextprovider_trailingtextprovider_centertextprovider_%29.md): Deprecated. Creates a new template that has an open, circular gauge with leading and trailing text, and a central text element.

### Setting the Complication Data

- [centerTextProvider](clkcomplicationtemplategraphicextralargecircularopengaugerangetext/centertextprovider.md): Deprecated. The text to display in the center of the gauge.
- [gaugeProvider](clkcomplicationtemplategraphicextralargecircularopengaugerangetext/gaugeprovider.md): Deprecated. The gauge to display in the complication.
- [leadingTextProvider](clkcomplicationtemplategraphicextralargecircularopengaugerangetext/leadingtextprovider.md): Deprecated. The text to display on the leading edge of the gauge.
- [trailingTextProvider](clkcomplicationtemplategraphicextralargecircularopengaugerangetext/trailingtextprovider.md): Deprecated. The text to display on the trailing edge of the gauge.

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
- [CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeImage](clkcomplicationtemplategraphicextralargecircularclosedgaugeimage.md): Deprecated. A template for displaying an extra-large, full-color circular image inside a closed circular gauge.
- [CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeView](clkcomplicationtemplategraphicextralargecircularclosedgaugeview.md): Deprecated. A template for displaying an extra-large SwiftUI view inside a closed circular gauge.
- [CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeText](clkcomplicationtemplategraphicextralargecircularclosedgaugetext.md): Deprecated. A template for displaying text inside an extra-large closed circular gauge.

# CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeRangeText (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

A template for displaying text inside an open gauge, with additional leading and trailing text.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeRangeText : CLKComplicationTemplateGraphicExtraLargeCircular
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyGraphicExtraLarge](clkcomplicationfamily/graphicextralarge.md) family. [Figure 1](clkcomplicationtemplategraphicextralargecircularopengaugerangetext.md#3667406) shows the layout of the complication and where it appears on the clock face.

![A diagram showing the layout of the complication that calls out the content produced by the gauge, leading text, trailing text, and center text providers.](https://developer.apple.com/images/com.apple.clockkit/media-3667406@2x.png)

## Topics

### Creating the Template

- [initWithGaugeProvider:leadingTextProvider:trailingTextProvider:centerTextProvider:](clkcomplicationtemplategraphicextralargecircularopengaugerangetext/init%28gaugeprovider_leadingtextprovider_trailingtextprovider_centertextprovider_%29.md): Deprecated. Creates a new template that has an open, circular gauge with leading and trailing text, and a central text element.
- [templateWithGaugeProvider:leadingTextProvider:trailingTextProvider:centerTextProvider:](clkcomplicationtemplategraphicextralargecircularopengaugerangetext/templatewithgaugeprovider_leadingtextprovider_trailingtextprovider_centertextprovider_.md): Deprecated. Returns a new template that has an open, circular gauge with leading and trailing text, and a central text element.

### Setting the Complication Data

- [centerTextProvider](clkcomplicationtemplategraphicextralargecircularopengaugerangetext/centertextprovider.md): Deprecated. The text to display in the center of the gauge.
- [gaugeProvider](clkcomplicationtemplategraphicextralargecircularopengaugerangetext/gaugeprovider.md): Deprecated. The gauge to display in the complication.
- [leadingTextProvider](clkcomplicationtemplategraphicextralargecircularopengaugerangetext/leadingtextprovider.md): Deprecated. The text to display on the leading edge of the gauge.
- [trailingTextProvider](clkcomplicationtemplategraphicextralargecircularopengaugerangetext/trailingtextprovider.md): Deprecated. The text to display on the trailing edge of the gauge.

## Relationships

### Inherits From

- [CLKComplicationTemplateGraphicExtraLargeCircular](clkcomplicationtemplategraphicextralargecircular.md)

## See Also

### Open and closed gauges

- [CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeImage](clkcomplicationtemplategraphicextralargecircularopengaugeimage.md): Deprecated. A template for displaying an extra-large, full-color circular image, an open gauge, and text.
- [CLKComplicationTemplateGraphicExtraLargeCircularOpenGaugeSimpleText](clkcomplicationtemplategraphicextralargecircularopengaugesimpletext.md): Deprecated. A template for displaying text inside an open gauge, with additional text at the bottom of the gauge.
- [CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeImage](clkcomplicationtemplategraphicextralargecircularclosedgaugeimage.md): Deprecated. A template for displaying an extra-large, full-color circular image inside a closed circular gauge.
- [CLKComplicationTemplateGraphicExtraLargeCircularClosedGaugeText](clkcomplicationtemplategraphicextralargecircularclosedgaugetext.md): Deprecated. A template for displaying text inside an extra-large closed circular gauge.
