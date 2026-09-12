> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/systempressurestate-swift.class/level-swift.property](https://developer.apple.com/documentation/avfoundation/avcapturedevice/systempressurestate-swift.class/level-swift.property)

# level (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.1+ · iPadOS 11.1+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

The overall level of performance constraints on the capture system.

## Declaration

```swift
var level: AVCaptureDevice.SystemPressureState.Level { get }
```

<a id="Discussion"></a>

## Discussion

Several aspects of OS and hardware status affect capture system performance and availability (see [AVCaptureDevice.SystemPressureState.Factors](factors-swift.struct.md)). The overall system pressure level represents the most critical of underlying factors.

## See Also

### Overall level

- [AVCaptureDevice.SystemPressureState.Level](level-swift.struct.md): A structure that defines system pressure state levels.

# level (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.1+ · iPadOS 11.1+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

The overall level of performance constraints on the capture system.

## Declaration

```objectivec
@property (atomic, readonly) AVCaptureSystemPressureLevel level;
```

<a id="Discussion"></a>

## Discussion

Several aspects of OS and hardware status affect capture system performance and availability (see [AVCaptureSystemPressureFactors](factors-swift.struct.md)). The overall system pressure level represents the most critical of underlying factors.

## See Also

### Overall level

- [AVCaptureSystemPressureLevel](level-swift.struct.md): A structure that defines system pressure state levels.
