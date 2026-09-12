> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gceulerangles](https://developer.apple.com/documentation/gamecontroller/gceulerangles)

# GCEulerAngles (Swift)

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

A structure that specifies the controller’s attitude as a series of rotations around the x, y, and z axes.

## Declaration

```swift
struct GCEulerAngles
```

## Topics

### Getting Euler Angle Values

- [pitch](gceulerangles/pitch.md): The pitch of the controller in radians.
- [yaw](gceulerangles/yaw.md): The yaw of the device in radians.
- [roll](gceulerangles/roll.md): The roll of the controller in radians.

### Initializers

- [init()](gceulerangles/init%28%29.md): Creates the Euler angles structure.
- [init(pitch:yaw:roll:)](gceulerangles/init%28pitch_yaw_roll_%29.md): Creates the structure with the specified values.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Accessing Attitude and Rotation Data

- [attitude](gcmotion/attitude.md): The attitude of the controller.
- [GCQuaternion](gcquaternion.md): A quaternion that represents a controller’s measurement of attitude.
- [rotationRate](gcmotion/rotationrate.md): The rotation rate of the controller.
- [GCRotationRate](gcrotationrate.md): A structure that represents rotation rates around the x, y, and z axes.

# GCEulerAngles (Objective-C)

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A structure that specifies the controller’s attitude as a series of rotations around the x, y, and z axes.

## Declaration

```objectivec
typedef struct { ... } GCEulerAngles;
```

## Topics

### Getting Euler Angle Values

- [pitch](gceulerangles/pitch.md): The pitch of the controller in radians.
- [yaw](gceulerangles/yaw.md): The yaw of the device in radians.
- [roll](gceulerangles/roll.md): The roll of the controller in radians.

## See Also

### Accessing Attitude and Rotation Data

- [attitude](gcmotion/attitude.md): The attitude of the controller.
- [GCQuaternion](gcquaternion.md): A quaternion that represents a controller’s measurement of attitude.
- [rotationRate](gcmotion/rotationrate.md): The rotation rate of the controller.
- [GCRotationRate](gcrotationrate.md): A structure that represents rotation rates around the x, y, and z axes.
