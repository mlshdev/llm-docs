> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/3794163-standardusb](https://developer.apple.com/documentation/kernel/3794163-standardusb)

# StandardUSB::getEndpointMaxPacketSize

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 12.0+

## Declaration

```objectivec
uint16_t StandardUSB::getEndpointMaxPacketSize(uint32_t usbDeviceSpeed, const EndpointDescriptor *descriptor);
```
