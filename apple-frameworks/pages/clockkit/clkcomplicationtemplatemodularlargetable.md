> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplatemodularlargetable](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatemodularlargetable)

# CLKComplicationTemplateModularLargeTable (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying a header row and columns.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateModularLargeTable
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.modularLarge](clkcomplicationfamily/modularlarge.md) family.

![A diagram showing the layout of the modular large table complication. The diagram shows a table with a header row and two rows of text, each containing two collumns. The table can also have an optional header image.](https://developer.apple.com/images/com.apple.clockkit/media-2933750@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as `@2x` images for display on Apple Watch, so the point-based dimensions are half the listed size. The width of the image must be between the specified minimum and maximum (inclusive).

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 38 mm | 22 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 64 pixels maximum | 22 pixels |
| 40 mm | 24 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 74 pixels maximum | 24 pixels |
| 41 mm | 25 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 78 pixels maximum | 25 pixels |
| 42 mm | 24 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 74 pixels maximum | 24 pixels |
| 44 mm | 28 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 84 pixels maximum | 28 pixels |
| 45 mm | 29 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 88 pixels maximum | 29 pixels |

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Manage Assets`.

## Topics

### Creating the Template

- [init(headerTextProvider:row1Column1TextProvider:row1Column2TextProvider:row2Column1TextProvider:row2Column2TextProvider:)](clkcomplicationtemplatemodularlargetable/init%28headertextprovider_row1column1textprovider_row1column2textprovider_row2column1textprovider_row2column2textprovider_%29.md): Deprecated. Creates a template that has a header and two columns of text.
- [init(headerImageProvider:headerTextProvider:row1Column1TextProvider:row1Column2TextProvider:row2Column1TextProvider:row2Column2TextProvider:)](clkcomplicationtemplatemodularlargetable/init%28headerimageprovider_headertextprovider_row1column1textprovider_row1column2textprovider_row2column1textprovider_row2column2textprovider_%29.md): Deprecated. Creates a template that has a header row with an image and text, and two columns of text.

### Setting the Complication Data

- [headerImageProvider](clkcomplicationtemplatemodularlargetable/headerimageprovider.md): Deprecated. An optional image to display in the header.
- [headerTextProvider](clkcomplicationtemplatemodularlargetable/headertextprovider.md): Deprecated. The text to display in the header line.
- [row1Column1TextProvider](clkcomplicationtemplatemodularlargetable/row1column1textprovider.md): Deprecated. The text to display in the first column of the first row.
- [row1Column2TextProvider](clkcomplicationtemplatemodularlargetable/row1column2textprovider.md): Deprecated. The text to display in the second column of the first row.
- [row2Column1TextProvider](clkcomplicationtemplatemodularlargetable/row2column1textprovider.md): Deprecated. The text to display in the first column of the second row.
- [row2Column2TextProvider](clkcomplicationtemplatemodularlargetable/row2column2textprovider.md): Deprecated. The text to display in the second column of the second row.
- [column2Alignment](clkcomplicationtemplatemodularlargetable/column2alignment.md): Deprecated. The alignment of the text in the second column.

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

### Table templates

- [CLKComplicationTemplateModularLargeColumns](clkcomplicationtemplatemodularlargecolumns.md): Deprecated. A template for displaying multiple columns of data.

# CLKComplicationTemplateModularLargeTable (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying a header row and columns.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateModularLargeTable : CLKComplicationTemplate
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyModularLarge](clkcomplicationfamily/modularlarge.md) family.

![A diagram showing the layout of the modular large table complication. The diagram shows a table with a header row and two rows of text, each containing two collumns. The table can also have an optional header image.](https://developer.apple.com/images/com.apple.clockkit/media-2933750@2x.png)

The following table lists the dimensions of the image you use in this template. All dimensions are in pixels. All images must be specified as `@2x` images for display on Apple Watch, so the point-based dimensions are half the listed size. The width of the image must be between the specified minimum and maximum (inclusive).

| Apple Watch Size | Width | Height |
| --- | --- | --- |
| 38 mm | 22 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 64 pixels maximum | 22 pixels |
| 40 mm | 24 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 74 pixels maximum | 24 pixels |
| 41 mm | 25 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 78 pixels maximum | 25 pixels |
| 42 mm | 24 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 74 pixels maximum | 24 pixels |
| 44 mm | 28 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 84 pixels maximum | 28 pixels |
| 45 mm | 29 pixels minimum ![](https://developer.apple.com/images/com.apple.clockkit/spacer.png) 88 pixels maximum | 29 pixels |

Instead of providing multiple images with different resolutions, you can provide a single, scaleable PDF asset. For more information, see `Manage Assets`.

## Topics

### Creating the Template

- [initWithHeaderTextProvider:row1Column1TextProvider:row1Column2TextProvider:row2Column1TextProvider:row2Column2TextProvider:](clkcomplicationtemplatemodularlargetable/init%28headertextprovider_row1column1textprovider_row1column2textprovider_row2column1textprovider_row2column2textprovider_%29.md): Deprecated. Creates a template that has a header and two columns of text.
- [initWithHeaderImageProvider:headerTextProvider:row1Column1TextProvider:row1Column2TextProvider:row2Column1TextProvider:row2Column2TextProvider:](clkcomplicationtemplatemodularlargetable/init%28headerimageprovider_headertextprovider_row1column1textprovider_row1column2textprovider_row2column1textprovider_row2column2textprovider_%29.md): Deprecated. Creates a template that has a header row with an image and text, and two columns of text.
- [templateWithHeaderTextProvider:row1Column1TextProvider:row1Column2TextProvider:row2Column1TextProvider:row2Column2TextProvider:](clkcomplicationtemplatemodularlargetable/templatewithheadertextprovider_row1column1textprovider_row1column2textprovider_row2column1textprovider_row2column2textprovider_.md): Deprecated. Returns a template that has a header and two columns of text.
- [templateWithHeaderImageProvider:headerTextProvider:row1Column1TextProvider:row1Column2TextProvider:row2Column1TextProvider:row2Column2TextProvider:](clkcomplicationtemplatemodularlargetable/templatewithheaderimageprovider_headertextprovider_row1column1textprovider_row1column2textprovider_row2column1textprovider_row2column2textprovider_.md): Deprecated. Returns a template that has a header row with an image and text, and two columns of text.

### Setting the Complication Data

- [headerImageProvider](clkcomplicationtemplatemodularlargetable/headerimageprovider.md): Deprecated. An optional image to display in the header.
- [headerTextProvider](clkcomplicationtemplatemodularlargetable/headertextprovider.md): Deprecated. The text to display in the header line.
- [row1Column1TextProvider](clkcomplicationtemplatemodularlargetable/row1column1textprovider.md): Deprecated. The text to display in the first column of the first row.
- [row1Column2TextProvider](clkcomplicationtemplatemodularlargetable/row1column2textprovider.md): Deprecated. The text to display in the second column of the first row.
- [row2Column1TextProvider](clkcomplicationtemplatemodularlargetable/row2column1textprovider.md): Deprecated. The text to display in the first column of the second row.
- [row2Column2TextProvider](clkcomplicationtemplatemodularlargetable/row2column2textprovider.md): Deprecated. The text to display in the second column of the second row.
- [column2Alignment](clkcomplicationtemplatemodularlargetable/column2alignment.md): Deprecated. The alignment of the text in the second column.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

## See Also

### Table templates

- [CLKComplicationTemplateModularLargeColumns](clkcomplicationtemplatemodularlargecolumns.md): Deprecated. A template for displaying multiple columns of data.
