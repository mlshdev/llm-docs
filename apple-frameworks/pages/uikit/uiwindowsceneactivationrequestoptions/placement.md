> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowsceneactivationrequestoptions/placement](https://developer.apple.com/documentation/uikit/uiwindowsceneactivationrequestoptions/placement)

# placement

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

The placement you prefer when the system activates the window scene.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIWindowScenePlacement * placement;
```

<a id="Discussion"></a>

## Discussion

Provide a scene placement to influence how the system positions the scene on activation. Set the value to `nil` to indicate that the system should determine the most appropriate placement.

## See Also

### Positioning windows

- [UIWindowScenePlacement](../uiwindowsceneplacement-c.class.md): The placement of a window scene in the workspace.
- [UIWindowSceneProminentPlacement](../uiwindowsceneprominentplacement-c.class.md): A placement that indicates the system should present the window more prominently than others in the space.
- [UIWindowSceneStandardPlacement](../uiwindowscenestandardplacement-c.class.md): A placement that indicates the system should present the window using the default style of the system in the space.
- [UIWindowScenePushPlacement](../uiwindowscenepushplacement-c.class.md): A placement that indicates the system needs to present the window by pushing it onto another window.
