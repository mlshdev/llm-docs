> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostiosourcedescriptors/sscompaniondescriptor](https://developer.apple.com/documentation/iousbhost/iousbhostiosourcedescriptors/sscompaniondescriptor)

# ssCompanionDescriptor (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The descriptor for a SuperSpeed USB endpoint companion.

## Declaration

```swift
var ssCompanionDescriptor: IOUSBSuperSpeedEndpointCompanionDescriptor
```

<a id="Discussion"></a>

## Discussion

This descriptor may be necessary for `bcdUSB` versions 0x0300 and greater, depending on device operating speed and values set in the descriptors. See USB 3.2, 9.5 for more information.

## See Also

### Descriptors

- [bcdUSB](bcdusb.md): The USB version that the device supports.
- [descriptor](descriptor.md): The descriptor for a USB endpoint.
- [sspCompanionDescriptor](sspcompaniondescriptor.md): The descriptor for a SuperSpeedPlus isochronous USB endpoint companion.

# ssCompanionDescriptor (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The descriptor for a SuperSpeed USB endpoint companion.

## Declaration

```objectivec
IOUSBSuperSpeedEndpointCompanionDescriptor ssCompanionDescriptor;
```

<a id="Discussion"></a>

## Discussion

This descriptor may be necessary for `bcdUSB` versions 0x0300 and greater, depending on device operating speed and values set in the descriptors. See USB 3.2, 9.5 for more information.

## See Also

### Descriptors

- [bcdUSB](bcdusb.md): The USB version that the device supports.
- [descriptor](descriptor.md): The descriptor for a USB endpoint.
- [sspCompanionDescriptor](sspcompaniondescriptor.md): The descriptor for a SuperSpeedPlus isochronous USB endpoint companion.
