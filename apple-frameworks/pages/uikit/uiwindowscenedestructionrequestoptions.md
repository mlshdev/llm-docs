> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscenedestructionrequestoptions](https://developer.apple.com/documentation/uikit/uiwindowscenedestructionrequestoptions)

# UIWindowSceneDestructionRequestOptions (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An object that contains information to use when removing a window scene from your app.

## Declaration

```swift
@MainActor class UIWindowSceneDestructionRequestOptions
```

<a id="overview"></a>

## Overview

Create a [UIWindowSceneDestructionRequestOptions](uiwindowscenedestructionrequestoptions.md) object before you close one of your app’s scenes using the [requestSceneSessionDestruction(\_:options:errorHandler:)](uiapplication/requestscenesessiondestruction%28__options_errorhandler_%29.md) method of [UIApplication](uiapplication.md). Use this object to specify the dismissal animations to apply to the scene’s UI, if that UI is onscreen.

## Topics

### Configuring the dismissal animation

- [windowDismissalAnimation](uiwindowscenedestructionrequestoptions/windowdismissalanimation.md): The animations to use when dismissing the scene’s windows.
- [UIWindowScene.DismissalAnimation](uiwindowscene/dismissalanimation.md): Constants that indicate the types of animations available for dismissing a scene’s windows.

## Relationships

### Inherits From

- [UISceneDestructionRequestOptions](uiscenedestructionrequestoptions.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Activation and destruction

- [UISceneActivationConditions](uisceneactivationconditions.md): The set of conditions that define when UIKit activates the current scene.
- [UIScene.ActivationRequestOptions](uiscene/activationrequestoptions.md): An object that contains information you want the system to use when activating the session associated with a scene.
- [UISceneDestructionRequestOptions](uiscenedestructionrequestoptions.md): An object you pass to UIKit to permanently remove a scene and its associated session from your app.
- [UISceneClosureConfirmation](uisceneclosureconfirmation.md): A configuration specifying a confirmation dialog that will be shown before a user action will result in destruction of the scene session and the disconnection of the scene.

# UIWindowSceneDestructionRequestOptions (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An object that contains information to use when removing a window scene from your app.

## Declaration

```objectivec
@interface UIWindowSceneDestructionRequestOptions : UISceneDestructionRequestOptions
```

<a id="overview"></a>

## Overview

Create a [UIWindowSceneDestructionRequestOptions](uiwindowscenedestructionrequestoptions.md) object before you close one of your app’s scenes using the [requestSceneSessionDestruction:options:errorHandler:](uiapplication/requestscenesessiondestruction%28__options_errorhandler_%29.md) method of [UIApplication](uiapplication.md). Use this object to specify the dismissal animations to apply to the scene’s UI, if that UI is onscreen.

## Topics

### Configuring the dismissal animation

- [windowDismissalAnimation](uiwindowscenedestructionrequestoptions/windowdismissalanimation.md): The animations to use when dismissing the scene’s windows.
- [UIWindowSceneDismissalAnimation](uiwindowscene/dismissalanimation.md): Constants that indicate the types of animations available for dismissing a scene’s windows.

## Relationships

### Inherits From

- [UISceneDestructionRequestOptions](uiscenedestructionrequestoptions.md)

## See Also

### Activation and destruction

- [UISceneActivationConditions](uisceneactivationconditions.md): The set of conditions that define when UIKit activates the current scene.
- [UISceneActivationRequestOptions](uiscene/activationrequestoptions.md): An object that contains information you want the system to use when activating the session associated with a scene.
- [UISceneDestructionRequestOptions](uiscenedestructionrequestoptions.md): An object you pass to UIKit to permanently remove a scene and its associated session from your app.
- [UISceneClosureConfirmation](uisceneclosureconfirmation.md): A configuration specifying a confirmation dialog that will be shown before a user action will result in destruction of the scene session and the disconnection of the scene.
