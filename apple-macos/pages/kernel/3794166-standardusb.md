> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/3794166-standardusb](https://developer.apple.com/documentation/kernel/3794166-standardusb)

# StandardUSB::getEndpointMult

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 12.0+

## Declaration

```objectivec
uint8_t StandardUSB::getEndpointMult(uint32_t usbDeviceSpeed, const EndpointDescriptor *descriptor, const SuperSpeedEndpointCompanionDescriptor *companionDescriptor, const SuperSpeedPlusIsochronousEndpointCompanionDescriptor *sspCompanionDescriptor);
```
