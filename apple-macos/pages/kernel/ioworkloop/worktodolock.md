> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioworkloop/worktodolock](https://developer.apple.com/documentation/kernel/ioworkloop/worktodolock)

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
