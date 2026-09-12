> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/3794174-standardusb](https://developer.apple.com/documentation/kernel/3794174-standardusb)

# StandardUSB::getNextDescriptorWithType

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 12.0+

## Declaration

```objectivec
const Descriptor * StandardUSB::getNextDescriptorWithType(const ConfigurationDescriptor *configurationDescriptor, const Descriptor *currentDescriptor, const uint8_t type);
```
