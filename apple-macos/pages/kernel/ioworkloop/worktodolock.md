> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioworkloop/worktodolock

# workToDoLock

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
IOSimpleLock *workToDoLock;
```

<a id="overview"></a>

## Overview

The spin lock that is used to guard the 'workToDo' variable.

## See Also

### Instance Variables

- [workToDo](worktodo.md)
- [workThread](workthread.md)
- [reserved](reserved.md)
- [loopRestart](looprestart.md)
- [gateLock](gatelock.md)
- [eventChain](eventchain.md)
- [controlG](controlg.md)
