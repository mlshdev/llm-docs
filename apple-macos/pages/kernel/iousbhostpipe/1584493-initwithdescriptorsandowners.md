> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostpipe/1584493-initwithdescriptorsandowners](https://developer.apple.com/documentation/kernel/iousbhostpipe/1584493-initwithdescriptorsandowners)

# initWithDescriptorsAndOwners

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
virtual bool initWithDescriptorsAndOwners(const StandardUSB::EndpointDescriptor *descriptor, const StandardUSB::SuperSpeedEndpointCompanionDescriptor *companionDescriptor, AppleUSBHostController *controller, IOUSBHostDevice *device, IOUSBHostInterface *interface, UInt8 speed, tUSBHostDeviceAddress address);
```
