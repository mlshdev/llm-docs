> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/randomgenerator](https://developer.apple.com/documentation/accelerate/bnns/randomgenerator)

# BNNS.RandomGenerator

**Framework:** Accelerate  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

A random number generator.

## Declaration

```swift
class RandomGenerator
```

## Topics

### Creating a Random Number Generator

- [init(method:seed:filterParameters:)](randomgenerator/init%28method_seed_filterparameters_%29.md): Returns a new random number generator.
- [BNNS.RandomGeneratorMethod](randomgeneratormethod.md): Constants that describe random number generation methods.

### Saving and Restoring a Randon Generator’s State

- [state](randomgenerator/state.md): The state of the random number generator.
- [BNNS.RandomGeneratorState](randomgeneratorstate.md): An opaque object that contains the state of a random number generator.

## See Also

### Related Documentation

- [allocate(randomIn:using:shape:batchSize:)](../bnnsndarraydescriptor/allocate%28randomin_using_shape_batchsize_%29-3w6ig.md): Returns a new array descriptor that’s initialized with random values within the specified range, using the given generator as a source for randomness.
- [allocate(randomIn:using:shape:batchSize:)](../bnnsndarraydescriptor/allocate%28randomin_using_shape_batchsize_%29-5kbi8.md): Returns a new array descriptor that’s initialized with random values within the specified range, using the given generator as a source for randomness.

### Random number generation

- [BNNSCreateRandomGenerator(\_:\_:)](../bnnscreaterandomgenerator%28____%29.md): Returns a new random number generator using an internally generated random seed.
- [BNNSCreateRandomGeneratorWithSeed(\_:\_:\_:)](../bnnscreaterandomgeneratorwithseed%28______%29.md): Returns a new random number generator using the specified seed.
- [BNNSRandomGeneratorMethod](../bnnsrandomgeneratormethod.md): Constants that describe random number generation methods.
- [BNNSRandomGenerator](../bnnsrandomgenerator.md): A pointer to a random number generator object.
- [BNNSRandomFillUniformInt(\_:\_:\_:\_:)](../bnnsrandomfilluniformint%28________%29.md): Fills the specified tensor with random integer values from the continuous uniform distribution within a range.
- [BNNSRandomFillUniformFloat(\_:\_:\_:\_:)](../bnnsrandomfilluniformfloat%28________%29.md): Fills the specified tensor with random floating-point values from the continuous uniform distribution within a range.
- [BNNSRandomFillNormalFloat(\_:\_:\_:\_:)](../bnnsrandomfillnormalfloat%28________%29.md): Fills the specified tensor with random floating-point values mapped to a normal distribution.
- [BNNSRandomFillCategoricalFloat(\_:\_:\_:\_:)](../bnnsrandomfillcategoricalfloat%28________%29.md): Fills the specified tensor with random values from the categorical distributions with the given event probabilities.
- [BNNSRandomGeneratorStateSize(\_:)](../bnnsrandomgeneratorstatesize%28__%29.md): Returns the state size, in bytes, of a random number generator.
- [BNNSRandomGeneratorGetState(\_:\_:\_:)](../bnnsrandomgeneratorgetstate%28______%29.md): Returns the state of a random number generator.
- [BNNSRandomGeneratorSetState(\_:\_:\_:)](../bnnsrandomgeneratorsetstate%28______%29.md): Sets the state of a random number generator.
- [BNNSDestroyRandomGenerator(\_:)](../bnnsdestroyrandomgenerator%28__%29.md): Destroys a random number generator.
