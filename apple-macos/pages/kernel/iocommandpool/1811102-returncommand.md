> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iocommandpool/1811102-returncommand](https://developer.apple.com/documentation/kernel/iocommandpool/1811102-returncommand)

# returnCommand

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual void returnCommand(
 IOCommand *commmand); 
```

## Parameters

- `commmand`: The command to place in the pool.

<a id="overview"></a>

## Overview

The returnCommand method is used to place an object of type IOCommand into the pool, whether it be the first time, or the 1000th time.

## See Also

### Miscellaneous

- [commandPool](1811017-commandpool.md): Should never be used, obsolete. See IOCommandPool::withWorkLoop.
- [gatedGetCommand](1811028-gatedgetcommand.md)
- [gatedReturnCommand](1811045-gatedreturncommand.md)
- [getCommand](1811062-getcommand.md)
- [init](1811075-init.md): Should never be used, obsolete. See initWithWorkLoop.
- [initWithWorkLoop](1811086-initwithworkloop.md): Primary initializer for an IOCommandPool object.
- [withWorkLoop(IOService \*, IOWorkLoop \*, UInt32)](1811120-withworkloop.md): Should never be used, obsolete. See IOCommandPool::withWorkLoop.
- [withWorkLoop(IOWorkLoop \*)](1811136-withworkloop.md): Primary factory method for the IOCommandPool class
