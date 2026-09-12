> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturestillimageoutput/automaticallyenablesstillimagestabilizationwhenavailable](https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/automaticallyenablesstillimagestabilizationwhenavailable)

# automaticallyEnablesStillImageStabilizationWhenAvailable (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 10.0) · iPadOS 7.0+ (deprecated in 10.0) · Mac Catalyst 14.0+ (deprecated in 13.1)

A Boolean value that indicates whether still image stabilization should be automatically enabled.

## Declaration

```swift
var automaticallyEnablesStillImageStabilizationWhenAvailable: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [isStillImageStabilizationSupported](isstillimagestabilizationsupported.md) returns [true](https://developer.apple.com/documentation/swift/true), image stabilization may be applied to reduce blur commonly found in low light photos. When stabilization is enabled, still image captures incur additional latency.

The default value is [true](https://developer.apple.com/documentation/swift/true) when supported by the input device; otherwise [false](https://developer.apple.com/documentation/swift/false).

Setting this property throws an exception ([invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)) if [isStillImageStabilizationSupported](isstillimagestabilizationsupported.md) returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting and setting image stabilization settings

- [isStillImageStabilizationActive](isstillimagestabilizationactive.md): Deprecated. Indicates whether still image stabilization is in use for the current capture.
- [isStillImageStabilizationSupported](isstillimagestabilizationsupported.md): Deprecated. A Boolean value that indicates whether the still image currently being captured supports still image stabilization.

# automaticallyEnablesStillImageStabilizationWhenAvailable (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 10.0) · iPadOS 7.0+ (deprecated in 10.0) · Mac Catalyst 14.0+ (deprecated in 13.1)

A Boolean value that indicates whether still image stabilization should be automatically enabled.

## Declaration

```objectivec
@property (nonatomic) BOOL automaticallyEnablesStillImageStabilizationWhenAvailable;
```

<a id="Discussion"></a>

## Discussion

If [stillImageStabilizationSupported](isstillimagestabilizationsupported.md) returns [true](https://developer.apple.com/documentation/swift/true), image stabilization may be applied to reduce blur commonly found in low light photos. When stabilization is enabled, still image captures incur additional latency.

The default value is [true](https://developer.apple.com/documentation/swift/true) when supported by the input device; otherwise [false](https://developer.apple.com/documentation/swift/false).

Setting this property throws an exception ([NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)) if [stillImageStabilizationSupported](isstillimagestabilizationsupported.md) returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting and setting image stabilization settings

- [stillImageStabilizationActive](isstillimagestabilizationactive.md): Deprecated. Indicates whether still image stabilization is in use for the current capture.
- [stillImageStabilizationSupported](isstillimagestabilizationsupported.md): Deprecated. A Boolean value that indicates whether the still image currently being captured supports still image stabilization.
