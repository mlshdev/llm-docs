> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbgetendpointusagetype](https://developer.apple.com/documentation/usbdriverkit/iousbgetendpointusagetype)

# IOUSBGetEndpointUsageType

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Function  
**Availability:** DriverKit 19.0+

## Declaration

```objectivec
uint8_t IOUSBGetEndpointUsageType(const IOUSBEndpointDescriptor *descriptor);
```

## Parameters

- `descriptor`: The descriptor to parse

<a id="return-value"></a>

## Return Value

tEndpointUsageType indicating the type found.

<a id="discussion"></a>

## Discussion

Extract the usage type of an endpoint from an endpoint descriptor

This method parses an endpoint descriptor to determine its usage type. Only periodic endpoints have usage types

## See Also

### Functions

- [IOUSBGetEndpointSynchronizationType](iousbgetendpointsynchronizationtype.md)
- [IOUSBGetPlatformCapabilityDescriptorWithUUID](iousbgetplatformcapabilitydescriptorwithuuid.md)
