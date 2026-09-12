> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iocommandpool/1811062-getcommand](https://developer.apple.com/documentation/kernel/iocommandpool/1811062-getcommand)

# getCommand

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual IOCommand *getCommand(
 bool blockForCommand = true); 
```

## Parameters

- `blockForCommand`: If the caller would like to have its thread slept until a command is available, it should pass true, else false.

<a id="return_value"></a>

## Return Value

If the caller passes true in blockForCommand, getCommand guarantees that the result will be a pointer to an IOCommand object from the pool. If the caller passes false, s/he is responsible for checking whether a non-NULL pointer was returned.

<a id="overview"></a>

## Overview

The getCommand method is used to get a pointer to an object of type IOCommand from the pool.

## See Also

### Miscellaneous

- [commandPool](1811017-commandpool.md): Should never be used, obsolete. See IOCommandPool::withWorkLoop.
- [gatedGetCommand](1811028-gatedgetcommand.md)
- [gatedReturnCommand](1811045-gatedreturncommand.md)
- [init](1811075-init.md): Should never be used, obsolete. See initWithWorkLoop.
- [initWithWorkLoop](1811086-initwithworkloop.md): Primary initializer for an IOCommandPool object.
- [returnCommand](1811102-returncommand.md)
- [withWorkLoop(IOService \*, IOWorkLoop \*, UInt32)](1811120-withworkloop.md): Should never be used, obsolete. See IOCommandPool::withWorkLoop.
- [withWorkLoop(IOWorkLoop \*)](1811136-withworkloop.md): Primary factory method for the IOCommandPool class
