> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidvirtualdevice/devicereference](https://developer.apple.com/documentation/corehid/hidvirtualdevice/devicereference)

# deviceReference

**Framework:** Core HID  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The reference to the virtual HID device.

## Declaration

```swift
nonisolated final let deviceReference: HIDDeviceClient.DeviceReference
```

<a id="discussion"></a>

## Discussion

Use to create a [HIDDeviceClient](../hiddeviceclient.md), if creating a device and monitoring it within the same app is desired. For more details, see [HIDDeviceClient.DeviceReference](../hiddeviceclient/devicereference-swift.struct.md).

## See Also

### Create a HID virtual device

- [init(properties:)](init%28properties_%29.md): Creates a virtual HID device.
- [activate(delegate:)](activate%28delegate_%29.md): Activate a newly created virtual device to begin receiving notifications and enable functionality.
