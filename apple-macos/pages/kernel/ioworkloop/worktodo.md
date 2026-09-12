> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioworkloop/worktodo](https://developer.apple.com/documentation/kernel/ioworkloop/worktodo)

# workToDo

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
volatile bool workToDo;
```

<a id="overview"></a>

## Overview

Used to to indicate that an interrupt has fired and needs to be processed.

## See Also

### Instance Variables

- [workToDoLock](worktodolock.md)
- [workThread](workthread.md)
- [reserved](reserved.md)
- [loopRestart](looprestart.md)
- [gateLock](gatelock.md)
- [eventChain](eventchain.md)
- [controlG](controlg.md)
