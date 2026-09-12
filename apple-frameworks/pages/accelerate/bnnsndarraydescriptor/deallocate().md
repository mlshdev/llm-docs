> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsndarraydescriptor/deallocate()](https://developer.apple.com/documentation/accelerate/bnnsndarraydescriptor/deallocate())

# deallocate()

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Deallocates the memory block previously allocated to this n-dimensional array descriptor.

## Declaration

```swift
func deallocate()
```

## See Also

### Allocating and Deallocating Memory

- [allocate(initializingFrom:shape:batchSize:)](allocate%28initializingfrom_shape_batchsize_%29.md): Returns a new n-dimensional array descriptor that’s initialized with a copy of the elements in the specified collection.
- [allocate(randomUniformUsing:range:shape:batchSize:)](allocate%28randomuniformusing_range_shape_batchsize_%29-2rorb.md): Returns a new array descriptor that’s initialized with random integer values from the continuous uniform distribution.
- [allocate(randomUniformUsing:range:shape:batchSize:)](allocate%28randomuniformusing_range_shape_batchsize_%29-761hg.md): Returns a new array descriptor that’s initialized with random floating-point values from the continuous uniform distribution.
- [allocate(randomIn:shape:batchSize:)](allocate%28randomin_shape_batchsize_%29-1697a.md): Returns a new n-dimensional array descriptor that’s initialized with random values within the specified range.
- [allocate(randomIn:shape:batchSize:)](allocate%28randomin_shape_batchsize_%29-5a2p2.md): Returns a new n-dimensional array descriptor that’s initialized with random values within the specified range.
- [allocate(randomIn:using:shape:batchSize:)](allocate%28randomin_using_shape_batchsize_%29-5kbi8.md): Returns a new array descriptor that’s initialized with random values within the specified range, using the given generator as a source for randomness.
- [allocate(randomIn:using:shape:batchSize:)](allocate%28randomin_using_shape_batchsize_%29-3w6ig.md): Returns a new array descriptor that’s initialized with random values within the specified range, using the given generator as a source for randomness.
- [allocate(repeating:shape:batchSize:)](allocate%28repeating_shape_batchsize_%29.md): Returns a new n-dimensional array descriptor that’s initialized with a single, repeated scalar value.
- [allocateUninitialized(scalarType:shape:batchSize:)](allocateuninitialized%28scalartype_shape_batchsize_%29.md): Returns a new n-dimensional array descriptor that’s allocated with uninitialized memory.
