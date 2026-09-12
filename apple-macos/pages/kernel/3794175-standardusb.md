> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/3794175-standardusb](https://developer.apple.com/documentation/kernel/3794175-standardusb)

# StandardUSB::getNextEndpointDescriptor

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 12.0+

## Declaration

```objectivec
const EndpointDescriptor * StandardUSB::getNextEndpointDescriptor(const ConfigurationDescriptor *configurationDescriptor, const InterfaceDescriptor *interfaceDescriptor, const Descriptor *currentDescriptor);
```
