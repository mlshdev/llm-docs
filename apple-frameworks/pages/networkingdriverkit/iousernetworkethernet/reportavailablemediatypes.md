> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkethernet/reportavailablemediatypes](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkethernet/reportavailablemediatypes)

# ReportAvailableMediaTypes

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Tells the system what types of networking media your driver supports.

## Declaration

```objectivec
virtual kern_return_t ReportAvailableMediaTypes(const IOUserNetworkMediaType *mediaTypes, uint32_t count);
```

## Parameters

- `mediaTypes`: An array of [IOUserNetworkMediaType](../iousernetworkmediatype.md) types. For each type, combine a [Media Type Constants](../media-type-constants.md) constant with one or more [Configuration Options](../configuration-options.md) constants to indicate the configurations you support.
- `count`: The number of items in the `mediaTypes` array.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success, or another value if an error occurred.

<a id="Discussion"></a>

## Discussion

Apple recommends that you include [kIOUserNetworkMediaEthernetAuto](../kiousernetworkmediaethernetauto.md) as one of the media types you support. That media type lets the system configure the networking stack automatically on your behalf, based on the other media types you specify.

## See Also

### Declaring the Supported Media Types

- [SelectMediaType](selectmediatype.md): Deprecated. Selects the media type to use when communicating with the network stack.
- [IOUserNetworkMediaType](../iousernetworkmediatype.md): Deprecated. A structure describing a specific Ethernet type and configuration that your driver supports.
