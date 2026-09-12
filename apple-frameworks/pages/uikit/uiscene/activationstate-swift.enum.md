> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscene/activationstate-swift.enum](https://developer.apple.com/documentation/uikit/uiscene/activationstate-swift.enum)

# UIScene.ActivationState (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Constants that indicate the foreground or background execution state of your app.

## Declaration

```swift
enum ActivationState
```

## Topics

### Scene States

- [UIScene.ActivationState.unattached](activationstate-swift.enum/unattached.md): A state that indicates that the scene is not currently connected to your app.
- [UIScene.ActivationState.foregroundInactive](activationstate-swift.enum/foregroundinactive.md): A state that indicates that the scene is running in the foreground but is not receiving events.
- [UIScene.ActivationState.foregroundActive](activationstate-swift.enum/foregroundactive.md): A state that indicates that the scene is running in the foreground and is currently receiving events.
- [UIScene.ActivationState.background](activationstate-swift.enum/background.md): A state that indicates that the scene is running in the background and is not onscreen.

### Initializers

- [init(rawValue:)](activationstate-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the scene attributes

- [activationState](activationstate-swift.property.md): The current execution state of the scene.
- [title](title.md): A user-visible string you supply to help users differentiate among your app’s scenes.
- [subtitle](subtitle.md): A string that the app displays in the title bar of a window when running in macOS.

# UISceneActivationState (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Constants that indicate the foreground or background execution state of your app.

## Declaration

```objectivec
enum UISceneActivationState : NSInteger;
```

## Topics

### Scene States

- [UISceneActivationStateUnattached](activationstate-swift.enum/unattached.md): A state that indicates that the scene is not currently connected to your app.
- [UISceneActivationStateForegroundInactive](activationstate-swift.enum/foregroundinactive.md): A state that indicates that the scene is running in the foreground but is not receiving events.
- [UISceneActivationStateForegroundActive](activationstate-swift.enum/foregroundactive.md): A state that indicates that the scene is running in the foreground and is currently receiving events.
- [UISceneActivationStateBackground](activationstate-swift.enum/background.md): A state that indicates that the scene is running in the background and is not onscreen.

## See Also

### Getting the scene attributes

- [activationState](activationstate-swift.property.md): The current execution state of the scene.
- [title](title.md): A user-visible string you supply to help users differentiate among your app’s scenes.
- [subtitle](subtitle.md): A string that the app displays in the title bar of a window when running in macOS.
