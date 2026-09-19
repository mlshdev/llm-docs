> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usbdriverkit/iousbgetplatformcapabilitydescriptorwithuuid

# IOUSBGetPlatformCapabilityDescriptorWithUUID

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Function  
**Availability:** DriverKit 19.0+

## Declaration

```objectivec
const IOUSBPlatformCapabilityDescriptor *IOUSBGetPlatformCapabilityDescriptorWithUUID(const IOUSBBOSDescriptor *bosDescriptor, uuid_t uuid);
```

## See Also

### Functions

- [IOUSBGetEndpointSynchronizationType](iousbgetendpointsynchronizationtype.md)
- [IOUSBGetEndpointUsageType](iousbgetendpointusagetype.md)
