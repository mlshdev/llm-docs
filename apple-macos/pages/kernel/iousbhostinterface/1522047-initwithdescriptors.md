> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostinterface/1522047-initwithdescriptors](https://developer.apple.com/documentation/kernel/iousbhostinterface/1522047-initwithdescriptors)

# initWithDescriptors

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
virtual bool initWithDescriptors(const StandardUSB::ConfigurationDescriptor *configurationDescriptor, const StandardUSB::InterfaceDescriptor *interfaceDescriptor);
```
