> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iographicsacceleratorinterface/1502378-unlocksurface](https://developer.apple.com/documentation/iokit/iographicsacceleratorinterface/1502378-unlocksurface)

# UnlockSurface

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

## Declaration

```objectivec
IOReturn (*UnlockSurface)(void *thisPointer, IOOptionBits options, IOBlitSurface *surface, IOOptionBits *swapFlags);
```
