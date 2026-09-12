> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch-data](https://developer.apple.com/documentation/dispatch/dispatch-data)

# Dispatch Data (Swift)

**Framework:** Dispatch  
**Kind:** API Collection

An object that manages a memory-based data buffer and exposes it as a contiguous block of memory.

<a id="overview"></a>

## Overview

The memory buffer managed by this object may be a single contiguous block of memory, or it may consist of multiple discontiguous blocks. For the discontiguous case, the dispatch data object makes it appear as if the memory is contiguous.

## Topics

### Creating a Dispatch Data Object

- [dispatch_data_t](dispatch_data_t.md): An immutable object representing a contiguous or sparse region of memory.

## See Also

### System Event Monitoring

- [DispatchSource](dispatchsource.md): An object that coordinates the processing of specific low-level system events, such as file-system events, timers, and UNIX signals.
- [Dispatch Source](dispatch-source.md): An object that coordinates the processing of specific low-level system events, such as file-system events, timers, and UNIX signals.
- [DispatchIO](dispatchio.md): An object that manages operations on a file descriptor using either stream-based or random-access semantics.
- [DispatchData](dispatchdata.md): An object that manages a memory-based data buffer and exposes it as a contiguous block of memory.
- [DispatchDataIterator](dispatchdataiterator.md): A byte-by-byte iterator over the contents of a dispatch data object.
- [Dispatch I/O](dispatch-i-o.md): An object that manages operations on a file descriptor using either stream-based or random-access semantics.
- [DispatchSourceProtocol](dispatchsourceprotocol.md): Defines a common set of properties and methods that are shared with all dispatch source types.

# Dispatch Data (Objective-C)

**Framework:** Dispatch  
**Kind:** API Collection

An object that manages a memory-based data buffer and exposes it as a contiguous block of memory.

<a id="overview"></a>

## Overview

The memory buffer managed by this object may be a single contiguous block of memory, or it may consist of multiple discontiguous blocks. For the discontiguous case, the dispatch data object makes it appear as if the memory is contiguous.

## Topics

### Creating a Dispatch Data Object

- [dispatch_data_create](dispatch_data_create.md): Creates a new dispatch data object with the specified memory buffer.
- [dispatch_data_create_map](dispatch_data_create_map.md): Returns a new dispatch data object containing a contiguous representation of the specified object’s memory.
- [dispatch_data_create_concat](dispatch_data_create_concat.md): Returns a new dispatch data object consisting of the concatenated data from two other data objects.
- [dispatch_data_create_subrange](dispatch_data_create_subrange.md): Returns a new dispatch data object whose contents consist of a portion of another object’s memory region.
- [dispatch_data_copy_region](dispatch_data_copy_region.md): Returns a data object containing a portion of the data in another data object.
- [dispatch_data_empty](dispatch_data_empty.md): A dispatch data object representing a zero-length memory region.
- [dispatch_data_t](dispatch_data_t.md): An immutable object representing a contiguous or sparse region of memory.
- [OS_dispatch_data](os_dispatch_data.md)
- [DISPATCH_DATA_DESTRUCTOR_DEFAULT](dispatch_data_destructor_default.md): The default data destructor for dispatch objects.
- [DISPATCH_DATA_DESTRUCTOR_FREE](dispatch_data_destructor_free.md): The destructor for dispatch data objects whose memory buffer was created using the malloc family of allocation routines.

### Getting the Number of Elements

- [dispatch_data_get_size](dispatch_data_get_size.md): Returns the logical size of the memory managed by a dispatch data object

### Applying Changes to the Data

- [dispatch_data_apply](dispatch_data_apply.md): Traverses the memory of a dispatch data object and executes custom code on each region.
- [dispatch_data_applier_t](dispatch_data_applier_t.md): A block to invoke for every contiguous memory region in a data object.

## See Also

### System Event Monitoring

- [Dispatch Source](dispatch-source.md): An object that coordinates the processing of specific low-level system events, such as file-system events, timers, and UNIX signals.
- [Dispatch I/O](dispatch-i-o.md): An object that manages operations on a file descriptor using either stream-based or random-access semantics.
- [OS_dispatch_source](dispatchsourceprotocol.md): Defines a common set of properties and methods that are shared with all dispatch source types.
