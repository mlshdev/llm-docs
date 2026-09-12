> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/accessoryevent](https://developer.apple.com/documentation/dockkit/dockaccessory/accessoryevent)

# DockAccessory.AccessoryEvent

**Framework:** DockKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+

An enumeration that represents an accessory event.

## Declaration

```swift
enum AccessoryEvent
```

<a id="overview"></a>

## Overview

This event propagates input from the dock accessory. Example events are button presses or requests for common camera controls.

## Topics

### Enumeration Cases

- [DockAccessory.AccessoryEvent.button(id:pressed:)](accessoryevent/button%28id_pressed_%29.md): A button press event on the dock accessory.
- [DockAccessory.AccessoryEvent.cameraFlip](accessoryevent/cameraflip.md): A camera flip event that indicates a request to switch between back and front cameras.
- [DockAccessory.AccessoryEvent.cameraShutter](accessoryevent/camerashutter.md): A camera shutter toggle event.
- [DockAccessory.AccessoryEvent.cameraZoom(factor:)](accessoryevent/camerazoom%28factor_%29.md): A camera zoom event.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
