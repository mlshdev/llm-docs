> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corehid/hiddevicemanager/notification/deviceremoved(_:)

# HIDDeviceManager.Notification.deviceRemoved(\_:)

**Framework:** Core HID  
**Kind:** Case  
**Availability:** macOS 15.0+

A notification that a previously matched device was removed from the system.

## Declaration

```swift
case deviceRemoved(HIDDeviceClient.DeviceReference)
```

<a id="discussion"></a>

## Discussion

Any created [HIDDeviceClient](../../hiddeviceclient.md) also receives a [HIDDeviceClient.Notification.deviceRemoved](../../hiddeviceclient/notification/deviceremoved.md) notification.
