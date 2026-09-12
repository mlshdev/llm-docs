> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hiddeviceclient/notification/elementupdates(values:)](https://developer.apple.com/documentation/corehid/hiddeviceclient/notification/elementupdates(values:))

# HIDDeviceClient.Notification.elementUpdates(values:)

**Framework:** Core HID  
**Kind:** Case  
**Availability:** macOS 15.0+

A notification that elements of the device were updated.

## Declaration

```swift
case elementUpdates(values: [HIDElement.Value])
```

## Parameters

- `values`: The updated values.

## Mentioned In

- [Communicating with human interface devices](../../communicatingwithhiddevices.md)

<a id="discussion"></a>

## Discussion

This is typically received in response to input reports, and is another way to receive the data in a different format than [HIDDeviceClient.Notification.inputReport(id:data:timestamp:)](inputreport%28id_data_timestamp_%29.md).
