> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadatafaceobject/rollangle](https://developer.apple.com/documentation/avfoundation/avmetadatafaceobject/rollangle)

# rollAngle (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.10+ · tvOS 9.0+

The roll angle of the face specified in degrees.

## Declaration

```swift
var rollAngle: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

The roll angle represents the side-to-side tilt of the face relative to the metadata’s bounding rectangle. A value of `0.0` yields a face that is level relative to the picture, whereas a value of `90` yields a face that is perpendicular relative to the picture.

You must check the value of the [hasRollAngle](hasrollangle.md) property before accessing this property. If the value in the [hasRollAngle](hasrollangle.md) property is [false](https://developer.apple.com/documentation/swift/false), reading the value in this property raises an exception.

## See Also

### Accessing the face detection data

- [hasRollAngle](hasrollangle.md): A Boolean value indicating whether there is a valid roll angle associated with the face.
- [hasYawAngle](hasyawangle.md): A Boolean value indicating whether there is a valid yaw angle associated with the face.
- [yawAngle](yawangle.md): The yaw angle of the face specified in degrees.

# rollAngle (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.10+ · tvOS 9.0+

The roll angle of the face specified in degrees.

## Declaration

```objectivec
@property (readonly) CGFloat rollAngle;
```

<a id="Discussion"></a>

## Discussion

The roll angle represents the side-to-side tilt of the face relative to the metadata’s bounding rectangle. A value of `0.0` yields a face that is level relative to the picture, whereas a value of `90` yields a face that is perpendicular relative to the picture.

You must check the value of the [hasRollAngle](hasrollangle.md) property before accessing this property. If the value in the [hasRollAngle](hasrollangle.md) property is [false](https://developer.apple.com/documentation/swift/false), reading the value in this property raises an exception.

## See Also

### Accessing the face detection data

- [hasRollAngle](hasrollangle.md): A Boolean value indicating whether there is a valid roll angle associated with the face.
- [hasYawAngle](hasyawangle.md): A Boolean value indicating whether there is a valid yaw angle associated with the face.
- [yawAngle](yawangle.md): The yaw angle of the face specified in degrees.
