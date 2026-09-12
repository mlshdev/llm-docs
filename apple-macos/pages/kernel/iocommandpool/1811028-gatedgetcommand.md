> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iocommandpool/1811028-gatedgetcommand](https://developer.apple.com/documentation/kernel/iocommandpool/1811028-gatedgetcommand)

# gatedGetCommand

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual IOReturn gatedGetCommand(
 IOCommand **vCommand,
 boolvBlock); 
```

## Parameters

- `vCommand`: A pointer to a pointer to an IOCommand object where the returned command will be stored.
- `vBlock`: A bool that indicates whether to block the request until a command becomes available.

<a id="return_value"></a>

## Return Value

Returns kIOReturnNoResources if no command is available and the client doesn't wish to block until one does become available. kIOReturnSuccess if the vCommand argument is valid.

<a id="overview"></a>

## Overview

The gatedGetCommand method is used to serialize the extraction of a command from the pool behind a command gate, runAction-ed by getCommand.

## See Also

### Miscellaneous

- [commandPool](1811017-commandpool.md): Should never be used, obsolete. See IOCommandPool::withWorkLoop.
- [gatedReturnCommand](1811045-gatedreturncommand.md)
- [getCommand](1811062-getcommand.md)
- [init](1811075-init.md): Should never be used, obsolete. See initWithWorkLoop.
- [initWithWorkLoop](1811086-initwithworkloop.md): Primary initializer for an IOCommandPool object.
- [returnCommand](1811102-returncommand.md)
- [withWorkLoop(IOService \*, IOWorkLoop \*, UInt32)](1811120-withworkloop.md): Should never be used, obsolete. See IOCommandPool::withWorkLoop.
- [withWorkLoop(IOWorkLoop \*)](1811136-withworkloop.md): Primary factory method for the IOCommandPool class
