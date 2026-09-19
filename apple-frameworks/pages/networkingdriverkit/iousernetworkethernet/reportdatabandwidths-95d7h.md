> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkingdriverkit/iousernetworkethernet/reportdatabandwidths-95d7h

# reportDataBandwidths

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

## Declaration

```objectivec
virtual IOReturn reportDataBandwidths(uint64_t maxInputBandwidth, uint64_t maxOutputBandwidth, uint64_t effectiveInputBandwidth, uint64_t effectiveOutputBandwidth);
```
