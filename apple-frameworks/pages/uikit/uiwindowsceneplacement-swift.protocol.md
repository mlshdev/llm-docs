> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowsceneplacement-swift.protocol](https://developer.apple.com/documentation/uikit/uiwindowsceneplacement-swift.protocol)

# UIWindowScenePlacement

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS

The placement of a window scene in the workspace.

## Declaration

```swift
protocol UIWindowScenePlacement : Hashable
```

## Topics

### Positioning windows

- [prominent()](uiwindowsceneplacement-swift.protocol/prominent%28%29.md): Conforms when `Self` is `UIWindowSceneProminentPlacement`. Creates a placement that indicates the system should present the window more prominently than others in the space.
- [standard()](uiwindowsceneplacement-swift.protocol/standard%28%29.md): Conforms when `Self` is `UIWindowSceneStandardPlacement`. Creates a placement that indicates the system should present the window using the default style of the system in the space.

### Type Methods

- [push(onto:)](uiwindowsceneplacement-swift.protocol/push%28onto_%29.md): Conforms when `Self` is `UIWindowScenePushPlacement`.
- [replacing(\_:)](uiwindowsceneplacement-swift.protocol/replacing%28__%29.md): Deprecated. Conforms when `Self` is `UIWindowSceneReplacePlacement`.

## Relationships

### Inherits From

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

### Conforming Types

- [UIWindowSceneProminentPlacement](uiwindowsceneprominentplacement-swift.struct.md)
- [UIWindowScenePushPlacement](uiwindowscenepushplacement-swift.struct.md)
- [UIWindowSceneReplacePlacement](uiwindowscenereplaceplacement-swift.struct.md)
- [UIWindowSceneStandardPlacement](uiwindowscenestandardplacement-swift.struct.md)

## See Also

### Positioning windows

- [placement](uiwindowscene/activationrequestoptions/placement.md): The placement you prefer when the system activates the window scene.
- [UIWindowSceneProminentPlacement](uiwindowsceneprominentplacement-swift.struct.md): A placement that indicates the system should present the window more prominently than others in the space.
- [UIWindowSceneStandardPlacement](uiwindowscenestandardplacement-swift.struct.md): A placement that indicates the system should present the window using the default style of the system in the space.
- [UIWindowScenePushPlacement](uiwindowscenepushplacement-swift.struct.md): A placement that indicates the system needs to present the window by pushing it onto another window.
