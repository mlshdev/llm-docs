> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3794174-standardusb

# StandardUSB::getNextDescriptorWithType

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 12.0+

## Declaration

```objectivec
const Descriptor * StandardUSB::getNextDescriptorWithType(const ConfigurationDescriptor *configurationDescriptor, const Descriptor *currentDescriptor, const uint8_t type);
```
