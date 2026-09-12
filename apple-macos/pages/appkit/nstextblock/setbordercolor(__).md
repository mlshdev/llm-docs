> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextblock/setbordercolor(_:)](https://developer.apple.com/documentation/appkit/nstextblock/setbordercolor(_:))

# setBorderColor(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Sets the color of all borders of the text block.

## Declaration

```swift
func setBorderColor(_ color: NSColor?)
```

## Parameters

- `color`: The new color.

<a id="Discussion"></a>

## Discussion

This setting has no visible effect unless the border width is larger than the default, which is 0.

## See Also

### Related Documentation

- [setWidth(\_:type:for:)](setwidth%28__type_for_%29.md): Sets the width of all edges of a specified layer of the text block.

### Working with color

- [backgroundColor](backgroundcolor.md): The background color of the text block.
- [setBorderColor(\_:rectEdge:)](setbordercolor%28__rectedge_%29.md)
- [borderColor(for:)](bordercolor%28for_%29-5m8cr.md)

# setBorderColor: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Sets the color of all borders of the text block.

## Declaration

```objectivec
- (void) setBorderColor:(NSColor *) color;
```

## Parameters

- `color`: The new color.

<a id="Discussion"></a>

## Discussion

This setting has no visible effect unless the border width is larger than the default, which is 0.

## See Also

### Related Documentation

- [setWidth:type:forLayer:](setwidth%28__type_for_%29.md): Sets the width of all edges of a specified layer of the text block.

### Working with color

- [backgroundColor](backgroundcolor.md): The background color of the text block.
- [setBorderColor:rectEdge:](setbordercolor%28__rectedge_%29.md)
- [borderColorForRectEdge:](bordercolor%28for_%29-5m8cr.md)
