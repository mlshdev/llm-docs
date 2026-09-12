> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkethernet/reportlinkquality-4noh0](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkethernet/reportlinkquality-4noh0)

# ReportLinkQuality

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Reports the quality of the link between the device and your driver to the system.

## Declaration

```objectivec
virtual IOReturn ReportLinkQuality(IOUserNetworkLinkQuality linkQuality);
```

## Parameters

- `linkQuality`: The quality of the link between your driver and the device. For a list of possible values, see the constants in [IOUserNetworkLinkQuality](../iousernetworklinkquality.md).

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success, or another value if an error occurred.

<a id="Discussion"></a>

## Discussion

Call this method to make the system aware of changes in the quality of the link between your driver and the device.

## See Also

### Reporting the Connection Status

- [ReportLinkStatus](reportlinkstatus-5cxiq.md): Deprecated. Reports the status of the link between the device and your driver to the system.
- [ReportDataBandwidths](reportdatabandwidths-10ssx.md): Deprecated. Reports the input and output bandwidth between the device and your driver to the system.
- [IOUserNetworkLinkStatus](../iousernetworklinkstatus.md): Deprecated. A type for specifying the state of your device’s connection.
- [IOUserNetworkLinkQuality](../iousernetworklinkquality.md): Deprecated. A type for specifying the quality of your device’s connection to the host.
