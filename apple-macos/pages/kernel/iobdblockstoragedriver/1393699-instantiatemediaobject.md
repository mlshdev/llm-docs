> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iobdblockstoragedriver/1393699-instantiatemediaobject

# instantiateMediaObject

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOMedia * instantiateMediaObject(UInt64 base, UInt64 byteSize, UInt32 blockSize, char *mediaName);
```
