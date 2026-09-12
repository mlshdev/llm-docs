> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/activationrequestoptions/preferredpresentationstyle](https://developer.apple.com/documentation/uikit/uiwindowscene/activationrequestoptions/preferredpresentationstyle)

# preferredPresentationStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 17.0) · iPadOS 15.0+ (deprecated in 17.0) · Mac Catalyst 15.0+ (deprecated in 17.0) · tvOS 15.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

The presentation style of the window scene.

> Use [placement](placement.md) (Swift) or [placement](../../uiwindowsceneactivationrequestoptions/placement.md) (Objective-C) instead.

## Declaration

```swift
var preferredPresentationStyle: UIWindowScene.PresentationStyle { get set }
```

<a id="Discussion"></a>

## Discussion

The presentation style determines how the system displays the new window scene relative to other scenes in the workspace. The default style is [UIWindowScene.PresentationStyle.automatic](../presentationstyle/automatic.md).

## See Also

### Deprecated

- [UIWindowSceneReplacePlacement](../../uiwindowscenereplaceplacement-swift.struct.md): Deprecated.

# preferredPresentationStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 17.0) · iPadOS 15.0+ (deprecated in 17.0) · Mac Catalyst 15.0+ (deprecated in 17.0) · tvOS 15.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

The presentation style of the window scene.

> Use [placement](placement.md) (Swift) or [placement](../../uiwindowsceneactivationrequestoptions/placement.md) (Objective-C) instead.

## Declaration

```objectivec
@property (nonatomic, readwrite) UIWindowScenePresentationStyle preferredPresentationStyle;
```

<a id="Discussion"></a>

## Discussion

The presentation style determines how the system displays the new window scene relative to other scenes in the workspace. The default style is [UIWindowScenePresentationStyleAutomatic](../presentationstyle/automatic.md).

## See Also

### Deprecated

- [UIWindowSceneReplacePlacement](../../uiwindowscenereplaceplacement-c.class.md): Deprecated.
