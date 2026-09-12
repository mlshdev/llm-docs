> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisceneconfiguration](https://developer.apple.com/documentation/uikit/uisceneconfiguration)

# UISceneConfiguration (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Information about the objects and storyboard for UKit to use when creating a particular scene.

## Declaration

```swift
@MainActor class UISceneConfiguration
```

## Mentioned In

- [Presenting content on a connected display](presenting-content-on-a-connected-display.md)
- [Transitioning to the UIKit scene-based life cycle](transitioning-to-the-uikit-scene-based-life-cycle.md)

<a id="overview"></a>

## Overview

Use a [UISceneConfiguration](uisceneconfiguration.md) object to specify information that UIKit can use to create a new scene for your app. Specifically, you must provide the class of the specific scene you want, the class of the scene delegate object your app uses to manage scenes of that type, and a storyboard containing the scene’s initial view controller.

When the user requests a new instance of your app’s user interface, UIKit looks in your app’s `Info.plist` file for the configuration data it needs to create the corresponding scene object. It then packages that information into a [UISceneConfiguration](uisceneconfiguration.md) object and delivers it as part of the session it passes to the [application(\_:configurationForConnecting:options:)](uiapplicationdelegate/application%28__configurationforconnecting_options_%29.md) method of your app delegate. You can accept that configuration data as is or create a return a new [UISceneConfiguration](uisceneconfiguration.md) object with a different set of configuration details.

## Topics

### Creating a configuration object

- [init(name:sessionRole:)](uisceneconfiguration/init%28name_sessionrole_%29.md): Creates a scene-configuration object with the specified role and app-specific name.
- [init(name:)](uisceneconfiguration/init%28name_%29.md): Creates a scene-configuration object with the specified name.
- [init()](uisceneconfiguration/init%28%29.md): Creates a scene-configuration object.

### Specifying the scene creation details

- [sceneClass](uisceneconfiguration/sceneclass.md): The class of the scene object that you want UIKit to create.
- [delegateClass](uisceneconfiguration/delegateclass.md): The class of the custom delegate object that you want UIKit to create.
- [storyboard](uisceneconfiguration/storyboard.md): The storyboard object that contains your scene’s initial view controller.

### Getting the configuration attributes

- [name](uisceneconfiguration/name.md): The app-specific name assigned to the scene configuration.
- [role](uisceneconfiguration/role.md): The role assigned to the scene configuration.
- [UISceneSession.Role](uiscenesession/role-swift.struct.md): Constants that indicate the possible roles for a scene.

### Initializers

- [init(coder:)](uisceneconfiguration/init%28coder_%29.md)

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

### Configuration

- [Specifying the scenes your app supports](specifying-the-scenes-your-app-supports.md): Tell the system about your app’s scenes, including the objects you use to manage each scene and its initial user interface.
- [UIApplicationSceneManifest](../bundleresources/information-property-list/uiapplicationscenemanifest.md): The information about the app’s scene-based life-cycle support.
- [UISceneSession](uiscenesession.md): An object that contains information about one of your app’s scenes.

# UISceneConfiguration (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Information about the objects and storyboard for UKit to use when creating a particular scene.

## Declaration

```objectivec
@interface UISceneConfiguration : NSObject
```

## Mentioned In

- [Presenting content on a connected display](presenting-content-on-a-connected-display.md)
- [Transitioning to the UIKit scene-based life cycle](transitioning-to-the-uikit-scene-based-life-cycle.md)

<a id="overview"></a>

## Overview

Use a [UISceneConfiguration](uisceneconfiguration.md) object to specify information that UIKit can use to create a new scene for your app. Specifically, you must provide the class of the specific scene you want, the class of the scene delegate object your app uses to manage scenes of that type, and a storyboard containing the scene’s initial view controller.

When the user requests a new instance of your app’s user interface, UIKit looks in your app’s `Info.plist` file for the configuration data it needs to create the corresponding scene object. It then packages that information into a [UISceneConfiguration](uisceneconfiguration.md) object and delivers it as part of the session it passes to the [application:configurationForConnectingSceneSession:options:](uiapplicationdelegate/application%28__configurationforconnecting_options_%29.md) method of your app delegate. You can accept that configuration data as is or create a return a new [UISceneConfiguration](uisceneconfiguration.md) object with a different set of configuration details.

## Topics

### Creating a configuration object

- [configurationWithName:sessionRole:](uisceneconfiguration/configurationwithname_sessionrole_.md): Returns a scene-configuration object with the specified role and app-specific name.
- [initWithName:sessionRole:](uisceneconfiguration/init%28name_sessionrole_%29.md): Creates a scene-configuration object with the specified role and app-specific name.
- [initWithName:](uisceneconfiguration/init%28name_%29.md): Creates a scene-configuration object with the specified name.
- [init](uisceneconfiguration/init%28%29.md): Creates a scene-configuration object.

### Specifying the scene creation details

- [sceneClass](uisceneconfiguration/sceneclass.md): The class of the scene object that you want UIKit to create.
- [delegateClass](uisceneconfiguration/delegateclass.md): The class of the custom delegate object that you want UIKit to create.
- [storyboard](uisceneconfiguration/storyboard.md): The storyboard object that contains your scene’s initial view controller.

### Getting the configuration attributes

- [name](uisceneconfiguration/name.md): The app-specific name assigned to the scene configuration.
- [role](uisceneconfiguration/role.md): The role assigned to the scene configuration.
- [UISceneSessionRole](uiscenesession/role-swift.struct.md): Constants that indicate the possible roles for a scene.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Configuration

- [Specifying the scenes your app supports](specifying-the-scenes-your-app-supports.md): Tell the system about your app’s scenes, including the objects you use to manage each scene and its initial user interface.
- [UIApplicationSceneManifest](../bundleresources/information-property-list/uiapplicationscenemanifest.md): The information about the app’s scene-based life-cycle support.
- [UISceneSession](uiscenesession.md): An object that contains information about one of your app’s scenes.
