> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/ioblitterptr

# IOBlitterPtr

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

## Declaration

```objectivec
typedef IOReturn (*IOBlitterPtr)(void *thisPointer, IOOptionBits options, IOBlitType type, IOBlitSourceType sourceType, IOBlitOperation *operation, void *source);
```
