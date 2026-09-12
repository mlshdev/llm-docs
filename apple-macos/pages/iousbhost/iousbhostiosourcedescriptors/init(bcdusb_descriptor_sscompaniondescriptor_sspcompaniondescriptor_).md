> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostiosourcedescriptors/init(bcdusb:descriptor:sscompaniondescriptor:sspcompaniondescriptor:)](https://developer.apple.com/documentation/iousbhost/iousbhostiosourcedescriptors/init(bcdusb:descriptor:sscompaniondescriptor:sspcompaniondescriptor:))

# init(bcdUSB:descriptor:ssCompanionDescriptor:sspCompanionDescriptor:)

**Framework:** IOUSBHost  
**Kind:** Initializer  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Creates a new source descriptor structure.

## Declaration

```swift
init(bcdUSB: UInt16, descriptor: IOUSBEndpointDescriptor, ssCompanionDescriptor: IOUSBSuperSpeedEndpointCompanionDescriptor, sspCompanionDescriptor: IOUSBSuperSpeedPlusIsochronousEndpointCompanionDescriptor)
```

## Parameters

- `bcdUSB`: The USB version that the device supports, specified as a binary-coded decimal value.
- `descriptor`: A valid endpoint descriptor.
- `ssCompanionDescriptor`: The companion descriptor for SuperSpeed devices.
- `sspCompanionDescriptor`: The companion descriptor for SuperSpeedPlus devices.

<a id="Discussion"></a>

## Discussion

The `ssCompanionDescriptor` and `sspCompanionDescriptor` descriptors may be necessary for `bcdUSB` versions `0x0300` and greater, depending on device operating speed and values set in the descriptors. See USB 3.2, 9.5 for more information.

## See Also

### Initializing the Structure

- [init()](init%28%29.md): Creates a new source descriptor structure.
