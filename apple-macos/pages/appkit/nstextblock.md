> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextblock](https://developer.apple.com/documentation/appkit/nstextblock)

# NSTextBlock (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.0+

A block of text laid out in a subregion of the text container.

## Declaration

```swift
class NSTextBlock
```

<a id="overview"></a>

## Overview

A text block appears as an attribute of a paragraph, and as part of the paragraph style. The most important subclass of [NSTextBlock](nstextblock.md) is [NSTextTableBlock](nstexttableblock.md), which represents a block of text that appears as a cell in a table. The table itself is a [NSTextTable](nstexttable.md) object. All [NSTextBlock](nstextblock.md) objects reference this table, which controls their sizing and positioning.

## Topics

### Creating text blocks

- [init()](nstextblock/init%28%29.md): Initializes and returns an empty text block object.
- [init(coder:)](nstextblock/init%28coder_%29.md)

### Working with dimensions of content

- [setValue(\_:type:for:)](nstextblock/setvalue%28__type_for_%29.md): Sets a dimension of the text block.
- [value(for:)](nstextblock/value%28for_%29.md): Returns the value of the specified text block dimension.
- [valueType(for:)](nstextblock/valuetype%28for_%29.md): Returns the value type of the specified text block dimension.
- [setContentWidth(\_:type:)](nstextblock/setcontentwidth%28__type_%29.md): Sets the width of the text block.
- [contentWidth](nstextblock/contentwidth.md): The width of the text block.
- [contentWidthValueType](nstextblock/contentwidthvaluetype.md): The type of value stored for the text block width.
- [NSTextBlock.Dimension](nstextblock/dimension.md): The following constants specify values used by the methods [setValue(\_:type:for:)](nstextblock/setvalue%28__type_for_%29.md), [value(for:)](nstextblock/value%28for_%29.md), and [valueType(for:)](nstextblock/valuetype%28for_%29.md) to specify text block dimensions.
- [NSTextBlock.ValueType](nstextblock/valuetype.md): The following constants specify values used by the methods [setValue(\_:type:for:)](nstextblock/setvalue%28__type_for_%29.md) and [valueType(for:)](nstextblock/valuetype%28for_%29.md) to specify text block value types.

### Getting and setting margins, borders, and padding

- [setWidth(\_:type:for:)](nstextblock/setwidth%28__type_for_%29.md): Sets the width of all edges of a specified layer of the text block.
- [setWidth(\_:type:for:rectEdge:)](nstextblock/setwidth%28__type_for_rectedge_%29.md)
- [width(for:rectEdge:)](nstextblock/width%28for_rectedge_%29.md)
- [widthValueType(for:rectEdge:)](nstextblock/widthvaluetype%28for_rectedge_%29.md)
- [NSTextBlock.Layer](nstextblock/layer.md): The following constants specify values used by the properties and methods [contentWidthValueType](nstextblock/contentwidthvaluetype.md), [setWidth(\_:type:for:edge:)](nstextblock/setwidth%28__type_for_edge_%29.md), [setWidth(\_:type:for:)](nstextblock/setwidth%28__type_for_%29.md), [width(for:edge:)](nstextblock/width%28for_edge_%29.md), and [widthValueType(for:edge:)](nstextblock/widthvaluetype%28for_edge_%29.md) to specify text block layer values.

### Getting and setting alignment

- [verticalAlignment](nstextblock/verticalalignment-swift.property.md): The vertical alignment of the text block.
- [NSTextBlock.VerticalAlignment](nstextblock/verticalalignment-swift.enum.md): The following constants specify values used by the property [verticalAlignment](nstextblock/verticalalignment-swift.property.md) to specify vertical alignment.

### Working with color

- [backgroundColor](nstextblock/backgroundcolor.md): The background color of the text block.
- [setBorderColor(\_:)](nstextblock/setbordercolor%28__%29.md): Sets the color of all borders of the text block.
- [setBorderColor(\_:rectEdge:)](nstextblock/setbordercolor%28__rectedge_%29.md)
- [borderColor(for:)](nstextblock/bordercolor%28for_%29-5m8cr.md)

### Determining size and position of a text block

- [rectForLayout(at:in:textContainer:characterRange:)](nstextblock/rectforlayout%28at_in_textcontainer_characterrange_%29.md): Returns the rectangle within which glyphs should be laid out for the specified arguments.
- [boundsRect(forContentRect:in:textContainer:characterRange:)](nstextblock/boundsrect%28forcontentrect_in_textcontainer_characterrange_%29.md): Returns the rectangle the text in the block actually occupies, including padding, borders, and margins.

### Drawing colors and decorations

- [drawBackground(withFrame:in:characterRange:layoutManager:)](nstextblock/drawbackground%28withframe_in_characterrange_layoutmanager_%29.md): Called by the layout manager to draw any colors and other decorations before the text is drawn.

### Deprecated

- [setWidth(\_:type:for:edge:)](nstextblock/setwidth%28__type_for_edge_%29.md): Deprecated. Sets the width of a specified edge of a specified layer of the text block.
- [width(for:edge:)](nstextblock/width%28for_edge_%29.md): Deprecated. Returns the width of an edge of a specified layer of the text block.
- [widthValueType(for:edge:)](nstextblock/widthvaluetype%28for_edge_%29.md): Deprecated. Returns the value type of an edge of a specified layer of the text block.
- [borderColor(for:)](nstextblock/bordercolor%28for_%29-273pl.md): Deprecated.
- [setBorderColor(\_:for:)](nstextblock/setbordercolor%28__for_%29.md): Deprecated. Sets the border color of the specified edge of the text block.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NSTextTable](nstexttable.md)
- [NSTextTableBlock](nstexttableblock.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Tables

- [NSTextTable](nstexttable.md): An object that represents a text table as a whole.
- [NSTextTableBlock](nstexttableblock.md): A text block that appears as a cell in a text table.

# NSTextBlock (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.0+

A block of text laid out in a subregion of the text container.

## Declaration

```objectivec
@interface NSTextBlock : NSObject
```

<a id="overview"></a>

## Overview

A text block appears as an attribute of a paragraph, and as part of the paragraph style. The most important subclass of [NSTextBlock](nstextblock.md) is [NSTextTableBlock](nstexttableblock.md), which represents a block of text that appears as a cell in a table. The table itself is a [NSTextTable](nstexttable.md) object. All [NSTextBlock](nstextblock.md) objects reference this table, which controls their sizing and positioning.

## Topics

### Creating text blocks

- [init](nstextblock/init%28%29.md): Initializes and returns an empty text block object.
- [initWithCoder:](nstextblock/init%28coder_%29.md)

### Working with dimensions of content

- [setValue:type:forDimension:](nstextblock/setvalue%28__type_for_%29.md): Sets a dimension of the text block.
- [valueForDimension:](nstextblock/value%28for_%29.md): Returns the value of the specified text block dimension.
- [valueTypeForDimension:](nstextblock/valuetype%28for_%29.md): Returns the value type of the specified text block dimension.
- [setContentWidth:type:](nstextblock/setcontentwidth%28__type_%29.md): Sets the width of the text block.
- [contentWidth](nstextblock/contentwidth.md): The width of the text block.
- [contentWidthValueType](nstextblock/contentwidthvaluetype.md): The type of value stored for the text block width.
- [NSTextBlockDimension](nstextblock/dimension.md): The following constants specify values used by the methods [setValue:type:forDimension:](nstextblock/setvalue%28__type_for_%29.md), [valueForDimension:](nstextblock/value%28for_%29.md), and [valueTypeForDimension:](nstextblock/valuetype%28for_%29.md) to specify text block dimensions.
- [NSTextBlockValueType](nstextblock/valuetype.md): The following constants specify values used by the methods [setValue:type:forDimension:](nstextblock/setvalue%28__type_for_%29.md) and [valueTypeForDimension:](nstextblock/valuetype%28for_%29.md) to specify text block value types.

### Getting and setting margins, borders, and padding

- [setWidth:type:forLayer:](nstextblock/setwidth%28__type_for_%29.md): Sets the width of all edges of a specified layer of the text block.
- [setWidth:type:forLayer:rectEdge:](nstextblock/setwidth%28__type_for_rectedge_%29.md)
- [widthForLayer:rectEdge:](nstextblock/width%28for_rectedge_%29.md)
- [widthValueTypeForLayer:rectEdge:](nstextblock/widthvaluetype%28for_rectedge_%29.md)
- [NSTextBlockLayer](nstextblock/layer.md): The following constants specify values used by the properties and methods [contentWidthValueType](nstextblock/contentwidthvaluetype.md), [setWidth:type:forLayer:edge:](nstextblock/setwidth%28__type_for_edge_%29.md), [setWidth:type:forLayer:](nstextblock/setwidth%28__type_for_%29.md), [widthForLayer:edge:](nstextblock/width%28for_edge_%29.md), and [widthValueTypeForLayer:edge:](nstextblock/widthvaluetype%28for_edge_%29.md) to specify text block layer values.

### Getting and setting alignment

- [verticalAlignment](nstextblock/verticalalignment-swift.property.md): The vertical alignment of the text block.
- [NSTextBlockVerticalAlignment](nstextblock/verticalalignment-swift.enum.md): The following constants specify values used by the property [verticalAlignment](nstextblock/verticalalignment-swift.property.md) to specify vertical alignment.

### Working with color

- [backgroundColor](nstextblock/backgroundcolor.md): The background color of the text block.
- [setBorderColor:](nstextblock/setbordercolor%28__%29.md): Sets the color of all borders of the text block.
- [setBorderColor:rectEdge:](nstextblock/setbordercolor%28__rectedge_%29.md)
- [borderColorForRectEdge:](nstextblock/bordercolor%28for_%29-5m8cr.md)

### Determining size and position of a text block

- [rectForLayoutAtPoint:inRect:textContainer:characterRange:](nstextblock/rectforlayout%28at_in_textcontainer_characterrange_%29.md): Returns the rectangle within which glyphs should be laid out for the specified arguments.
- [boundsRectForContentRect:inRect:textContainer:characterRange:](nstextblock/boundsrect%28forcontentrect_in_textcontainer_characterrange_%29.md): Returns the rectangle the text in the block actually occupies, including padding, borders, and margins.

### Drawing colors and decorations

- [drawBackgroundWithFrame:inView:characterRange:layoutManager:](nstextblock/drawbackground%28withframe_in_characterrange_layoutmanager_%29.md): Called by the layout manager to draw any colors and other decorations before the text is drawn.

### Deprecated

- [setWidth:type:forLayer:edge:](nstextblock/setwidth%28__type_for_edge_%29.md): Deprecated. Sets the width of a specified edge of a specified layer of the text block.
- [widthForLayer:edge:](nstextblock/width%28for_edge_%29.md): Deprecated. Returns the width of an edge of a specified layer of the text block.
- [widthValueTypeForLayer:edge:](nstextblock/widthvaluetype%28for_edge_%29.md): Deprecated. Returns the value type of an edge of a specified layer of the text block.
- [borderColorForEdge:](nstextblock/bordercolor%28for_%29-273pl.md): Deprecated.
- [setBorderColor:forEdge:](nstextblock/setbordercolor%28__for_%29.md): Deprecated. Sets the border color of the specified edge of the text block.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NSTextTable](nstexttable.md)
- [NSTextTableBlock](nstexttableblock.md)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Tables

- [NSTextTable](nstexttable.md): An object that represents a text table as a whole.
- [NSTextTableBlock](nstexttableblock.md): A text block that appears as a cell in a text table.
