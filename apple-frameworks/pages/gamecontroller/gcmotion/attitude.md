> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcmotion/attitude](https://developer.apple.com/documentation/gamecontroller/gcmotion/attitude)

# attitude (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The attitude of the controller.

## Declaration

```swift
var attitude: GCQuaternion { get }
```

<a id="Discussion"></a>

## Discussion

The *attitude* is the orientation of a body relative to the controller’s reference frame.

## See Also

### Accessing Attitude and Rotation Data

- [GCQuaternion](../gcquaternion.md): A quaternion that represents a controller’s measurement of attitude.
- [rotationRate](rotationrate.md): The rotation rate of the controller.
- [GCRotationRate](../gcrotationrate.md): A structure that represents rotation rates around the x, y, and z axes.
- [GCEulerAngles](../gceulerangles.md): A structure that specifies the controller’s attitude as a series of rotations around the x, y, and z axes.

# attitude (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The attitude of the controller.

## Declaration

```objectivec
@property (nonatomic, readonly) GCQuaternion attitude;
```

<a id="Discussion"></a>

## Discussion

The *attitude* is the orientation of a body relative to the controller’s reference frame.

## See Also

### Accessing Attitude and Rotation Data

- [GCQuaternion](../gcquaternion.md): A quaternion that represents a controller’s measurement of attitude.
- [rotationRate](rotationrate.md): The rotation rate of the controller.
- [GCRotationRate](../gcrotationrate.md): A structure that represents rotation rates around the x, y, and z axes.
- [GCEulerAngles](../gceulerangles.md): A structure that specifies the controller’s attitude as a series of rotations around the x, y, and z axes.
