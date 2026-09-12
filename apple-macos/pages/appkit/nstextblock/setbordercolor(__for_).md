> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextblock/setbordercolor(_:for:)](https://developer.apple.com/documentation/appkit/nstextblock/setbordercolor(_:for:))

# setBorderColor(\_:for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Sets the border color of the specified edge of the text block.

## Declaration

```swift
func setBorderColor(_ color: NSColor?, for edge: NSRectEdge)
```

## Parameters

- `color`: The new color.
- `edge`: The edge whose color is to be set.

<a id="Discussion"></a>

## Discussion

This setting has no visible effect unless the border width is larger than the default, which is 0.

## See Also

### Related Documentation

- [setWidth(\_:type:for:)](setwidth%28__type_for_%29.md): Sets the width of all edges of a specified layer of the text block.

### Deprecated

- [setWidth(\_:type:for:edge:)](setwidth%28__type_for_edge_%29.md): Deprecated. Sets the width of a specified edge of a specified layer of the text block.
- [width(for:edge:)](width%28for_edge_%29.md): Deprecated. Returns the width of an edge of a specified layer of the text block.
- [widthValueType(for:edge:)](widthvaluetype%28for_edge_%29.md): Deprecated. Returns the value type of an edge of a specified layer of the text block.
- [borderColor(for:)](bordercolor%28for_%29-273pl.md): Deprecated.

# setBorderColor:forEdge: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Sets the border color of the specified edge of the text block.

## Declaration

```objectivec
- (void) setBorderColor:(NSColor *) color forEdge:(NSRectEdge) edge;
```

## Parameters

- `color`: The new color.
- `edge`: The edge whose color is to be set.

<a id="Discussion"></a>

## Discussion

This setting has no visible effect unless the border width is larger than the default, which is 0.

## See Also

### Related Documentation

- [setWidth:type:forLayer:](setwidth%28__type_for_%29.md): Sets the width of all edges of a specified layer of the text block.

### Deprecated

- [setWidth:type:forLayer:edge:](setwidth%28__type_for_edge_%29.md): Deprecated. Sets the width of a specified edge of a specified layer of the text block.
- [widthForLayer:edge:](width%28for_edge_%29.md): Deprecated. Returns the width of an edge of a specified layer of the text block.
- [widthValueTypeForLayer:edge:](widthvaluetype%28for_edge_%29.md): Deprecated. Returns the value type of an edge of a specified layer of the text block.
- [borderColorForEdge:](bordercolor%28for_%29-273pl.md): Deprecated.
