> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsrandomfilluniformint(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsrandomfilluniformint(_:_:_:_:))

# BNNSRandomFillUniformInt(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Fills the specified tensor with random integer values from the continuous uniform distribution within a range.

## Declaration

```swift
func BNNSRandomFillUniformInt(_ generator: BNNSRandomGenerator?, _ desc: UnsafeMutablePointer<BNNSNDArrayDescriptor>, _ a: Int64, _ b: Int64) -> Int32
```

## Parameters

- `generator`: The random number generator.
- `desc`: The descriptor of the destination.
- `a`: The lower bound of distribution.
- `b`: The upper bound of distribution.

<a id="Discussion"></a>

## Discussion

Use this function to fill the an array descriptor with uniformly distributed random values.

If you use the same generator on multiple threads, note that this function serializes the generator through an internal lock. To eliminate this contention, use different generators for each thread.

If either bound is outside the range of the representable values for the output descriptor’s data type, the function clips the value to the closest representable value.

The following code populates a descriptor with random integer values:

```swift
let data = UnsafeMutableBufferPointer<Int16>.allocate(capacity: 8)
var descriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                       layout: BNNSDataLayoutVector,
                                       size: (10, 0, 0, 0, 0, 0, 0, 0),
                                       stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                       data: data.baseAddress!,
                                       data_type: BNNSDataType.int16,
                                       table_data: nil,
                                       table_data_type: BNNSDataType.int16,
                                       data_scale: 1, data_bias: 0)

guard let randomNumberGenerator = BNNSCreateRandomGenerator(BNNSRandomGeneratorMethodAES_CTR,
                                                            nil) else {
    return
}

BNNSRandomFillUniformInt(randomNumberGenerator,
                         &descriptor,
                         -10,
                         10)

print(Array(data))

data.deallocate()
BNNSDestroyRandomGenerator(randomNumberGenerator)
```

## See Also

### Random number generation

- [BNNS.RandomGenerator](bnns/randomgenerator.md): A random number generator.
- [BNNSCreateRandomGenerator(\_:\_:)](bnnscreaterandomgenerator%28____%29.md): Returns a new random number generator using an internally generated random seed.
- [BNNSCreateRandomGeneratorWithSeed(\_:\_:\_:)](bnnscreaterandomgeneratorwithseed%28______%29.md): Returns a new random number generator using the specified seed.
- [BNNSRandomGeneratorMethod](bnnsrandomgeneratormethod.md): Constants that describe random number generation methods.
- [BNNSRandomGenerator](bnnsrandomgenerator.md): A pointer to a random number generator object.
- [BNNSRandomFillUniformFloat(\_:\_:\_:\_:)](bnnsrandomfilluniformfloat%28________%29.md): Fills the specified tensor with random floating-point values from the continuous uniform distribution within a range.
- [BNNSRandomFillNormalFloat(\_:\_:\_:\_:)](bnnsrandomfillnormalfloat%28________%29.md): Fills the specified tensor with random floating-point values mapped to a normal distribution.
- [BNNSRandomFillCategoricalFloat(\_:\_:\_:\_:)](bnnsrandomfillcategoricalfloat%28________%29.md): Fills the specified tensor with random values from the categorical distributions with the given event probabilities.
- [BNNSRandomGeneratorStateSize(\_:)](bnnsrandomgeneratorstatesize%28__%29.md): Returns the state size, in bytes, of a random number generator.
- [BNNSRandomGeneratorGetState(\_:\_:\_:)](bnnsrandomgeneratorgetstate%28______%29.md): Returns the state of a random number generator.
- [BNNSRandomGeneratorSetState(\_:\_:\_:)](bnnsrandomgeneratorsetstate%28______%29.md): Sets the state of a random number generator.
- [BNNSDestroyRandomGenerator(\_:)](bnnsdestroyrandomgenerator%28__%29.md): Destroys a random number generator.

# BNNSRandomFillUniformInt (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Fills the specified tensor with random integer values from the continuous uniform distribution within a range.

## Declaration

```objectivec
int BNNSRandomFillUniformInt(BNNSRandomGenerator generator, BNNSNDArrayDescriptor *desc, int64_t a, int64_t b);
```

## Parameters

- `generator`: The random number generator.
- `desc`: The descriptor of the destination.
- `a`: The lower bound of distribution.
- `b`: The upper bound of distribution.

<a id="Discussion"></a>

## Discussion

Use this function to fill the an array descriptor with uniformly distributed random values.

If you use the same generator on multiple threads, note that this function serializes the generator through an internal lock. To eliminate this contention, use different generators for each thread.

If either bound is outside the range of the representable values for the output descriptor’s data type, the function clips the value to the closest representable value.

The following code populates a descriptor with random integer values:

```swift
let data = UnsafeMutableBufferPointer<Int16>.allocate(capacity: 8)
var descriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                       layout: BNNSDataLayoutVector,
                                       size: (10, 0, 0, 0, 0, 0, 0, 0),
                                       stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                       data: data.baseAddress!,
                                       data_type: BNNSDataType.int16,
                                       table_data: nil,
                                       table_data_type: BNNSDataType.int16,
                                       data_scale: 1, data_bias: 0)

guard let randomNumberGenerator = BNNSCreateRandomGenerator(BNNSRandomGeneratorMethodAES_CTR,
                                                            nil) else {
    return
}

BNNSRandomFillUniformInt(randomNumberGenerator,
                         &descriptor,
                         -10,
                         10)

print(Array(data))

data.deallocate()
BNNSDestroyRandomGenerator(randomNumberGenerator)
```

## See Also

### Random number generation

- [BNNSCreateRandomGenerator](bnnscreaterandomgenerator%28____%29.md): Returns a new random number generator using an internally generated random seed.
- [BNNSCreateRandomGeneratorWithSeed](bnnscreaterandomgeneratorwithseed%28______%29.md): Returns a new random number generator using the specified seed.
- [BNNSRandomGeneratorMethod](bnnsrandomgeneratormethod.md): Constants that describe random number generation methods.
- [BNNSRandomGenerator](bnnsrandomgenerator.md): A pointer to a random number generator object.
- [BNNSRandomFillUniformFloat](bnnsrandomfilluniformfloat%28________%29.md): Fills the specified tensor with random floating-point values from the continuous uniform distribution within a range.
- [BNNSRandomFillNormalFloat](bnnsrandomfillnormalfloat%28________%29.md): Fills the specified tensor with random floating-point values mapped to a normal distribution.
- [BNNSRandomFillCategoricalFloat](bnnsrandomfillcategoricalfloat%28________%29.md): Fills the specified tensor with random values from the categorical distributions with the given event probabilities.
- [BNNSRandomGeneratorStateSize](bnnsrandomgeneratorstatesize%28__%29.md): Returns the state size, in bytes, of a random number generator.
- [BNNSRandomGeneratorGetState](bnnsrandomgeneratorgetstate%28______%29.md): Returns the state of a random number generator.
- [BNNSRandomGeneratorSetState](bnnsrandomgeneratorsetstate%28______%29.md): Sets the state of a random number generator.
- [BNNSDestroyRandomGenerator](bnnsdestroyrandomgenerator%28__%29.md): Destroys a random number generator.
