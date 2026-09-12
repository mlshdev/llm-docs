> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplateextralargecolumnstext](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplateextralargecolumnstext)

# CLKComplicationTemplateExtraLargeColumnsText (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 3.0+ (deprecated in 27.0)

A template for displaying two rows and two columns of text.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateExtraLargeColumnsText
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.extraLarge](clkcomplicationfamily/extralarge.md) family.

![A diagram showing the layout of the extra large columns text complication. The diagram shows two rows, each containing two columns of text. ](https://developer.apple.com/images/com.apple.clockkit/media-2919001@2x.png)

## Topics

### Creating the Template

- [init(row1Column1TextProvider:row1Column2TextProvider:row2Column1TextProvider:row2Column2TextProvider:)](clkcomplicationtemplateextralargecolumnstext/init%28row1column1textprovider_row1column2textprovider_row2column1textprovider_row2column2textprovider_%29.md): Deprecated. Creates a new template that has two columns of text.

### Setting the Complication Data

- [column2Alignment](clkcomplicationtemplateextralargecolumnstext/column2alignment.md): Deprecated. The alignment of the text in the second column.
- [highlightColumn2](clkcomplicationtemplateextralargecolumnstext/highlightcolumn2.md): Deprecated. A Boolean value indicating which column should be drawn with a highlight.
- [row1Column1TextProvider](clkcomplicationtemplateextralargecolumnstext/row1column1textprovider.md): Deprecated. The text to display in the first column of the first row.
- [row1Column2TextProvider](clkcomplicationtemplateextralargecolumnstext/row1column2textprovider.md): Deprecated. The text to display in the second column of the first row.
- [row2Column1TextProvider](clkcomplicationtemplateextralargecolumnstext/row2column1textprovider.md): Deprecated. The text to display in the first column of the second row.
- [row2Column2TextProvider](clkcomplicationtemplateextralargecolumnstext/row2column2textprovider.md): Deprecated. The text to display in the second column of the second row.

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

- [CLKComplicationTemplateExtraLargeRingText](clkcomplicationtemplateextralargeringtext.md): Deprecated. A template for displaying text encircled by a configurable progress ring.
- [CLKComplicationTemplateExtraLargeSimpleText](clkcomplicationtemplateextralargesimpletext.md): Deprecated. A template for displaying a small amount of text.
- [CLKComplicationTemplateExtraLargeStackText](clkcomplicationtemplateextralargestacktext.md): Deprecated. A template for displaying two strings stacked one on top of the other.

# CLKComplicationTemplateExtraLargeColumnsText (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 3.0+ (deprecated in 27.0)

A template for displaying two rows and two columns of text.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateExtraLargeColumnsText : CLKComplicationTemplate
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyExtraLarge](clkcomplicationfamily/extralarge.md) family.

![A diagram showing the layout of the extra large columns text complication. The diagram shows two rows, each containing two columns of text. ](https://developer.apple.com/images/com.apple.clockkit/media-2919001@2x.png)

## Topics

### Creating the Template

- [initWithRow1Column1TextProvider:row1Column2TextProvider:row2Column1TextProvider:row2Column2TextProvider:](clkcomplicationtemplateextralargecolumnstext/init%28row1column1textprovider_row1column2textprovider_row2column1textprovider_row2column2textprovider_%29.md): Deprecated. Creates a new template that has two columns of text.
- [templateWithRow1Column1TextProvider:row1Column2TextProvider:row2Column1TextProvider:row2Column2TextProvider:](clkcomplicationtemplateextralargecolumnstext/templatewithrow1column1textprovider_row1column2textprovider_row2column1textprovider_row2column2textprovider_.md): Deprecated. Returns a new template that has two columns of text.

### Setting the Complication Data

- [column2Alignment](clkcomplicationtemplateextralargecolumnstext/column2alignment.md): Deprecated. The alignment of the text in the second column.
- [highlightColumn2](clkcomplicationtemplateextralargecolumnstext/highlightcolumn2.md): Deprecated. A Boolean value indicating which column should be drawn with a highlight.
- [row1Column1TextProvider](clkcomplicationtemplateextralargecolumnstext/row1column1textprovider.md): Deprecated. The text to display in the first column of the first row.
- [row1Column2TextProvider](clkcomplicationtemplateextralargecolumnstext/row1column2textprovider.md): Deprecated. The text to display in the second column of the first row.
- [row2Column1TextProvider](clkcomplicationtemplateextralargecolumnstext/row2column1textprovider.md): Deprecated. The text to display in the first column of the second row.
- [row2Column2TextProvider](clkcomplicationtemplateextralargecolumnstext/row2column2textprovider.md): Deprecated. The text to display in the second column of the second row.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

## See Also

### Text templates

- [CLKComplicationTemplateExtraLargeRingText](clkcomplicationtemplateextralargeringtext.md): Deprecated. A template for displaying text encircled by a configurable progress ring.
- [CLKComplicationTemplateExtraLargeSimpleText](clkcomplicationtemplateextralargesimpletext.md): Deprecated. A template for displaying a small amount of text.
- [CLKComplicationTemplateExtraLargeStackText](clkcomplicationtemplateextralargestacktext.md): Deprecated. A template for displaying two strings stacked one on top of the other.
