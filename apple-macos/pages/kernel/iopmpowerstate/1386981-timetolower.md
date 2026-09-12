> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopmpowerstate/1386981-timetolower](https://developer.apple.com/documentation/kernel/iopmpowerstate/1386981-timetolower)

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
