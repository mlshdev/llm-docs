> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsfilterparameters/n_threads](https://developer.apple.com/documentation/accelerate/bnnsfilterparameters/n_threads)

# n_threads (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of worker threads to execute.

## Declaration

```swift
var n_threads: Int
```

<a id="Discussion"></a>

## Discussion

If `0`, BNNS uses the best number of threads for the current machine.

## See Also

### Instance Properties

- [flags](flags.md): A logical OR of zero or more values from BNNS flags.
- [alloc_memory](alloc_memory.md): The function called to allocate memory.
- [free_memory](free_memory.md): The function called to deallocate memory.
- [allocator](allocator.md)
- [deallocator](deallocator.md)
- [options](options.md)
- [threadCount](threadcount.md)

# n_threads (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of worker threads to execute.

## Declaration

```objectivec
size_t n_threads;
```

<a id="Discussion"></a>

## Discussion

If `0`, BNNS uses the best number of threads for the current machine.

## See Also

### Instance Properties

- [flags](flags.md): A logical OR of zero or more values from BNNS flags.
- [alloc_memory](alloc_memory.md): The function called to allocate memory.
- [free_memory](free_memory.md): The function called to deallocate memory.
