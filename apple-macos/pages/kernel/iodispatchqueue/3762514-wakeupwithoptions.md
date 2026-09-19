> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iodispatchqueue/3762514-wakeupwithoptions

# WakeupWithOptions

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+ · macOS 12.0+

## Declaration

```objectivec
kern_return_t WakeupWithOptions(void *event, uint64_t options);
```
