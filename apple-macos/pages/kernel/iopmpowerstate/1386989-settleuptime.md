> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iopmpowerstate/1386989-settleuptime

# settleUpTime

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

Describes settle time required after entering this state from next lower state (microseconds). Unused; drivers may specify 0.

## Declaration

```objectivec
unsigned long settleUpTime;
```
