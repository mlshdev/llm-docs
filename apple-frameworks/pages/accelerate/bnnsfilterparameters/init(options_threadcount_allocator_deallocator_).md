> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsfilterparameters/init(options:threadcount:allocator:deallocator:)](https://developer.apple.com/documentation/accelerate/bnnsfilterparameters/init(options:threadcount:allocator:deallocator:))

# init(options:threadCount:allocator:deallocator:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a new common filter parameters structure using the specified options.

## Declaration

```swift
init(options: BNNSFlags, threadCount: Int, allocator: BNNSAlloc?, deallocator: BNNSFree?)
```

## Parameters

- `options`: The options that control the behavior of a filter parameter.
- `threadCount`: The maximum number of threads that the filter executes. Set to `0` to specify that the filter automatically selects the number of threads. Set to `1` to specify that the filter operates on a single thread.
- `allocator`: The function the filter calls to allocate memory.
- `deallocator`: The function the filter calls to deallocate memory.

## See Also

### Initializers

- [init(flags:n_threads:alloc_memory:free_memory:)](init%28flags_n_threads_alloc_memory_free_memory_%29.md): Returns a new common filter parameters structure.
- [init()](init%28%29.md)
