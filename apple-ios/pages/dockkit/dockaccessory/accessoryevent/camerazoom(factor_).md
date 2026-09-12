> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/accessoryevent/camerazoom(factor:)](https://developer.apple.com/documentation/dockkit/dockaccessory/accessoryevent/camerazoom(factor:))

# DockAccessory.AccessoryEvent.cameraZoom(factor:)

**Framework:** DockKit  
**Kind:** Case  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+

A camera zoom event.

## Declaration

```swift
case cameraZoom(factor: Double)
```

## Parameters

- `factor`: A zoom multiplier. For example, a value of `2.0` doubles the size of an image’s subject and halves the field of view.
