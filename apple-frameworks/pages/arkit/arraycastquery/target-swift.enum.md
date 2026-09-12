> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arraycastquery/target-swift.enum](https://developer.apple.com/documentation/arkit/arraycastquery/target-swift.enum)

# ARRaycastQuery.Target (Swift)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The types of surface you allow a raycast to intersect with.

## Declaration

```swift
enum Target
```

<a id="Discussion"></a>

## Discussion

The available target types are plane, infinite plane, and estimated plane.

## Topics

### Targets

- [ARRaycastQuery.Target.estimatedPlane](target-swift.enum/estimatedplane.md): A raycast target that specifies nonplanar surfaces, or planes about which ARKit can only estimate.
- [ARRaycastQuery.Target.existingPlaneGeometry](target-swift.enum/existingplanegeometry.md): A raycast target that requires a plane to have a definitive size and shape.
- [ARRaycastQuery.Target.existingPlaneInfinite](target-swift.enum/existingplaneinfinite.md): A raycast target that specifies a detected plane, regardless of its size and shape.

### Initializers

- [init(rawValue:)](target-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying the Target

- [target](target-swift.property.md): A plane type that allows the raycast to terminate if it’s encountered.
- [targetAlignment](targetalignment-swift.property.md): The target’s alignment with respect to gravity.
- [ARRaycastQuery.TargetAlignment](targetalignment-swift.enum.md): A specification that indicates a target’s alignment with respect to gravity

# ARRaycastTarget (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS

The types of surface you allow a raycast to intersect with.

## Declaration

```objectivec
enum ARRaycastTarget : NSInteger;
```

<a id="Discussion"></a>

## Discussion

The available target types are plane, infinite plane, and estimated plane.

## Topics

### Targets

- [ARRaycastTargetEstimatedPlane](target-swift.enum/estimatedplane.md): A raycast target that specifies nonplanar surfaces, or planes about which ARKit can only estimate.
- [ARRaycastTargetExistingPlaneGeometry](target-swift.enum/existingplanegeometry.md): A raycast target that requires a plane to have a definitive size and shape.
- [ARRaycastTargetExistingPlaneInfinite](target-swift.enum/existingplaneinfinite.md): A raycast target that specifies a detected plane, regardless of its size and shape.

## See Also

### Specifying the Target

- [target](target-swift.property.md): A plane type that allows the raycast to terminate if it’s encountered.
- [targetAlignment](targetalignment-swift.property.md): The target’s alignment with respect to gravity.
- [ARRaycastTargetAlignment](targetalignment-swift.enum.md): A specification that indicates a target’s alignment with respect to gravity
