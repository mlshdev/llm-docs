> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corehid/hiddeviceclient/devicereference-swift.struct/deviceid

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
