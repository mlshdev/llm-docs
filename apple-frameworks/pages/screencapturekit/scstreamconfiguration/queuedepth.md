> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamconfiguration/queuedepth](https://developer.apple.com/documentation/screencapturekit/scstreamconfiguration/queuedepth)

# queueDepth (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

The maximum number of frames for the queue to store.

## Declaration

```swift
var queueDepth: Int { get set }
```

<a id="discussion"></a>

## Discussion

By default, the system sets the queue depth to its minimum value of three frames. Specifying more frames uses more memory, but may allow you to process frame data without stalling the display stream.

> **Important**

>  Don’t exceed a queue depth of eight frames.

## See Also

### Configuring captured frames

- [minimumFrameInterval](minimumframeinterval.md): The desired minimum time between frame updates, in seconds.
- [captureResolution](captureresolution.md): The resolution at which to capture source content.
- [SCCaptureResolutionType](../sccaptureresolutiontype.md): Available resolutions for content capture.

# queueDepth (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

The maximum number of frames for the queue to store.

## Declaration

```objectivec
@property (nonatomic, assign) NSInteger queueDepth;
```

<a id="discussion"></a>

## Discussion

By default, the system sets the queue depth to its minimum value of three frames. Specifying more frames uses more memory, but may allow you to process frame data without stalling the display stream.

> **Important**

>  Don’t exceed a queue depth of eight frames.

## See Also

### Configuring captured frames

- [minimumFrameInterval](minimumframeinterval.md): The desired minimum time between frame updates, in seconds.
- [captureResolution](captureresolution.md): The resolution at which to capture source content.
- [SCCaptureResolutionType](../sccaptureresolutiontype.md): Available resolutions for content capture.
