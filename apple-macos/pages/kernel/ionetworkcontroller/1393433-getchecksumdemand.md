> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ionetworkcontroller/1393433-getchecksumdemand

# getChecksumDemand

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual void getChecksumDemand(const mbuf_t packet, UInt32 checksumFamily, UInt32 *demandMask, void *param0, void *param1);
```
