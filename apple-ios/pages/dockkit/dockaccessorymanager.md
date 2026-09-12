> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessorymanager](https://developer.apple.com/documentation/dockkit/dockaccessorymanager)

# DockAccessoryManager

**Framework:** DockKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Observe the state of dock accessories and enable or disable system tracking.

## Declaration

```swift
class DockAccessoryManager
```

<a id="overview"></a>

## Overview

`DockAccessoryManager`  enables and disables system tracking for camera-enabled apps, and provides docking and undocking notifications. If you want to customize the tracking behavior of a dock accessory, use [accessoryStateChanges](dockaccessorymanager/accessorystatechanges.md) to obtain that accessory.

This class is a singleton, so use [shared](dockaccessorymanager/shared.md) to fetch the single instance.

## Topics

### Obtaining a manager

- [shared](dockaccessorymanager/shared.md): The accessory manager singleton object.

### Controlling dock accessories

- [accessoryStateChanges](dockaccessorymanager/accessorystatechanges.md): Obtain a reference to a dock accessory and receive notifications about its state.

### Changing tracking behavior

- [isSystemTrackingEnabled](dockaccessorymanager/issystemtrackingenabled.md): An indication of whether system tracking is enabled.
- [setSystemTrackingEnabled(\_:)](dockaccessorymanager/setsystemtrackingenabled%28__%29.md): Enable and disable system tracking for camera-enabled apps.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Controlling the dock accessory

- [Controlling a DockKit accessory using your camera app](controlling-a-dockkit-accessory-using-your-camera-app.md): Follow subjects in real time using an iPhone that you mount on a DockKit accessory.
- [DockAccessory](dockaccessory.md): Obtain accessory information and control tracking behavior.
- [DockKitError](dockkiterror.md): A list of errors that DockKit sends.
