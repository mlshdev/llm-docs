> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsfilterparameters/init(flags:n_threads:alloc_memory:free_memory:)](https://developer.apple.com/documentation/accelerate/bnnsfilterparameters/init(flags:n_threads:alloc_memory:free_memory:))

# init(flags:n_threads:alloc_memory:free_memory:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a new common filter parameters structure.

## Declaration

```swift
init(flags: UInt32, n_threads: Int, alloc_memory: BNNSAlloc?, free_memory: BNNSFree?)
```

## Parameters

- `flags`: A logical OR of zero or more values from BNNS flags.
- `n_threads`: The maximum number of threads that the filter executes. Set to `0` to specify that the filter automatically selects the number of threads. Set to `1` to specify that the filter operates on a single thread.
- `alloc_memory`: The function the filter calls to allocate memory.
- `free_memory`: The function the filter calls to deallocate memory.

<a id="return-value"></a>

## Return Value

A new common filter parameters structure.

<a id="Discussion"></a>

## Discussion

If `alloc_memory` is null, BNNS uses `posix_memalign(_:_:_:)` for memory allocation. If free_memory is null, BNNS uses `free()` for memory deallocation.

## See Also

### Initializers

- [init(options:threadCount:allocator:deallocator:)](init%28options_threadcount_allocator_deallocator_%29.md): Returns a new common filter parameters structure using the specified options.
- [init()](init%28%29.md)
