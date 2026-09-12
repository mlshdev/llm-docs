> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionlayoutanchor/init(edges:absoluteoffset:)](https://developer.apple.com/documentation/appkit/nscollectionlayoutanchor/init(edges:absoluteoffset:))

# init(edges:absoluteOffset:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.15+

Creates an anchor with the specified edges to attach to, offset by the provided absolute value.

## Declaration

```swift
convenience init(edges: NSDirectionalRectEdge, absoluteOffset: NSPoint)
```

## See Also

### Creating an anchor

- [init(edges:)](init%28edges_%29.md): Creates an anchor with the specified edges to attach to.
- [init(edges:fractionalOffset:)](init%28edges_fractionaloffset_%29.md): Creates an anchor with the specified edges to attach to, offset by the provided fractional value.

# layoutAnchorWithEdges:absoluteOffset: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Creates an anchor with the specified edges to attach to, offset by the provided absolute value.

## Declaration

```objectivec
+ (instancetype) layoutAnchorWithEdges:(NSDirectionalRectEdge) edges absoluteOffset:(NSPoint) absoluteOffset;
```

## See Also

### Creating an anchor

- [layoutAnchorWithEdges:](init%28edges_%29.md): Creates an anchor with the specified edges to attach to.
- [layoutAnchorWithEdges:fractionalOffset:](init%28edges_fractionaloffset_%29.md): Creates an anchor with the specified edges to attach to, offset by the provided fractional value.
