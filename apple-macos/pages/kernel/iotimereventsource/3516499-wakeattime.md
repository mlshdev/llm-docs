> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iotimereventsource/3516499-wakeattime

# wakeAtTime

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
virtual IOReturn wakeAtTime(uint32_t options, AbsoluteTime abstime, AbsoluteTime leeway);
```
