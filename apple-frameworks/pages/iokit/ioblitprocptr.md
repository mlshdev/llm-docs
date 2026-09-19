> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/ioblitprocptr

# IOBlitProcPtr

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

## Declaration

```objectivec
typedef IOReturn (*IOBlitProcPtr)(void *thisPointer, IOOptionBits options, IOBlitType type, IOBlitSourceDestType sourceDestType, IOBlitOperation *operation, void *source, void *destination, IOBlitCompletionToken *completionToken);
```
