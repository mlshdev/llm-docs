> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsfilterparameters/alloc_memory](https://developer.apple.com/documentation/accelerate/bnnsfilterparameters/alloc_memory)

# alloc_memory (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The function called to allocate memory.

## Declaration

```swift
var alloc_memory: BNNSAlloc?
```

<a id="Discussion"></a>

## Discussion

Must be compatible with the [free_memory](free_memory.md) function. If `nil`, `posix_memalign(_:_:_:)` will be called.

## See Also

### Instance Properties

- [flags](flags.md): A logical OR of zero or more values from BNNS flags.
- [n_threads](n_threads.md): The number of worker threads to execute.
- [free_memory](free_memory.md): The function called to deallocate memory.
- [allocator](allocator.md)
- [deallocator](deallocator.md)
- [options](options.md)
- [threadCount](threadcount.md)

# alloc_memory (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The function called to allocate memory.

## Declaration

```objectivec
BNNSAlloc alloc_memory;
```

<a id="Discussion"></a>

## Discussion

Must be compatible with the [free_memory](free_memory.md) function. If `nil`, `posix_memalign(_:_:_:)` will be called.

## See Also

### Instance Properties

- [flags](flags.md): A logical OR of zero or more values from BNNS flags.
- [n_threads](n_threads.md): The number of worker threads to execute.
- [free_memory](free_memory.md): The function called to deallocate memory.
