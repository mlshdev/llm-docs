> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturestillimageoutput/isstillimagestabilizationsupported](https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/isstillimagestabilizationsupported)

# isStillImageStabilizationSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 10.0) · iPadOS 7.0+ (deprecated in 10.0) · Mac Catalyst 14.0+ (deprecated in 13.1)

A Boolean value that indicates whether the  still image currently being captured supports still image stabilization.

## Declaration

```swift
var isStillImageStabilizationSupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The  [automaticallyEnablesStillImageStabilizationWhenAvailable](automaticallyenablesstillimagestabilizationwhenavailable.md) property can only be set if this property returns [true](https://developer.apple.com/documentation/swift/true).

The value may change as the session’s [sessionPreset](../avcapturesession/sessionpreset.md) or the input device’s [activeFormat](../avcapturedevice/activeformat.md) changes.

## See Also

### Getting and setting image stabilization settings

- [isStillImageStabilizationActive](isstillimagestabilizationactive.md): Deprecated. Indicates whether still image stabilization is in use for the current capture.
- [automaticallyEnablesStillImageStabilizationWhenAvailable](automaticallyenablesstillimagestabilizationwhenavailable.md): Deprecated. A Boolean value that indicates whether still image stabilization should be automatically enabled.

# stillImageStabilizationSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 10.0) · iPadOS 7.0+ (deprecated in 10.0) · Mac Catalyst 14.0+ (deprecated in 13.1)

A Boolean value that indicates whether the  still image currently being captured supports still image stabilization.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isStillImageStabilizationSupported) BOOL stillImageStabilizationSupported;
```

<a id="Discussion"></a>

## Discussion

The  [automaticallyEnablesStillImageStabilizationWhenAvailable](automaticallyenablesstillimagestabilizationwhenavailable.md) property can only be set if this property returns [true](https://developer.apple.com/documentation/swift/true).

The value may change as the session’s [sessionPreset](../avcapturesession/sessionpreset.md) or the input device’s [activeFormat](../avcapturedevice/activeformat.md) changes.

## See Also

### Getting and setting image stabilization settings

- [stillImageStabilizationActive](isstillimagestabilizationactive.md): Deprecated. Indicates whether still image stabilization is in use for the current capture.
- [automaticallyEnablesStillImageStabilizationWhenAvailable](automaticallyenablesstillimagestabilizationwhenavailable.md): Deprecated. A Boolean value that indicates whether still image stabilization should be automatically enabled.
