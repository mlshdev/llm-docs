> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iocommandpool/1811017-commandpool](https://developer.apple.com/documentation/kernel/iocommandpool/1811017-commandpool)

# commandPool

**Interface language:** Objective-C

**Framework:** Kernel

Should never be used, obsolete. See IOCommandPool::withWorkLoop.

## Declaration

```objectivec
static IOCommandPool *commandPool(
 IOService *inOwner, 
 IOWorkLoop *inWorkLoop, 
 UInt32 inSize = kIOCommandPoolDefaultSize); 
```

## See Also

### Miscellaneous

- [gatedGetCommand](1811028-gatedgetcommand.md)
- [gatedReturnCommand](1811045-gatedreturncommand.md)
- [getCommand](1811062-getcommand.md)
- [init](1811075-init.md): Should never be used, obsolete. See initWithWorkLoop.
- [initWithWorkLoop](1811086-initwithworkloop.md): Primary initializer for an IOCommandPool object.
- [returnCommand](1811102-returncommand.md)
- [withWorkLoop(IOService \*, IOWorkLoop \*, UInt32)](1811120-withworkloop.md): Should never be used, obsolete. See IOCommandPool::withWorkLoop.
- [withWorkLoop(IOWorkLoop \*)](1811136-withworkloop.md): Primary factory method for the IOCommandPool class
