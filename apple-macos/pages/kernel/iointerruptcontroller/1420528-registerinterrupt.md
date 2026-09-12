> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iointerruptcontroller/1420528-registerinterrupt](https://developer.apple.com/documentation/kernel/iointerruptcontroller/1420528-registerinterrupt)

# registerInterrupt

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn registerInterrupt(IOService *nub, int source, void *target, IOInterruptHandler handler, void *refCon);
```
