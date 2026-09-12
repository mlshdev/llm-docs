> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothcollidermaterial/kineticfriction](https://developer.apple.com/documentation/realitykit/clothcollidermaterial/kineticfriction)

# kineticFriction

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The friction the collider applies to contacting cloth body particles with relative motion.

## Declaration

```swift
var kineticFriction: Float { get set }
```

<a id="discussion"></a>

## Discussion

Must be non-negative; negative values are clamped to zero. The default value is `0.7`.

## See Also

### Configuring friction

- [staticFriction](staticfriction.md): The friction the collider applies to contacting cloth body particles with no relative motion.
