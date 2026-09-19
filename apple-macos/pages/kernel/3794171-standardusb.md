> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3794171-standardusb

# StandardUSB::getNextCapabilityDescriptor

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 12.0+

## Declaration

```objectivec
const DeviceCapabilityDescriptor * StandardUSB::getNextCapabilityDescriptor(const BOSDescriptor *bosDescriptor, const DeviceCapabilityDescriptor *currentDescriptor);
```
