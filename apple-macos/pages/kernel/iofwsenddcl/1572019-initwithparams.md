> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofwsenddcl/1572019-initwithparams

# initWithParams

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool initWithParams(OSSet *updateSet, unsigned int rangesCount, IOVirtualRange ranges[], UInt8 sync, UInt8 tag);
```
