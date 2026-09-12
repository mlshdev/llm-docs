> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworklinkquality](https://developer.apple.com/documentation/networkingdriverkit/iousernetworklinkquality)

# IOUserNetworkLinkQuality

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit

A type for specifying the quality of your device’s connection to the host.

## Declaration

```objectivec
typedef uint32_t IOUserNetworkLinkQuality;
```

## Topics

### Specifying the Link Quality

- [Link Quality Constants](link-quality-constants.md): Constants describing the quality of the link between the device and your driver.

## See Also

### Reporting the Connection Status

- [ReportLinkStatus](iousernetworkethernet/reportlinkstatus-5cxiq.md): Deprecated. Reports the status of the link between the device and your driver to the system.
- [ReportLinkQuality](iousernetworkethernet/reportlinkquality-4noh0.md): Deprecated. Reports the quality of the link between the device and your driver to the system.
- [ReportDataBandwidths](iousernetworkethernet/reportdatabandwidths-10ssx.md): Deprecated. Reports the input and output bandwidth between the device and your driver to the system.
- [IOUserNetworkLinkStatus](iousernetworklinkstatus.md): Deprecated. A type for specifying the state of your device’s connection.
