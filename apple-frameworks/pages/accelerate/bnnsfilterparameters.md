> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsfilterparameters](https://developer.apple.com/documentation/accelerate/bnnsfilterparameters)

# BNNSFilterParameters (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains common filter parameters.

## Declaration

```swift
struct BNNSFilterParameters
```

## Topics

### Initializers

- [init(options:threadCount:allocator:deallocator:)](bnnsfilterparameters/init%28options_threadcount_allocator_deallocator_%29.md): Returns a new common filter parameters structure using the specified options.
- [init(flags:n_threads:alloc_memory:free_memory:)](bnnsfilterparameters/init%28flags_n_threads_alloc_memory_free_memory_%29.md): Returns a new common filter parameters structure.
- [init()](bnnsfilterparameters/init%28%29.md)

### Instance Properties

- [flags](bnnsfilterparameters/flags.md): A logical OR of zero or more values from BNNS flags.
- [n_threads](bnnsfilterparameters/n_threads.md): The number of worker threads to execute.
- [alloc_memory](bnnsfilterparameters/alloc_memory.md): The function called to allocate memory.
- [free_memory](bnnsfilterparameters/free_memory.md): The function called to deallocate memory.
- [allocator](bnnsfilterparameters/allocator.md)
- [deallocator](bnnsfilterparameters/deallocator.md)
- [options](bnnsfilterparameters/options.md)
- [threadCount](bnnsfilterparameters/threadcount.md)

### Filter Flags

- [BNNSFlags](bnnsflags.md): Options that control the behavior of a filter parameter.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### General filters

- [BNNSFilter](bnnsfilter.md): Deprecated. An opaque type that represents a filter.
- [Applying Filters](applying-filters.md)
- [BNNS.Layer](bnns/layer.md): Deprecated. The base class for layer objects that wrap filters and manage deinitialization.
- [BNNS.UnaryLayer](bnns/unarylayer.md): Deprecated. The base class for layers that accept a single input.
- [BNNS.BinaryLayer](bnns/binarylayer.md): Deprecated. The base class for layers that accept two inputs.
- [BNNSFilterDestroy(\_:)](bnnsfilterdestroy%28__%29.md): Deprecated. Destroys the specified filter, releasing all resources allocated for it.
- [BNNSAlloc](bnnsalloc.md): A type-alias for a user-provided memory allocation function.
- [BNNSFree](bnnsfree.md): A type-alias for a user-provided memory deallocation function.

# BNNSFilterParameters (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains common filter parameters.

## Declaration

```objectivec
typedef struct { ... } BNNSFilterParameters;
```

## Topics

### Instance Properties

- [flags](bnnsfilterparameters/flags.md): A logical OR of zero or more values from BNNS flags.
- [n_threads](bnnsfilterparameters/n_threads.md): The number of worker threads to execute.
- [alloc_memory](bnnsfilterparameters/alloc_memory.md): The function called to allocate memory.
- [free_memory](bnnsfilterparameters/free_memory.md): The function called to deallocate memory.

### Filter Flags

- [BNNSFlags](bnnsflags.md): Options that control the behavior of a filter parameter.

## See Also

### General filters

- [BNNSFilter](bnnsfilter.md): Deprecated. An opaque type that represents a filter.
- [Applying Filters](applying-filters.md)
- [BNNSFilterDestroy](bnnsfilterdestroy%28__%29.md): Deprecated. Destroys the specified filter, releasing all resources allocated for it.
- [BNNSAlloc](bnnsalloc.md): A type-alias for a user-provided memory allocation function.
- [BNNSFree](bnnsfree.md): A type-alias for a user-provided memory deallocation function.
