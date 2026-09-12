> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscene/activationstate-swift.property](https://developer.apple.com/documentation/uikit/uiscene/activationstate-swift.property)

# activationState (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The current execution state of the scene.

## Declaration

```swift
var activationState: UIScene.ActivationState { get }
```

<a id="Discussion"></a>

## Discussion

When it is running, a scene is usually in the [UIScene.ActivationState.foregroundActive](activationstate-swift.enum/foregroundactive.md) or [UIScene.ActivationState.background](activationstate-swift.enum/background.md) state. A state may also enter other states for a short time as part of a transition.

## See Also

### Getting the scene attributes

- [UIScene.ActivationState](activationstate-swift.enum.md): Constants that indicate the foreground or background execution state of your app.
- [title](title.md): A user-visible string you supply to help users differentiate among your app’s scenes.
- [subtitle](subtitle.md): A string that the app displays in the title bar of a window when running in macOS.

# activationState (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The current execution state of the scene.

## Declaration

```objectivec
@property (nonatomic, readonly) UISceneActivationState activationState;
```

<a id="Discussion"></a>

## Discussion

When it is running, a scene is usually in the [UISceneActivationStateForegroundActive](activationstate-swift.enum/foregroundactive.md) or [UISceneActivationStateBackground](activationstate-swift.enum/background.md) state. A state may also enter other states for a short time as part of a transition.

## See Also

### Getting the scene attributes

- [UISceneActivationState](activationstate-swift.enum.md): Constants that indicate the foreground or background execution state of your app.
- [title](title.md): A user-visible string you supply to help users differentiate among your app’s scenes.
- [subtitle](subtitle.md): A string that the app displays in the title bar of a window when running in macOS.
