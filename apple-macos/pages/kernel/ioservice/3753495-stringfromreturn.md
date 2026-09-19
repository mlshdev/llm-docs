> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioservice/3753495-stringfromreturn

# StringFromReturn

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

## Declaration

```objectivec
kern_return_t StringFromReturn(IOReturn retval, OSString **str, OSDispatchMethod supermethod);
```
