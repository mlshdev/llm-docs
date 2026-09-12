> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkethernet/bpftapinputpacket](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkethernet/bpftapinputpacket)

# bpfTapInputPacket

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

## Declaration

```objectivec
virtual void bpfTapInputPacket(uint32_t dataLinkType, IOUserNetworkPacket *packet, void *header, size_t headerLength);
```
