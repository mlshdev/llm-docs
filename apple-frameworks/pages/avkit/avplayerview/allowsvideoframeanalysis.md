> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avplayerview/allowsvideoframeanalysis

# allowsVideoFrameAnalysis (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

A Boolean value that indicates whether to perform video frame analysis.

## Declaration

```swift
var allowsVideoFrameAnalysis: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value is `true`, a player view tries to find objects, text, and people when you pause media playback. If it finds an object, the user is able to interact with it using a long press to present a context menu.

The default value is `true`.

## See Also

### Configuring frame analysis

- [videoFrameAnalysisTypes](videoframeanalysistypes.md)
- [AVVideoFrameAnalysisType](../avvideoframeanalysistype.md): Constants that define the types of analysis a player view controller may perform on a paused video frame.

# allowsVideoFrameAnalysis (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

A Boolean value that indicates whether to perform video frame analysis.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsVideoFrameAnalysis;
```

<a id="Discussion"></a>

## Discussion

If the value is `true`, a player view tries to find objects, text, and people when you pause media playback. If it finds an object, the user is able to interact with it using a long press to present a context menu.

The default value is `true`.

## See Also

### Configuring frame analysis

- [videoFrameAnalysisTypes](videoframeanalysistypes.md)
- [AVVideoFrameAnalysisType](../avvideoframeanalysistype.md): Constants that define the types of analysis a player view controller may perform on a paused video frame.
