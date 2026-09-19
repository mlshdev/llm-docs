> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/clothroundedboxshape/edgeradius

# edgeRadius

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The radius of the rounded edges.

## Declaration

```swift
var edgeRadius: Float { get set }
```

<a id="discussion"></a>

## Discussion

Must be non-negative; negative values are clamped to zero.

## See Also

### Configuring the geometry

- [size](size.md): The size of the box along each axis.
