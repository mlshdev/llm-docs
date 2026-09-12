> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcmotion/rotationrate](https://developer.apple.com/documentation/gamecontroller/gcmotion/rotationrate)

# rotationRate (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The rotation rate of the controller.

## Declaration

```swift
var rotationRate: GCRotationRate { get }
```

<a id="Discussion"></a>

## Discussion

The *rotation rate* is a gyroscopic measurement of the controller’s rotation around the x, y, and z axes.

## See Also

### Accessing Attitude and Rotation Data

- [attitude](attitude.md): The attitude of the controller.
- [GCQuaternion](../gcquaternion.md): A quaternion that represents a controller’s measurement of attitude.
- [GCRotationRate](../gcrotationrate.md): A structure that represents rotation rates around the x, y, and z axes.
- [GCEulerAngles](../gceulerangles.md): A structure that specifies the controller’s attitude as a series of rotations around the x, y, and z axes.

# rotationRate (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The rotation rate of the controller.

## Declaration

```objectivec
@property (nonatomic, readonly) GCRotationRate rotationRate;
```

<a id="Discussion"></a>

## Discussion

The *rotation rate* is a gyroscopic measurement of the controller’s rotation around the x, y, and z axes.

## See Also

### Accessing Attitude and Rotation Data

- [attitude](attitude.md): The attitude of the controller.
- [GCQuaternion](../gcquaternion.md): A quaternion that represents a controller’s measurement of attitude.
- [GCRotationRate](../gcrotationrate.md): A structure that represents rotation rates around the x, y, and z axes.
- [GCEulerAngles](../gceulerangles.md): A structure that specifies the controller’s attitude as a series of rotations around the x, y, and z axes.
