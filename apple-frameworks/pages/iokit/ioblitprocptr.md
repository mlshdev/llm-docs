> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/ioblitprocptr](https://developer.apple.com/documentation/iokit/ioblitprocptr)

# IOBlitProcPtr

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

## Declaration

```objectivec
typedef IOReturn (*IOBlitProcPtr)(void *thisPointer, IOOptionBits options, IOBlitType type, IOBlitSourceDestType sourceDestType, IOBlitOperation *operation, void *source, void *destination, IOBlitCompletionToken *completionToken);
```
