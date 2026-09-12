> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostpipe/1584512-adjustpipe](https://developer.apple.com/documentation/kernel/iousbhostpipe/1584512-adjustpipe)

# adjustPipe

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
virtual IOReturn adjustPipe(const StandardUSB::EndpointDescriptor *endpointDescriptor, const StandardUSB::SuperSpeedEndpointCompanionDescriptor *companionDescriptor);
```
