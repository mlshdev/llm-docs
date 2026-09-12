> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisceneclosureconfirmation](https://developer.apple.com/documentation/uikit/uisceneclosureconfirmation)

# UISceneClosureConfirmation (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A configuration specifying a confirmation dialog that will be shown before a user action will result in destruction of the scene session and the disconnection of the scene.

## Declaration

```swift
@MainActor class UISceneClosureConfirmation
```

<a id="overview"></a>

## Overview

By default, the confirmation dialog includes a “Close” button (which closes the scene) and a “Cancel” button (which keeps the scene open). You can replace either of these default buttons by providing custom actions. Use a `UIAlertAction` with style `.destructive` to replace the “Close” button, or style `.cancel` to replace the “Cancel” button.

Example:

A property of this type is found on `UIWindowScene`. A scene setting its `closureConfirmation` may look something like

```
let closeAction = UIAlertAction(title:"End meeting for all", style:.destructive, handler: nil)
let cancelAction = UIAlertAction(title:"Stay in meeting", style:.cancel, handler:nil)
let myAction = UIAlertAction(title:"Leave & Assign new host", style:.default) { action in
   // work to do before the window closes
}
var closureConfirmation: UISceneClosureConfirmation =
   UISceneClosureConfirmation(title:"Leave or End meeting?",
                              message:"You are the host. Would you like to end the meeting for all participants?",
                              actions:[closeAction, cancelAction, myAction])

windowScene.closureConfirmation = closureConfirmation
```

With this property set, upon user initiated close, the system will present the closure confirmation dialog.

## Topics

### Initializers

- [init(coder:)](uisceneclosureconfirmation/init%28coder_%29.md)
- [init(title:message:actions:)](uisceneclosureconfirmation/init%28title_message_actions_%29.md): Creates a scene closure confirmation with the provided parameters.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Activation and destruction

- [UISceneActivationConditions](uisceneactivationconditions.md): The set of conditions that define when UIKit activates the current scene.
- [UIScene.ActivationRequestOptions](uiscene/activationrequestoptions.md): An object that contains information you want the system to use when activating the session associated with a scene.
- [UIWindowSceneDestructionRequestOptions](uiwindowscenedestructionrequestoptions.md): An object that contains information to use when removing a window scene from your app.
- [UISceneDestructionRequestOptions](uiscenedestructionrequestoptions.md): An object you pass to UIKit to permanently remove a scene and its associated session from your app.

# UISceneClosureConfirmation (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A configuration specifying a confirmation dialog that will be shown before a user action will result in destruction of the scene session and the disconnection of the scene.

## Declaration

```objectivec
@interface UISceneClosureConfirmation : NSObject
```

<a id="overview"></a>

## Overview

By default, the confirmation dialog includes a “Close” button (which closes the scene) and a “Cancel” button (which keeps the scene open). You can replace either of these default buttons by providing custom actions. Use a `UIAlertAction` with style `.destructive` to replace the “Close” button, or style `.cancel` to replace the “Cancel” button.

Example:

A property of this type is found on `UIWindowScene`. A scene setting its `closureConfirmation` may look something like

```
let closeAction = UIAlertAction(title:"End meeting for all", style:.destructive, handler: nil)
let cancelAction = UIAlertAction(title:"Stay in meeting", style:.cancel, handler:nil)
let myAction = UIAlertAction(title:"Leave & Assign new host", style:.default) { action in
   // work to do before the window closes
}
var closureConfirmation: UISceneClosureConfirmation =
   UISceneClosureConfirmation(title:"Leave or End meeting?",
                              message:"You are the host. Would you like to end the meeting for all participants?",
                              actions:[closeAction, cancelAction, myAction])

windowScene.closureConfirmation = closureConfirmation
```

With this property set, upon user initiated close, the system will present the closure confirmation dialog.

## Topics

### Type Methods

- [confirmationWithTitle:message:actions:](uisceneclosureconfirmation/init%28title_message_actions_%29.md): Creates a scene closure confirmation with the provided parameters.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Activation and destruction

- [UISceneActivationConditions](uisceneactivationconditions.md): The set of conditions that define when UIKit activates the current scene.
- [UISceneActivationRequestOptions](uiscene/activationrequestoptions.md): An object that contains information you want the system to use when activating the session associated with a scene.
- [UIWindowSceneDestructionRequestOptions](uiwindowscenedestructionrequestoptions.md): An object that contains information to use when removing a window scene from your app.
- [UISceneDestructionRequestOptions](uiscenedestructionrequestoptions.md): An object you pass to UIKit to permanently remove a scene and its associated session from your app.
