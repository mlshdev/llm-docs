> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkethernet/reportlinkstatus-5cxiq](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkethernet/reportlinkstatus-5cxiq)

# ReportLinkStatus

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Reports the status of the link between the device and your driver to the system.

## Declaration

```objectivec
virtual kern_return_t ReportLinkStatus(IOUserNetworkLinkStatus linkStatus, IOUserNetworkMediaType activeMediaType);
```

## Parameters

- `linkStatus`: The state of the connection to your device. For a list of possible values, see the constants in [IOUserNetworkLinkStatus](../iousernetworklinkstatus.md).
- `activeMediaType`: The media type that your device currently supports. The media type must be one you previously reported using the [ReportAvailableMediaTypes](reportavailablemediatypes.md) method.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success, or another value if an error occurred.

<a id="Discussion"></a>

## Discussion

Call this method when you want to notify the network about any changes to the link status or active media type for your device.

## See Also

### Reporting the Connection Status

- [ReportLinkQuality](reportlinkquality-4noh0.md): Deprecated. Reports the quality of the link between the device and your driver to the system.
- [ReportDataBandwidths](reportdatabandwidths-10ssx.md): Deprecated. Reports the input and output bandwidth between the device and your driver to the system.
- [IOUserNetworkLinkStatus](../iousernetworklinkstatus.md): Deprecated. A type for specifying the state of your device’s connection.
- [IOUserNetworkLinkQuality](../iousernetworklinkquality.md): Deprecated. A type for specifying the quality of your device’s connection to the host.
