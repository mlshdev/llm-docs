> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopmpowerstate/1386989-settleuptime](https://developer.apple.com/documentation/kernel/iopmpowerstate/1386989-settleuptime)

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
