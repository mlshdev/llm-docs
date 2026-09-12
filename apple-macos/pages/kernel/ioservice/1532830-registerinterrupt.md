> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservice/1532830-registerinterrupt](https://developer.apple.com/documentation/kernel/ioservice/1532830-registerinterrupt)

# registerInterrupt

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn registerInterrupt(int source, OSObject *target, IOInterruptAction handler, void *refCon);
```
