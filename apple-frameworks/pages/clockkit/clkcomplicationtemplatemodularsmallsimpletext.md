> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplatemodularsmallsimpletext](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatemodularsmallsimpletext)

# CLKComplicationTemplateModularSmallSimpleText (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying a small amount of text.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateModularSmallSimpleText
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.modularSmall](clkcomplicationfamily/modularsmall.md) family.

![A diagram showing the layout of the modular small simple text complication. The diagram shows a small amount of text.](https://developer.apple.com/images/com.apple.clockkit/media-2933756@2x.png)

## Topics

### Creating the Template

- [init(textProvider:)](clkcomplicationtemplatemodularsmallsimpletext/init%28textprovider_%29.md): Deprecated. Creates a new template from the provided text.

### Setting the Complication Data

- [textProvider](clkcomplicationtemplatemodularsmallsimpletext/textprovider.md): Deprecated. The text to display in the complication.

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
- [CLKComplicationTemplateModularSmallRingText](clkcomplicationtemplatemodularsmallringtext.md): Deprecated. A template for displaying text encircled by a configurable progress ring.
- [CLKComplicationTemplateModularSmallStackText](clkcomplicationtemplatemodularsmallstacktext.md): Deprecated. A template for displaying two strings stacked one on top of the other.

# CLKComplicationTemplateModularSmallSimpleText (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying a small amount of text.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateModularSmallSimpleText : CLKComplicationTemplate
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyModularSmall](clkcomplicationfamily/modularsmall.md) family.

![A diagram showing the layout of the modular small simple text complication. The diagram shows a small amount of text.](https://developer.apple.com/images/com.apple.clockkit/media-2933756@2x.png)

## Topics

### Creating the Template

- [initWithTextProvider:](clkcomplicationtemplatemodularsmallsimpletext/init%28textprovider_%29.md): Deprecated. Creates a new template from the provided text.
- [templateWithTextProvider:](clkcomplicationtemplatemodularsmallsimpletext/templatewithtextprovider_.md): Deprecated. Returns a new template from the provided text.

### Setting the Complication Data

- [textProvider](clkcomplicationtemplatemodularsmallsimpletext/textprovider.md): Deprecated. The text to display in the complication.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

## See Also

### Text templates

- [CLKComplicationTemplateModularSmallColumnsText](clkcomplicationtemplatemodularsmallcolumnstext.md): Deprecated. A template for displaying two rows and two columns of text.
- [CLKComplicationTemplateModularSmallRingText](clkcomplicationtemplatemodularsmallringtext.md): Deprecated. A template for displaying text encircled by a configurable progress ring.
- [CLKComplicationTemplateModularSmallStackText](clkcomplicationtemplatemodularsmallstacktext.md): Deprecated. A template for displaying two strings stacked one on top of the other.
