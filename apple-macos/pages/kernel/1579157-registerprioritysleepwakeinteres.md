> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1579157-registerprioritysleepwakeinteres

# registerPrioritySleepWakeInterest

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.1+

## Declaration

```objectivec
IONotifier * registerPrioritySleepWakeInterest(IOServiceInterestHandler handler, void *self, void *ref);
```
