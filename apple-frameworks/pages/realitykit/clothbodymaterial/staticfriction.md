> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/clothbodymaterial/staticfriction

# staticFriction

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The friction a cloth body particle experiences when in contact with another particle or collider with no relative motion.

## Declaration

```swift
var staticFriction: Float { get set }
```

<a id="discussion"></a>

## Discussion

Must be non-negative; negative values are clamped to zero. The default value is `0.8`, which gives preference to the colliders’ static friction.

## See Also

### Configuring friction

- [kineticFriction](kineticfriction.md): The friction a cloth body particle experiences when in contact with another particle or collider with relative motion.
