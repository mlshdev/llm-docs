> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iopmpowerstate/1386981-timetolower

# timeToLower

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

Describes time required to enter next lower state from this one (microseconds). Unused; drivers may specify 0.

## Declaration

```objectivec
unsigned long timeToLower;
```
