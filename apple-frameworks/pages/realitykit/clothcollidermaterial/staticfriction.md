> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothcollidermaterial/staticfriction](https://developer.apple.com/documentation/realitykit/clothcollidermaterial/staticfriction)

# staticFriction

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The friction the collider applies to contacting cloth body particles with no relative motion.

## Declaration

```swift
var staticFriction: Float { get set }
```

<a id="discussion"></a>

## Discussion

Must be non-negative; negative values are clamped to zero. The default value is `0.8`.

## See Also

### Configuring friction

- [kineticFriction](kineticfriction.md): The friction the collider applies to contacting cloth body particles with relative motion.
