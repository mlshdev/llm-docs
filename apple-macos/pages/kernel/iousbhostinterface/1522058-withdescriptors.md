> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostinterface/1522058-withdescriptors](https://developer.apple.com/documentation/kernel/iousbhostinterface/1522058-withdescriptors)

# withDescriptors

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
static IOUSBHostInterface * withDescriptors(const StandardUSB::ConfigurationDescriptor *configurationDescriptor, const StandardUSB::InterfaceDescriptor *interfaceDescriptor);
```
