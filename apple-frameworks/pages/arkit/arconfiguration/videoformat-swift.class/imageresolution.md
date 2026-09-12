> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arconfiguration/videoformat-swift.class/imageresolution](https://developer.apple.com/documentation/arkit/arconfiguration/videoformat-swift.class/imageresolution)

# imageResolution (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+

The size, in pixels, of video images captured in the session.

## Declaration

```swift
var imageResolution: CGSize { get }
```

<a id="Discussion"></a>

## Discussion

Video format sizes are relative to the native sensor orientation of the device camera, and as such are always landscape-oriented.

## See Also

### Accessing format information

- [framesPerSecond](framespersecond.md): The rate at which the session captures video and provides AR frame information.
- [isRecommendedForHighResolutionFrameCapturing](isrecommendedforhighresolutionframecapturing.md): Determines whether the framework considers a format suitable for high-resolution frame capture.
- [isVideoHDRSupported](isvideohdrsupported.md): Determines whether the format supports high dynamic range (HDR).

# imageResolution (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+

The size, in pixels, of video images captured in the session.

## Declaration

```objectivec
@property (nonatomic, readonly) CGSize imageResolution;
```

<a id="Discussion"></a>

## Discussion

Video format sizes are relative to the native sensor orientation of the device camera, and as such are always landscape-oriented.

## See Also

### Accessing format information

- [framesPerSecond](framespersecond.md): The rate at which the session captures video and provides AR frame information.
- [isRecommendedForHighResolutionFrameCapturing](isrecommendedforhighresolutionframecapturing.md): Determines whether the framework considers a format suitable for high-resolution frame capture.
- [videoHDRSupported](isvideohdrsupported.md): Determines whether the format supports high dynamic range (HDR).
