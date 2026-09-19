> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkingdriverkit/iousernetworkethernet/bpftapinputpacket

# bpfTapInputPacket

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

## Declaration

```objectivec
virtual void bpfTapInputPacket(uint32_t dataLinkType, IOUserNetworkPacket *packet, void *header, size_t headerLength);
```
