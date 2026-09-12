> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplatemodularsmallstacktext](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatemodularsmallstacktext)

# CLKComplicationTemplateModularSmallStackText (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying two strings stacked one on top of the other.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateModularSmallStackText
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.modularSmall](clkcomplicationfamily/modularsmall.md) family.

![A diagram showing the layout of the modular small stack text complication. The diagram shows two small rows of text.](https://developer.apple.com/images/com.apple.clockkit/media-2933757@2x.png)

## Topics

### Creating the Template

- [init(line1TextProvider:line2TextProvider:)](clkcomplicationtemplatemodularsmallstacktext/init%28line1textprovider_line2textprovider_%29.md): Deprecated. Creates a new template that has two lines of text.

### Setting the Complication Data

- [line1TextProvider](clkcomplicationtemplatemodularsmallstacktext/line1textprovider.md): Deprecated. The text to display on the top line of the complication.
- [line2TextProvider](clkcomplicationtemplatemodularsmallstacktext/line2textprovider.md): Deprecated. The text to display on the bottom line of the complication.
- [highlightLine2](clkcomplicationtemplatemodularsmallstacktext/highlightline2.md): Deprecated. A Boolean value indicating which line should be drawn with a highlight.

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
- [CLKComplicationTemplateModularSmallSimpleText](clkcomplicationtemplatemodularsmallsimpletext.md): Deprecated. A template for displaying a small amount of text.

# CLKComplicationTemplateModularSmallStackText (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying two strings stacked one on top of the other.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateModularSmallStackText : CLKComplicationTemplate
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyModularSmall](clkcomplicationfamily/modularsmall.md) family.

![A diagram showing the layout of the modular small stack text complication. The diagram shows two small rows of text.](https://developer.apple.com/images/com.apple.clockkit/media-2933757@2x.png)

## Topics

### Creating the Template

- [initWithLine1TextProvider:line2TextProvider:](clkcomplicationtemplatemodularsmallstacktext/init%28line1textprovider_line2textprovider_%29.md): Deprecated. Creates a new template that has two lines of text.
- [templateWithLine1TextProvider:line2TextProvider:](clkcomplicationtemplatemodularsmallstacktext/templatewithline1textprovider_line2textprovider_.md): Deprecated. Returns a new template that has two lines of text.

### Setting the Complication Data

- [line1TextProvider](clkcomplicationtemplatemodularsmallstacktext/line1textprovider.md): Deprecated. The text to display on the top line of the complication.
- [line2TextProvider](clkcomplicationtemplatemodularsmallstacktext/line2textprovider.md): Deprecated. The text to display on the bottom line of the complication.
- [highlightLine2](clkcomplicationtemplatemodularsmallstacktext/highlightline2.md): Deprecated. A Boolean value indicating which line should be drawn with a highlight.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

## See Also

### Text templates

- [CLKComplicationTemplateModularSmallColumnsText](clkcomplicationtemplatemodularsmallcolumnstext.md): Deprecated. A template for displaying two rows and two columns of text.
- [CLKComplicationTemplateModularSmallRingText](clkcomplicationtemplatemodularsmallringtext.md): Deprecated. A template for displaying text encircled by a configurable progress ring.
- [CLKComplicationTemplateModularSmallSimpleText](clkcomplicationtemplatemodularsmallsimpletext.md): Deprecated. A template for displaying a small amount of text.
