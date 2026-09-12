> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcacceleration](https://developer.apple.com/documentation/gamecontroller/gcacceleration)

# GCAcceleration (Swift)

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

A three-dimensional acceleration vector.

## Declaration

```swift
struct GCAcceleration
```

## Topics

### Getting Acceleration Values

- [x](gcacceleration/x.md): The acceleration measurement along the x-axis, in multiples of earth’s gravity.
- [y](gcacceleration/y.md): The acceleration measurement along the y-axis, in multiples of earth’s gravity.
- [z](gcacceleration/z.md): The acceleration measurement along the z-axis, in multiples of earth’s gravity.

### Initializers

- [init()](gcacceleration/init%28%29.md): Creates an acceleration structure.
- [init(x:y:z:)](gcacceleration/init%28x_y_z_%29.md): Creates an acceleration structure with the specified values.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Accessing Gravity and Acceleration Data

- [acceleration](gcmotion/acceleration.md): The total acceleration of the controller that includes gravity and the acceleration the user applies to the controller.
- [gravity](gcmotion/gravity.md): The gravity acceleration vector from the controller’s reference frame.
- [userAcceleration](gcmotion/useracceleration.md): The acceleration that the user applies to the controller.

# GCAcceleration (Objective-C)

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A three-dimensional acceleration vector.

## Declaration

```objectivec
typedef struct { ... } GCAcceleration;
```

## Topics

### Getting Acceleration Values

- [x](gcacceleration/x.md): The acceleration measurement along the x-axis, in multiples of earth’s gravity.
- [y](gcacceleration/y.md): The acceleration measurement along the y-axis, in multiples of earth’s gravity.
- [z](gcacceleration/z.md): The acceleration measurement along the z-axis, in multiples of earth’s gravity.

## See Also

### Accessing Gravity and Acceleration Data

- [acceleration](gcmotion/acceleration.md): The total acceleration of the controller that includes gravity and the acceleration the user applies to the controller.
- [gravity](gcmotion/gravity.md): The gravity acceleration vector from the controller’s reference frame.
- [userAcceleration](gcmotion/useracceleration.md): The acceleration that the user applies to the controller.
