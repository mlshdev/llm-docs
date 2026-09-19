> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iouserclient/1400599-sendasyncresult

# sendAsyncResult

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static IOReturn sendAsyncResult(OSAsyncReference reference, IOReturn result, void *args[], UInt32 numArgs);
```
