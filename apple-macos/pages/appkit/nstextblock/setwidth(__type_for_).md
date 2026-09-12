> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextblock/setwidth(_:type:for:)](https://developer.apple.com/documentation/appkit/nstextblock/setwidth(_:type:for:))

# setWidth(\_:type:for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Sets the width of all edges of a specified layer of the text block.

## Declaration

```swift
func setWidth(_ width: CGFloat, type: NSTextBlock.ValueType, for layer: NSTextBlock.Layer)
```

## Parameters

- `width`: The new value for the specified edge width.
- `type`: The type of value being provided. This controls how `width` is interpreted.
- `layer`: The layer of the text block to modify.

## See Also

### Getting and setting margins, borders, and padding

- [setWidth(\_:type:for:rectEdge:)](setwidth%28__type_for_rectedge_%29.md)
- [width(for:rectEdge:)](width%28for_rectedge_%29.md)
- [widthValueType(for:rectEdge:)](widthvaluetype%28for_rectedge_%29.md)
- [NSTextBlock.Layer](layer.md): The following constants specify values used by the properties and methods [contentWidthValueType](contentwidthvaluetype.md), [setWidth(\_:type:for:edge:)](setwidth%28__type_for_edge_%29.md), [setWidth(\_:type:for:)](setwidth%28__type_for_%29.md), [width(for:edge:)](width%28for_edge_%29.md), and [widthValueType(for:edge:)](widthvaluetype%28for_edge_%29.md) to specify text block layer values.

# setWidth:type:forLayer: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Sets the width of all edges of a specified layer of the text block.

## Declaration

```objectivec
- (void) setWidth:(CGFloat) width type:(NSTextBlockValueType) type forLayer:(NSTextBlockLayer) layer;
```

## Parameters

- `width`: The new value for the specified edge width.
- `type`: The type of value being provided. This controls how `width` is interpreted.
- `layer`: The layer of the text block to modify.

## See Also

### Getting and setting margins, borders, and padding

- [setWidth:type:forLayer:rectEdge:](setwidth%28__type_for_rectedge_%29.md)
- [widthForLayer:rectEdge:](width%28for_rectedge_%29.md)
- [widthValueTypeForLayer:rectEdge:](widthvaluetype%28for_rectedge_%29.md)
- [NSTextBlockLayer](layer.md): The following constants specify values used by the properties and methods [contentWidthValueType](contentwidthvaluetype.md), [setWidth:type:forLayer:edge:](setwidth%28__type_for_edge_%29.md), [setWidth:type:forLayer:](setwidth%28__type_for_%29.md), [widthForLayer:edge:](width%28for_edge_%29.md), and [widthValueTypeForLayer:edge:](widthvaluetype%28for_edge_%29.md) to specify text block layer values.
