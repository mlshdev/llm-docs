> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ionetworkcontroller/1393340-replaceorcopypacket

# replaceOrCopyPacket

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual mbuf_t replaceOrCopyPacket(mbuf_t *mp, UInt32 length, bool *replaced);
```
