> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/accessoryevent/button(id:pressed:)](https://developer.apple.com/documentation/dockkit/dockaccessory/accessoryevent/button(id:pressed:))

# DockAccessory.AccessoryEvent.button(id:pressed:)

**Framework:** DockKit  
**Kind:** Case  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+

A button press event on the dock accessory.

## Declaration

```swift
case button(id: Int, pressed: Bool)
```

## Parameters

- `id`: A unique, vendor-specific identifier for the given button.
- `pressed`: `true` on button press down, `false` on button release up.
