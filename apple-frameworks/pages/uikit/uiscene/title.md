> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscene/title](https://developer.apple.com/documentation/uikit/uiscene/title)

# title (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A user-visible string you supply to help users differentiate among your app’s scenes.

## Declaration

```swift
var title: String! { get set }
```

<a id="Discussion"></a>

## Discussion

The system displays this string in the app switcher to make it easier for the user to differentiate among your app’s scenes. Set this property to an empty string if you don’t want the app switcher to display anything for the scene.

iPad and iPhone apps running on a Mac with Apple silicon and apps built with Mac Catalyst display the title in the title bar of the scene’s window.

## See Also

### Getting the scene attributes

- [activationState](activationstate-swift.property.md): The current execution state of the scene.
- [UIScene.ActivationState](activationstate-swift.enum.md): Constants that indicate the foreground or background execution state of your app.
- [subtitle](subtitle.md): A string that the app displays in the title bar of a window when running in macOS.

# title (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A user-visible string you supply to help users differentiate among your app’s scenes.

## Declaration

```objectivec
@property (nonatomic, copy, null_resettable) NSString * title;
```

<a id="Discussion"></a>

## Discussion

The system displays this string in the app switcher to make it easier for the user to differentiate among your app’s scenes. Set this property to an empty string if you don’t want the app switcher to display anything for the scene.

iPad and iPhone apps running on a Mac with Apple silicon and apps built with Mac Catalyst display the title in the title bar of the scene’s window.

## See Also

### Getting the scene attributes

- [activationState](activationstate-swift.property.md): The current execution state of the scene.
- [UISceneActivationState](activationstate-swift.enum.md): Constants that indicate the foreground or background execution state of your app.
- [subtitle](subtitle.md): A string that the app displays in the title bar of a window when running in macOS.
