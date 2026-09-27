> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3794182-standardusb

# StandardUSB::stringDescriptorToUTF8

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 12.0+

## Declaration

```objectivec
IOReturn StandardUSB::stringDescriptorToUTF8(const StringDescriptor *stringDescriptor, char *stringBuffer, size_t & length);
```
