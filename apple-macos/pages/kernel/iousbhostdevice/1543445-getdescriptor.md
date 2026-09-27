> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iousbhostdevice/1543445-getdescriptor

# getDescriptor

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
virtual const StandardUSB::Descriptor * getDescriptor(uint8_t type, uint16_t & length, uint8_t index, uint16_t languageID, tDeviceRequestType requestType, tDeviceRequestRecipient requestRecipient);
```
