> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscenesession](https://developer.apple.com/documentation/uikit/uiscenesession)

# UISceneSession (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An object that contains information about one of your app’s scenes.

## Declaration

```swift
@MainActor class UISceneSession
```

<a id="overview"></a>

## Overview

A [UISceneSession](uiscenesession.md) object manages a unique runtime instance of your scene. When the user adds a new scene to your app, or when you request one programmatically, the system creates a session object to track that scene. The session contains a unique identifier and the configuration details of the scene. UIKit maintains the session information for the lifetime of the scene itself, destroying the session in response to the user closing the scene in the app switcher.

You don’t create session objects directly. UIKit creates sessions in response to user interactions with your app. You can also ask UIKit to create a new scene and session programmatically by calling the [requestSceneSessionActivation(\_:userActivity:options:errorHandler:)](uiapplication/requestscenesessionactivation%28__useractivity_options_errorhandler_%29.md) method of [UIApplication](uiapplication.md). UIKit initializes the session with default configuration data based on the contents of your app’s `Info.plist` file.

## Topics

### Getting the scene information

- [scene](uiscenesession/scene.md): The scene associated with the current session.
- [role](uiscenesession/role-swift.property.md): The role played by the scene’s content.
- [UISceneSession.Role](uiscenesession/role-swift.struct.md): Constants that indicate the possible roles for a scene.

### Getting the scene configuration details

- [configuration](uiscenesession/configuration.md): The configuration data for creating the scene.
- [UISceneConfiguration](uisceneconfiguration.md): Information about the objects and storyboard for UKit to use when creating a particular scene.

### Identifying the scene

- [persistentIdentifier](uiscenesession/persistentidentifier.md): A unique identifier that persists for the lifetime of the session.

### Getting additional session information

- [stateRestorationActivity](uiscenesession/staterestorationactivity.md): An activity object you can use to restore the previous contents of your scene’s interface.
- [userInfo](uiscenesession/userinfo.md): Custom attributes that you can associate with the scene.

### Initializers

- [init(coder:)](uiscenesession/init%28coder_%29.md)

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

### Configuration

- [Specifying the scenes your app supports](specifying-the-scenes-your-app-supports.md): Tell the system about your app’s scenes, including the objects you use to manage each scene and its initial user interface.
- [UIApplicationSceneManifest](../bundleresources/information-property-list/uiapplicationscenemanifest.md): The information about the app’s scene-based life-cycle support.
- [UISceneConfiguration](uisceneconfiguration.md): Information about the objects and storyboard for UKit to use when creating a particular scene.

# UISceneSession (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An object that contains information about one of your app’s scenes.

## Declaration

```objectivec
@interface UISceneSession : NSObject
```

<a id="overview"></a>

## Overview

A [UISceneSession](uiscenesession.md) object manages a unique runtime instance of your scene. When the user adds a new scene to your app, or when you request one programmatically, the system creates a session object to track that scene. The session contains a unique identifier and the configuration details of the scene. UIKit maintains the session information for the lifetime of the scene itself, destroying the session in response to the user closing the scene in the app switcher.

You don’t create session objects directly. UIKit creates sessions in response to user interactions with your app. You can also ask UIKit to create a new scene and session programmatically by calling the [requestSceneSessionActivation:userActivity:options:errorHandler:](uiapplication/requestscenesessionactivation%28__useractivity_options_errorhandler_%29.md) method of [UIApplication](uiapplication.md). UIKit initializes the session with default configuration data based on the contents of your app’s `Info.plist` file.

## Topics

### Getting the scene information

- [scene](uiscenesession/scene.md): The scene associated with the current session.
- [role](uiscenesession/role-swift.property.md): The role played by the scene’s content.
- [UISceneSessionRole](uiscenesession/role-swift.struct.md): Constants that indicate the possible roles for a scene.

### Getting the scene configuration details

- [configuration](uiscenesession/configuration.md): The configuration data for creating the scene.
- [UISceneConfiguration](uisceneconfiguration.md): Information about the objects and storyboard for UKit to use when creating a particular scene.

### Identifying the scene

- [persistentIdentifier](uiscenesession/persistentidentifier.md): A unique identifier that persists for the lifetime of the session.

### Getting additional session information

- [stateRestorationActivity](uiscenesession/staterestorationactivity.md): An activity object you can use to restore the previous contents of your scene’s interface.
- [userInfo](uiscenesession/userinfo.md): Custom attributes that you can associate with the scene.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Configuration

- [Specifying the scenes your app supports](specifying-the-scenes-your-app-supports.md): Tell the system about your app’s scenes, including the objects you use to manage each scene and its initial user interface.
- [UIApplicationSceneManifest](../bundleresources/information-property-list/uiapplicationscenemanifest.md): The information about the app’s scene-based life-cycle support.
- [UISceneConfiguration](uisceneconfiguration.md): Information about the objects and storyboard for UKit to use when creating a particular scene.
