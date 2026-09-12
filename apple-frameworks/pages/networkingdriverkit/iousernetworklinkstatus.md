> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworklinkstatus](https://developer.apple.com/documentation/networkingdriverkit/iousernetworklinkstatus)

# IOUserNetworkLinkStatus

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit

A type for specifying the state of your device’s connection.

## Declaration

```objectivec
typedef uint32_t IOUserNetworkLinkStatus;
```

## Topics

### Specifying the Link Status

- [Link Status Constants](link-status-constants.md): Constants describing the state of the link between the device and your driver.

## See Also

### Reporting the Connection Status

- [ReportLinkStatus](iousernetworkethernet/reportlinkstatus-5cxiq.md): Deprecated. Reports the status of the link between the device and your driver to the system.
- [ReportLinkQuality](iousernetworkethernet/reportlinkquality-4noh0.md): Deprecated. Reports the quality of the link between the device and your driver to the system.
- [ReportDataBandwidths](iousernetworkethernet/reportdatabandwidths-10ssx.md): Deprecated. Reports the input and output bandwidth between the device and your driver to the system.
- [IOUserNetworkLinkQuality](iousernetworklinkquality.md): Deprecated. A type for specifying the quality of your device’s connection to the host.
