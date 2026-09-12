> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arconfiguration/videoformat-swift.class/isrecommendedforhighresolutionframecapturing](https://developer.apple.com/documentation/arkit/arconfiguration/videoformat-swift.class/isrecommendedforhighresolutionframecapturing)

# isRecommendedForHighResolutionFrameCapturing (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+

Determines whether the framework considers a format suitable for high-resolution frame capture.

## Declaration

```swift
var isRecommendedForHighResolutionFrameCapturing: Bool { get }
```

## See Also

### Accessing format information

- [framesPerSecond](framespersecond.md): The rate at which the session captures video and provides AR frame information.
- [imageResolution](imageresolution.md): The size, in pixels, of video images captured in the session.
- [isVideoHDRSupported](isvideohdrsupported.md): Determines whether the format supports high dynamic range (HDR).

# isRecommendedForHighResolutionFrameCapturing (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+

Determines whether the framework considers a format suitable for high-resolution frame capture.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL isRecommendedForHighResolutionFrameCapturing;
```

## See Also

### Accessing format information

- [framesPerSecond](framespersecond.md): The rate at which the session captures video and provides AR frame information.
- [imageResolution](imageresolution.md): The size, in pixels, of video images captured in the session.
- [videoHDRSupported](isvideohdrsupported.md): Determines whether the format supports high dynamic range (HDR).
