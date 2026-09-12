> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostdevice/1543411-createpipegated](https://developer.apple.com/documentation/kernel/iousbhostdevice/1543411-createpipegated)

# createPipeGated

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
virtual IOReturn createPipeGated(const StandardUSB::EndpointDescriptor *descriptor, const StandardUSB::SuperSpeedEndpointCompanionDescriptor *companionDescriptor, IOUSBHostInterface *interface, IOUSBHostPipe *& result);
```
