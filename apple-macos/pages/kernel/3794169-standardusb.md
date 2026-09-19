> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3794169-standardusb

# StandardUSB::getNextAssociatedDescriptor

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 12.0+

## Declaration

```objectivec
const Descriptor * StandardUSB::getNextAssociatedDescriptor(const ConfigurationDescriptor *configurationDescriptor, const Descriptor *parentDescriptor, const Descriptor *currentDescriptor);
```
