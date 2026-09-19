> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uisceneaccessory/cameracapture(sceneconfiguration:)

# cameraCapture(sceneConfiguration:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

Creates a scene accessory for presenting content during camera capture.

## Declaration

```swift
class func cameraCapture(sceneConfiguration: UISceneConfiguration) -> Self
```

## Parameters

- `sceneConfiguration`: A scene configuration value with a delegate type defined for it.

<a id="discussion"></a>

## Discussion

The content may be presented while the app is in the foreground and has an active camera capture session. The system determines whether and where to present it. The content can be interactive.

## See Also

### Creating a camera capture accessory

- [cameraCapture(sceneConfiguration:userInfo:)](cameracapture%28sceneconfiguration_userinfo_%29.md): Beta. Creates a scene accessory for presenting content during camera capture, passing additional context to the scene delegate.

# cameraCaptureSceneAccessoryWithConfiguration: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

Creates a scene accessory for presenting content during camera capture.

## Declaration

```objectivec
+ (instancetype) cameraCaptureSceneAccessoryWithConfiguration:(UISceneConfiguration *) sceneConfiguration;
```

## Parameters

- `sceneConfiguration`: A scene configuration value with a delegate type defined for it.

<a id="discussion"></a>

## Discussion

The content may be presented while the app is in the foreground and has an active camera capture session. The system determines whether and where to present it. The content can be interactive.

## See Also

### Creating a camera capture accessory

- [cameraCaptureSceneAccessoryWithConfiguration:userInfo:](cameracapture%28sceneconfiguration_userinfo_%29.md): Beta. Creates a scene accessory for presenting content during camera capture, passing additional context to the scene delegate.
