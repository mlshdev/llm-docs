> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ionetworkinterface/1502906-inputpacket

# inputPacket

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual UInt32 inputPacket(mbuf_t packet, UInt32 length, IOOptionBits options, void *param);
```
