> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iousbhostdevice/1543407-createpipe

# createPipe

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
virtual IOUSBHostPipe * createPipe(const StandardUSB::EndpointDescriptor *descriptor, const StandardUSB::SuperSpeedEndpointCompanionDescriptor *companionDescriptor, IOUSBHostInterface *interface);
```
