> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextblock](https://developer.apple.com/documentation/uikit/nstextblock)

# NSTextBlock (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that defines the size, spacing, and appearance of a block of text in an attributed string.

## Declaration

```swift
class NSTextBlock
```

## Mentioned In

- [Adding tables to attributed strings in UIKit](adding-tables-to-attributed-strings.md)

<a id="overview"></a>

## Overview

A text block lets you control how a paragraph looks and where it sits — you can configure its content dimensions, margin, border, padding, and colors.

You create a text block, configure its properties, then assign it to a paragraph by setting the [textBlocks](nsparagraphstyle/textblocks.md) property on an [NSMutableParagraphStyle](nsmutableparagraphstyle.md) and applying that style to a range in an `NSMutableAttributedString`. To represent a cell inside a table, use [NSTextTableBlock](nstexttableblock.md) instead.

<a id="Understand-content-dimensions"></a>

### Understand content dimensions

Each text block has three layers around its content: padding, border, and margin. You can configure the width of each layer per edge using [setWidth(\_:type:for:rectEdge:)](nstextblock/setwidth%28__type_for_rectedge_%29.md), or set all edges at once using [setWidth(\_:type:for:)](nstextblock/setwidth%28__type_for_%29.md). Use [NSTextBlock.Dimension](nstextblock/dimension.md) to set the content area’s width, height, and minimum or maximum constraints. Use [NSTextBlock.ValueType](nstextblock/valuetype.md) to specify whether a dimension is an absolute point value or a percentage.

<a id="Configure-visual-appearance"></a>

### Configure visual appearance

Set a background color using [backgroundColor](nstextblock/backgroundcolor.md). Configure border colors per edge using `setBorderColor(_:for:)`, or apply a single color to all four edges at once using [setBorderColor(\_:)](nstextblock/setbordercolor%28__%29.md).

## Topics

### Initializing a text block

- [init()](nstextblock/init%28%29.md)
- [init(coder:)](nstextblock/init%28coder_%29.md)

### Setting content dimensions

- [setValue(\_:type:for:)](nstextblock/setvalue%28__type_for_%29.md)
- [value(for:)](nstextblock/value%28for_%29.md)
- [valueType(for:)](nstextblock/valuetype%28for_%29.md)
- [setContentWidth(\_:type:)](nstextblock/setcontentwidth%28__type_%29.md)
- [contentWidth](nstextblock/contentwidth.md)
- [contentWidthValueType](nstextblock/contentwidthvaluetype.md)

### Setting layer widths

- [setWidth(\_:type:for:)](nstextblock/setwidth%28__type_for_%29.md)
- [setWidth(\_:type:for:rectEdge:)](nstextblock/setwidth%28__type_for_rectedge_%29.md)
- [width(for:rectEdge:)](nstextblock/width%28for_rectedge_%29.md)
- [widthValueType(for:rectEdge:)](nstextblock/widthvaluetype%28for_rectedge_%29.md)

### Configuring appearance

- [verticalAlignment](nstextblock/verticalalignment-swift.property.md)
- [backgroundColor](nstextblock/backgroundcolor.md)
- [setBorderColor(\_:)](nstextblock/setbordercolor%28__%29.md)
- [setBorderColor(\_:rectEdge:)](nstextblock/setbordercolor%28__rectedge_%29.md)
- [borderColor(for:)](nstextblock/bordercolor%28for_%29.md)

### Supporting types

- [NSTextBlock.ValueType](nstextblock/valuetype.md)
- [NSTextBlock.Dimension](nstextblock/dimension.md)
- [NSTextBlock.Layer](nstextblock/layer.md)
- [NSTextBlock.VerticalAlignment](nstextblock/verticalalignment-swift.enum.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSTextTable](nstexttable.md)
- [NSTextTableBlock](nstexttableblock.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Tables

- [Adding tables to attributed strings in UIKit](adding-tables-to-attributed-strings.md): Create and configure tables in attributed strings and display them in a text view.
- [NSTextTable](nstexttable.md): An object that represents a table of rows and columns in an attributed string.
- [NSTextTableBlock](nstexttableblock.md): A text block that represents a single cell in a text table.

# NSTextBlock (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that defines the size, spacing, and appearance of a block of text in an attributed string.

## Declaration

```objectivec
@interface NSTextBlock : NSObject
```

## Mentioned In

- [Adding tables to attributed strings in UIKit](adding-tables-to-attributed-strings.md)

<a id="overview"></a>

## Overview

A text block lets you control how a paragraph looks and where it sits — you can configure its content dimensions, margin, border, padding, and colors.

You create a text block, configure its properties, then assign it to a paragraph by setting the [textBlocks](nsparagraphstyle/textblocks.md) property on an [NSMutableParagraphStyle](nsmutableparagraphstyle.md) and applying that style to a range in an `NSMutableAttributedString`. To represent a cell inside a table, use [NSTextTableBlock](nstexttableblock.md) instead.

<a id="Understand-content-dimensions"></a>

### Understand content dimensions

Each text block has three layers around its content: padding, border, and margin. You can configure the width of each layer per edge using [setWidth:type:forLayer:rectEdge:](nstextblock/setwidth%28__type_for_rectedge_%29.md), or set all edges at once using [setWidth:type:forLayer:](nstextblock/setwidth%28__type_for_%29.md). Use [NSTextBlockDimension](nstextblock/dimension.md) to set the content area’s width, height, and minimum or maximum constraints. Use [NSTextBlockValueType](nstextblock/valuetype.md) to specify whether a dimension is an absolute point value or a percentage.

<a id="Configure-visual-appearance"></a>

### Configure visual appearance

Set a background color using [backgroundColor](nstextblock/backgroundcolor.md). Configure border colors per edge using `setBorderColor(_:for:)`, or apply a single color to all four edges at once using [setBorderColor:](nstextblock/setbordercolor%28__%29.md).

## Topics

### Initializing a text block

- [init](nstextblock/init%28%29.md)
- [initWithCoder:](nstextblock/init%28coder_%29.md)

### Setting content dimensions

- [setValue:type:forDimension:](nstextblock/setvalue%28__type_for_%29.md)
- [valueForDimension:](nstextblock/value%28for_%29.md)
- [valueTypeForDimension:](nstextblock/valuetype%28for_%29.md)
- [setContentWidth:type:](nstextblock/setcontentwidth%28__type_%29.md)
- [contentWidth](nstextblock/contentwidth.md)
- [contentWidthValueType](nstextblock/contentwidthvaluetype.md)

### Setting layer widths

- [setWidth:type:forLayer:](nstextblock/setwidth%28__type_for_%29.md)
- [setWidth:type:forLayer:rectEdge:](nstextblock/setwidth%28__type_for_rectedge_%29.md)
- [widthForLayer:rectEdge:](nstextblock/width%28for_rectedge_%29.md)
- [widthValueTypeForLayer:rectEdge:](nstextblock/widthvaluetype%28for_rectedge_%29.md)

### Configuring appearance

- [verticalAlignment](nstextblock/verticalalignment-swift.property.md)
- [backgroundColor](nstextblock/backgroundcolor.md)
- [setBorderColor:](nstextblock/setbordercolor%28__%29.md)
- [setBorderColor:rectEdge:](nstextblock/setbordercolor%28__rectedge_%29.md)
- [borderColorForRectEdge:](nstextblock/bordercolor%28for_%29.md)

### Supporting types

- [NSTextBlockValueType](nstextblock/valuetype.md)
- [NSTextBlockDimension](nstextblock/dimension.md)
- [NSTextBlockLayer](nstextblock/layer.md)
- [NSTextBlockVerticalAlignment](nstextblock/verticalalignment-swift.enum.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSTextTable](nstexttable.md)
- [NSTextTableBlock](nstexttableblock.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Tables

- [Adding tables to attributed strings in UIKit](adding-tables-to-attributed-strings.md): Create and configure tables in attributed strings and display them in a text view.
- [NSTextTable](nstexttable.md): An object that represents a table of rows and columns in an attributed string.
- [NSTextTableBlock](nstexttableblock.md): A text block that represents a single cell in a text table.
