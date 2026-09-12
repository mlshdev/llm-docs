> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iocommand/fcommandchain](https://developer.apple.com/documentation/kernel/iocommand/fcommandchain)

# fCommandChain

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
queue_chain_t fCommandChain;
```

<a id="overview"></a>

## Overview

This variable is used by the current 'owner' to queue the command. During the life cycle of a command it moves through a series of queues. This is the queue pointer for it. Only valid while 'ownership' is clear. For instance a IOCommandPool uses this pointer to maintain its list of free commands. May be manipulated using the kern/queue.h macros
