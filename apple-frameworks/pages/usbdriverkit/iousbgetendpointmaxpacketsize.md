> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbgetendpointmaxpacketsize](https://developer.apple.com/documentation/usbdriverkit/iousbgetendpointmaxpacketsize)

# IOUSBGetEndpointMaxPacketSize

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Function  
**Availability:** DriverKit 19.0+

Extracts the maximum packet size from an endpoint descriptor.

## Declaration

```objectivec
uint16_t IOUSBGetEndpointMaxPacketSize(uint32_t usbDeviceSpeed, const IOUSBEndpointDescriptor *descriptor);
```

## Parameters

- `usbDeviceSpeed`: The operational speed of the device.
- `descriptor`: The descriptor to parse.

<a id="return-value"></a>

## Return Value

The maximum packet size in bytes.

<a id="Discussion"></a>

## Discussion

This method parses an endpoint descriptor to determine its maximum packet size, which doesn’t take into account mult or burst factors.

## See Also

### Endpoint Descriptors

- [IOUSBGetNextEndpointDescriptor](iousbgetnextendpointdescriptor.md): Finds the next endpoint descriptor associated with an interface descriptor.
- [IOUSBGetEndpointAddress](iousbgetendpointaddress.md): Extracts the direction and number of an endpoint from an endpoint descriptor.
- [IOUSBGetEndpointBurstSize](iousbgetendpointburstsize.md): Extracts the burst size from endpoint descriptors.
- [IOUSBGetEndpointDirection](iousbgetendpointdirection.md): Extracts the direction of an endpoint from an endpoint descriptor.
- [IOUSBGetEndpointIntervalEncodedMicroframes](iousbgetendpointintervalencodedmicroframes.md): Extracts the interval of an endpoint descriptor.
- [IOUSBGetEndpointIntervalFrames](iousbgetendpointintervalframes.md): Extracts the interval of an endpoint descriptor.
- [IOUSBGetEndpointIntervalMicroframes](iousbgetendpointintervalmicroframes.md): Extracts the interval of an endpoint descriptor.
- [IOUSBGetEndpointMaxStreams](iousbgetendpointmaxstreams.md): Extracts the number of streams an endpoint supports.
- [IOUSBGetEndpointMaxStreamsEncoded](iousbgetendpointmaxstreamsencoded.md): Extracts the number of streams an endpoint supports.
- [IOUSBGetEndpointMult](iousbgetendpointmult.md): Extracts the mult count from endpoint descriptors.
- [IOUSBGetEndpointNumber](iousbgetendpointnumber.md): Extracts the number of an endpoint from an endpoint descriptor.
- [IOUSBGetEndpointType](iousbgetendpointtype.md): Extracts the type of an endpoint from an endpoint descriptor.
