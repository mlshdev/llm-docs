> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscene/systemprotectionmanager-swift.class](https://developer.apple.com/documentation/uikit/uiscene/systemprotectionmanager-swift.class)

# UIScene.SystemProtectionManager (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

A class that represents the status of system protection for the scene.

## Declaration

```swift
@MainActor class SystemProtectionManager
```

<a id="overview"></a>

## Overview

Use this class to determine if the system protects a scene, such as by locking the app and requiring authentication with Face ID or Touch ID. You may want to disable your own app’s privacy shielding if the system already requires authentication.

The following example shows how a scene can use the manager’s [isUserAuthenticationEnabled](systemprotectionmanager-swift.class/isuserauthenticationenabled.md) property to decide whether to provide its own UI shielding. When the scene becomes active, the app shows an authentication challenge if the system doesn’t already provide protection. When the scene resigns the active role, the app provides its own shielding only if the system isn’t already doing so.

**Swift**

```swift
func sceneDidBecomeActive(_ scene: UIScene) {
    guard scene.systemProtectionManager?.isUserAuthenticationEnabled ?? false else {
        // Show custom authentication.
    }
}

func sceneWillResignActive(_ scene: UIScene) {
    guard scene.systemProtectionManager?.isUserAuthenticationEnabled ?? false else {
        // Show custom shield to hide sensitive information.
    }
}

```

**Objective-C**

```objc
- (void)sceneDidBecomeActive:(UIScene *)scene {
    if ( scene.systemProtectionManager.userAuthenticationEnabled ) {
        // Don't show custom authentication.
    } else {
        // Show custom shield to hide sensitive information.
    }
}

- (void)sceneWillResignActive:(UIScene *)scene {
    if ( scene.systemProtectionManager.userAuthenticationEnabled ) {
        // Don't show custom shield; system already does so.
    } else {
        // Show custom shield to hide sensitive information.
    }
}
```

## Topics

### Inspecting protection state

- [isUserAuthenticationEnabled](systemprotectionmanager-swift.class/isuserauthenticationenabled.md): The current status of system user authentication.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Working with system protection manager

- [systemProtectionManager](systemprotectionmanager-swift.property.md): The system protection manager associated with this scene.
- [systemProtectionDidChangeNotification](systemprotectiondidchangenotification.md): A notification posted when the system-protection attributes of a scene change.

# UISceneSystemProtectionManager (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

A class that represents the status of system protection for the scene.

## Declaration

```objectivec
@interface UISceneSystemProtectionManager : NSObject
```

<a id="overview"></a>

## Overview

Use this class to determine if the system protects a scene, such as by locking the app and requiring authentication with Face ID or Touch ID. You may want to disable your own app’s privacy shielding if the system already requires authentication.

The following example shows how a scene can use the manager’s [userAuthenticationEnabled](systemprotectionmanager-swift.class/isuserauthenticationenabled.md) property to decide whether to provide its own UI shielding. When the scene becomes active, the app shows an authentication challenge if the system doesn’t already provide protection. When the scene resigns the active role, the app provides its own shielding only if the system isn’t already doing so.

**Swift**

```swift
func sceneDidBecomeActive(_ scene: UIScene) {
    guard scene.systemProtectionManager?.isUserAuthenticationEnabled ?? false else {
        // Show custom authentication.
    }
}

func sceneWillResignActive(_ scene: UIScene) {
    guard scene.systemProtectionManager?.isUserAuthenticationEnabled ?? false else {
        // Show custom shield to hide sensitive information.
    }
}

```

**Objective-C**

```objc
- (void)sceneDidBecomeActive:(UIScene *)scene {
    if ( scene.systemProtectionManager.userAuthenticationEnabled ) {
        // Don't show custom authentication.
    } else {
        // Show custom shield to hide sensitive information.
    }
}

- (void)sceneWillResignActive:(UIScene *)scene {
    if ( scene.systemProtectionManager.userAuthenticationEnabled ) {
        // Don't show custom shield; system already does so.
    } else {
        // Show custom shield to hide sensitive information.
    }
}
```

## Topics

### Inspecting protection state

- [userAuthenticationEnabled](systemprotectionmanager-swift.class/isuserauthenticationenabled.md): The current status of system user authentication.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Working with system protection manager

- [systemProtectionManager](systemprotectionmanager-swift.property.md): The system protection manager associated with this scene.
- [UISceneSystemProtectionDidChangeNotification](systemprotectiondidchangenotification.md): A notification posted when the system-protection attributes of a scene change.
