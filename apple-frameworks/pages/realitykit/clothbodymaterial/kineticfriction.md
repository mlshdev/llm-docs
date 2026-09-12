> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothbodymaterial/kineticfriction](https://developer.apple.com/documentation/realitykit/clothbodymaterial/kineticfriction)

# kineticFriction

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The friction a cloth body particle experiences when in contact with another particle or collider with relative motion.

## Declaration

```swift
var kineticFriction: Float { get set }
```

<a id="discussion"></a>

## Discussion

Must be non-negative; negative values are clamped to zero. The default value is `0.7`, which gives preference to the colliders’ kinetic friction.

## See Also

### Configuring friction

- [staticFriction](staticfriction.md): The friction a cloth body particle experiences when in contact with another particle or collider with no relative motion.
