> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturestillimageoutput/isstillimagestabilizationactive](https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/isstillimagestabilizationactive)

# isStillImageStabilizationActive (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 10.0) · iPadOS 7.0+ (deprecated in 10.0) · Mac Catalyst 14.0+ (deprecated in 13.1)

Indicates whether still image stabilization is in use for the current capture.

## Declaration

```swift
var isStillImageStabilizationActive: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The property returns [true](https://developer.apple.com/documentation/swift/true) if video stabilization is currently in use; otherwise [false](https://developer.apple.com/documentation/swift/false).

This property supports key-value observing.

## See Also

### Getting and setting image stabilization settings

- [automaticallyEnablesStillImageStabilizationWhenAvailable](automaticallyenablesstillimagestabilizationwhenavailable.md): Deprecated. A Boolean value that indicates whether still image stabilization should be automatically enabled.
- [isStillImageStabilizationSupported](isstillimagestabilizationsupported.md): Deprecated. A Boolean value that indicates whether the still image currently being captured supports still image stabilization.

# stillImageStabilizationActive (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 10.0) · iPadOS 7.0+ (deprecated in 10.0) · Mac Catalyst 14.0+ (deprecated in 13.1)

Indicates whether still image stabilization is in use for the current capture.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isStillImageStabilizationActive) BOOL stillImageStabilizationActive;
```

<a id="Discussion"></a>

## Discussion

The property returns [true](https://developer.apple.com/documentation/swift/true) if video stabilization is currently in use; otherwise [false](https://developer.apple.com/documentation/swift/false).

This property supports key-value observing.

## See Also

### Getting and setting image stabilization settings

- [automaticallyEnablesStillImageStabilizationWhenAvailable](automaticallyenablesstillimagestabilizationwhenavailable.md): Deprecated. A Boolean value that indicates whether still image stabilization should be automatically enabled.
- [stillImageStabilizationSupported](isstillimagestabilizationsupported.md): Deprecated. A Boolean value that indicates whether the still image currently being captured supports still image stabilization.
