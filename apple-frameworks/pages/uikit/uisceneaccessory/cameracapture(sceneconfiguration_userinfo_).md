> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uisceneaccessory/cameracapture(sceneconfiguration:userinfo:)

# cameraCapture(sceneConfiguration:userInfo:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

Creates a scene accessory for presenting content during camera capture, passing additional context to the scene delegate.

## Declaration

```swift
class func cameraCapture(sceneConfiguration: UISceneConfiguration, userInfo: Any) -> Self
```

## Parameters

- `sceneConfiguration`: A scene configuration value with a delegate type defined for it.
- `userInfo`: An object that can be used to pass additional context to the scene delegate upon connection.

<a id="discussion"></a>

## Discussion

The content may be presented while the app is in the foreground and has an active camera capture session. The system determines whether and where to present it. The content can be interactive.

This variant accepts a `userInfo` object to pass additional context to the scene delegate upon connection. The `userInfo` object is accessible in the corresponding scene via `UISceneConnectionOptions.sceneAccessoryUserInfo`.

## See Also

### Creating a camera capture accessory

- [cameraCapture(sceneConfiguration:)](cameracapture%28sceneconfiguration_%29.md): Beta. Creates a scene accessory for presenting content during camera capture.

# cameraCaptureSceneAccessoryWithConfiguration:userInfo: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

Creates a scene accessory for presenting content during camera capture, passing additional context to the scene delegate.

## Declaration

```objectivec
+ (instancetype) cameraCaptureSceneAccessoryWithConfiguration:(UISceneConfiguration *) sceneConfiguration userInfo:(id) userInfo;
```

## Parameters

- `sceneConfiguration`: A scene configuration value with a delegate type defined for it.
- `userInfo`: An object that can be used to pass additional context to the scene delegate upon connection.

<a id="discussion"></a>

## Discussion

The content may be presented while the app is in the foreground and has an active camera capture session. The system determines whether and where to present it. The content can be interactive.

This variant accepts a `userInfo` object to pass additional context to the scene delegate upon connection. The `userInfo` object is accessible in the corresponding scene via `UISceneConnectionOptions.sceneAccessoryUserInfo`.

## See Also

### Creating a camera capture accessory

- [cameraCaptureSceneAccessoryWithConfiguration:](cameracapture%28sceneconfiguration_%29.md): Beta. Creates a scene accessory for presenting content during camera capture.
