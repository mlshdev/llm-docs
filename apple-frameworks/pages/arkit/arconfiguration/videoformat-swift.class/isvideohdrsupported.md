> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arconfiguration/videoformat-swift.class/isvideohdrsupported](https://developer.apple.com/documentation/arkit/arconfiguration/videoformat-swift.class/isvideohdrsupported)

# isVideoHDRSupported (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+

Determines whether the format supports high dynamic range (HDR).

## Declaration

```swift
var isVideoHDRSupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Call this function before setting [videoHDRAllowed](../videohdrallowed.md) to `true` to first check whether a video format supports HDR.

## See Also

### Accessing format information

- [framesPerSecond](framespersecond.md): The rate at which the session captures video and provides AR frame information.
- [imageResolution](imageresolution.md): The size, in pixels, of video images captured in the session.
- [isRecommendedForHighResolutionFrameCapturing](isrecommendedforhighresolutionframecapturing.md): Determines whether the framework considers a format suitable for high-resolution frame capture.

# videoHDRSupported (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+

Determines whether the format supports high dynamic range (HDR).

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isVideoHDRSupported) BOOL videoHDRSupported;
```

<a id="Discussion"></a>

## Discussion

Call this function before setting [videoHDRAllowed](../videohdrallowed.md) to `true` to first check whether a video format supports HDR.

## See Also

### Accessing format information

- [framesPerSecond](framespersecond.md): The rate at which the session captures video and provides AR frame information.
- [imageResolution](imageresolution.md): The size, in pixels, of video images captured in the session.
- [isRecommendedForHighResolutionFrameCapturing](isrecommendedforhighresolutionframecapturing.md): Determines whether the framework considers a format suitable for high-resolution frame capture.
