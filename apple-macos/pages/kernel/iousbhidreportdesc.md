> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhidreportdesc](https://developer.apple.com/documentation/kernel/iousbhidreportdesc)

# IOUSBHIDReportDesc

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

A structure that defines the USB HID report descriptor header.

## Declaration

```objectivec
typedef struct IOUSBHIDReportDesc IOUSBHIDReportDesc;
```

<a id="discussion"></a>

## Discussion

See the USB Implementers Forum (USB-IF) *Device Class Definition for Human Interface Devices (HID)* for more information.

## Topics

### Getting the Properties

- [hidDescriptorType](iousbhidreportdesc/1546546-hiddescriptortype.md): The type of the descriptor.
- [hidDescriptorLengthHi](iousbhidreportdesc/1546199-hiddescriptorlengthhi.md): The high byte length of the descriptor.
- [hidDescriptorLengthLo](iousbhidreportdesc/1546355-hiddescriptorlengthlo.md): The low byte length of the descriptor.

## See Also

### HID Descriptors

- [IOUSBHIDData](iousbhiddata.md): Data related to the mouse and keyboard.
- [IOUSBHIDDataPtr](iousbhiddataptr.md): A pointer to a structure related to mouse and keyboard data.
- [IOUSBHIDDescriptor](iousbhiddescriptor.md): A structure that defines the USB HID descriptor.
- [IOUSBHIDDescriptorPtr](iousbhiddescriptorptr.md): A pointer to a structure that defines the USB HID descriptor.
- [IOUSBHIDReportDescPtr](iousbhidreportdescptr.md): A pointer to a structure that defines the USB HID report descriptor header.

### Related Documentation

- [IOUSBHIDReportDesc](https://developer.apple.com/documentation/iokit/usb_h_user-space/iousbhidreportdesc)
