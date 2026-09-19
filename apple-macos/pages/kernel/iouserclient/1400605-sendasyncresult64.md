> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iouserclient/1400605-sendasyncresult64

# sendAsyncResult64

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static IOReturn sendAsyncResult64(OSAsyncReference64 reference, IOReturn result, io_user_reference_t args[], UInt32 numArgs);
```
