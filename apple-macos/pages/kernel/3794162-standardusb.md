> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3794162-standardusb

# StandardUSB::getEndpointIntervalMicroframes

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 12.0+

## Declaration

```objectivec
uint32_t StandardUSB::getEndpointIntervalMicroframes(uint32_t usbDeviceSpeed, const EndpointDescriptor *descriptor);
```
