> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsrandomgeneratormethod](https://developer.apple.com/documentation/accelerate/bnnsrandomgeneratormethod)

# BNNSRandomGeneratorMethod (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe random number generation methods.

## Declaration

```swift
struct BNNSRandomGeneratorMethod
```

## Topics

### Random Number Generation Methods

- [init(\_:)](bnnsrandomgeneratormethod/init%28__%29.md): Creates a new instance with the specified raw value.
- [init(rawValue:)](bnnsrandomgeneratormethod/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.
- [rawValue](bnnsrandomgeneratormethod/rawvalue.md): The corresponding value of the raw type.
- [BNNSRandomGeneratorMethodAES_CTR](bnnsrandomgeneratormethodaes_ctr.md): A constant that specifes an implementation that’s based on the Advanced Encryption Standard (AES) hash of a counter.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Random number generation

- [BNNS.RandomGenerator](bnns/randomgenerator.md): A random number generator.
- [BNNSCreateRandomGenerator(\_:\_:)](bnnscreaterandomgenerator%28____%29.md): Returns a new random number generator using an internally generated random seed.
- [BNNSCreateRandomGeneratorWithSeed(\_:\_:\_:)](bnnscreaterandomgeneratorwithseed%28______%29.md): Returns a new random number generator using the specified seed.
- [BNNSRandomGenerator](bnnsrandomgenerator.md): A pointer to a random number generator object.
- [BNNSRandomFillUniformInt(\_:\_:\_:\_:)](bnnsrandomfilluniformint%28________%29.md): Fills the specified tensor with random integer values from the continuous uniform distribution within a range.
- [BNNSRandomFillUniformFloat(\_:\_:\_:\_:)](bnnsrandomfilluniformfloat%28________%29.md): Fills the specified tensor with random floating-point values from the continuous uniform distribution within a range.
- [BNNSRandomFillNormalFloat(\_:\_:\_:\_:)](bnnsrandomfillnormalfloat%28________%29.md): Fills the specified tensor with random floating-point values mapped to a normal distribution.
- [BNNSRandomFillCategoricalFloat(\_:\_:\_:\_:)](bnnsrandomfillcategoricalfloat%28________%29.md): Fills the specified tensor with random values from the categorical distributions with the given event probabilities.
- [BNNSRandomGeneratorStateSize(\_:)](bnnsrandomgeneratorstatesize%28__%29.md): Returns the state size, in bytes, of a random number generator.
- [BNNSRandomGeneratorGetState(\_:\_:\_:)](bnnsrandomgeneratorgetstate%28______%29.md): Returns the state of a random number generator.
- [BNNSRandomGeneratorSetState(\_:\_:\_:)](bnnsrandomgeneratorsetstate%28______%29.md): Sets the state of a random number generator.
- [BNNSDestroyRandomGenerator(\_:)](bnnsdestroyrandomgenerator%28__%29.md): Destroys a random number generator.

# BNNSRandomGeneratorMethod (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe random number generation methods.

## Declaration

```objectivec
typedef enum { ... } BNNSRandomGeneratorMethod;
```

## Topics

### Random Number Generation Methods

- [BNNSRandomGeneratorMethodAES_CTR](bnnsrandomgeneratormethodaes_ctr.md): A constant that specifes an implementation that’s based on the Advanced Encryption Standard (AES) hash of a counter.

## See Also

### Random number generation

- [BNNSCreateRandomGenerator](bnnscreaterandomgenerator%28____%29.md): Returns a new random number generator using an internally generated random seed.
- [BNNSCreateRandomGeneratorWithSeed](bnnscreaterandomgeneratorwithseed%28______%29.md): Returns a new random number generator using the specified seed.
- [BNNSRandomGenerator](bnnsrandomgenerator.md): A pointer to a random number generator object.
- [BNNSRandomFillUniformInt](bnnsrandomfilluniformint%28________%29.md): Fills the specified tensor with random integer values from the continuous uniform distribution within a range.
- [BNNSRandomFillUniformFloat](bnnsrandomfilluniformfloat%28________%29.md): Fills the specified tensor with random floating-point values from the continuous uniform distribution within a range.
- [BNNSRandomFillNormalFloat](bnnsrandomfillnormalfloat%28________%29.md): Fills the specified tensor with random floating-point values mapped to a normal distribution.
- [BNNSRandomFillCategoricalFloat](bnnsrandomfillcategoricalfloat%28________%29.md): Fills the specified tensor with random values from the categorical distributions with the given event probabilities.
- [BNNSRandomGeneratorStateSize](bnnsrandomgeneratorstatesize%28__%29.md): Returns the state size, in bytes, of a random number generator.
- [BNNSRandomGeneratorGetState](bnnsrandomgeneratorgetstate%28______%29.md): Returns the state of a random number generator.
- [BNNSRandomGeneratorSetState](bnnsrandomgeneratorsetstate%28______%29.md): Sets the state of a random number generator.
- [BNNSDestroyRandomGenerator](bnnsdestroyrandomgenerator%28__%29.md): Destroys a random number generator.
