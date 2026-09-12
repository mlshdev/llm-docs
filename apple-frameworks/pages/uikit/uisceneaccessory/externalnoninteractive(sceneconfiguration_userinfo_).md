> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisceneaccessory/externalnoninteractive(sceneconfiguration:userinfo:)](https://developer.apple.com/documentation/uikit/uisceneaccessory/externalnoninteractive(sceneconfiguration:userinfo:))

# externalNonInteractive(sceneConfiguration:userInfo:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates a new scene accessory configuration for presenting non-interactive content on an external display.

## Declaration

```swift
class func externalNonInteractive(sceneConfiguration: UISceneConfiguration, userInfo: Any) -> Self
```

## Parameters

- `sceneConfiguration`: A scene configuration value with delegate type defined for it.
- `userInfo`: An object that can be used to pass additional context to the scene delegate upon connection.

## Mentioned In

- [Presenting content on a connected display](../presenting-content-on-a-connected-display.md)

<a id="discussion"></a>

## Discussion

When the display connects, the scene accessory’s content may be presented on it.

This variant accepts a `userInfo` object to pass additional context to the scene delegate upon connection. The `userInfo` object is accessible in the corresponding scene via `UISceneConnectionOptions.sceneAccessoryUserInfo`.

# externalNonInteractiveSceneAccessoryWithConfiguration:userInfo: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Creates a new scene accessory configuration for presenting non-interactive content on an external display.

## Declaration

```objectivec
+ (instancetype) externalNonInteractiveSceneAccessoryWithConfiguration:(UISceneConfiguration *) sceneConfiguration userInfo:(id) userInfo;
```

## Parameters

- `sceneConfiguration`: A scene configuration value with delegate type defined for it.
- `userInfo`: An object that can be used to pass additional context to the scene delegate upon connection.

## Mentioned In

- [Presenting content on a connected display](../presenting-content-on-a-connected-display.md)

<a id="discussion"></a>

## Discussion

When the display connects, the scene accessory’s content may be presented on it.

This variant accepts a `userInfo` object to pass additional context to the scene delegate upon connection. The `userInfo` object is accessible in the corresponding scene via `UISceneConnectionOptions.sceneAccessoryUserInfo`.
