> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkingdriverkit/iousernetworkpacket/gettxchecksuminfo

# getTxChecksumInfo

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

## Declaration

```objectivec
virtual IOReturn getTxChecksumInfo(IOUserNetworkPacketTxChecksumFlags *flags, uint16_t *start, uint16_t *stuff) const;
```
