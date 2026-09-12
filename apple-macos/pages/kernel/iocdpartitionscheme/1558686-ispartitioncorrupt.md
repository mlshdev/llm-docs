> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iocdpartitionscheme/1558686-ispartitioncorrupt](https://developer.apple.com/documentation/kernel/iocdpartitionscheme/1558686-ispartitioncorrupt)

# isPartitionCorrupt

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool isPartitionCorrupt(CDTOCDescriptor *partition, UInt64 partitionSize, UInt32 partitionBlockSize, CDSectorType partitionBlockType, CDTOC *toc);
```
