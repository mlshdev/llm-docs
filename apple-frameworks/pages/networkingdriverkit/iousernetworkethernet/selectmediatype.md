> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkethernet/selectmediatype](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkethernet/selectmediatype)

# SelectMediaType

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Selects the media type to use when communicating with the network stack.

## Declaration

```objectivec
virtual kern_return_t SelectMediaType(IOUserNetworkMediaType mediaType);
```

## Parameters

- `mediaType`: The media type to use for network communication. This type must be one that you declared previous when calling the [ReportAvailableMediaTypes](reportavailablemediatypes.md) method.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success, or another value if an error occurred.

<a id="Discussion"></a>

## Discussion

Override this method and use it to configure your driver for the specified media type. In your implementation, validate the requested media type and make any adjustments as needed. For example, if the `mediaType` parameter is [kIOUserNetworkMediaEthernetAuto](../kiousernetworkmediaethernetauto.md), you might choose an explicit media type instead. After validating the type, configure your driver for that type and call the [ReportLinkStatus](reportlinkstatus-5cxiq.md) method to report the driver’s status back to the system.

## See Also

### Declaring the Supported Media Types

- [ReportAvailableMediaTypes](reportavailablemediatypes.md): Deprecated. Tells the system what types of networking media your driver supports.
- [IOUserNetworkMediaType](../iousernetworkmediatype.md): Deprecated. A structure describing a specific Ethernet type and configuration that your driver supports.
