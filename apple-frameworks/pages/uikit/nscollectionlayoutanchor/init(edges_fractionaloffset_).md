> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nscollectionlayoutanchor/init(edges:fractionaloffset:)](https://developer.apple.com/documentation/uikit/nscollectionlayoutanchor/init(edges:fractionaloffset:))

# init(edges:fractionalOffset:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates an anchor with the specified edges to attach to, offset by the provided fractional value.

## Declaration

```swift
convenience init(edges: NSDirectionalRectEdge, fractionalOffset: CGPoint)
```

## See Also

### Creating an anchor

- [init(edges:)](init%28edges_%29.md): Creates an anchor with the specified edges to attach to.
- [init(edges:absoluteOffset:)](init%28edges_absoluteoffset_%29.md): Creates an anchor with the specified edges to attach to, offset by the provided absolute value.

# layoutAnchorWithEdges:fractionalOffset: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates an anchor with the specified edges to attach to, offset by the provided fractional value.

## Declaration

```objectivec
+ (instancetype) layoutAnchorWithEdges:(NSDirectionalRectEdge) edges fractionalOffset:(CGPoint) fractionalOffset;
```

## See Also

### Creating an anchor

- [layoutAnchorWithEdges:](init%28edges_%29.md): Creates an anchor with the specified edges to attach to.
- [layoutAnchorWithEdges:absoluteOffset:](init%28edges_absoluteoffset_%29.md): Creates an anchor with the specified edges to attach to, offset by the provided absolute value.
