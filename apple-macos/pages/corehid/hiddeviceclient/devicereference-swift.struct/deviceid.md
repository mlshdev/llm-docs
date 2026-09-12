> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hiddeviceclient/devicereference-swift.struct/deviceid](https://developer.apple.com/documentation/corehid/hiddeviceclient/devicereference-swift.struct/deviceid)

# deviceID

**Framework:** Core HID  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The unique ID for the associated HID device.

## Declaration

```swift
let deviceID: UInt64
```

<a id="discussion"></a>

## Discussion

A [HIDDeviceClient.DeviceReference](../devicereference-swift.struct.md)with the same [deviceID](deviceid.md) is an equivalent reference to the same device, and a [deviceID](deviceid.md) for a device is equivalent across the system.
