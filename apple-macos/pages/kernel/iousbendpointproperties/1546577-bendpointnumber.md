> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbendpointproperties/1546577-bendpointnumber](https://developer.apple.com/documentation/kernel/iousbendpointproperties/1546577-bendpointnumber)

# bEndpointNumber

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The number of the endpoint.

## Declaration

```objectivec
UInt8 bEndpointNumber;
```

## See Also

### Getting the Properties

- [bVersion](1546121-bversion.md): The version of the structure.
- [bAlternateSetting](1546104-balternatesetting.md): The alternative setting for obtaining endpoint and pipe properties.
- [bDirection](1546544-bdirection.md): The direction of the endpoint.
- [bTransferType](1546085-btransfertype.md): The transfer type of the endpoint.
- [bUsageType](1545903-busagetype.md): The usage type of the endpoint.
- [bSyncType](1546228-bsynctype.md): The type for isochronous endpoints.
- [bInterval](1546398-binterval.md): The interval field from the standard endpoint descriptor.
- [wMaxPacketSize](1546100-wmaxpacketsize.md): The maximum packet size.
- [bMaxBurst](1546213-bmaxburst.md): The maximum number of packets the endpoint can send or receive for SuperSpeed endpoints.
- [bMaxStreams](1546220-bmaxstreams.md): The maximum number of streams this endpoint supports for SuperSpeed bulk endpoints.
- [bMult](1546456-bmult.md): The mult value for isochronous endpoints.
- [wBytesPerInterval](1546060-wbytesperinterval.md): The number of bytes per interval.
