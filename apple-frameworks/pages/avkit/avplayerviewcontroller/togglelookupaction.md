> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontroller/togglelookupaction](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/togglelookupaction)

# toggleLookupAction (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+

An action that enables the visual lookup interface.

## Declaration

```swift
var toggleLookupAction: UIAction { get }
```

<a id="Discussion"></a>

## Discussion

When a user toggles the lookup UI, the state property is [UIMenuElement.State.on](../../uikit/uimenuelement/state/on.md), and is [UIMenuElement.State.off](../../uikit/uimenuelement/state/off.md) otherwise. The system disables the action’s attributes when there isn’t visual lookup data available or when the media is playing.

## See Also

### Configuring frame analysis

- [allowsVideoFrameAnalysis](allowsvideoframeanalysis.md): A Boolean value that indicates whether to perform video frame analysis.
- [videoFrameAnalysisTypes](videoframeanalysistypes.md): The types of analysis a player view controller performs on a paused video frame.
- [AVVideoFrameAnalysisType](../avvideoframeanalysistype.md): Constants that define the types of analysis a player view controller may perform on a paused video frame.

# toggleLookupAction (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+

An action that enables the visual lookup interface.

## Declaration

```objectivec
@property (nonatomic, readonly) UIAction * toggleLookupAction;
```

<a id="Discussion"></a>

## Discussion

When a user toggles the lookup UI, the state property is [UIMenuElementStateOn](../../uikit/uimenuelement/state/on.md), and is [UIMenuElementStateOff](../../uikit/uimenuelement/state/off.md) otherwise. The system disables the action’s attributes when there isn’t visual lookup data available or when the media is playing.

## See Also

### Configuring frame analysis

- [allowsVideoFrameAnalysis](allowsvideoframeanalysis.md): A Boolean value that indicates whether to perform video frame analysis.
- [videoFrameAnalysisTypes](videoframeanalysistypes.md): The types of analysis a player view controller performs on a paused video frame.
- [AVVideoFrameAnalysisType](../avvideoframeanalysistype.md): Constants that define the types of analysis a player view controller may perform on a paused video frame.
