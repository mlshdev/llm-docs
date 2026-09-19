> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3794247-standardusb

# StandardUSB::validateEndpointDescriptor

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 12.0+

## Declaration

```objectivec
bool StandardUSB::validateEndpointDescriptor(uint32_t usbDeviceSpeed, const EndpointDescriptor *descriptor, const SuperSpeedEndpointCompanionDescriptor *companionDescriptor);
```
