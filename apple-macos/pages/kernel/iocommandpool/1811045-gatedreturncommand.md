> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iocommandpool/1811045-gatedreturncommand](https://developer.apple.com/documentation/kernel/iocommandpool/1811045-gatedreturncommand)

# gatedReturnCommand

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual IOReturn gatedReturnCommand(
 IOCommand *vCommand); 
```

## Parameters

- `vCommand`: A pointer to the IOCommand object to be returned to the pool.

<a id="return_value"></a>

## Return Value

Always returns kIOReturnSuccess if the vCommand argument is valid.

<a id="overview"></a>

## Overview

The gatedReturnCommand method is used to serialize the return of a command to the pool behind a command gate, runAction-ed by returnCommand.

## See Also

### Miscellaneous

- [commandPool](1811017-commandpool.md): Should never be used, obsolete. See IOCommandPool::withWorkLoop.
- [gatedGetCommand](1811028-gatedgetcommand.md)
- [getCommand](1811062-getcommand.md)
- [init](1811075-init.md): Should never be used, obsolete. See initWithWorkLoop.
- [initWithWorkLoop](1811086-initwithworkloop.md): Primary initializer for an IOCommandPool object.
- [returnCommand](1811102-returncommand.md)
- [withWorkLoop(IOService \*, IOWorkLoop \*, UInt32)](1811120-withworkloop.md): Should never be used, obsolete. See IOCommandPool::withWorkLoop.
- [withWorkLoop(IOWorkLoop \*)](1811136-withworkloop.md): Primary factory method for the IOCommandPool class
