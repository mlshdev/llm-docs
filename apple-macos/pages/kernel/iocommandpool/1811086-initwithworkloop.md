> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iocommandpool/1811086-initwithworkloop](https://developer.apple.com/documentation/kernel/iocommandpool/1811086-initwithworkloop)

# initWithWorkLoop

**Interface language:** Objective-C

**Framework:** Kernel

Primary initializer for an IOCommandPool object.

## Declaration

```objectivec
virtual bool initWithWorkLoop(
 IOWorkLoop *inWorkLoop); 
```

## Parameters

- `inWorkLoop`: The workloop that this command pool should synchronize with.

<a id="return_value"></a>

## Return Value

Returns true if command pool was successfully initialized.

<a id="overview"></a>

## Overview

Primary initializer for an IOCommandPool. Should probably use IOCommandPool::withWorkLoop() as it is easier to use.

## See Also

### Miscellaneous

- [commandPool](1811017-commandpool.md): Should never be used, obsolete. See IOCommandPool::withWorkLoop.
- [gatedGetCommand](1811028-gatedgetcommand.md)
- [gatedReturnCommand](1811045-gatedreturncommand.md)
- [getCommand](1811062-getcommand.md)
- [init](1811075-init.md): Should never be used, obsolete. See initWithWorkLoop.
- [returnCommand](1811102-returncommand.md)
- [withWorkLoop(IOService \*, IOWorkLoop \*, UInt32)](1811120-withworkloop.md): Should never be used, obsolete. See IOCommandPool::withWorkLoop.
- [withWorkLoop(IOWorkLoop \*)](1811136-withworkloop.md): Primary factory method for the IOCommandPool class
