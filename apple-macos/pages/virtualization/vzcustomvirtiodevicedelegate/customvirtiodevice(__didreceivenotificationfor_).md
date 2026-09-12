> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzcustomvirtiodevicedelegate/customvirtiodevice(_:didreceivenotificationfor:)](https://developer.apple.com/documentation/virtualization/vzcustomvirtiodevicedelegate/customvirtiodevice(_:didreceivenotificationfor:))

# customVirtioDevice(\_:didReceiveNotificationFor:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

The method the framework calls when the device receives a virtqueue (Virtio queue) notification from the guest.

## Declaration

```swift
optional func customVirtioDevice(_ device: VZCustomVirtioDevice, didReceiveNotificationFor queue: VZVirtioQueue)
```

## Parameters

- `device`: The device invoking the delegate method.
- `queue`: The queue that received the notification.

# customVirtioDevice:didReceiveNotificationForQueue: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

The method the framework calls when the device receives a virtqueue (Virtio queue) notification from the guest.

## Declaration

```objectivec
- (void) customVirtioDevice:(VZCustomVirtioDevice *) device didReceiveNotificationForQueue:(VZVirtioQueue *) queue;
```

## Parameters

- `device`: The device invoking the delegate method.
- `queue`: The queue that received the notification.
