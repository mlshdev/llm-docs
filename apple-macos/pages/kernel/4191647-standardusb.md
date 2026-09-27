> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/4191647-standardusb

# StandardUSB::getPlatformCapabilityDescriptorWithUUID

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 14.0+

## Declaration

```objectivec
const PlatformCapabilityDescriptor * StandardUSB::getPlatformCapabilityDescriptorWithUUID(const BOSDescriptor *bosDescriptor, uuid_t uuid);
```
