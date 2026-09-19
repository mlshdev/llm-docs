> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3794246-standardusb

# StandardUSB::validateEndpointBurstSize

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 12.0+

## Declaration

```objectivec
bool StandardUSB::validateEndpointBurstSize(uint32_t usbDeviceSpeed, const EndpointDescriptor *descriptor, const SuperSpeedEndpointCompanionDescriptor *companionDescriptor);
```
