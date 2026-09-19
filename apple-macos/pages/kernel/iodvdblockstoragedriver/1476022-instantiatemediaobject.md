> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iodvdblockstoragedriver/1476022-instantiatemediaobject

# instantiateMediaObject

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOMedia * instantiateMediaObject(UInt64 base, UInt64 byteSize, UInt32 blockSize, char *mediaName);
```
