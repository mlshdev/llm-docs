> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplatemodularsmallringtext](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatemodularsmallringtext)

# CLKComplicationTemplateModularSmallRingText (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying text encircled by a configurable progress ring.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateModularSmallRingText
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.modularSmall](clkcomplicationfamily/modularsmall.md) family.

![A diagram showing the layout of the modular small ring text complication. The diagram shows text inside a small progress ring.](https://developer.apple.com/images/com.apple.clockkit/media-2933755@2x.png)

## Topics

### Creating the Template

- [init(textProvider:fillFraction:ringStyle:)](clkcomplicationtemplatemodularsmallringtext/init%28textprovider_fillfraction_ringstyle_%29.md): Deprecated. Creates a new template from the provided text, fill fraction, and ring style.

### Setting the Complication Data

- [textProvider](clkcomplicationtemplatemodularsmallringtext/textprovider.md): Deprecated. The text to display in the complication.
- [ringStyle](clkcomplicationtemplatemodularsmallringtext/ringstyle.md): Deprecated. The style of the progress ring.
- [fillFraction](clkcomplicationtemplatemodularsmallringtext/fillfraction.md): Deprecated. The fraction of the ring to fill.

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

- [CLKComplicationTemplateModularSmallColumnsText](clkcomplicationtemplatemodularsmallcolumnstext.md): Deprecated. A template for displaying two rows and two columns of text.
- [CLKComplicationTemplateModularSmallSimpleText](clkcomplicationtemplatemodularsmallsimpletext.md): Deprecated. A template for displaying a small amount of text.
- [CLKComplicationTemplateModularSmallStackText](clkcomplicationtemplatemodularsmallstacktext.md): Deprecated. A template for displaying two strings stacked one on top of the other.

# CLKComplicationTemplateModularSmallRingText (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying text encircled by a configurable progress ring.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateModularSmallRingText : CLKComplicationTemplate
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyModularSmall](clkcomplicationfamily/modularsmall.md) family.

![A diagram showing the layout of the modular small ring text complication. The diagram shows text inside a small progress ring.](https://developer.apple.com/images/com.apple.clockkit/media-2933755@2x.png)

## Topics

### Creating the Template

- [initWithTextProvider:fillFraction:ringStyle:](clkcomplicationtemplatemodularsmallringtext/init%28textprovider_fillfraction_ringstyle_%29.md): Deprecated. Creates a new template from the provided text, fill fraction, and ring style.
- [templateWithTextProvider:fillFraction:ringStyle:](clkcomplicationtemplatemodularsmallringtext/templatewithtextprovider_fillfraction_ringstyle_.md): Deprecated. Returns a new template from the provided text, fill fraction, and ring style.

### Setting the Complication Data

- [textProvider](clkcomplicationtemplatemodularsmallringtext/textprovider.md): Deprecated. The text to display in the complication.
- [ringStyle](clkcomplicationtemplatemodularsmallringtext/ringstyle.md): Deprecated. The style of the progress ring.
- [fillFraction](clkcomplicationtemplatemodularsmallringtext/fillfraction.md): Deprecated. The fraction of the ring to fill.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

## See Also

### Text templates

- [CLKComplicationTemplateModularSmallColumnsText](clkcomplicationtemplatemodularsmallcolumnstext.md): Deprecated. A template for displaying two rows and two columns of text.
- [CLKComplicationTemplateModularSmallSimpleText](clkcomplicationtemplatemodularsmallsimpletext.md): Deprecated. A template for displaying a small amount of text.
- [CLKComplicationTemplateModularSmallStackText](clkcomplicationtemplatemodularsmallstacktext.md): Deprecated. A template for displaying two strings stacked one on top of the other.
