> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidvirtualdevice/init(properties:)](https://developer.apple.com/documentation/corehid/hidvirtualdevice/init(properties:))

# init(properties:)

**Framework:** Core HID  
**Kind:** Initializer  
**Availability:** macOS 15.0+

Creates a virtual HID device.

## Declaration

```swift
init?(properties: HIDVirtualDevice.Properties)
```

## Parameters

- `properties`: The [HIDVirtualDevice.Properties](properties.md) for the virtual device. These values determine the device functionality.

<a id="discussion"></a>

## Discussion

[HIDVirtualDevice](../hidvirtualdevice.md) is created in an inactive state, notifications won’t be received and many functions won’t run until [activate(delegate:)](activate%28delegate_%29.md) has run successfully.

## See Also

### Create a HID virtual device

- [deviceReference](devicereference.md): The reference to the virtual HID device.
- [activate(delegate:)](activate%28delegate_%29.md): Activate a newly created virtual device to begin receiving notifications and enable functionality.
