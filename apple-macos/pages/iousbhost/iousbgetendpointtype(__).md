> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbgetendpointtype(_:)](https://developer.apple.com/documentation/iousbhost/iousbgetendpointtype(_:))

# IOUSBGetEndpointType(\_:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Function  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Obtains the type of an endpoint from an endpoint descriptor.

## Declaration

```swift
func IOUSBGetEndpointType(_ descriptor: UnsafePointer<IOUSBEndpointDescriptor>!) -> UInt8
```

## Parameters

- `descriptor`: An endpoint descriptor to parse.

<a id="return-value"></a>

## Return Value

The type found.

## See Also

### Endpoint Descriptor Parsing

- [IOUSBGetNextEndpointDescriptor(\_:\_:\_:)](iousbgetnextendpointdescriptor%28______%29.md): Obtains the next endpoint descriptor for an interface descriptor.
- [IOUSBGetEndpointDirection(\_:)](iousbgetendpointdirection%28__%29.md): Obtains the direction of an endpoint from an endpoint descriptor.
- [IOUSBGetEndpointAddress(\_:)](iousbgetendpointaddress%28__%29.md): Obtains the direction and number of an endpoint from an endpoint descriptor.
- [IOUSBGetEndpointNumber(\_:)](iousbgetendpointnumber%28__%29.md): Obtains the number of an endpoint from an endpoint descriptor.
- [IOUSBGetEndpointMaxPacketSize(\_:\_:)](iousbgetendpointmaxpacketsize%28____%29.md): Obtains the maximum packet size from an endpoint descriptor.
- [IOUSBGetEndpointIntervalEncodedMicroframes(\_:\_:)](iousbgetendpointintervalencodedmicroframes%28____%29.md): Obtains the interval of an endpoint descriptor.
- [IOUSBGetEndpointIntervalMicroframes(\_:\_:)](iousbgetendpointintervalmicroframes%28____%29.md): Obtains the interval of an endpoint descriptor.
- [IOUSBGetEndpointIntervalFrames(\_:\_:)](iousbgetendpointintervalframes%28____%29.md): Obtains the interval of an endpoint descriptor.
- [IOUSBGetEndpointMaxStreamsEncoded(\_:\_:\_:)](iousbgetendpointmaxstreamsencoded%28______%29.md): Obtains the number of streams that an endpoint supports.
- [IOUSBGetEndpointMaxStreams(\_:\_:\_:)](iousbgetendpointmaxstreams%28______%29.md): Obtains the number of supported streams.

# IOUSBGetEndpointType (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Function  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Obtains the type of an endpoint from an endpoint descriptor.

## Declaration

```objectivec
uint8_t IOUSBGetEndpointType(const IOUSBEndpointDescriptor *descriptor);
```

## Parameters

- `descriptor`: An endpoint descriptor to parse.

<a id="return-value"></a>

## Return Value

The type found.

## See Also

### Endpoint Descriptor Parsing

- [IOUSBGetNextEndpointDescriptor](iousbgetnextendpointdescriptor%28______%29.md): Obtains the next endpoint descriptor for an interface descriptor.
- [IOUSBGetEndpointDirection](iousbgetendpointdirection%28__%29.md): Obtains the direction of an endpoint from an endpoint descriptor.
- [IOUSBGetEndpointAddress](iousbgetendpointaddress%28__%29.md): Obtains the direction and number of an endpoint from an endpoint descriptor.
- [IOUSBGetEndpointNumber](iousbgetendpointnumber%28__%29.md): Obtains the number of an endpoint from an endpoint descriptor.
- [IOUSBGetEndpointMaxPacketSize](iousbgetendpointmaxpacketsize%28____%29.md): Obtains the maximum packet size from an endpoint descriptor.
- [IOUSBGetEndpointIntervalEncodedMicroframes](iousbgetendpointintervalencodedmicroframes%28____%29.md): Obtains the interval of an endpoint descriptor.
- [IOUSBGetEndpointIntervalMicroframes](iousbgetendpointintervalmicroframes%28____%29.md): Obtains the interval of an endpoint descriptor.
- [IOUSBGetEndpointIntervalFrames](iousbgetendpointintervalframes%28____%29.md): Obtains the interval of an endpoint descriptor.
- [IOUSBGetEndpointMaxStreamsEncoded](iousbgetendpointmaxstreamsencoded%28______%29.md): Obtains the number of streams that an endpoint supports.
- [IOUSBGetEndpointMaxStreams](iousbgetendpointmaxstreams%28______%29.md): Obtains the number of supported streams.
