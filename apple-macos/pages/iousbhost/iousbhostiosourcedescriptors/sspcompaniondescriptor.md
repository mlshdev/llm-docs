> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostiosourcedescriptors/sspcompaniondescriptor](https://developer.apple.com/documentation/iousbhost/iousbhostiosourcedescriptors/sspcompaniondescriptor)

# sspCompanionDescriptor (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The descriptor for a SuperSpeedPlus isochronous USB endpoint companion.

## Declaration

```swift
var sspCompanionDescriptor: IOUSBSuperSpeedPlusIsochronousEndpointCompanionDescriptor
```

<a id="Discussion"></a>

## Discussion

This descriptor may be necessary for `bcdUSB` versions 0x0300 and greater, depending on device operating speed and values set in the descriptors. See USB 3.2, 9.5 for more information.

## See Also

### Descriptors

- [bcdUSB](bcdusb.md): The USB version that the device supports.
- [descriptor](descriptor.md): The descriptor for a USB endpoint.
- [ssCompanionDescriptor](sscompaniondescriptor.md): The descriptor for a SuperSpeed USB endpoint companion.

# sspCompanionDescriptor (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The descriptor for a SuperSpeedPlus isochronous USB endpoint companion.

## Declaration

```objectivec
IOUSBSuperSpeedPlusIsochronousEndpointCompanionDescriptor sspCompanionDescriptor;
```

<a id="Discussion"></a>

## Discussion

This descriptor may be necessary for `bcdUSB` versions 0x0300 and greater, depending on device operating speed and values set in the descriptors. See USB 3.2, 9.5 for more information.

## See Also

### Descriptors

- [bcdUSB](bcdusb.md): The USB version that the device supports.
- [descriptor](descriptor.md): The descriptor for a USB endpoint.
- [ssCompanionDescriptor](sscompaniondescriptor.md): The descriptor for a SuperSpeed USB endpoint companion.
