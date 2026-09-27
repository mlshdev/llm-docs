> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3794158-standardusb

# StandardUSB::getEndpointBurstSize32

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 12.0+

## Declaration

```objectivec
uint32_t StandardUSB::getEndpointBurstSize32(uint32_t usbDeviceSpeed, const EndpointDescriptor *descriptor, const SuperSpeedEndpointCompanionDescriptor *companionDescriptor, const SuperSpeedPlusIsochronousEndpointCompanionDescriptor *sspCompanionDescriptor);
```
