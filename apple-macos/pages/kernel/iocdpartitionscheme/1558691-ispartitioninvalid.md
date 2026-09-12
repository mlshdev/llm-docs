> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iocdpartitionscheme/1558691-ispartitioninvalid](https://developer.apple.com/documentation/kernel/iocdpartitionscheme/1558691-ispartitioninvalid)

# isPartitionInvalid

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool isPartitionInvalid(CDTOCDescriptor *partition, UInt64 partitionSize, UInt32 partitionBlockSize, CDSectorType partitionBlockType, CDTOC *toc);
```
