> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/externalnoninteractiveaccessory](https://developer.apple.com/documentation/swiftui/externalnoninteractiveaccessory)

# ExternalNonInteractiveAccessory

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+

A scene accessory that presents non-interactive content on an external display.

## Declaration

```swift
nonisolated struct ExternalNonInteractiveAccessory<Content> where Content : View
```

<a id="overview"></a>

## Overview

The scene accessory may be presented when an external display is connected to the device, or when the device is connected to an external display via AirPlay.

For example, you can define a scene accessory for previewing a non-interactive presentation, which may be presented when an external display is connected:

```swift
struct RootView: View {
    var document: PresentationDocument

    var body: some View {
        PresentationDocumentView(document: document)
            .sceneAccessory {
                ExternalNonInteractiveAccessory {
                    PresentationPreview(document: document)
                }
            }
    }
}
```

## Topics

### Initializers

- [init(content:)](externalnoninteractiveaccessory/init%28content_%29.md): Creates a scene accessory that presents non-interactive content on an external display.
- [init(isEnabled:content:)](externalnoninteractiveaccessory/init%28isenabled_content_%29.md): Creates a scene accessory that presents non-interactive content on an external display with a binding for programmatic enablement.

## Relationships

### Conforms To

- [SceneAccessoryContent](sceneaccessorycontent.md)

## See Also

### Presenting content on an external display

- [sceneAccessory(content:)](view/sceneaccessory%28content_%29.md): Defines any scene accessories associated with `self`.
- [SceneAccessoryContent](sceneaccessorycontent.md): Conforming types represent items which define content for scene accessories.
