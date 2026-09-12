> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostpipe/1584495-withdescriptorsandowners](https://developer.apple.com/documentation/kernel/iousbhostpipe/1584495-withdescriptorsandowners)

# withDescriptorsAndOwners

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
static IOUSBHostPipe * withDescriptorsAndOwners(const StandardUSB::EndpointDescriptor *descriptor, const StandardUSB::SuperSpeedEndpointCompanionDescriptor *companionDescriptor, AppleUSBHostController *controller, IOUSBHostDevice *device, IOUSBHostInterface *interface, UInt8 speed, tUSBHostDeviceAddress address);
```
