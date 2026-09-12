> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/1539826-memory-allocation-options](https://developer.apple.com/documentation/foundation/1539826-memory-allocation-options)

# Memory Allocation Options (Swift)

**Framework:** Foundation  
**Kind:** API Collection

Constants used to control behavior when allocating or reallocating collectible memory.

<a id="overview"></a>

## Overview

These constants are used as components in a bitfield to specify the behavior of [NSAllocateCollectable](nsallocatecollectable.md) and [NSReallocateCollectable](nsreallocatecollectable.md).

## Topics

### Constants

- [NSScannedOption](nsscannedoption.md): Specifies allocation of scanned memory.
- [NSCollectorDisabledOption](nscollectordisabledoption.md): Specifies that the block is retained, and therefore ineligible for collection. Specifying this option is equivalent to invoking [disableCollectorForPointer:](nsgarbagecollector/disablecollectorforpointer_.md) with the returned block as the argument.

# Memory Allocation Options (Objective-C)

**Framework:** Foundation  
**Kind:** API Collection

Constants used to control behavior when allocating or reallocating collectible memory.

<a id="overview"></a>

## Overview

These constants are used as components in a bitfield to specify the behavior of [NSAllocateCollectable](nsallocatecollectable.md) and [NSReallocateCollectable](nsreallocatecollectable.md).

## Topics

### Constants

- [NSScannedOption](nsscannedoption.md): Specifies allocation of scanned memory.
- [NSCollectorDisabledOption](nscollectordisabledoption.md): Specifies that the block is retained, and therefore ineligible for collection. Specifying this option is equivalent to invoking [disableCollectorForPointer:](nsgarbagecollector/disablecollectorforpointer_.md) with the returned block as the argument.

## See Also

### Legacy

- [NSGarbageCollector](nsgarbagecollector.md): Deprecated. A convenient interface to the garbage collection system.
- [NSAllocateCollectable](nsallocatecollectable.md): Deprecated. Allocates collectable memory.
- [NSReallocateCollectable](nsreallocatecollectable.md): Deprecated. Reallocates collectable memory.
- [NSMakeCollectable](nsmakecollectable.md): Deprecated. Makes a newly allocated Core Foundation object eligible for collection.
