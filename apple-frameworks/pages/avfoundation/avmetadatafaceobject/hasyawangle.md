> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avmetadatafaceobject/hasyawangle

# hasYawAngle (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.10+ · tvOS 9.0+

A Boolean value indicating whether there is a valid yaw angle associated with the face.

## Declaration

```swift
var hasYawAngle: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [false](https://developer.apple.com/documentation/swift/false), the value in the [yawAngle](yawangle.md) property is invalid and must not be accessed.

## See Also

### Accessing the face detection data

- [hasRollAngle](hasrollangle.md): A Boolean value indicating whether there is a valid roll angle associated with the face.
- [rollAngle](rollangle.md): The roll angle of the face specified in degrees.
- [yawAngle](yawangle.md): The yaw angle of the face specified in degrees.

# hasYawAngle (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.10+ · tvOS 9.0+

A Boolean value indicating whether there is a valid yaw angle associated with the face.

## Declaration

```objectivec
@property (readonly) BOOL hasYawAngle;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [false](https://developer.apple.com/documentation/swift/false), the value in the [yawAngle](yawangle.md) property is invalid and must not be accessed.

## See Also

### Accessing the face detection data

- [hasRollAngle](hasrollangle.md): A Boolean value indicating whether there is a valid roll angle associated with the face.
- [rollAngle](rollangle.md): The roll angle of the face specified in degrees.
- [yawAngle](yawangle.md): The yaw angle of the face specified in degrees.
