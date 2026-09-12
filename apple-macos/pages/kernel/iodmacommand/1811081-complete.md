> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodmacommand/1811081-complete](https://developer.apple.com/documentation/kernel/iodmacommand/1811081-complete)

# complete

**Interface language:** Objective-C

**Framework:** Kernel

Complete processing of DMA mappings after an I/O transfer is finished.

## Declaration

```objectivec
virtual IOReturn complete(
 bool invalidateCache = true,
 bool synchronize = true); 
```

## Parameters

- `invalidCache`: Invalidate the caches for the memory descriptor. Defaults to true for kNonCoherent and is ignored by the other types.
- `synchronize`: Copy any buffered data back to the target IOMemoryDescriptor. Defaults to true, if synchronize() is being used to explicitly copy data, passing false may avoid an unneeded copy.

<a id="return_value"></a>

## Return Value

kIOReturnNotReady if not prepared, kIOReturnSuccess otherwise.

<a id="overview"></a>

## Overview

This method should not be called unless a prepare was previously issued; the prepare() and complete() must occur in pairs, before and after an I/O transfer

## See Also

### Preparing the Transfer Operation

- [prepare](1811284-prepare.md): Prepare the memory for an I/O transfer.
- [prepare](1547728-prepare.md): Prepare the memory for an I/O transfer.
- [prepareWithSpecification](1811291-preparewithspecification.md): Prepare the memory for an I/O transfer with a new specification.
- [prepareWithSpecification](1547733-preparewithspecification.md): Prepare the memory for an I/O transfer with a new specification.
- [prepareWithSpecification](3516451-preparewithspecification.md): Prepare the memory for an I/O transfer with a new specification.
- [complete](1547730-complete.md): Complete processing of DMA mappings after an I/O transfer is finished.
- [synchronize](1811316-synchronize.md): Bring IOMemoryDescriptor and IODMACommand buffers into sync.
- [synchronize](1547719-synchronize.md): Bring IOMemoryDescriptor and IODMACommand buffers into sync.
