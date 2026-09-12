> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextblock/setwidth(_:type:for:edge:)](https://developer.apple.com/documentation/appkit/nstextblock/setwidth(_:type:for:edge:))

# setWidth(\_:type:for:edge:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Sets the width of a specified edge of a specified layer of the text block.

## Declaration

```swift
func setWidth(_ val: CGFloat, type: NSTextBlock.ValueType, for layer: NSTextBlock.Layer, edge: NSRectEdge)
```

## Parameters

- `val`: The new value for the specified edge width.
- `type`: The type of value being provided. This controls how `val` is interpreted.
- `layer`: The layer of the text block to modify.
- `edge`: The edge of the layer to modify.

## See Also

### Deprecated

- [width(for:edge:)](width%28for_edge_%29.md): Deprecated. Returns the width of an edge of a specified layer of the text block.
- [widthValueType(for:edge:)](widthvaluetype%28for_edge_%29.md): Deprecated. Returns the value type of an edge of a specified layer of the text block.
- [borderColor(for:)](bordercolor%28for_%29-273pl.md): Deprecated.
- [setBorderColor(\_:for:)](setbordercolor%28__for_%29.md): Deprecated. Sets the border color of the specified edge of the text block.

# setWidth:type:forLayer:edge: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Sets the width of a specified edge of a specified layer of the text block.

## Declaration

```objectivec
- (void) setWidth:(CGFloat) val type:(NSTextBlockValueType) type forLayer:(NSTextBlockLayer) layer edge:(NSRectEdge) edge;
```

## Parameters

- `val`: The new value for the specified edge width.
- `type`: The type of value being provided. This controls how `val` is interpreted.
- `layer`: The layer of the text block to modify.
- `edge`: The edge of the layer to modify.

## See Also

### Deprecated

- [widthForLayer:edge:](width%28for_edge_%29.md): Deprecated. Returns the width of an edge of a specified layer of the text block.
- [widthValueTypeForLayer:edge:](widthvaluetype%28for_edge_%29.md): Deprecated. Returns the value type of an edge of a specified layer of the text block.
- [borderColorForEdge:](bordercolor%28for_%29-273pl.md): Deprecated.
- [setBorderColor:forEdge:](setbordercolor%28__for_%29.md): Deprecated. Sets the border color of the specified edge of the text block.
