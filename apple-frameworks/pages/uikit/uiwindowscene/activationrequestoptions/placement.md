> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/activationrequestoptions/placement](https://developer.apple.com/documentation/uikit/uiwindowscene/activationrequestoptions/placement)

# placement

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS

The placement you prefer when the system activates the window scene.

## Declaration

```swift
@MainActor @preconcurrency var placement: (any UIWindowScenePlacement)? { get set }
```

<a id="Discussion"></a>

## Discussion

Provide a scene placement to influence how the system positions the scene on activation. Set the value to `nil` to indicate that the system should determine the most appropriate placement.

## See Also

### Positioning windows

- [UIWindowScenePlacement](../../uiwindowsceneplacement-swift.protocol.md): The placement of a window scene in the workspace.
- [UIWindowSceneProminentPlacement](../../uiwindowsceneprominentplacement-swift.struct.md): A placement that indicates the system should present the window more prominently than others in the space.
- [UIWindowSceneStandardPlacement](../../uiwindowscenestandardplacement-swift.struct.md): A placement that indicates the system should present the window using the default style of the system in the space.
- [UIWindowScenePushPlacement](../../uiwindowscenepushplacement-swift.struct.md): A placement that indicates the system needs to present the window by pushing it onto another window.
