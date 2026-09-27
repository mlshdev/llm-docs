> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3794175-standardusb

# StandardUSB::getNextEndpointDescriptor

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 12.0+

## Declaration

```objectivec
const EndpointDescriptor * StandardUSB::getNextEndpointDescriptor(const ConfigurationDescriptor *configurationDescriptor, const InterfaceDescriptor *interfaceDescriptor, const Descriptor *currentDescriptor);
```
