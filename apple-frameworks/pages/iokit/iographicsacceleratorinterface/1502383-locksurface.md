> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iographicsacceleratorinterface/1502383-locksurface](https://developer.apple.com/documentation/iokit/iographicsacceleratorinterface/1502383-locksurface)

# LockSurface

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

## Declaration

```objectivec
IOReturn (*LockSurface)(void *thisPointer, IOOptionBits options, IOBlitSurface *surface, vm_address_t *address);
```
