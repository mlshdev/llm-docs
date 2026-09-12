> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplateextralargestacktext](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplateextralargestacktext)

# CLKComplicationTemplateExtraLargeStackText (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 3.0+ (deprecated in 27.0)

A template for displaying two strings stacked one on top of the other.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateExtraLargeStackText
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.extraLarge](clkcomplicationfamily/extralarge.md) family.

![A diagram showing the layout of the extra large stack text complication. The diagram shows two rows of text.](https://developer.apple.com/images/com.apple.clockkit/media-2880724@2x.png)

## Topics

### Creating the Template

- [init(line1TextProvider:line2TextProvider:)](clkcomplicationtemplateextralargestacktext/init%28line1textprovider_line2textprovider_%29.md): Deprecated. Creates a new template that has two rows of text.

### Setting the Complication Data

- [highlightLine2](clkcomplicationtemplateextralargestacktext/highlightline2.md): Deprecated. A Boolean value indicating which line should be drawn with a highlight.
- [line1TextProvider](clkcomplicationtemplateextralargestacktext/line1textprovider.md): Deprecated. The text to display on the top line of the complication.
- [line2TextProvider](clkcomplicationtemplateextralargestacktext/line2textprovider.md): Deprecated. The text to display on the bottom line of the complication.

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
- [CLKComplicationTemplateExtraLargeRingText](clkcomplicationtemplateextralargeringtext.md): Deprecated. A template for displaying text encircled by a configurable progress ring.
- [CLKComplicationTemplateExtraLargeSimpleText](clkcomplicationtemplateextralargesimpletext.md): Deprecated. A template for displaying a small amount of text.

# CLKComplicationTemplateExtraLargeStackText (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 3.0+ (deprecated in 27.0)

A template for displaying two strings stacked one on top of the other.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateExtraLargeStackText : CLKComplicationTemplate
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyExtraLarge](clkcomplicationfamily/extralarge.md) family.

![A diagram showing the layout of the extra large stack text complication. The diagram shows two rows of text.](https://developer.apple.com/images/com.apple.clockkit/media-2880724@2x.png)

## Topics

### Creating the Template

- [initWithLine1TextProvider:line2TextProvider:](clkcomplicationtemplateextralargestacktext/init%28line1textprovider_line2textprovider_%29.md): Deprecated. Creates a new template that has two rows of text.
- [templateWithLine1TextProvider:line2TextProvider:](clkcomplicationtemplateextralargestacktext/templatewithline1textprovider_line2textprovider_.md): Deprecated. Returns a new template that has two rows of text.

### Setting the Complication Data

- [highlightLine2](clkcomplicationtemplateextralargestacktext/highlightline2.md): Deprecated. A Boolean value indicating which line should be drawn with a highlight.
- [line1TextProvider](clkcomplicationtemplateextralargestacktext/line1textprovider.md): Deprecated. The text to display on the top line of the complication.
- [line2TextProvider](clkcomplicationtemplateextralargestacktext/line2textprovider.md): Deprecated. The text to display on the bottom line of the complication.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

## See Also

### Text templates

- [CLKComplicationTemplateExtraLargeColumnsText](clkcomplicationtemplateextralargecolumnstext.md): Deprecated. A template for displaying two rows and two columns of text.
- [CLKComplicationTemplateExtraLargeRingText](clkcomplicationtemplateextralargeringtext.md): Deprecated. A template for displaying text encircled by a configurable progress ring.
- [CLKComplicationTemplateExtraLargeSimpleText](clkcomplicationtemplateextralargesimpletext.md): Deprecated. A template for displaying a small amount of text.
