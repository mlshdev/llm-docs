> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisceneactivationconditions](https://developer.apple.com/documentation/uikit/uisceneactivationconditions)

# UISceneActivationConditions (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The set of conditions that define when UIKit activates the current scene.

## Declaration

```swift
@MainActor class UISceneActivationConditions
```

<a id="overview"></a>

## Overview

When an event occurs that requires the activation of a scene, UIKit routes the event to the scene best suited to handle it. UIKit determines which scene is the best by evaluating the target content identifier of the event against the predicates in each scene’s [UISceneActivationConditions](uisceneactivationconditions.md) object. You create [UISceneActivationConditions](uisceneactivationconditions.md) objects for your scenes and use them to prioritize which events each scene handles. Use the [prefersToActivateForTargetContentIdentifierPredicate](uisceneactivationconditions/preferstoactivatefortargetcontentidentifierpredicate.md) predicate to designate the scene as the primary handler of an event.

Many different objects contain a [targetContentIdentifier](../foundation/nsuseractivity/targetcontentidentifier.md) property, including [NSUserActivity](../foundation/nsuseractivity.md), [UNNotificationContent](../usernotifications/unnotificationcontent.md), and [UIApplicationShortcutItem](uiapplicationshortcutitem.md). When creating those objects, fill that property with a value that uniquely describes the event and matches your scenes’ predicates. Every event must match at least one scene.

## Topics

### Creating an activation conditions object

- [init()](uisceneactivationconditions/init%28%29.md): Creates a new activation conditions object.
- [init(coder:)](uisceneactivationconditions/init%28coder_%29.md): Restores an activation conditions object from the specified archive.

### Specifying the conditions

- [prefersToActivateForTargetContentIdentifierPredicate](uisceneactivationconditions/preferstoactivatefortargetcontentidentifierpredicate.md): The set of conditions for which UIKit chooses to activate this scene over others.
- [canActivateForTargetContentIdentifierPredicate](uisceneactivationconditions/canactivatefortargetcontentidentifierpredicate.md): Conditions for which UIKit can activate the scene if a better alternative doesn’t exist.

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
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Activation and destruction

- [UIScene.ActivationRequestOptions](uiscene/activationrequestoptions.md): An object that contains information you want the system to use when activating the session associated with a scene.
- [UIWindowSceneDestructionRequestOptions](uiwindowscenedestructionrequestoptions.md): An object that contains information to use when removing a window scene from your app.
- [UISceneDestructionRequestOptions](uiscenedestructionrequestoptions.md): An object you pass to UIKit to permanently remove a scene and its associated session from your app.
- [UISceneClosureConfirmation](uisceneclosureconfirmation.md): A configuration specifying a confirmation dialog that will be shown before a user action will result in destruction of the scene session and the disconnection of the scene.

# UISceneActivationConditions (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The set of conditions that define when UIKit activates the current scene.

## Declaration

```objectivec
@interface UISceneActivationConditions : NSObject
```

<a id="overview"></a>

## Overview

When an event occurs that requires the activation of a scene, UIKit routes the event to the scene best suited to handle it. UIKit determines which scene is the best by evaluating the target content identifier of the event against the predicates in each scene’s [UISceneActivationConditions](uisceneactivationconditions.md) object. You create [UISceneActivationConditions](uisceneactivationconditions.md) objects for your scenes and use them to prioritize which events each scene handles. Use the [prefersToActivateForTargetContentIdentifierPredicate](uisceneactivationconditions/preferstoactivatefortargetcontentidentifierpredicate.md) predicate to designate the scene as the primary handler of an event.

Many different objects contain a [targetContentIdentifier](../foundation/nsuseractivity/targetcontentidentifier.md) property, including [NSUserActivity](../foundation/nsuseractivity.md), [UNNotificationContent](../usernotifications/unnotificationcontent.md), and [UIApplicationShortcutItem](uiapplicationshortcutitem.md). When creating those objects, fill that property with a value that uniquely describes the event and matches your scenes’ predicates. Every event must match at least one scene.

## Topics

### Creating an activation conditions object

- [init](uisceneactivationconditions/init%28%29.md): Creates a new activation conditions object.
- [initWithCoder:](uisceneactivationconditions/init%28coder_%29.md): Restores an activation conditions object from the specified archive.

### Specifying the conditions

- [prefersToActivateForTargetContentIdentifierPredicate](uisceneactivationconditions/preferstoactivatefortargetcontentidentifierpredicate.md): The set of conditions for which UIKit chooses to activate this scene over others.
- [canActivateForTargetContentIdentifierPredicate](uisceneactivationconditions/canactivatefortargetcontentidentifierpredicate.md): Conditions for which UIKit can activate the scene if a better alternative doesn’t exist.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Activation and destruction

- [UISceneActivationRequestOptions](uiscene/activationrequestoptions.md): An object that contains information you want the system to use when activating the session associated with a scene.
- [UIWindowSceneDestructionRequestOptions](uiwindowscenedestructionrequestoptions.md): An object that contains information to use when removing a window scene from your app.
- [UISceneDestructionRequestOptions](uiscenedestructionrequestoptions.md): An object you pass to UIKit to permanently remove a scene and its associated session from your app.
- [UISceneClosureConfirmation](uisceneclosureconfirmation.md): A configuration specifying a confirmation dialog that will be shown before a user action will result in destruction of the scene session and the disconnection of the scene.
