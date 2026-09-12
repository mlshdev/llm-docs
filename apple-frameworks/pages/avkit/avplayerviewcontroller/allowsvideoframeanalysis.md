> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontroller/allowsvideoframeanalysis](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/allowsvideoframeanalysis)

# allowsVideoFrameAnalysis (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 18.0+

A Boolean value that indicates whether to perform video frame analysis.

## Declaration

```swift
var allowsVideoFrameAnalysis: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value is `true`, a player view controller tries to find objects, text, and people when you pause media playback. If it finds an object, the user is able to interact with it using a long press to present a context menu.

The default value is `true`.

## See Also

### Configuring frame analysis

- [toggleLookupAction](togglelookupaction.md): An action that enables the visual lookup interface.
- [videoFrameAnalysisTypes](videoframeanalysistypes.md): The types of analysis a player view controller performs on a paused video frame.
- [AVVideoFrameAnalysisType](../avvideoframeanalysistype.md): Constants that define the types of analysis a player view controller may perform on a paused video frame.

# allowsVideoFrameAnalysis (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 18.0+

A Boolean value that indicates whether to perform video frame analysis.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsVideoFrameAnalysis;
```

<a id="Discussion"></a>

## Discussion

If the value is `true`, a player view controller tries to find objects, text, and people when you pause media playback. If it finds an object, the user is able to interact with it using a long press to present a context menu.

The default value is `true`.

## See Also

### Configuring frame analysis

- [toggleLookupAction](togglelookupaction.md): An action that enables the visual lookup interface.
- [videoFrameAnalysisTypes](videoframeanalysistypes.md): The types of analysis a player view controller performs on a paused video frame.
- [AVVideoFrameAnalysisType](../avvideoframeanalysistype.md): Constants that define the types of analysis a player view controller may perform on a paused video frame.
