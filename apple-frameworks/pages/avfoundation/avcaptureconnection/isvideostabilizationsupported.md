> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureconnection/isvideostabilizationsupported](https://developer.apple.com/documentation/avfoundation/avcaptureconnection/isvideostabilizationsupported)

# isVideoStabilizationSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether this connection supports video stabilization.

## Declaration

```swift
var isVideoStabilizationSupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The connection only supports video stabilization for video connection types, but may not be available for all resolutions.

## See Also

### Stabilizing video

- [activeVideoStabilizationMode](activevideostabilizationmode.md): The connection’s current stabilization mode.
- [preferredVideoStabilizationMode](preferredvideostabilizationmode.md): The stabilization mode that’s the most appropriate for a video connection.

# supportsVideoStabilization (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether this connection supports video stabilization.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isVideoStabilizationSupported) BOOL supportsVideoStabilization;
```

<a id="Discussion"></a>

## Discussion

The connection only supports video stabilization for video connection types, but may not be available for all resolutions.

## See Also

### Stabilizing video

- [activeVideoStabilizationMode](activevideostabilizationmode.md): The connection’s current stabilization mode.
- [preferredVideoStabilizationMode](preferredvideostabilizationmode.md): The stabilization mode that’s the most appropriate for a video connection.
