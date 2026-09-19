> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkingdriverkit/iousernetworkpacket/getrxchecksuminfo

# getRxChecksumInfo

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

## Declaration

```objectivec
virtual IOReturn getRxChecksumInfo(IOUserNetworkPacketRxChecksumFlags *flags, uint16_t *value) const;
```
