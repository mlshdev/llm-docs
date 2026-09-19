> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iographicsacceleratorinterface/1502403-getblitter

# GetBlitter

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

## Declaration

```objectivec
IOReturn (*GetBlitter)(void *thisPointer, IOOptionBits options, IOBlitType type, IOBlitSourceType sourceType, IOBlitterPtr *blitter);
```
