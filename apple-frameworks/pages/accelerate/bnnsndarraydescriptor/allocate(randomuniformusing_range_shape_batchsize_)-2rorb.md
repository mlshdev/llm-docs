> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsndarraydescriptor/allocate(randomuniformusing:range:shape:batchsize:)-2rorb](https://developer.apple.com/documentation/accelerate/bnnsndarraydescriptor/allocate(randomuniformusing:range:shape:batchsize:)-2rorb)

# allocate(randomUniformUsing:range:shape:batchSize:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Returns a new array descriptor that’s initialized with random integer values from the continuous uniform distribution.

## Declaration

```swift
static func allocate<Scalar>(randomUniformUsing: BNNS.RandomGenerator, range: ClosedRange<Scalar>, shape: BNNS.Shape, batchSize: Int = 1) -> BNNSNDArrayDescriptor? where Scalar : BNNSScalar, Scalar : BinaryFloatingPoint
```

## Parameters

- `randomUniformUsing`: The random number generator that provides random values.
- `range`: The range of random values.
- `shape`: The shape of the n-dimensional array descriptor.
- `batchSize`: The number of batches of data.

<a id="Discussion"></a>

## Discussion

Use this function to create a new array descriptor that’s initialized with random values [BNNS.RandomGenerator](../bnns/randomgenerator.md) generates.

If you use the same generator on multiple threads, note that this function serializes the generator through an internal lock. To eliminate this contention, use different generators for each thread.

The following code creates a 16-element 1D tensor that contains random 16-bit integer values between `-10` and `10`:

```swift
guard
    let randomGenerator = BNNS.RandomGenerator(
        method: .aesCtr,
        seed: 1234),
    let descriptor = BNNSNDArrayDescriptor.allocate(
        randomUniformUsing: randomGenerator,
        range: Int16(-10)...Int16(10),
        shape: [16]) else {
        return
    }

// Prints 16 random values.
print(descriptor.makeArray(of: Int16.self)!)

descriptor.deallocate()
```

## See Also

### Allocating and Deallocating Memory

- [allocate(initializingFrom:shape:batchSize:)](allocate%28initializingfrom_shape_batchsize_%29.md): Returns a new n-dimensional array descriptor that’s initialized with a copy of the elements in the specified collection.
- [allocate(randomUniformUsing:range:shape:batchSize:)](allocate%28randomuniformusing_range_shape_batchsize_%29-761hg.md): Returns a new array descriptor that’s initialized with random floating-point values from the continuous uniform distribution.
- [allocate(randomIn:shape:batchSize:)](allocate%28randomin_shape_batchsize_%29-1697a.md): Returns a new n-dimensional array descriptor that’s initialized with random values within the specified range.
- [allocate(randomIn:shape:batchSize:)](allocate%28randomin_shape_batchsize_%29-5a2p2.md): Returns a new n-dimensional array descriptor that’s initialized with random values within the specified range.
- [allocate(randomIn:using:shape:batchSize:)](allocate%28randomin_using_shape_batchsize_%29-5kbi8.md): Returns a new array descriptor that’s initialized with random values within the specified range, using the given generator as a source for randomness.
- [allocate(randomIn:using:shape:batchSize:)](allocate%28randomin_using_shape_batchsize_%29-3w6ig.md): Returns a new array descriptor that’s initialized with random values within the specified range, using the given generator as a source for randomness.
- [allocate(repeating:shape:batchSize:)](allocate%28repeating_shape_batchsize_%29.md): Returns a new n-dimensional array descriptor that’s initialized with a single, repeated scalar value.
- [allocateUninitialized(scalarType:shape:batchSize:)](allocateuninitialized%28scalartype_shape_batchsize_%29.md): Returns a new n-dimensional array descriptor that’s allocated with uninitialized memory.
- [deallocate()](deallocate%28%29.md): Deallocates the memory block previously allocated to this n-dimensional array descriptor.
