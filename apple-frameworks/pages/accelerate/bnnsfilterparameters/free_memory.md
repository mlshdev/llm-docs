> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnnsfilterparameters/free_memory

# free_memory (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The function called to deallocate memory.

## Declaration

```swift
var free_memory: BNNSFree?
```

<a id="Discussion"></a>

## Discussion

Must be compatible with the [alloc_memory](alloc_memory.md) function. If `nil`, `free()` will be called.

## See Also

### Instance Properties

- [flags](flags.md): A logical OR of zero or more values from BNNS flags.
- [n_threads](n_threads.md): The number of worker threads to execute.
- [alloc_memory](alloc_memory.md): The function called to allocate memory.
- [allocator](allocator.md)
- [deallocator](deallocator.md)
- [options](options.md)
- [threadCount](threadcount.md)

# free_memory (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The function called to deallocate memory.

## Declaration

```objectivec
BNNSFree free_memory;
```

<a id="Discussion"></a>

## Discussion

Must be compatible with the [alloc_memory](alloc_memory.md) function. If `nil`, `free()` will be called.

## See Also

### Instance Properties

- [flags](flags.md): A logical OR of zero or more values from BNNS flags.
- [n_threads](n_threads.md): The number of worker threads to execute.
- [alloc_memory](alloc_memory.md): The function called to allocate memory.
