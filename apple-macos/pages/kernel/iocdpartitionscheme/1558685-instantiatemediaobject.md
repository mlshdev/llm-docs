> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iocdpartitionscheme/1558685-instantiatemediaobject](https://developer.apple.com/documentation/kernel/iocdpartitionscheme/1558685-instantiatemediaobject)

# instantiateMediaObject

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOMedia * instantiateMediaObject(CDTOCDescriptor *partition, UInt64 partitionSize, UInt32 partitionBlockSize, CDSectorType partitionBlockType, CDTOC *toc);
```
