> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/activationconfiguration/useractivity](https://developer.apple.com/documentation/uikit/uiwindowscene/activationconfiguration/useractivity)

# userActivity (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The user activity used to request a scene.

## Declaration

```swift
var userActivity: NSUserActivity { get }
```

## See Also

### Getting information about the activation configuration

- [options](options.md): Options for customizing the scene request.
- [UIWindowScene.ActivationRequestOptions](../activationrequestoptions.md): An object that contains information you want the system to use when activating a new window scene.
- [preview](preview.md): An optional targeted preview that the system uses to animate the transition to the new scene.

# userActivity (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The user activity used to request a scene.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSUserActivity * userActivity;
```

## See Also

### Getting information about the activation configuration

- [options](options.md): Options for customizing the scene request.
- [UIWindowSceneActivationRequestOptions](../activationrequestoptions.md): An object that contains information you want the system to use when activating a new window scene.
- [preview](preview.md): An optional targeted preview that the system uses to animate the transition to the new scene.
