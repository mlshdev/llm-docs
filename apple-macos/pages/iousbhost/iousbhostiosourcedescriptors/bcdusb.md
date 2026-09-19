> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iousbhost/iousbhostiosourcedescriptors/bcdusb

# bcdUSB (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The USB version that the device supports.

## Declaration

```swift
var bcdUSB: UInt16
```

<a id="Discussion"></a>

## Discussion

Initialize this descriptor to the USB version that the device supports. Acceptable values are 0x0110, 0x0200, 0x0300, 0x0310.

## See Also

### Descriptors

- [descriptor](descriptor.md): The descriptor for a USB endpoint.
- [ssCompanionDescriptor](sscompaniondescriptor.md): The descriptor for a SuperSpeed USB endpoint companion.
- [sspCompanionDescriptor](sspcompaniondescriptor.md): The descriptor for a SuperSpeedPlus isochronous USB endpoint companion.

# bcdUSB (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The USB version that the device supports.

## Declaration

```objectivec
uint16_t bcdUSB;
```

<a id="Discussion"></a>

## Discussion

Initialize this descriptor to the USB version that the device supports. Acceptable values are 0x0110, 0x0200, 0x0300, 0x0310.

## See Also

### Descriptors

- [descriptor](descriptor.md): The descriptor for a USB endpoint.
- [ssCompanionDescriptor](sscompaniondescriptor.md): The descriptor for a SuperSpeed USB endpoint companion.
- [sspCompanionDescriptor](sspcompaniondescriptor.md): The descriptor for a SuperSpeedPlus isochronous USB endpoint companion.
