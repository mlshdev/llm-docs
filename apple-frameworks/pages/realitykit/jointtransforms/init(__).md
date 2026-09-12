> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/jointtransforms/init(_:)](https://developer.apple.com/documentation/realitykit/jointtransforms/init(_:))

# init(\_:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Initializes a collection of transforms of a specific type for a single skeletal pose.

## Declaration

```swift
init<S>(_ transforms: S) where S : Sequence, S.Element == Transform
```

## Parameters

- `transforms`: An array of position, rotation, and scale data for the joints.

## See Also

### Creating joint transforms

- [init()](init%28%29.md): Initializes a collection of animatable transforms for a single skeletal pose.
- [init(arrayLiteral:)](init%28arrayliteral_%29.md): Initializes a collection of animatable transforms using the argument elements for a single skeletal pose.
