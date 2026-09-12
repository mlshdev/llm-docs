> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arconfiguration/videoformat-swift.class/framespersecond](https://developer.apple.com/documentation/arkit/arconfiguration/videoformat-swift.class/framespersecond)

# framesPerSecond (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+

The rate at which the session captures video and provides AR frame information.

## Declaration

```swift
var framesPerSecond: Int { get }
```

## See Also

### Accessing format information

- [imageResolution](imageresolution.md): The size, in pixels, of video images captured in the session.
- [isRecommendedForHighResolutionFrameCapturing](isrecommendedforhighresolutionframecapturing.md): Determines whether the framework considers a format suitable for high-resolution frame capture.
- [isVideoHDRSupported](isvideohdrsupported.md): Determines whether the format supports high dynamic range (HDR).

# framesPerSecond (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+

The rate at which the session captures video and provides AR frame information.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger framesPerSecond;
```

## See Also

### Accessing format information

- [imageResolution](imageresolution.md): The size, in pixels, of video images captured in the session.
- [isRecommendedForHighResolutionFrameCapturing](isrecommendedforhighresolutionframecapturing.md): Determines whether the framework considers a format suitable for high-resolution frame capture.
- [videoHDRSupported](isvideohdrsupported.md): Determines whether the format supports high dynamic range (HDR).
