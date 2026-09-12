> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hiddeviceclient/requestelementupdate/init(elements:polldevice:)](https://developer.apple.com/documentation/corehid/hiddeviceclient/requestelementupdate/init(elements:polldevice:))

# init(elements:pollDevice:)

**Framework:** Core HID  
**Kind:** Initializer  
**Availability:** macOS 15.0+

Creates a request element update.

## Declaration

```swift
init(elements: [HIDElement], pollDevice: Bool = true)
```

## Parameters

- `elements`: The elements used to request updates.
- `pollDevice`: Whether the device should be polled for new updates, or if the most recently received values can be returned without device interaction. If true, one or more get report requests are issued to the device.
