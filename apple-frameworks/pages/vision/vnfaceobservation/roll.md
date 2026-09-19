> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/vnfaceobservation/roll

# roll (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

The roll angle of a face in radians.

## Declaration

```swift
var roll: NSNumber? { get }
```

<a id="Discussion"></a>

## Discussion

This value indicates the rotational angle of the face around the z-axis.

If the request doesn’t calculate the angle, the value is `nil`.

## See Also

### Determining Facial Orientation

- [yaw](yaw.md): The yaw angle of a face in radians.
- [pitch](pitch.md): The pitch angle of a face in radians.

# roll (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

The roll angle of a face in radians.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSNumber * roll;
```

<a id="Discussion"></a>

## Discussion

This value indicates the rotational angle of the face around the z-axis.

If the request doesn’t calculate the angle, the value is `nil`.

## See Also

### Determining Facial Orientation

- [yaw](yaw.md): The yaw angle of a face in radians.
- [pitch](pitch.md): The pitch angle of a face in radians.
