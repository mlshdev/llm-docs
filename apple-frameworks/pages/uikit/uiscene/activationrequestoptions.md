> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscene/activationrequestoptions](https://developer.apple.com/documentation/uikit/uiscene/activationrequestoptions)

# UIScene.ActivationRequestOptions (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An object that contains information you want the system to use when activating the session associated with a scene.

## Declaration

```swift
@MainActor class ActivationRequestOptions
```

<a id="overview"></a>

## Overview

Create a [UIScene.ActivationRequestOptions](activationrequestoptions.md) object before you activate or create a scene using the [activateSceneSession(for:errorHandler:)](../uiapplication/activatescenesession%28for_errorhandler_%29.md) (Swift) or [activateSceneSessionForRequest:errorHandler:](../uiapplication/activatescenesessionforrequest_errorhandler_.md) (Objective-C) method of [UIApplication](../uiapplication.md). Use this object to specify which of your app’s existing scenes originated the request for the new scene.

## Topics

### Specifying the originator of the request

- [requestingScene](activationrequestoptions/requestingscene.md): The scene object that requested the activation of a different scene.

### Specifying collection join behavior

- [collectionJoinBehavior](activationrequestoptions/collectionjoinbehavior.md): The behavior that specifies how a new scene joins a scene collection.
- [UISceneCollectionJoinBehavior](../uiscenecollectionjoinbehavior.md): A set of behaviors that specify how a new scene joins a scene collection.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIWindowScene.ActivationRequestOptions](../uiwindowscene/activationrequestoptions.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Managing a scene’s life cycle

- [activateSceneSession(for:errorHandler:)](../uiapplication/activatescenesession%28for_errorhandler_%29.md): Asks the system to activate an existing scene or create a new scene and associate it with your app.
- [requestSceneSessionDestruction(\_:options:errorHandler:)](../uiapplication/requestscenesessiondestruction%28__options_errorhandler_%29.md): Asks the system to dismiss an existing scene and remove it from the app switcher.
- [requestSceneSessionRefresh(\_:)](../uiapplication/requestscenesessionrefresh%28__%29.md): Asks the system to update any system UI associated with the specified scene.
- [UISceneSessionActivationRequest](../uiscenesessionactivationrequest-swift.struct.md): A collection of properties that you use to request activation of a scene.
- [UISceneDestructionRequestOptions](../uiscenedestructionrequestoptions.md): An object you pass to UIKit to permanently remove a scene and its associated session from your app.

# UISceneActivationRequestOptions (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An object that contains information you want the system to use when activating the session associated with a scene.

## Declaration

```objectivec
@interface UISceneActivationRequestOptions : NSObject
```

<a id="overview"></a>

## Overview

Create a [UISceneActivationRequestOptions](activationrequestoptions.md) object before you activate or create a scene using the [activateSceneSession(for:errorHandler:)](../uiapplication/activatescenesession%28for_errorhandler_%29.md) (Swift) or [activateSceneSessionForRequest:errorHandler:](../uiapplication/activatescenesessionforrequest_errorhandler_.md) (Objective-C) method of [UIApplication](../uiapplication.md). Use this object to specify which of your app’s existing scenes originated the request for the new scene.

## Topics

### Specifying the originator of the request

- [requestingScene](activationrequestoptions/requestingscene.md): The scene object that requested the activation of a different scene.

### Specifying collection join behavior

- [collectionJoinBehavior](activationrequestoptions/collectionjoinbehavior.md): The behavior that specifies how a new scene joins a scene collection.
- [UISceneCollectionJoinBehavior](../uiscenecollectionjoinbehavior.md): A set of behaviors that specify how a new scene joins a scene collection.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIWindowSceneActivationRequestOptions](../uiwindowscene/activationrequestoptions.md)

## See Also

### Managing a scene’s life cycle

- [activateSceneSessionForRequest:errorHandler:](../uiapplication/activatescenesessionforrequest_errorhandler_.md): Asks the system to activate an existing scene or create a new scene and associate it with your app.
- [requestSceneSessionDestruction:options:errorHandler:](../uiapplication/requestscenesessiondestruction%28__options_errorhandler_%29.md): Asks the system to dismiss an existing scene and remove it from the app switcher.
- [requestSceneSessionRefresh:](../uiapplication/requestscenesessionrefresh%28__%29.md): Asks the system to update any system UI associated with the specified scene.
- [UISceneSessionActivationRequest](../uiscenesessionactivationrequest-c.class.md): A collection of properties that you use to request activation of a scene.
- [UISceneDestructionRequestOptions](../uiscenedestructionrequestoptions.md): An object you pass to UIKit to permanently remove a scene and its associated session from your app.
