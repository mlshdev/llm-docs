> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/activationconfiguration/preview](https://developer.apple.com/documentation/uikit/uiwindowscene/activationconfiguration/preview)

# preview (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

An optional targeted preview that the system uses to animate the transition to the new scene.

## Declaration

```swift
var preview: UITargetedPreview? { get set }
```

## See Also

### Getting information about the activation configuration

- [userActivity](useractivity.md): The user activity used to request a scene.
- [options](options.md): Options for customizing the scene request.
- [UIWindowScene.ActivationRequestOptions](../activationrequestoptions.md): An object that contains information you want the system to use when activating a new window scene.

# preview (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

An optional targeted preview that the system uses to animate the transition to the new scene.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UITargetedPreview * preview;
```

## See Also

### Getting information about the activation configuration

- [userActivity](useractivity.md): The user activity used to request a scene.
- [options](options.md): Options for customizing the scene request.
- [UIWindowSceneActivationRequestOptions](../activationrequestoptions.md): An object that contains information you want the system to use when activating a new window scene.
