> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcquaternion](https://developer.apple.com/documentation/gamecontroller/gcquaternion)

# GCQuaternion (Swift)

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

A quaternion that represents a controller’s measurement of attitude.

## Declaration

```swift
struct GCQuaternion
```

## Topics

### Getting Quaternion Values

- [x](gcquaternion/x.md): The value for the x-axis of the quaternion.
- [y](gcquaternion/y.md): The value for the y-axis of the quaternion.
- [z](gcquaternion/z.md): The value for the z-axis of the quaternion.
- [w](gcquaternion/w.md): The value for the w-axis of the quaternion.

### Initializers

- [init()](gcquaternion/init%28%29.md): Creates a quaternion structure.
- [init(x:y:z:w:)](gcquaternion/init%28x_y_z_w_%29.md): Creates a quaternion structure with the specified values.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Accessing Attitude and Rotation Data

- [attitude](gcmotion/attitude.md): The attitude of the controller.
- [rotationRate](gcmotion/rotationrate.md): The rotation rate of the controller.
- [GCRotationRate](gcrotationrate.md): A structure that represents rotation rates around the x, y, and z axes.
- [GCEulerAngles](gceulerangles.md): A structure that specifies the controller’s attitude as a series of rotations around the x, y, and z axes.

# GCQuaternion (Objective-C)

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A quaternion that represents a controller’s measurement of attitude.

## Declaration

```objectivec
typedef struct GCQuaternion { ... } GCQuaternion;
```

## Topics

### Getting Quaternion Values

- [x](gcquaternion/x.md): The value for the x-axis of the quaternion.
- [y](gcquaternion/y.md): The value for the y-axis of the quaternion.
- [z](gcquaternion/z.md): The value for the z-axis of the quaternion.
- [w](gcquaternion/w.md): The value for the w-axis of the quaternion.

## See Also

### Accessing Attitude and Rotation Data

- [attitude](gcmotion/attitude.md): The attitude of the controller.
- [rotationRate](gcmotion/rotationrate.md): The rotation rate of the controller.
- [GCRotationRate](gcrotationrate.md): A structure that represents rotation rates around the x, y, and z axes.
- [GCEulerAngles](gceulerangles.md): A structure that specifies the controller’s attitude as a series of rotations around the x, y, and z axes.
