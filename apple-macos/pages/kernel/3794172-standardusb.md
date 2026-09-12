> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/3794172-standardusb](https://developer.apple.com/documentation/kernel/3794172-standardusb)

# StandardUSB::getNextCapabilityDescriptorWithType

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 12.0+

## Declaration

```objectivec
const DeviceCapabilityDescriptor * StandardUSB::getNextCapabilityDescriptorWithType(const BOSDescriptor *bosDescriptor, const DeviceCapabilityDescriptor *currentDescriptor, const uint8_t type);
```
