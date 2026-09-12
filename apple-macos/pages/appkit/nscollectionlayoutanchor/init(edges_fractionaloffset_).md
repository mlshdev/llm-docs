> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionlayoutanchor/init(edges:fractionaloffset:)](https://developer.apple.com/documentation/appkit/nscollectionlayoutanchor/init(edges:fractionaloffset:))

# init(edges:fractionalOffset:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.15+

Creates an anchor with the specified edges to attach to, offset by the provided fractional value.

## Declaration

```swift
convenience init(edges: NSDirectionalRectEdge, fractionalOffset: NSPoint)
```

## See Also

### Creating an anchor

- [init(edges:)](init%28edges_%29.md): Creates an anchor with the specified edges to attach to.
- [init(edges:absoluteOffset:)](init%28edges_absoluteoffset_%29.md): Creates an anchor with the specified edges to attach to, offset by the provided absolute value.

# layoutAnchorWithEdges:fractionalOffset: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Creates an anchor with the specified edges to attach to, offset by the provided fractional value.

## Declaration

```objectivec
+ (instancetype) layoutAnchorWithEdges:(NSDirectionalRectEdge) edges fractionalOffset:(NSPoint) fractionalOffset;
```

## See Also

### Creating an anchor

- [layoutAnchorWithEdges:](init%28edges_%29.md): Creates an anchor with the specified edges to attach to.
- [layoutAnchorWithEdges:absoluteOffset:](init%28edges_absoluteoffset_%29.md): Creates an anchor with the specified edges to attach to, offset by the provided absolute value.
