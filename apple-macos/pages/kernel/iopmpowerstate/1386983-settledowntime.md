> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iopmpowerstate/1386983-settledowntime

# settleDownTime

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

Settle time required after entering next lower state from this state (microseconds). Unused; drivers may specify 0.

## Declaration

```objectivec
unsigned long settleDownTime;
```
