> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservice/1532651-actionwillterminate](https://developer.apple.com/documentation/kernel/ioservice/1532651-actionwillterminate)

# actionWillTerminate

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static void actionWillTerminate(IOService *victim, IOOptionBits options, OSArray *doPhase2List, bool, void *);
```
