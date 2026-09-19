> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ionetworkcontroller/1393431-setlinkstatus

# setLinkStatus

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool setLinkStatus(UInt32 status, const IONetworkMedium *activeMedium, UInt64 speed, OSData *data);
```
