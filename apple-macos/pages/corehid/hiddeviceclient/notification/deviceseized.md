> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corehid/hiddeviceclient/notification/deviceseized

# HIDDeviceClient.Notification.deviceSeized

**Framework:** Core HID  
**Kind:** Case  
**Availability:** macOS 15.0+

A notification that the device was seized by another client.

## Declaration

```swift
case deviceSeized
```

<a id="discussion"></a>

## Discussion

After the device is seized by another client, notifications are paused until [HIDDeviceClient.Notification.deviceUnseized](deviceunseized.md) is received.
