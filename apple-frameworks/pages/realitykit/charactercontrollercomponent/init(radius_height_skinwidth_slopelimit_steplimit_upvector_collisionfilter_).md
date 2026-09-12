> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/charactercontrollercomponent/init(radius:height:skinwidth:slopelimit:steplimit:upvector:collisionfilter:)](https://developer.apple.com/documentation/realitykit/charactercontrollercomponent/init(radius:height:skinwidth:slopelimit:steplimit:upvector:collisionfilter:))

# init(radius:height:skinWidth:slopeLimit:stepLimit:upVector:collisionFilter:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Creates a character controller component using specified values.

## Declaration

```swift
init(radius: Float, height: Float, skinWidth: Float = defaultSkinWidth, slopeLimit: Float = defaultSlopeLimit, stepLimit: Float = defaultStepLimit, upVector: SIMD3<Float> = defaultUpVector, collisionFilter: CollisionFilter = .default)
```

## See Also

### Creating a character controller component

- [init()](init%28%29.md): Creates a character controller component using default values.
