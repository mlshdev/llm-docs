> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzcustomvirtiodevicedelegate](https://developer.apple.com/documentation/virtualization/vzcustomvirtiodevicedelegate)

# VZCustomVirtioDeviceDelegate (Swift)

**Framework:** Virtualization  
**Kind:** Protocol  
**Availability:** macOS 27.0+

A delegate protocol that defines the methods you implement to respond to the life cycle events of a custom Virtio device.

## Declaration

```swift
protocol VZCustomVirtioDeviceDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

When you define these methods and set the delegate on your [VZCustomVirtioDevice](vzcustomvirtiodevice.md) instance, the Virtualization framework notifies you when the Virtio device stops, pauses, resumes, or resets by the invocation of the respective methods defined here, and you can provide code to handle each of these situations.

The framework considers the device to be ready when the guest driver sets `DRIVER_OK`, indicated by the invocation of [customVirtioDeviceDidAcceptDriverOk(\_:)](vzcustomvirtiodevicedelegate/customvirtiodevicedidacceptdriverok%28__%29.md), this means that the guest driver is set up and ready to drive the device, and the device is ready to process any device operations.

Virtqueue (Virtio queue) notifications trigger device operations, then the framework invokes the [customVirtioDevice(\_:didReceiveNotificationFor:)](vzcustomvirtiodevicedelegate/customvirtiodevice%28__didreceivenotificationfor_%29.md) method when the guest driver sends the device a virtqueue notification, and you can provide code to handle the notification.

## Topics

### Instance Methods

- [customVirtioDevice(\_:didReceiveNotificationFor:)](vzcustomvirtiodevicedelegate/customvirtiodevice%28__didreceivenotificationfor_%29.md): The method the framework calls when the device receives a virtqueue (Virtio queue) notification from the guest.
- [customVirtioDeviceDidAcceptDriverOk(\_:)](vzcustomvirtiodevicedelegate/customvirtiodevicedidacceptdriverok%28__%29.md): The method the framework calls when the device and driver successfully complete Virtio negotiation.
- [customVirtioDeviceSaveState(forRestore:)](vzcustomvirtiodevicedelegate/customvirtiodevicesavestate%28forrestore_%29.md): The method the framework calls when a device needs to save its state.
- [customVirtioDeviceShouldRestore(\_:saveState:)](vzcustomvirtiodevicedelegate/customvirtiodeviceshouldrestore%28__savestate_%29.md): The method the framework calls when a device restores its state.
- [customVirtioDeviceWillPause(\_:)](vzcustomvirtiodevicedelegate/customvirtiodevicewillpause%28__%29.md): The method the framework calls when a device pauses.
- [customVirtioDeviceWillReset(\_:)](vzcustomvirtiodevicedelegate/customvirtiodevicewillreset%28__%29.md): The method the framework calls when a device resets.
- [customVirtioDeviceWillResume(\_:)](vzcustomvirtiodevicedelegate/customvirtiodevicewillresume%28__%29.md): The method the framework calls when a device resumes.
- [customVirtioDeviceWillStop(\_:)](vzcustomvirtiodevicedelegate/customvirtiodevicewillstop%28__%29.md): The method the framework calls when a device will be stopped.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [VZCustomVirtioDevice](vzcustomvirtiodevice.md): An interface that represents a custom Virtio device that you provide the implementation for.

### Responding to Virtio events

- [VZCustomVirtioDeviceConfigurationDelegate](vzcustomvirtiodeviceconfigurationdelegate.md): A class that conforms to the custom Virtio device configuration delegate protocol that can provide methods for tracking the state of a custom Virtio device configuration object.

# VZCustomVirtioDeviceDelegate (Objective-C)

**Framework:** Virtualization  
**Kind:** Protocol  
**Availability:** macOS 27.0+

A delegate protocol that defines the methods you implement to respond to the life cycle events of a custom Virtio device.

## Declaration

```objectivec
@protocol VZCustomVirtioDeviceDelegate <NSObject>
```

<a id="overview"></a>

## Overview

When you define these methods and set the delegate on your [VZCustomVirtioDevice](vzcustomvirtiodevice.md) instance, the Virtualization framework notifies you when the Virtio device stops, pauses, resumes, or resets by the invocation of the respective methods defined here, and you can provide code to handle each of these situations.

The framework considers the device to be ready when the guest driver sets `DRIVER_OK`, indicated by the invocation of [customVirtioDeviceDidAcceptDriverOk:](vzcustomvirtiodevicedelegate/customvirtiodevicedidacceptdriverok%28__%29.md), this means that the guest driver is set up and ready to drive the device, and the device is ready to process any device operations.

Virtqueue (Virtio queue) notifications trigger device operations, then the framework invokes the [customVirtioDevice:didReceiveNotificationForQueue:](vzcustomvirtiodevicedelegate/customvirtiodevice%28__didreceivenotificationfor_%29.md) method when the guest driver sends the device a virtqueue notification, and you can provide code to handle the notification.

## Topics

### Instance Methods

- [customVirtioDevice:didReceiveNotificationForQueue:](vzcustomvirtiodevicedelegate/customvirtiodevice%28__didreceivenotificationfor_%29.md): The method the framework calls when the device receives a virtqueue (Virtio queue) notification from the guest.
- [customVirtioDeviceDidAcceptDriverOk:](vzcustomvirtiodevicedelegate/customvirtiodevicedidacceptdriverok%28__%29.md): The method the framework calls when the device and driver successfully complete Virtio negotiation.
- [customVirtioDeviceSaveStateForRestore:](vzcustomvirtiodevicedelegate/customvirtiodevicesavestate%28forrestore_%29.md): The method the framework calls when a device needs to save its state.
- [customVirtioDeviceShouldRestore:saveState:](vzcustomvirtiodevicedelegate/customvirtiodeviceshouldrestore%28__savestate_%29.md): The method the framework calls when a device restores its state.
- [customVirtioDeviceWillPause:](vzcustomvirtiodevicedelegate/customvirtiodevicewillpause%28__%29.md): The method the framework calls when a device pauses.
- [customVirtioDeviceWillReset:](vzcustomvirtiodevicedelegate/customvirtiodevicewillreset%28__%29.md): The method the framework calls when a device resets.
- [customVirtioDeviceWillResume:](vzcustomvirtiodevicedelegate/customvirtiodevicewillresume%28__%29.md): The method the framework calls when a device resumes.
- [customVirtioDeviceWillStop:](vzcustomvirtiodevicedelegate/customvirtiodevicewillstop%28__%29.md): The method the framework calls when a device will be stopped.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [VZCustomVirtioDevice](vzcustomvirtiodevice.md): An interface that represents a custom Virtio device that you provide the implementation for.

### Responding to Virtio events

- [VZCustomVirtioDeviceConfigurationDelegate](vzcustomvirtiodeviceconfigurationdelegate.md): A class that conforms to the custom Virtio device configuration delegate protocol that can provide methods for tracking the state of a custom Virtio device configuration object.
