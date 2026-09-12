> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/ioblitterptr](https://developer.apple.com/documentation/iokit/ioblitterptr)

# IOBlitterPtr

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

## Declaration

```objectivec
typedef IOReturn (*IOBlitterPtr)(void *thisPointer, IOOptionBits options, IOBlitType type, IOBlitSourceType sourceType, IOBlitOperation *operation, void *source);
```
