> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corehid/hiddeviceclient/notification/deviceremoved

# HIDDeviceClient.Notification.deviceRemoved

**Framework:** Core HID  
**Kind:** Case  
**Availability:** macOS 15.0+

A notification that the device is no longer connected to the system.

## Declaration

```swift
case deviceRemoved
```

<a id="discussion"></a>

## Discussion

After the device is removed, no other notifications occur and most methods fail. Discard the [HIDDeviceClient](../../hiddeviceclient.md).
