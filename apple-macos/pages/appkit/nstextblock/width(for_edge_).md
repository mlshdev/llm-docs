> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextblock/width(for:edge:)](https://developer.apple.com/documentation/appkit/nstextblock/width(for:edge:))

# width(for:edge:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Returns the width of an edge of a specified layer of the text block.

## Declaration

```swift
func width(for layer: NSTextBlock.Layer, edge: NSRectEdge) -> CGFloat
```

## Parameters

- `layer`: The layer to examine.
- `edge`: The edge of the layer to examine.

<a id="return-value"></a>

## Return Value

The width of the `edge` of `layer`. This value must be interpreted according to the value type returned by [widthValueType(for:edge:)](widthvaluetype%28for_edge_%29.md).

## See Also

### Deprecated

- [setWidth(\_:type:for:edge:)](setwidth%28__type_for_edge_%29.md): Deprecated. Sets the width of a specified edge of a specified layer of the text block.
- [widthValueType(for:edge:)](widthvaluetype%28for_edge_%29.md): Deprecated. Returns the value type of an edge of a specified layer of the text block.
- [borderColor(for:)](bordercolor%28for_%29-273pl.md): Deprecated.
- [setBorderColor(\_:for:)](setbordercolor%28__for_%29.md): Deprecated. Sets the border color of the specified edge of the text block.

# widthForLayer:edge: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Returns the width of an edge of a specified layer of the text block.

## Declaration

```objectivec
- (CGFloat) widthForLayer:(NSTextBlockLayer) layer edge:(NSRectEdge) edge;
```

## Parameters

- `layer`: The layer to examine.
- `edge`: The edge of the layer to examine.

<a id="return-value"></a>

## Return Value

The width of the `edge` of `layer`. This value must be interpreted according to the value type returned by [widthValueTypeForLayer:edge:](widthvaluetype%28for_edge_%29.md).

## See Also

### Deprecated

- [setWidth:type:forLayer:edge:](setwidth%28__type_for_edge_%29.md): Deprecated. Sets the width of a specified edge of a specified layer of the text block.
- [widthValueTypeForLayer:edge:](widthvaluetype%28for_edge_%29.md): Deprecated. Returns the value type of an edge of a specified layer of the text block.
- [borderColorForEdge:](bordercolor%28for_%29-273pl.md): Deprecated.
- [setBorderColor:forEdge:](setbordercolor%28__for_%29.md): Deprecated. Sets the border color of the specified edge of the text block.
