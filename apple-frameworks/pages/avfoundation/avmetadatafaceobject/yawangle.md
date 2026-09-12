> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadatafaceobject/yawangle](https://developer.apple.com/documentation/avfoundation/avmetadatafaceobject/yawangle)

# yawAngle (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.10+ · tvOS 9.0+

The yaw angle of the face specified in degrees.

## Declaration

```swift
var yawAngle: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

The yaw angle represents the rotation of the face around the vertical axis. A value of `0.0` yields a face that is looking directly at the camera, whereas a yaw angle of `90` degrees yields a face whose eye line is perpendicular to that of the camera.

You must check the value of the [hasYawAngle](hasyawangle.md) property before accessing this property. If the value in the [hasYawAngle](hasyawangle.md) property is [false](https://developer.apple.com/documentation/swift/false), reading the value in this property raises an exception.

## See Also

### Accessing the face detection data

- [hasRollAngle](hasrollangle.md): A Boolean value indicating whether there is a valid roll angle associated with the face.
- [rollAngle](rollangle.md): The roll angle of the face specified in degrees.
- [hasYawAngle](hasyawangle.md): A Boolean value indicating whether there is a valid yaw angle associated with the face.

# yawAngle (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.10+ · tvOS 9.0+

The yaw angle of the face specified in degrees.

## Declaration

```objectivec
@property (readonly) CGFloat yawAngle;
```

<a id="Discussion"></a>

## Discussion

The yaw angle represents the rotation of the face around the vertical axis. A value of `0.0` yields a face that is looking directly at the camera, whereas a yaw angle of `90` degrees yields a face whose eye line is perpendicular to that of the camera.

You must check the value of the [hasYawAngle](hasyawangle.md) property before accessing this property. If the value in the [hasYawAngle](hasyawangle.md) property is [false](https://developer.apple.com/documentation/swift/false), reading the value in this property raises an exception.

## See Also

### Accessing the face detection data

- [hasRollAngle](hasrollangle.md): A Boolean value indicating whether there is a valid roll angle associated with the face.
- [rollAngle](rollangle.md): The roll angle of the face specified in degrees.
- [hasYawAngle](hasyawangle.md): A Boolean value indicating whether there is a valid yaw angle associated with the face.
