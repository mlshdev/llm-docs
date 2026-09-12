> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entitygesturerecognizer/location(in:)](https://developer.apple.com/documentation/realitykit/entitygesturerecognizer/location(in:))

# location(in:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+

Returns the unprojected location of the gesture represented by the receiver in the space of the given entity.

## Declaration

```swift
@MainActor @preconcurrency func location(in entity: Entity?) -> SIMD3<Float>?
```

## Parameters

- `entity`: An entity in whose space the location is computed. A `nil` entity will result in world space.

<a id="return-value"></a>

## Return Value

The 3D position identifying the location of the gesture in the space specified.

<a id="discussion"></a>

## Discussion

The location is typically the result of a centroid of touches for a gesture, unprojected onto the associated `entity`, and then converted into the space of the entity passed in, or world space if `nil` is passed in.

## Default Implementations

### EntityGestureRecognizer Implementations

- [location(in:)](location%28in_%29-2aecy.md): Returns the unprojected location of the gesture represented by the receiver in the space of the given entity.

## See Also

### Using the gesture recognizer

- [entity](entity.md): The entity the receiver is associated with
