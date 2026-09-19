> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioethernetcontroller/2934817-setrealtimereceivequeuefilter

# setRealtimeReceiveQueueFilter

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.13.1+ (deprecated in 10.15.4)

## Declaration

```objectivec
virtual IOReturn setRealtimeReceiveQueueFilter(uint32_t queueIndex, IOEthernetAVBIngressFilterElement *filterElements, uint32_t filterElementCount);
```
