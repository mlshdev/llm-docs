> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/nscollectionlayoutanchor/init(edges:absoluteoffset:)

# init(edges:absoluteOffset:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates an anchor with the specified edges to attach to, offset by the provided absolute value.

## Declaration

```swift
convenience init(edges: NSDirectionalRectEdge, absoluteOffset: CGPoint)
```

## See Also

### Creating an anchor

- [init(edges:)](init%28edges_%29.md): Creates an anchor with the specified edges to attach to.
- [init(edges:fractionalOffset:)](init%28edges_fractionaloffset_%29.md): Creates an anchor with the specified edges to attach to, offset by the provided fractional value.

# layoutAnchorWithEdges:absoluteOffset: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates an anchor with the specified edges to attach to, offset by the provided absolute value.

## Declaration

```objectivec
+ (instancetype) layoutAnchorWithEdges:(NSDirectionalRectEdge) edges absoluteOffset:(CGPoint) absoluteOffset;
```

## See Also

### Creating an anchor

- [layoutAnchorWithEdges:](init%28edges_%29.md): Creates an anchor with the specified edges to attach to.
- [layoutAnchorWithEdges:fractionalOffset:](init%28edges_fractionaloffset_%29.md): Creates an anchor with the specified edges to attach to, offset by the provided fractional value.
