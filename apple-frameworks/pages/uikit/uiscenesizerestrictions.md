> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscenesizerestrictions](https://developer.apple.com/documentation/uikit/uiscenesizerestrictions)

# UISceneSizeRestrictions (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An object that specifies the minimum and maximum sizes for resizable windows.

## Declaration

```swift
@MainActor class UISceneSizeRestrictions
```

<a id="overview"></a>

## Overview

Don’t create a [UISceneSizeRestrictions](uiscenesizerestrictions.md) object yourself. Instead, fetch an existing one from the [sizeRestrictions](uiwindowscene/sizerestrictions.md) property of your window scene, and modify its properties to set the minimum and maximum window sizes:

**Swift**

```swift
class SceneDelegate: UIResponder, UIWindowSceneDelegate {

    func scene(_ scene: UIScene,
               willConnectTo session: UISceneSession,
               options connectionOptions: UIScene.ConnectionOptions) {

        guard let windowScene = scene as? UIWindowScene else { return }
        windowScene.sizeRestrictions?.minimumSize.width = 500.0
    }
}
```

**Objective-C**

```objc
@interface SceneDelegate ()

@end

@implementation SceneDelegate

- (void)scene:(UIScene *)scene
willConnectToSession:(UISceneSession *)session
      options:(UISceneConnectionOptions *)connectionOptions {

    UIWindowScene *windowScene = (UIWindowScene *)scene;
    if (![windowScene isKindOfClass:[UIWindowScene class]]) { return; }

    CGSize minimumSize = windowScene.sizeRestrictions.minimumSize;
    minimumSize.width = 500.0;
    windowScene.sizeRestrictions.minimumSize = minimumSize;
}

@end
```

The system provides this object only when it supports variable-sized windows.

## Topics

### Setting the size restrictions

- [minimumSize](uiscenesizerestrictions/minimumsize.md): The minimum width and height supported by your app’s windows.
- [maximumSize](uiscenesizerestrictions/maximumsize.md): The maximum width and height supported by your app’s windows.
- [allowsFullScreen](uiscenesizerestrictions/allowsfullscreen.md): A Boolean value that indicates whether the scene can appear full screen.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Getting the interface attributes

- [traitCollection](uiwindowscene/traitcollection.md): The traits that describe the current environment of the scene.
- [sizeRestrictions](uiwindowscene/sizerestrictions.md): The minimum and maximum size of the app’s windows.

# UISceneSizeRestrictions (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An object that specifies the minimum and maximum sizes for resizable windows.

## Declaration

```objectivec
@interface UISceneSizeRestrictions : NSObject
```

<a id="overview"></a>

## Overview

Don’t create a [UISceneSizeRestrictions](uiscenesizerestrictions.md) object yourself. Instead, fetch an existing one from the [sizeRestrictions](uiwindowscene/sizerestrictions.md) property of your window scene, and modify its properties to set the minimum and maximum window sizes:

**Swift**

```swift
class SceneDelegate: UIResponder, UIWindowSceneDelegate {

    func scene(_ scene: UIScene,
               willConnectTo session: UISceneSession,
               options connectionOptions: UIScene.ConnectionOptions) {

        guard let windowScene = scene as? UIWindowScene else { return }
        windowScene.sizeRestrictions?.minimumSize.width = 500.0
    }
}
```

**Objective-C**

```objc
@interface SceneDelegate ()

@end

@implementation SceneDelegate

- (void)scene:(UIScene *)scene
willConnectToSession:(UISceneSession *)session
      options:(UISceneConnectionOptions *)connectionOptions {

    UIWindowScene *windowScene = (UIWindowScene *)scene;
    if (![windowScene isKindOfClass:[UIWindowScene class]]) { return; }

    CGSize minimumSize = windowScene.sizeRestrictions.minimumSize;
    minimumSize.width = 500.0;
    windowScene.sizeRestrictions.minimumSize = minimumSize;
}

@end
```

The system provides this object only when it supports variable-sized windows.

## Topics

### Setting the size restrictions

- [minimumSize](uiscenesizerestrictions/minimumsize.md): The minimum width and height supported by your app’s windows.
- [maximumSize](uiscenesizerestrictions/maximumsize.md): The maximum width and height supported by your app’s windows.
- [allowsFullScreen](uiscenesizerestrictions/allowsfullscreen.md): A Boolean value that indicates whether the scene can appear full screen.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Getting the interface attributes

- [traitCollection](uiwindowscene/traitcollection.md): The traits that describe the current environment of the scene.
- [sizeRestrictions](uiwindowscene/sizerestrictions.md): The minimum and maximum size of the app’s windows.
