> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkmediatype](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkmediatype)

# IOUserNetworkMediaType

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit

A structure describing a specific Ethernet type and configuration that your driver supports.

## Declaration

```objectivec
typedef uint32_t IOUserNetworkMediaType;
```

<a id="Discussion"></a>

## Discussion

To specify a media type, combine a media type constant with zero or more configuration options. For example, if your driver supports 10-BaseT Ethernet in full duplex mode, use the following code to configure that media type.

```objc
IOUserNetworkMediaType media_type = kIOUserNetworkMediaEthernet10BaseT | kIOUserNetworkMediaOptionFullDuplex;
```

## Topics

### Configuring the Media Type Information

- [Media Type Constants](media-type-constants.md): The types of networking media your driver supports.
- [Configuration Options](configuration-options.md): The configuration options that you support for a specific network media type.

## See Also

### Declaring the Supported Media Types

- [ReportAvailableMediaTypes](iousernetworkethernet/reportavailablemediatypes.md): Deprecated. Tells the system what types of networking media your driver supports.
- [SelectMediaType](iousernetworkethernet/selectmediatype.md): Deprecated. Selects the media type to use when communicating with the network stack.
