> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnscreaterandomgeneratorwithseed(_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnscreaterandomgeneratorwithseed(_:_:_:))

# BNNSCreateRandomGeneratorWithSeed(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a new random number generator using the specified seed.

## Declaration

```swift
func BNNSCreateRandomGeneratorWithSeed(_ method: BNNSRandomGeneratorMethod, _ seed: UInt64, _ filter_params: UnsafePointer<BNNSFilterParameters>?) -> BNNSRandomGenerator?
```

## Parameters

- `method`: The method that the generator uses to generate random numbers.
- `seed`: The random seed that this function uses to initialize the generator.
- `filter_params`: The filter runtime parameters.

<a id="return-value"></a>

## Return Value

A pointer to the random generator.

## See Also

### Random number generation

- [BNNS.RandomGenerator](bnns/randomgenerator.md): A random number generator.
- [BNNSCreateRandomGenerator(\_:\_:)](bnnscreaterandomgenerator%28____%29.md): Returns a new random number generator using an internally generated random seed.
- [BNNSRandomGeneratorMethod](bnnsrandomgeneratormethod.md): Constants that describe random number generation methods.
- [BNNSRandomGenerator](bnnsrandomgenerator.md): A pointer to a random number generator object.
- [BNNSRandomFillUniformInt(\_:\_:\_:\_:)](bnnsrandomfilluniformint%28________%29.md): Fills the specified tensor with random integer values from the continuous uniform distribution within a range.
- [BNNSRandomFillUniformFloat(\_:\_:\_:\_:)](bnnsrandomfilluniformfloat%28________%29.md): Fills the specified tensor with random floating-point values from the continuous uniform distribution within a range.
- [BNNSRandomFillNormalFloat(\_:\_:\_:\_:)](bnnsrandomfillnormalfloat%28________%29.md): Fills the specified tensor with random floating-point values mapped to a normal distribution.
- [BNNSRandomFillCategoricalFloat(\_:\_:\_:\_:)](bnnsrandomfillcategoricalfloat%28________%29.md): Fills the specified tensor with random values from the categorical distributions with the given event probabilities.
- [BNNSRandomGeneratorStateSize(\_:)](bnnsrandomgeneratorstatesize%28__%29.md): Returns the state size, in bytes, of a random number generator.
- [BNNSRandomGeneratorGetState(\_:\_:\_:)](bnnsrandomgeneratorgetstate%28______%29.md): Returns the state of a random number generator.
- [BNNSRandomGeneratorSetState(\_:\_:\_:)](bnnsrandomgeneratorsetstate%28______%29.md): Sets the state of a random number generator.
- [BNNSDestroyRandomGenerator(\_:)](bnnsdestroyrandomgenerator%28__%29.md): Destroys a random number generator.

# BNNSCreateRandomGeneratorWithSeed (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a new random number generator using the specified seed.

## Declaration

```objectivec
BNNSRandomGeneratorBNNSCreateRandomGeneratorWithSeed(BNNSRandomGeneratorMethod method, uint64_t seed, const BNNSFilterParameters *filter_params);
```

## Parameters

- `method`: The method that the generator uses to generate random numbers.
- `seed`: The random seed that this function uses to initialize the generator.
- `filter_params`: The filter runtime parameters.

<a id="return-value"></a>

## Return Value

A pointer to the random generator.

## See Also

### Random number generation

- [BNNSCreateRandomGenerator](bnnscreaterandomgenerator%28____%29.md): Returns a new random number generator using an internally generated random seed.
- [BNNSRandomGeneratorMethod](bnnsrandomgeneratormethod.md): Constants that describe random number generation methods.
- [BNNSRandomGenerator](bnnsrandomgenerator.md): A pointer to a random number generator object.
- [BNNSRandomFillUniformInt](bnnsrandomfilluniformint%28________%29.md): Fills the specified tensor with random integer values from the continuous uniform distribution within a range.
- [BNNSRandomFillUniformFloat](bnnsrandomfilluniformfloat%28________%29.md): Fills the specified tensor with random floating-point values from the continuous uniform distribution within a range.
- [BNNSRandomFillNormalFloat](bnnsrandomfillnormalfloat%28________%29.md): Fills the specified tensor with random floating-point values mapped to a normal distribution.
- [BNNSRandomFillCategoricalFloat](bnnsrandomfillcategoricalfloat%28________%29.md): Fills the specified tensor with random values from the categorical distributions with the given event probabilities.
- [BNNSRandomGeneratorStateSize](bnnsrandomgeneratorstatesize%28__%29.md): Returns the state size, in bytes, of a random number generator.
- [BNNSRandomGeneratorGetState](bnnsrandomgeneratorgetstate%28______%29.md): Returns the state of a random number generator.
- [BNNSRandomGeneratorSetState](bnnsrandomgeneratorsetstate%28______%29.md): Sets the state of a random number generator.
- [BNNSDestroyRandomGenerator](bnnsdestroyrandomgenerator%28__%29.md): Destroys a random number generator.
