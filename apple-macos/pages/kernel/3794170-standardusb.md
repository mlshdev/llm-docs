> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/3794170-standardusb](https://developer.apple.com/documentation/kernel/3794170-standardusb)

# StandardUSB::getNextAssociatedDescriptorWithType

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 12.0+

## Declaration

```objectivec
const Descriptor * StandardUSB::getNextAssociatedDescriptorWithType(const ConfigurationDescriptor *configurationDescriptor, const Descriptor *parentDescriptor, const Descriptor *currentDescriptor, const uint8_t type);
```
