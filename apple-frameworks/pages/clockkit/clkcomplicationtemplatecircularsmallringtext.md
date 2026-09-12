> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplatecircularsmallringtext](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatecircularsmallringtext)

# CLKComplicationTemplateCircularSmallRingText (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying a short text string encircled by a configurable progress ring.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateCircularSmallRingText
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.circularSmall](clkcomplicationfamily/circularsmall.md) family.

![A diagram showing the layout of the circular small ring text complication. The diagram shows three examples, each displaying text inside a small progress ring.](https://developer.apple.com/images/com.apple.clockkit/media-2933737@2x.png)

## Topics

### Creating the Template

- [init(textProvider:fillFraction:ringStyle:)](clkcomplicationtemplatecircularsmallringtext/init%28textprovider_fillfraction_ringstyle_%29.md): Deprecated. Creates a new template from the provided text, fill fraction, and ring style.

### Setting the Complication Data

- [textProvider](clkcomplicationtemplatecircularsmallringtext/textprovider.md): Deprecated. The text to display in the complication.
- [ringStyle](clkcomplicationtemplatecircularsmallringtext/ringstyle.md): Deprecated. The style of the progress ring.
- [fillFraction](clkcomplicationtemplatecircularsmallringtext/fillfraction.md): Deprecated. The fraction of the ring to fill.

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

- [CLKComplicationTemplateCircularSmallSimpleText](clkcomplicationtemplatecircularsmallsimpletext.md): Deprecated. A template for displaying a short text string.
- [CLKComplicationTemplateCircularSmallStackText](clkcomplicationtemplatecircularsmallstacktext.md): Deprecated. A template for displaying two text strings stacked on top of each other.

# CLKComplicationTemplateCircularSmallRingText (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying a short text string encircled by a configurable progress ring.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateCircularSmallRingText : CLKComplicationTemplate
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyCircularSmall](clkcomplicationfamily/circularsmall.md) family.

![A diagram showing the layout of the circular small ring text complication. The diagram shows three examples, each displaying text inside a small progress ring.](https://developer.apple.com/images/com.apple.clockkit/media-2933737@2x.png)

## Topics

### Creating the Template

- [initWithTextProvider:fillFraction:ringStyle:](clkcomplicationtemplatecircularsmallringtext/init%28textprovider_fillfraction_ringstyle_%29.md): Deprecated. Creates a new template from the provided text, fill fraction, and ring style.
- [templateWithTextProvider:fillFraction:ringStyle:](clkcomplicationtemplatecircularsmallringtext/templatewithtextprovider_fillfraction_ringstyle_.md): Deprecated. Returns a new template from the provided text, fill fraction, and ring style.

### Setting the Complication Data

- [textProvider](clkcomplicationtemplatecircularsmallringtext/textprovider.md): Deprecated. The text to display in the complication.
- [ringStyle](clkcomplicationtemplatecircularsmallringtext/ringstyle.md): Deprecated. The style of the progress ring.
- [fillFraction](clkcomplicationtemplatecircularsmallringtext/fillfraction.md): Deprecated. The fraction of the ring to fill.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

## See Also

### Text templates

- [CLKComplicationTemplateCircularSmallSimpleText](clkcomplicationtemplatecircularsmallsimpletext.md): Deprecated. A template for displaying a short text string.
- [CLKComplicationTemplateCircularSmallStackText](clkcomplicationtemplatecircularsmallstacktext.md): Deprecated. A template for displaying two text strings stacked on top of each other.
