> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/bodytrackingcomponent/target-swift.enum](https://developer.apple.com/documentation/realitykit/bodytrackingcomponent/target-swift.enum)

# BodyTrackingComponent.Target

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+

Body-tracking settings for selecting a person to track.

## Declaration

```swift
enum Target
```

## Topics

### Body tracking target types

- [BodyTrackingComponent.Target.any](target-swift.enum/any.md): Any person that is detected in front of the camera.
- [BodyTrackingComponent.Target.body(identifier:)](target-swift.enum/body%28identifier_%29.md): A person detected by ARKit.

### Operators

- [==(\_:\_:)](target-swift.enum/==%28____%29.md): Indicates whether two targets are equal.

### Instance Methods

- [hash(into:)](target-swift.enum/hash%28into_%29.md): Hashes the essential components of the target by feeding them into the given hash function.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Selecting a body to track

- [target](target-swift.property.md): The body-tracking setting.
