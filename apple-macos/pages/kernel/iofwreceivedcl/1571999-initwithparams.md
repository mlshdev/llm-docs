> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofwreceivedcl/1571999-initwithparams

# initWithParams

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool initWithParams(OSSet *updateSet, UInt8 headerBytes, unsigned int rangesCount, IOVirtualRange ranges[]);
```
