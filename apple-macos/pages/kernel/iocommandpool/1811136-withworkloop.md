> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iocommandpool/1811136-withworkloop](https://developer.apple.com/documentation/kernel/iocommandpool/1811136-withworkloop)

# withWorkLoop(IOWorkLoop \*)

**Interface language:** Objective-C

**Framework:** Kernel

Primary factory method for the IOCommandPool class

## Declaration

```objectivec
static IOCommandPool *withWorkLoop(
 IOWorkLoop *inWorkLoop); 
```

## Parameters

- `inWorkLoop`: The workloop that this command pool should synchronize with.

<a id="return_value"></a>

## Return Value

Returns a pointer to an instance of IOCommandPool if successful, otherwise NULL.

<a id="overview"></a>

## Overview

The withWorkLoop method is what is known as a factory method. It creates a new instance of an IOCommandPool and returns a pointer to that object.

## See Also

### Miscellaneous

- [commandPool](1811017-commandpool.md): Should never be used, obsolete. See IOCommandPool::withWorkLoop.
- [gatedGetCommand](1811028-gatedgetcommand.md)
- [gatedReturnCommand](1811045-gatedreturncommand.md)
- [getCommand](1811062-getcommand.md)
- [init](1811075-init.md): Should never be used, obsolete. See initWithWorkLoop.
- [initWithWorkLoop](1811086-initwithworkloop.md): Primary initializer for an IOCommandPool object.
- [returnCommand](1811102-returncommand.md)
- [withWorkLoop(IOService \*, IOWorkLoop \*, UInt32)](1811120-withworkloop.md): Should never be used, obsolete. See IOCommandPool::withWorkLoop.
