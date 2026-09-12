> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/3794171-standardusb](https://developer.apple.com/documentation/kernel/3794171-standardusb)

# StandardUSB::getNextCapabilityDescriptor

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 12.0+

## Declaration

```objectivec
const DeviceCapabilityDescriptor * StandardUSB::getNextCapabilityDescriptor(const BOSDescriptor *bosDescriptor, const DeviceCapabilityDescriptor *currentDescriptor);
```
