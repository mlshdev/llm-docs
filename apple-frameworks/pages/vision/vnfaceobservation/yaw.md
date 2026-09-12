> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnfaceobservation/yaw](https://developer.apple.com/documentation/vision/vnfaceobservation/yaw)

# yaw (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

The yaw angle of a face in radians.

## Declaration

```swift
var yaw: NSNumber? { get }
```

<a id="Discussion"></a>

## Discussion

This value indicates the rotational angle of the face around the y-axis.

If the request doesn’t calculate the angle, the value is `nil.`

## See Also

### Determining Facial Orientation

- [roll](roll.md): The roll angle of a face in radians.
- [pitch](pitch.md): The pitch angle of a face in radians.

# yaw (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

The yaw angle of a face in radians.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSNumber * yaw;
```

<a id="Discussion"></a>

## Discussion

This value indicates the rotational angle of the face around the y-axis.

If the request doesn’t calculate the angle, the value is `nil.`

## See Also

### Determining Facial Orientation

- [roll](roll.md): The roll angle of a face in radians.
- [pitch](pitch.md): The pitch angle of a face in radians.
