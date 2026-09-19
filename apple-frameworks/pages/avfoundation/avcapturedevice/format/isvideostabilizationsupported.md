> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/isvideostabilizationsupported

# isVideoStabilizationSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 8.0) · iPadOS 7.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A Boolean value that indicates whether the format supports video stabilization.

> Use isVideoStabilizationModeSupported: instead.

## Declaration

```swift
var isVideoStabilizationSupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If the format supports video stabilization, you can enable it on an [AVCaptureConnection](../../avcaptureconnection.md) instance.

# videoStabilizationSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 8.0) · iPadOS 7.0+ (deprecated in 8.0) · Mac Catalyst 14.0+ (deprecated in 13.1)

A Boolean value that indicates whether the format supports video stabilization.

> Use isVideoStabilizationModeSupported: instead.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isVideoStabilizationSupported) BOOL videoStabilizationSupported;
```

<a id="Discussion"></a>

## Discussion

If the format supports video stabilization, you can enable it on an [AVCaptureConnection](../../avcaptureconnection.md) instance.
