> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbgetendpointsynchronizationtype](https://developer.apple.com/documentation/usbdriverkit/iousbgetendpointsynchronizationtype)

# IOUSBGetEndpointSynchronizationType

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Function  
**Availability:** DriverKit 19.0+

## Declaration

```objectivec
uint8_t IOUSBGetEndpointSynchronizationType(const IOUSBEndpointDescriptor *descriptor);
```

## Parameters

- `descriptor`: The descriptor to parse

<a id="return-value"></a>

## Return Value

tEndpointSynchronizationType indicating the type found.

<a id="discussion"></a>

## Discussion

Extract the synchronization type of an  endpoint from an endpoint descriptor

This method parses an endpoint descriptor to determine its synchronization type. Only Isochronous endpoints have non-zero synchronization types

## See Also

### Functions

- [IOUSBGetEndpointUsageType](iousbgetendpointusagetype.md)
- [IOUSBGetPlatformCapabilityDescriptorWithUUID](iousbgetplatformcapabilitydescriptorwithuuid.md)
