> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iousbhostinterface/1522058-withdescriptors

# withDescriptors

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
static IOUSBHostInterface * withDescriptors(const StandardUSB::ConfigurationDescriptor *configurationDescriptor, const StandardUSB::InterfaceDescriptor *interfaceDescriptor);
```
