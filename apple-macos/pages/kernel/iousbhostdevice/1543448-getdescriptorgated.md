> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iousbhostdevice/1543448-getdescriptorgated

# getDescriptorGated

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
virtual IOReturn getDescriptorGated(uint8_t type, uint16_t & length, tDescriptorSelectors & selectors, const StandardUSB::Descriptor *& result);
```
