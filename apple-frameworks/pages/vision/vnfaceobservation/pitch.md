> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnfaceobservation/pitch](https://developer.apple.com/documentation/vision/vnfaceobservation/pitch)

# pitch (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The pitch angle of a face in radians.

## Declaration

```swift
var pitch: NSNumber? { get }
```

<a id="Discussion"></a>

## Discussion

This value indicates the rotational angle of the face around the x-axis.

If the request doesn’t calculate the angle, the value is `nil`.

## See Also

### Determining Facial Orientation

- [roll](roll.md): The roll angle of a face in radians.
- [yaw](yaw.md): The yaw angle of a face in radians.

# pitch (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The pitch angle of a face in radians.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSNumber * pitch;
```

<a id="Discussion"></a>

## Discussion

This value indicates the rotational angle of the face around the x-axis.

If the request doesn’t calculate the angle, the value is `nil`.

## See Also

### Determining Facial Orientation

- [roll](roll.md): The roll angle of a face in radians.
- [yaw](yaw.md): The yaw angle of a face in radians.
