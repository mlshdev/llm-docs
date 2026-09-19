> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioethernetcontroller/2934790-setrealtimereceivedestinationmac

# setRealtimeReceiveDestinationMACList

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.13.1+ (deprecated in 10.15.4)

## Declaration

```objectivec
virtual IOReturn setRealtimeReceiveDestinationMACList(uint32_t queueIndex, IOEthernetAddress *addresses, int addressCount);
```
