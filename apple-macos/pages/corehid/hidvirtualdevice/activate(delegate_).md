> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidvirtualdevice/activate(delegate:)](https://developer.apple.com/documentation/corehid/hidvirtualdevice/activate(delegate:))

# activate(delegate:)

**Framework:** Core HID  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Activate a newly created virtual device to begin receiving notifications and enable functionality.

## Declaration

```swift
func activate(delegate: any HIDVirtualDeviceDelegate)
```

## Parameters

- `delegate`: The [HIDVirtualDeviceDelegate](../hidvirtualdevicedelegate.md) that receives incoming set/get report requests. Only one delegate is associated with the device, but many devices can be associated with the delegate.

<a id="discussion"></a>

## Discussion

Many functions won’t run, and notifications won’t be received using the [HIDVirtualDeviceDelegate](../hidvirtualdevicedelegate.md) until activate has run successfully. A device cannot be activated twice.

## See Also

### Create a HID virtual device

- [init(properties:)](init%28properties_%29.md): Creates a virtual HID device.
- [deviceReference](devicereference.md): The reference to the virtual HID device.
