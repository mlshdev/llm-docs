> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplatemodularlargecolumns](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatemodularlargecolumns)

# CLKComplicationTemplateModularLargeColumns (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying multiple columns of data.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateModularLargeColumns
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.modularLarge](clkcomplicationfamily/modularlarge.md) family.

![A diagram showing the layout of the modular large columns complication. The diagram shows two columns with three rows of text and an optional column of images.](https://developer.apple.com/images/com.apple.clockkit/media-2933749@2x.png)

The following table lists the dimensions of the images you use in this template. All dimensions are in pixels. All images must be specified as `@2x` images for display on Apple Watch, so the point-based dimensions are half the listed size. The width of each image must be between the specified minimum and maximum (inclusive).

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

- [init(row1Column1TextProvider:row1Column2TextProvider:row2Column1TextProvider:row2Column2TextProvider:row3Column1TextProvider:row3Column2TextProvider:)](clkcomplicationtemplatemodularlargecolumns/init%28row1column1textprovider_row1column2textprovider_row2column1textprovider_row2column2textprovider_row3column1textprovider_row3column2textprovider_%29.md): Deprecated. Creates a template that has two columns of text.
- [init(row1ImageProvider:row1Column1TextProvider:row1Column2TextProvider:row2ImageProvider:row2Column1TextProvider:row2Column2TextProvider:row3ImageProvider:row3Column1TextProvider:row3Column2TextProvider:)](clkcomplicationtemplatemodularlargecolumns/init%28row1imageprovider_row1column1textprovider_row1column2textprovider_row2imageprovider_row2column1textprovider_row2column2textprovider_row3imageprovider_row3column1textprovider_r~716564c7.md): Deprecated. Creates a template that has a column of images and two columns of text.

### Setting the Complication Data

- [row1ImageProvider](clkcomplicationtemplatemodularlargecolumns/row1imageprovider.md): Deprecated. An optional image to display at the beginning of the first row.
- [row1Column1TextProvider](clkcomplicationtemplatemodularlargecolumns/row1column1textprovider.md): Deprecated. The text to display in the first column of the first row.
- [row1Column2TextProvider](clkcomplicationtemplatemodularlargecolumns/row1column2textprovider.md): Deprecated. The text to display in the second column of the first row.
- [row2ImageProvider](clkcomplicationtemplatemodularlargecolumns/row2imageprovider.md): Deprecated. An optional image to display at the beginning of the second row.
- [row2Column1TextProvider](clkcomplicationtemplatemodularlargecolumns/row2column1textprovider.md): Deprecated. The text to display in the first column of the second row.
- [row2Column2TextProvider](clkcomplicationtemplatemodularlargecolumns/row2column2textprovider.md): Deprecated. The text to display in the second column of the second row.
- [row3ImageProvider](clkcomplicationtemplatemodularlargecolumns/row3imageprovider.md): Deprecated. An optional image to display at the beginning of the third row.
- [row3Column1TextProvider](clkcomplicationtemplatemodularlargecolumns/row3column1textprovider.md): Deprecated. The text to display in the first column of the third row.
- [row3Column2TextProvider](clkcomplicationtemplatemodularlargecolumns/row3column2textprovider.md): Deprecated. The text to display in the second column of the third row.
- [column2Alignment](clkcomplicationtemplatemodularlargecolumns/column2alignment.md): Deprecated. The alignment of the text in the second column.

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

- [CLKComplicationTemplateModularLargeTable](clkcomplicationtemplatemodularlargetable.md): Deprecated. A template for displaying a header row and columns.

# CLKComplicationTemplateModularLargeColumns (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying multiple columns of data.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateModularLargeColumns : CLKComplicationTemplate
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyModularLarge](clkcomplicationfamily/modularlarge.md) family.

![A diagram showing the layout of the modular large columns complication. The diagram shows two columns with three rows of text and an optional column of images.](https://developer.apple.com/images/com.apple.clockkit/media-2933749@2x.png)

The following table lists the dimensions of the images you use in this template. All dimensions are in pixels. All images must be specified as `@2x` images for display on Apple Watch, so the point-based dimensions are half the listed size. The width of each image must be between the specified minimum and maximum (inclusive).

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

- [initWithRow1Column1TextProvider:row1Column2TextProvider:row2Column1TextProvider:row2Column2TextProvider:row3Column1TextProvider:row3Column2TextProvider:](clkcomplicationtemplatemodularlargecolumns/init%28row1column1textprovider_row1column2textprovider_row2column1textprovider_row2column2textprovider_row3column1textprovider_row3column2textprovider_%29.md): Deprecated. Creates a template that has two columns of text.
- [initWithRow1ImageProvider:row1Column1TextProvider:row1Column2TextProvider:row2ImageProvider:row2Column1TextProvider:row2Column2TextProvider:row3ImageProvider:row3Column1TextProvider:row3Column2TextProvider:](clkcomplicationtemplatemodularlargecolumns/init%28row1imageprovider_row1column1textprovider_row1column2textprovider_row2imageprovider_row2column1textprovider_row2column2textprovider_row3imageprovider_row3column1textprovider_r~716564c7.md): Deprecated. Creates a template that has a column of images and two columns of text.
- [templateWithRow1Column1TextProvider:row1Column2TextProvider:row2Column1TextProvider:row2Column2TextProvider:row3Column1TextProvider:row3Column2TextProvider:](clkcomplicationtemplatemodularlargecolumns/templatewithrow1column1textprovider_row1column2textprovider_row2column1textprovider_row2column2textprovider_row3column1textprovider_row3column2textprovider_.md): Deprecated. Returns a template that has two columns of text.
- [templateWithRow1ImageProvider:row1Column1TextProvider:row1Column2TextProvider:row2ImageProvider:row2Column1TextProvider:row2Column2TextProvider:row3ImageProvider:row3Column1TextProvider:row3Column2TextProvider:](clkcomplicationtemplatemodularlargecolumns/templatewithrow1imageprovider_row1column1textprovider_row1column2textprovider_row2imageprovider_row2column1textprovider_row2column2textprovider_row3imageprovider_row3column1textpro~5e2da678.md): Deprecated. Returns a template that has a column of images and two columns of text.

### Setting the Complication Data

- [row1ImageProvider](clkcomplicationtemplatemodularlargecolumns/row1imageprovider.md): Deprecated. An optional image to display at the beginning of the first row.
- [row1Column1TextProvider](clkcomplicationtemplatemodularlargecolumns/row1column1textprovider.md): Deprecated. The text to display in the first column of the first row.
- [row1Column2TextProvider](clkcomplicationtemplatemodularlargecolumns/row1column2textprovider.md): Deprecated. The text to display in the second column of the first row.
- [row2ImageProvider](clkcomplicationtemplatemodularlargecolumns/row2imageprovider.md): Deprecated. An optional image to display at the beginning of the second row.
- [row2Column1TextProvider](clkcomplicationtemplatemodularlargecolumns/row2column1textprovider.md): Deprecated. The text to display in the first column of the second row.
- [row2Column2TextProvider](clkcomplicationtemplatemodularlargecolumns/row2column2textprovider.md): Deprecated. The text to display in the second column of the second row.
- [row3ImageProvider](clkcomplicationtemplatemodularlargecolumns/row3imageprovider.md): Deprecated. An optional image to display at the beginning of the third row.
- [row3Column1TextProvider](clkcomplicationtemplatemodularlargecolumns/row3column1textprovider.md): Deprecated. The text to display in the first column of the third row.
- [row3Column2TextProvider](clkcomplicationtemplatemodularlargecolumns/row3column2textprovider.md): Deprecated. The text to display in the second column of the third row.
- [column2Alignment](clkcomplicationtemplatemodularlargecolumns/column2alignment.md): Deprecated. The alignment of the text in the second column.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

## See Also

### Table templates

- [CLKComplicationTemplateModularLargeTable](clkcomplicationtemplatemodularlargetable.md): Deprecated. A template for displaying a header row and columns.
