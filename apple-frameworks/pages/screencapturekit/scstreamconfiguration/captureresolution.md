> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamconfiguration/captureresolution](https://developer.apple.com/documentation/screencapturekit/scstreamconfiguration/captureresolution)

# captureResolution (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

The resolution at which to capture source content.

## Declaration

```swift
var captureResolution: SCCaptureResolutionType { get set }
```

## See Also

### Configuring captured frames

- [queueDepth](queuedepth.md): The maximum number of frames for the queue to store.
- [minimumFrameInterval](minimumframeinterval.md): The desired minimum time between frame updates, in seconds.
- [SCCaptureResolutionType](../sccaptureresolutiontype.md): Available resolutions for content capture.

# captureResolution (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

The resolution at which to capture source content.

## Declaration

```objectivec
@property (nonatomic, assign) SCCaptureResolutionType captureResolution;
```

## See Also

### Configuring captured frames

- [queueDepth](queuedepth.md): The maximum number of frames for the queue to store.
- [minimumFrameInterval](minimumframeinterval.md): The desired minimum time between frame updates, in seconds.
- [SCCaptureResolutionType](../sccaptureresolutiontype.md): Available resolutions for content capture.
