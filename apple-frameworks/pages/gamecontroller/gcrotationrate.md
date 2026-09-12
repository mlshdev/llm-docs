> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcrotationrate](https://developer.apple.com/documentation/gamecontroller/gcrotationrate)

# GCRotationRate (Swift)

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

A structure that represents rotation rates around the x, y, and z axes.

## Declaration

```swift
struct GCRotationRate
```

## Topics

### Getting Rotation Rate Values

- [x](gcrotationrate/x.md): The rotation rate around the x-axis in radians per second.
- [y](gcrotationrate/y.md): The rotation rate around the y-axis in radians per second.
- [z](gcrotationrate/z.md): The rotation rate around the z-axis in radians per second.

### Initializers

- [init()](gcrotationrate/init%28%29.md): Creates a rotation rate structure.
- [init(x:y:z:)](gcrotationrate/init%28x_y_z_%29.md): Creates a rotation rate structure with the specified values.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Accessing Attitude and Rotation Data

- [attitude](gcmotion/attitude.md): The attitude of the controller.
- [GCQuaternion](gcquaternion.md): A quaternion that represents a controller’s measurement of attitude.
- [rotationRate](gcmotion/rotationrate.md): The rotation rate of the controller.
- [GCEulerAngles](gceulerangles.md): A structure that specifies the controller’s attitude as a series of rotations around the x, y, and z axes.

# GCRotationRate (Objective-C)

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A structure that represents rotation rates around the x, y, and z axes.

## Declaration

```objectivec
typedef struct { ... } GCRotationRate;
```

## Topics

### Getting Rotation Rate Values

- [x](gcrotationrate/x.md): The rotation rate around the x-axis in radians per second.
- [y](gcrotationrate/y.md): The rotation rate around the y-axis in radians per second.
- [z](gcrotationrate/z.md): The rotation rate around the z-axis in radians per second.

## See Also

### Accessing Attitude and Rotation Data

- [attitude](gcmotion/attitude.md): The attitude of the controller.
- [GCQuaternion](gcquaternion.md): A quaternion that represents a controller’s measurement of attitude.
- [rotationRate](gcmotion/rotationrate.md): The rotation rate of the controller.
- [GCEulerAngles](gceulerangles.md): A structure that specifies the controller’s attitude as a series of rotations around the x, y, and z axes.
