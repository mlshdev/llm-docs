> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostiosourcedescriptors/descriptor](https://developer.apple.com/documentation/iousbhost/iousbhostiosourcedescriptors/descriptor)

# descriptor (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The descriptor for a USB endpoint.

## Declaration

```swift
var descriptor: IOUSBEndpointDescriptor
```

<a id="Discussion"></a>

## Discussion

Initialize this descriptor with a valid [IOUSBEndpointDescriptor](https://developer.apple.com/documentation/iokit/iousbendpointdescriptor). See USB 3.2, 9.6.6.

## See Also

### Descriptors

- [bcdUSB](bcdusb.md): The USB version that the device supports.
- [ssCompanionDescriptor](sscompaniondescriptor.md): The descriptor for a SuperSpeed USB endpoint companion.
- [sspCompanionDescriptor](sspcompaniondescriptor.md): The descriptor for a SuperSpeedPlus isochronous USB endpoint companion.

# descriptor (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The descriptor for a USB endpoint.

## Declaration

```objectivec
IOUSBEndpointDescriptor descriptor;
```

<a id="Discussion"></a>

## Discussion

Initialize this descriptor with a valid [IOUSBEndpointDescriptor](https://developer.apple.com/documentation/iokit/iousbendpointdescriptor). See USB 3.2, 9.6.6.

## See Also

### Descriptors

- [bcdUSB](bcdusb.md): The USB version that the device supports.
- [ssCompanionDescriptor](sscompaniondescriptor.md): The descriptor for a SuperSpeed USB endpoint companion.
- [sspCompanionDescriptor](sspcompaniondescriptor.md): The descriptor for a SuperSpeedPlus isochronous USB endpoint companion.
