> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iographicsacceleratorinterface/1502378-unlocksurface

# UnlockSurface

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

## Declaration

```objectivec
IOReturn (*UnlockSurface)(void *thisPointer, IOOptionBits options, IOBlitSurface *surface, IOOptionBits *swapFlags);
```
