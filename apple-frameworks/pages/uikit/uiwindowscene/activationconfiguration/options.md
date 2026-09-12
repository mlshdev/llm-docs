> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/activationconfiguration/options](https://developer.apple.com/documentation/uikit/uiwindowscene/activationconfiguration/options)

# options (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Options for customizing the scene request.

## Declaration

```swift
var options: UIWindowScene.ActivationRequestOptions? { get set }
```

<a id="Discussion"></a>

## Discussion

This property is optional. If you don’t specify options, the system requests a scene using the default options.

## See Also

### Getting information about the activation configuration

- [userActivity](useractivity.md): The user activity used to request a scene.
- [UIWindowScene.ActivationRequestOptions](../activationrequestoptions.md): An object that contains information you want the system to use when activating a new window scene.
- [preview](preview.md): An optional targeted preview that the system uses to animate the transition to the new scene.

# options (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Options for customizing the scene request.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIWindowSceneActivationRequestOptions * options;
```

<a id="Discussion"></a>

## Discussion

This property is optional. If you don’t specify options, the system requests a scene using the default options.

## See Also

### Getting information about the activation configuration

- [userActivity](useractivity.md): The user activity used to request a scene.
- [UIWindowSceneActivationRequestOptions](../activationrequestoptions.md): An object that contains information you want the system to use when activating a new window scene.
- [preview](preview.md): An optional targeted preview that the system uses to animate the transition to the new scene.
