> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadatafaceobject/hasrollangle](https://developer.apple.com/documentation/avfoundation/avmetadatafaceobject/hasrollangle)

# hasRollAngle (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.10+ · tvOS 9.0+

A Boolean value indicating whether there is a valid roll angle associated with the face.

## Declaration

```swift
var hasRollAngle: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [false](https://developer.apple.com/documentation/swift/false), the value in the [rollAngle](rollangle.md) property is invalid and must not be accessed.

## See Also

### Accessing the face detection data

- [rollAngle](rollangle.md): The roll angle of the face specified in degrees.
- [hasYawAngle](hasyawangle.md): A Boolean value indicating whether there is a valid yaw angle associated with the face.
- [yawAngle](yawangle.md): The yaw angle of the face specified in degrees.

# hasRollAngle (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.10+ · tvOS 9.0+

A Boolean value indicating whether there is a valid roll angle associated with the face.

## Declaration

```objectivec
@property (readonly) BOOL hasRollAngle;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [false](https://developer.apple.com/documentation/swift/false), the value in the [rollAngle](rollangle.md) property is invalid and must not be accessed.

## See Also

### Accessing the face detection data

- [rollAngle](rollangle.md): The roll angle of the face specified in degrees.
- [hasYawAngle](hasyawangle.md): A Boolean value indicating whether there is a valid yaw angle associated with the face.
- [yawAngle](yawangle.md): The yaw angle of the face specified in degrees.
