> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopmpowerstate/1386973-timetoattain](https://developer.apple.com/documentation/kernel/iopmpowerstate/1386973-timetoattain)

# timeToAttain

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

Describes time required to enter this state from next lower state (in microseconds). Unused; drivers may specify 0.

## Declaration

```objectivec
unsigned long timeToAttain;
```
