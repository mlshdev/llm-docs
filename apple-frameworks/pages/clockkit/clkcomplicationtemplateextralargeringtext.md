> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplateextralargeringtext](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplateextralargeringtext)

# CLKComplicationTemplateExtraLargeRingText (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 3.0+ (deprecated in 27.0)

A template for displaying text encircled by a configurable progress ring.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateExtraLargeRingText
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.extraLarge](clkcomplicationfamily/extralarge.md) family.

![A diagram showing the layout of the extra large ring text complication. The diagram shows text inside a progress ring.](https://developer.apple.com/images/com.apple.clockkit/media-2880719@2x.png)

## Topics

### Creating the Template

- [init(textProvider:fillFraction:ringStyle:)](clkcomplicationtemplateextralargeringtext/init%28textprovider_fillfraction_ringstyle_%29.md): Deprecated. Creates a new template from the provided text, fill fraction, and ring style.

### Setting the Complication Data

- [fillFraction](clkcomplicationtemplateextralargeringtext/fillfraction.md): Deprecated. Setting the Complication Data.
- [ringStyle](clkcomplicationtemplateextralargeringtext/ringstyle.md): Deprecated. The style of the progress ring.
- [textProvider](clkcomplicationtemplateextralargeringtext/textprovider.md): Deprecated. The text to display in the complication.

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

### Text templates

- [CLKComplicationTemplateExtraLargeColumnsText](clkcomplicationtemplateextralargecolumnstext.md): Deprecated. A template for displaying two rows and two columns of text.
- [CLKComplicationTemplateExtraLargeSimpleText](clkcomplicationtemplateextralargesimpletext.md): Deprecated. A template for displaying a small amount of text.
- [CLKComplicationTemplateExtraLargeStackText](clkcomplicationtemplateextralargestacktext.md): Deprecated. A template for displaying two strings stacked one on top of the other.

# CLKComplicationTemplateExtraLargeRingText (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 3.0+ (deprecated in 27.0)

A template for displaying text encircled by a configurable progress ring.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateExtraLargeRingText : CLKComplicationTemplate
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyExtraLarge](clkcomplicationfamily/extralarge.md) family.

![A diagram showing the layout of the extra large ring text complication. The diagram shows text inside a progress ring.](https://developer.apple.com/images/com.apple.clockkit/media-2880719@2x.png)

## Topics

### Creating the Template

- [initWithTextProvider:fillFraction:ringStyle:](clkcomplicationtemplateextralargeringtext/init%28textprovider_fillfraction_ringstyle_%29.md): Deprecated. Creates a new template from the provided text, fill fraction, and ring style.
- [templateWithTextProvider:fillFraction:ringStyle:](clkcomplicationtemplateextralargeringtext/templatewithtextprovider_fillfraction_ringstyle_.md): Deprecated. Returns a new template from the provided text, fill fraction, and ring style.

### Setting the Complication Data

- [fillFraction](clkcomplicationtemplateextralargeringtext/fillfraction.md): Deprecated. Setting the Complication Data.
- [ringStyle](clkcomplicationtemplateextralargeringtext/ringstyle.md): Deprecated. The style of the progress ring.
- [textProvider](clkcomplicationtemplateextralargeringtext/textprovider.md): Deprecated. The text to display in the complication.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

## See Also

### Text templates

- [CLKComplicationTemplateExtraLargeColumnsText](clkcomplicationtemplateextralargecolumnstext.md): Deprecated. A template for displaying two rows and two columns of text.
- [CLKComplicationTemplateExtraLargeSimpleText](clkcomplicationtemplateextralargesimpletext.md): Deprecated. A template for displaying a small amount of text.
- [CLKComplicationTemplateExtraLargeStackText](clkcomplicationtemplateextralargestacktext.md): Deprecated. A template for displaying two strings stacked one on top of the other.
