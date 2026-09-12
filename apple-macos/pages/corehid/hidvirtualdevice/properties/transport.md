> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidvirtualdevice/properties/transport](https://developer.apple.com/documentation/corehid/hidvirtualdevice/properties/transport)

# transport

**Framework:** Core HID  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The data transport for the device.

## Declaration

```swift
let transport: HIDDeviceTransport?
```

<a id="discussion"></a>

## Discussion

The data transport is typically [HIDDeviceTransport.virtual](../../hiddevicetransport/virtual.md), but it can be any [HIDDeviceTransport](../../hiddevicetransport.md).
