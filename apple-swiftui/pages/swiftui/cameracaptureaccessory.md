> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/cameracaptureaccessory

# CameraCaptureAccessory

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

A scene accessory that presents content during camera capture.

## Declaration

```swift
nonisolated struct CameraCaptureAccessory<Content> where Content : View
```

<a id="overview"></a>

## Overview

The accessory may be presented while the app is in the foreground and has an active camera capture session. The system determines whether and where to present it. Unlike [ExternalNonInteractiveAccessory](externalnoninteractiveaccessory.md), the content can be interactive.

For example, you can present a teleprompter that the person being captured can read while looking toward the camera:

```swift
struct CameraRootView: View {
    @State private var model = TeleprompterModel()

    var body: some View {
        CameraView(model: model)
            .sceneAccessory {
                CameraCaptureAccessory {
                    TeleprompterView(model: model)
                }
            }
    }
}
```

## Topics

### Initializers

- [init(content:)](cameracaptureaccessory/init%28content_%29.md): Beta. Creates a scene accessory that presents content during camera capture.
- [init(isEnabled:content:)](cameracaptureaccessory/init%28isenabled_content_%29.md): Beta. Creates a scene accessory that presents content during camera capture, with a binding for programmatic enablement.

## Relationships

### Conforms To

- [SceneAccessoryContent](sceneaccessorycontent.md)

## See Also

### Presenting content on an external display

- [sceneAccessory(content:)](view/sceneaccessory%28content_%29.md): Defines any scene accessories associated with `self`.
- [SceneAccessoryContent](sceneaccessorycontent.md): Conforming types represent items which define content for scene accessories.
- [ExternalNonInteractiveAccessory](externalnoninteractiveaccessory.md): A scene accessory that presents non-interactive content on an external display.
