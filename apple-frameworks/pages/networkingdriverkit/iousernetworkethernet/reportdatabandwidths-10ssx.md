> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkethernet/reportdatabandwidths-10ssx](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkethernet/reportdatabandwidths-10ssx)

# ReportDataBandwidths

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Reports the input and output bandwidth between the device and your driver to the system.

## Declaration

```objectivec
virtual kern_return_t ReportDataBandwidths(uint64_t maxInputBandwidth, uint64_t maxOutputBandwidth, uint64_t effectiveInputBandwidth, uint64_t effectiveOutputBandwidth);
```

## Parameters

- `maxInputBandwidth`: The maximum theoretical data rate for receiving data with the current medium, in bits per second.
- `maxOutputBandwidth`: The maximum theoretical data rate for sending data with the current medium, in bits per second.
- `effectiveInputBandwidth`: The effective input bandwidth, in bits per second. If you specify `0`, the system sets the effective bandwidth to the same value in `maxInputBandwidth`.
- `effectiveOutputBandwidth`: The effective output bandwidth, in bits per second. If you specify `0`, the system sets the effective bandwidth to the same value in `maxOutputBandwidth`.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success, or another value if an error occurred.

## See Also

### Reporting the Connection Status

- [ReportLinkStatus](reportlinkstatus-5cxiq.md): Deprecated. Reports the status of the link between the device and your driver to the system.
- [ReportLinkQuality](reportlinkquality-4noh0.md): Deprecated. Reports the quality of the link between the device and your driver to the system.
- [IOUserNetworkLinkStatus](../iousernetworklinkstatus.md): Deprecated. A type for specifying the state of your device’s connection.
- [IOUserNetworkLinkQuality](../iousernetworklinkquality.md): Deprecated. A type for specifying the quality of your device’s connection to the host.
