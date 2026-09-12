> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicextralargecircularstacktext](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicextralargecircularstacktext)

# CLKComplicationTemplateGraphicExtraLargeCircularStackText (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

A template for displaying two rows of text in an extra-large, circular complication.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateGraphicExtraLargeCircularStackText
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicExtraLarge](clkcomplicationfamily/graphicextralarge.md) family. [Figure 1](clkcomplicationtemplategraphicextralargecircularstacktext.md#3667233) shows the layout of the complication and where it appears on the clock face.

![A diagram showing the layout of the complication that calls out the content produced by the text providers.](https://developer.apple.com/images/com.apple.clockkit/media-3667233@2x.png)

## Topics

### Creating the Template

- [init(line1TextProvider:line2TextProvider:)](clkcomplicationtemplategraphicextralargecircularstacktext/init%28line1textprovider_line2textprovider_%29.md): Deprecated. Creates a new template with two rows of text.

### Setting the Complication Data

- [line1TextProvider](clkcomplicationtemplategraphicextralargecircularstacktext/line1textprovider.md): Deprecated. The text to display on the top row.
- [line2TextProvider](clkcomplicationtemplategraphicextralargecircularstacktext/line2textprovider.md): Deprecated. The text to display on the bottom row.

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

### Text and images

- [CLKComplicationTemplateGraphicExtraLargeCircularImage](clkcomplicationtemplategraphicextralargecircularimage.md): Deprecated. A template for displaying an extra-large, full-color circular image.
- [CLKComplicationTemplateGraphicExtraLargeCircularView](clkcomplicationtemplategraphicextralargecircularview.md): Deprecated. A template for displaying a circular SwiftUI view.
- [CLKComplicationTemplateGraphicExtraLargeCircularStackImage](clkcomplicationtemplategraphicextralargecircularstackimage.md): Deprecated. A template for displaying an extra-large, full-color circular image and text.
- [CLKComplicationTemplateGraphicExtraLargeCircularStackViewText](clkcomplicationtemplategraphicextralargecircularstackviewtext.md): Deprecated. A template for displaying a SwiftUI view and text.

# CLKComplicationTemplateGraphicExtraLargeCircularStackText (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

A template for displaying two rows of text in an extra-large, circular complication.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateGraphicExtraLargeCircularStackText : CLKComplicationTemplateGraphicExtraLargeCircular
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyGraphicExtraLarge](clkcomplicationfamily/graphicextralarge.md) family. [Figure 1](clkcomplicationtemplategraphicextralargecircularstacktext.md#3667233) shows the layout of the complication and where it appears on the clock face.

![A diagram showing the layout of the complication that calls out the content produced by the text providers.](https://developer.apple.com/images/com.apple.clockkit/media-3667233@2x.png)

## Topics

### Creating the Template

- [initWithLine1TextProvider:line2TextProvider:](clkcomplicationtemplategraphicextralargecircularstacktext/init%28line1textprovider_line2textprovider_%29.md): Deprecated. Creates a new template with two rows of text.
- [templateWithLine1TextProvider:line2TextProvider:](clkcomplicationtemplategraphicextralargecircularstacktext/templatewithline1textprovider_line2textprovider_.md): Deprecated. Returns a new template with two rows of text.

### Setting the Complication Data

- [line1TextProvider](clkcomplicationtemplategraphicextralargecircularstacktext/line1textprovider.md): Deprecated. The text to display on the top row.
- [line2TextProvider](clkcomplicationtemplategraphicextralargecircularstacktext/line2textprovider.md): Deprecated. The text to display on the bottom row.

## Relationships

### Inherits From

- [CLKComplicationTemplateGraphicExtraLargeCircular](clkcomplicationtemplategraphicextralargecircular.md)

## See Also

### Text and images

- [CLKComplicationTemplateGraphicExtraLargeCircularImage](clkcomplicationtemplategraphicextralargecircularimage.md): Deprecated. A template for displaying an extra-large, full-color circular image.
- [CLKComplicationTemplateGraphicExtraLargeCircularStackImage](clkcomplicationtemplategraphicextralargecircularstackimage.md): Deprecated. A template for displaying an extra-large, full-color circular image and text.
