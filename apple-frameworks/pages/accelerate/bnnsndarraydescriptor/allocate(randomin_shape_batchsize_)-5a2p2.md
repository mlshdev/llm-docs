> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsndarraydescriptor/allocate(randomin:shape:batchsize:)-5a2p2](https://developer.apple.com/documentation/accelerate/bnnsndarraydescriptor/allocate(randomin:shape:batchsize:)-5a2p2)

# allocate(randomIn:shape:batchSize:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Returns a new n-dimensional array descriptor that’s initialized with random values within the specified range.

## Declaration

```swift
static func allocate<Scalar>(randomIn range: ClosedRange<Scalar>, shape: BNNS.Shape, batchSize: Int = 1) -> BNNSNDArrayDescriptor where Scalar : BNNSScalar, Scalar : FixedWidthInteger
```

## Parameters

- `range`: The range in which to create random values.
- `shape`: The shape of n-dimensional array descriptor.
- `batchSize`: The number of batches of data.

## See Also

### Allocating and Deallocating Memory

- [allocate(initializingFrom:shape:batchSize:)](allocate%28initializingfrom_shape_batchsize_%29.md): Returns a new n-dimensional array descriptor that’s initialized with a copy of the elements in the specified collection.
- [allocate(randomUniformUsing:range:shape:batchSize:)](allocate%28randomuniformusing_range_shape_batchsize_%29-2rorb.md): Returns a new array descriptor that’s initialized with random integer values from the continuous uniform distribution.
- [allocate(randomUniformUsing:range:shape:batchSize:)](allocate%28randomuniformusing_range_shape_batchsize_%29-761hg.md): Returns a new array descriptor that’s initialized with random floating-point values from the continuous uniform distribution.
- [allocate(randomIn:shape:batchSize:)](allocate%28randomin_shape_batchsize_%29-1697a.md): Returns a new n-dimensional array descriptor that’s initialized with random values within the specified range.
- [allocate(randomIn:using:shape:batchSize:)](allocate%28randomin_using_shape_batchsize_%29-5kbi8.md): Returns a new array descriptor that’s initialized with random values within the specified range, using the given generator as a source for randomness.
- [allocate(randomIn:using:shape:batchSize:)](allocate%28randomin_using_shape_batchsize_%29-3w6ig.md): Returns a new array descriptor that’s initialized with random values within the specified range, using the given generator as a source for randomness.
- [allocate(repeating:shape:batchSize:)](allocate%28repeating_shape_batchsize_%29.md): Returns a new n-dimensional array descriptor that’s initialized with a single, repeated scalar value.
- [allocateUninitialized(scalarType:shape:batchSize:)](allocateuninitialized%28scalartype_shape_batchsize_%29.md): Returns a new n-dimensional array descriptor that’s allocated with uninitialized memory.
- [deallocate()](deallocate%28%29.md): Deallocates the memory block previously allocated to this n-dimensional array descriptor.
