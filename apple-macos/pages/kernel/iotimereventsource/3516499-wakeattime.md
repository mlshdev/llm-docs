> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iotimereventsource/3516499-wakeattime](https://developer.apple.com/documentation/kernel/iotimereventsource/3516499-wakeattime)

# wakeAtTime

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
virtual IOReturn wakeAtTime(uint32_t options, AbsoluteTime abstime, AbsoluteTime leeway);
```
