> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscenedestructionrequestoptions](https://developer.apple.com/documentation/uikit/uiscenedestructionrequestoptions)

# UISceneDestructionRequestOptions (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An object you pass to UIKit to permanently remove a scene and its associated session from your app.

## Declaration

```swift
@MainActor class UISceneDestructionRequestOptions
```

<a id="overview"></a>

## Overview

Create a [UISceneDestructionRequestOptions](uiscenedestructionrequestoptions.md) object before calling the [requestSceneSessionDestruction(\_:options:errorHandler:)](uiapplication/requestscenesessiondestruction%28__options_errorhandler_%29.md) method of [UIApplication](uiapplication.md). When destroying a [UIWindowScene](uiwindowscene.md), create a [UIWindowSceneDestructionRequestOptions](uiwindowscenedestructionrequestoptions.md) object instead and use it to configure the dismissal animations.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIWindowSceneDestructionRequestOptions](uiwindowscenedestructionrequestoptions.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Managing a scene’s life cycle

- [activateSceneSession(for:errorHandler:)](uiapplication/activatescenesession%28for_errorhandler_%29.md): Asks the system to activate an existing scene or create a new scene and associate it with your app.
- [requestSceneSessionDestruction(\_:options:errorHandler:)](uiapplication/requestscenesessiondestruction%28__options_errorhandler_%29.md): Asks the system to dismiss an existing scene and remove it from the app switcher.
- [requestSceneSessionRefresh(\_:)](uiapplication/requestscenesessionrefresh%28__%29.md): Asks the system to update any system UI associated with the specified scene.
- [UISceneSessionActivationRequest](uiscenesessionactivationrequest-swift.struct.md): A collection of properties that you use to request activation of a scene.
- [UIScene.ActivationRequestOptions](uiscene/activationrequestoptions.md): An object that contains information you want the system to use when activating the session associated with a scene.

# UISceneDestructionRequestOptions (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An object you pass to UIKit to permanently remove a scene and its associated session from your app.

## Declaration

```objectivec
@interface UISceneDestructionRequestOptions : NSObject
```

<a id="overview"></a>

## Overview

Create a [UISceneDestructionRequestOptions](uiscenedestructionrequestoptions.md) object before calling the [requestSceneSessionDestruction:options:errorHandler:](uiapplication/requestscenesessiondestruction%28__options_errorhandler_%29.md) method of [UIApplication](uiapplication.md). When destroying a [UIWindowScene](uiwindowscene.md), create a [UIWindowSceneDestructionRequestOptions](uiwindowscenedestructionrequestoptions.md) object instead and use it to configure the dismissal animations.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIWindowSceneDestructionRequestOptions](uiwindowscenedestructionrequestoptions.md)

## See Also

### Managing a scene’s life cycle

- [activateSceneSessionForRequest:errorHandler:](uiapplication/activatescenesessionforrequest_errorhandler_.md): Asks the system to activate an existing scene or create a new scene and associate it with your app.
- [requestSceneSessionDestruction:options:errorHandler:](uiapplication/requestscenesessiondestruction%28__options_errorhandler_%29.md): Asks the system to dismiss an existing scene and remove it from the app switcher.
- [requestSceneSessionRefresh:](uiapplication/requestscenesessionrefresh%28__%29.md): Asks the system to update any system UI associated with the specified scene.
- [UISceneSessionActivationRequest](uiscenesessionactivationrequest-c.class.md): A collection of properties that you use to request activation of a scene.
- [UISceneActivationRequestOptions](uiscene/activationrequestoptions.md): An object that contains information you want the system to use when activating the session associated with a scene.
