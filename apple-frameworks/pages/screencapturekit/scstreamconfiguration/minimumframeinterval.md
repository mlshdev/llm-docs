> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamconfiguration/minimumframeinterval](https://developer.apple.com/documentation/screencapturekit/scstreamconfiguration/minimumframeinterval)

# minimumFrameInterval (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

The desired minimum time between frame updates, in seconds.

## Declaration

```swift
var minimumFrameInterval: CMTime { get set }
```

<a id="discussion"></a>

## Discussion

Use this value to throttle the rate at which you receive updates. The default value is `0`, which indicates that the system uses the maximum supported frame rate.

You specify the minimum frame interval as the reciprocal of the maximum frame rate. For example, to configure the stream to capture at 60 fps, specify a minimum frame interval equal to `1/60`.

```swift
let config = SCStreamConfiguration()
config.minimumFrameInterval = CMTime(value: 1, timescale: CMTimeScale(60))
```

## See Also

### Configuring captured frames

- [queueDepth](queuedepth.md): The maximum number of frames for the queue to store.
- [captureResolution](captureresolution.md): The resolution at which to capture source content.
- [SCCaptureResolutionType](../sccaptureresolutiontype.md): Available resolutions for content capture.

# minimumFrameInterval (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

The desired minimum time between frame updates, in seconds.

## Declaration

```objectivec
@property (nonatomic, assign) CMTime minimumFrameInterval;
```

<a id="discussion"></a>

## Discussion

Use this value to throttle the rate at which you receive updates. The default value is `0`, which indicates that the system uses the maximum supported frame rate.

You specify the minimum frame interval as the reciprocal of the maximum frame rate. For example, to configure the stream to capture at 60 fps, specify a minimum frame interval equal to `1/60`.

```swift
let config = SCStreamConfiguration()
config.minimumFrameInterval = CMTime(value: 1, timescale: CMTimeScale(60))
```

## See Also

### Configuring captured frames

- [queueDepth](queuedepth.md): The maximum number of frames for the queue to store.
- [captureResolution](captureresolution.md): The resolution at which to capture source content.
- [SCCaptureResolutionType](../sccaptureresolutiontype.md): Available resolutions for content capture.
