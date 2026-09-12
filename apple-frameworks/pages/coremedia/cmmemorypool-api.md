> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmmemorypool-api](https://developer.apple.com/documentation/coremedia/cmmemorypool-api)

# CMMemoryPool (Swift)

**Framework:** Core Media  
**Kind:** API Collection

An object that optimizes memory allocation when working with large blocks of memory.

<a id="overview"></a>

## Overview

An instance of `CMMemoryPool` is a memory allocation service that holds a pool of recently deallocated memory. Its purpose is to speed up subsequent allocations of the same size. Use this API in cases where you need to repeatedly allocate large blocks of memory, such as a video encoding app that outputs compressed data.

This object allocates memory by page. It doesn’t suballocate memory within pages, so don’t use it to allocate small blocks. For example, when calling the [CMBlockBufferCreateWithMemoryBlock(allocator:memoryBlock:blockLength:blockAllocator:customBlockSource:offsetToData:dataLength:flags:blockBufferOut:)](cmblockbuffercreatewithmemoryblock%28allocator_memoryblock_blocklength_blockallocator_customblocksource_offsettodata_datalength_flags_blockbufferout_%29.md) function, you can use it as the `blockAllocator` argument, but not as the `structureAllocator` argument (use [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) instead).

When you no longer need to allocate memory from the pool, invalidate it by calling the [CMMemoryPoolInvalidate(\_:)](cmmemorypoolinvalidate%28__%29.md) function, which tells the pool to stop holding memory for reuse.

> **Note**

>  A pool’s [CFAllocator](../corefoundation/cfallocator.md) can outlive the pool itself. After you invalidate a memory pool, its [CFAllocator](../corefoundation/cfallocator.md) instance allocates and deallocates with no pooling behavior.

A memory pool deallocates memory if it isn’t reused in `0.5` seconds, so that short-term peak usage doesn’t cause persistent bloat. You can override this period by specifying a value for [kCMMemoryPoolOption_AgeOutPeriod](kcmmemorypooloption_ageoutperiod.md). The system does this “aging out” during the pool’s [CFAllocatorAllocate(\_:\_:\_:)](../corefoundation/cfallocatorallocate%28______%29.md) and [CFAllocatorDeallocate(\_:\_:)](../corefoundation/cfallocatordeallocate%28____%29.md) calls.

## Topics

### Creating a Memory Pool

- [CMMemoryPoolCreate(options:)](cmmemorypoolcreate%28options_%29.md): Creates a memory pool.

### Managing a Memory Pool

- [CMMemoryPoolGetAllocator(\_:)](cmmemorypoolgetallocator%28__%29.md): Returns the allocator for the memory pool.
- [CMMemoryPoolFlush(\_:)](cmmemorypoolflush%28__%29.md): Deallocates all memory the pool holds.
- [CMMemoryPoolInvalidate(\_:)](cmmemorypoolinvalidate%28__%29.md): Invalidates the memory pool, which causes its allocator to stop recycling memory.

### Accessing the Type Identifier

- [CMMemoryPoolGetTypeID()](cmmemorypoolgettypeid%28%29.md): Returns the type identifier of memory pool objects.

### Data Types

- [CMMemoryPool](cmmemorypool.md): An instance that optimizes memory allocation when working with large blocks of memory.

### Errors

- [kCMMemoryPoolError_AllocationFailed](kcmmemorypoolerror_allocationfailed.md): An error that indicates the system failed to allocate an internal data structure.
- [kCMMemoryPoolError_InvalidParameter](kcmmemorypoolerror_invalidparameter.md): An error that indicates you called an API with an invalid parameter.

## See Also

### Queues

- [CMSimpleQueue](cmsimplequeue-api.md): A simple, lockless FIFO queue of elements.
- [CMBufferQueue](cmbufferqueue-api.md): A queue of timed buffers.

# CMMemoryPool (Objective-C)

**Framework:** Core Media  
**Kind:** API Collection

An object that optimizes memory allocation when working with large blocks of memory.

<a id="overview"></a>

## Overview

An instance of `CMMemoryPool` is a memory allocation service that holds a pool of recently deallocated memory. Its purpose is to speed up subsequent allocations of the same size. Use this API in cases where you need to repeatedly allocate large blocks of memory, such as a video encoding app that outputs compressed data.

This object allocates memory by page. It doesn’t suballocate memory within pages, so don’t use it to allocate small blocks. For example, when calling the [CMBlockBufferCreateWithMemoryBlock](cmblockbuffercreatewithmemoryblock%28allocator_memoryblock_blocklength_blockallocator_customblocksource_offsettodata_datalength_flags_blockbufferout_%29.md) function, you can use it as the `blockAllocator` argument, but not as the `structureAllocator` argument (use [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) instead).

When you no longer need to allocate memory from the pool, invalidate it by calling the [CMMemoryPoolInvalidate](cmmemorypoolinvalidate%28__%29.md) function, which tells the pool to stop holding memory for reuse.

> **Note**

>  A pool’s [CFAllocatorRef](../corefoundation/cfallocator.md) can outlive the pool itself. After you invalidate a memory pool, its [CFAllocatorRef](../corefoundation/cfallocator.md) instance allocates and deallocates with no pooling behavior.

A memory pool deallocates memory if it isn’t reused in `0.5` seconds, so that short-term peak usage doesn’t cause persistent bloat. You can override this period by specifying a value for [kCMMemoryPoolOption_AgeOutPeriod](kcmmemorypooloption_ageoutperiod.md). The system does this “aging out” during the pool’s [CFAllocatorAllocate](../corefoundation/cfallocatorallocate%28______%29.md) and [CFAllocatorDeallocate](../corefoundation/cfallocatordeallocate%28____%29.md) calls.

## Topics

### Creating a Memory Pool

- [CMMemoryPoolCreate](cmmemorypoolcreate%28options_%29.md): Creates a memory pool.

### Managing a Memory Pool

- [CMMemoryPoolGetAllocator](cmmemorypoolgetallocator%28__%29.md): Returns the allocator for the memory pool.
- [CMMemoryPoolFlush](cmmemorypoolflush%28__%29.md): Deallocates all memory the pool holds.
- [CMMemoryPoolInvalidate](cmmemorypoolinvalidate%28__%29.md): Invalidates the memory pool, which causes its allocator to stop recycling memory.

### Accessing the Type Identifier

- [CMMemoryPoolGetTypeID](cmmemorypoolgettypeid%28%29.md): Returns the type identifier of memory pool objects.

### Data Types

- [CMMemoryPoolRef](cmmemorypool.md): An instance that optimizes memory allocation when working with large blocks of memory.

### Errors

- [kCMMemoryPoolError_AllocationFailed](kcmmemorypoolerror_allocationfailed.md): An error that indicates the system failed to allocate an internal data structure.
- [kCMMemoryPoolError_InvalidParameter](kcmmemorypoolerror_invalidparameter.md): An error that indicates you called an API with an invalid parameter.

## See Also

### Queues

- [CMSimpleQueue](cmsimplequeue-api.md): A simple, lockless FIFO queue of elements.
- [CMBufferQueue](cmbufferqueue-api.md): A queue of timed buffers.
