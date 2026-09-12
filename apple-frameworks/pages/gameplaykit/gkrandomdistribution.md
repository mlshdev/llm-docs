> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkrandomdistribution](https://developer.apple.com/documentation/gameplaykit/gkrandomdistribution)

# GKRandomDistribution (Swift)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A generator for random numbers that fall within a specific range and that exhibit a specific distribution over multiple samplings.

## Declaration

```swift
class GKRandomDistribution
```

<a id="overview"></a>

## Overview

> **Important**

>  The randomization services provided in GameplayKit are suitable for reliably creating deterministic, pseudorandom gameplay mechanics, but are not cryptographically robust. For cryptography, obfuscation, or cipher uses, use the Security framework, described in [Cryptographic Services Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/cryptoservices/Introduction/Introduction.html#//apple_ref/doc/uid/TP40011172).

You choose the algorithm that randomizes source values for a distribution by initializing it with an instance of any class that implements the [GKRandom](gkrandom.md) protocol, such as a basic random source (a subclass of [GKRandomSource](gkrandomsource.md)) or another random distribution. The [GKRandomDistribution](gkrandomdistribution.md) class itself implements a uniform distribution—for more specialized distributions use one of the subclasses [GKGaussianDistribution](gkgaussiandistribution.md) and [GKShuffledDistribution](gkshuffleddistribution.md).

In a *uniform* distribution, the probability of generating any number in a specified range (between the values of the distribution’s [lowestValue](gkrandomdistribution/lowestvalue.md) and [highestValue](gkrandomdistribution/highestvalue.md) properties) is approximately equal. In other words, there is no bias toward any possible outcome. To generate random numbers in this range, use the methods from the [GKRandom](gkrandom.md) protocol listed in Generating Random Numbers below.

For more information on choosing and using randomizers in GameplayKit, read [Randomization](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/RandomSources.html#//apple_ref/doc/uid/TP40015172-CH9) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Creating a Random Distribution

- [init(randomSource:lowestValue:highestValue:)](gkrandomdistribution/init%28randomsource_lowestvalue_highestvalue_%29.md): Initializes a uniform random distribution with the specified lower and upper bounds, using the specified source randomizer.
- [init(lowestValue:highestValue:)](gkrandomdistribution/init%28lowestvalue_highestvalue_%29.md): Creates a random distribution with the specified lower and upper bounds, using the Arc4 randomizer.

### Creating Specific Random Distributions

- [d6()](gkrandomdistribution/d6%28%29.md): Creates a random distribution equivalent to a six-sided die.
- [d20()](gkrandomdistribution/d20%28%29.md): Creates a random distribution equivalent to a twenty-sided die.
- [init(forDieWithSideCount:)](gkrandomdistribution/init%28fordiewithsidecount_%29.md): Creates a random distribution equivalent to a die with the specified number of sides.

### Generating Random Numbers

- [nextInt()](gkrandomdistribution/nextint%28%29.md): Generates and returns a new random integer within the bounds of the distribution.
- [nextInt(upperBound:)](gkrandomdistribution/nextint%28upperbound_%29.md): Generates and returns a new random integer within the bounds of the distribution and less than the specified limit.
- [nextUniform()](gkrandomdistribution/nextuniform%28%29.md): Generates and returns a new random floating-point value within the characteristics of the distribution.
- [nextBool()](gkrandomdistribution/nextbool%28%29.md): Generates and returns a new random Boolean value within the characteristics of the distribution.

### Working with Characteristics of a Distribution

- [lowestValue](gkrandomdistribution/lowestvalue.md): The lowest value to be produced by the distribution.
- [highestValue](gkrandomdistribution/highestvalue.md): The highest value to be produced by the distribution.
- [numberOfPossibleOutcomes](gkrandomdistribution/numberofpossibleoutcomes.md): The number of unique values the distribution can generate.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [GKGaussianDistribution](gkgaussiandistribution.md)
- [GKShuffledDistribution](gkshuffleddistribution.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [GKRandom](gkrandom.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Randomization

- [GKRandom](gkrandom.md): The common interface for all randomization classes in (or usable with) GameplayKit.
- [GKRandomSource](gkrandomsource.md): The superclass for all basic randomization classes in GameplayKit.
- [GKARC4RandomSource](gkarc4randomsource.md): A basic random number generator implementing the ARC4 algorithm, which is suitable for most gameplay mechanics.
- [GKLinearCongruentialRandomSource](gklinearcongruentialrandomsource.md): A basic random number generator implementing the linear congruential generator algorithm, which is faster but less random than the default random source.
- [GKMersenneTwisterRandomSource](gkmersennetwisterrandomsource.md): A basic random number generator implementing the Mersenne Twister algorithm, which is more random, but slower than the default random source.
- [GKGaussianDistribution](gkgaussiandistribution.md): A generator for random numbers that follow a *Gaussian distribution* (also known as a *normal distribution*) across multiple samplings.
- [GKShuffledDistribution](gkshuffleddistribution.md): A generator for random numbers that are uniformly distributed across many samplings, but where short sequences of similar values are unlikely.

# GKRandomDistribution (Objective-C)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A generator for random numbers that fall within a specific range and that exhibit a specific distribution over multiple samplings.

## Declaration

```objectivec
@interface GKRandomDistribution : NSObject
```

<a id="overview"></a>

## Overview

> **Important**

>  The randomization services provided in GameplayKit are suitable for reliably creating deterministic, pseudorandom gameplay mechanics, but are not cryptographically robust. For cryptography, obfuscation, or cipher uses, use the Security framework, described in [Cryptographic Services Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/cryptoservices/Introduction/Introduction.html#//apple_ref/doc/uid/TP40011172).

You choose the algorithm that randomizes source values for a distribution by initializing it with an instance of any class that implements the [GKRandom](gkrandom.md) protocol, such as a basic random source (a subclass of [GKRandomSource](gkrandomsource.md)) or another random distribution. The [GKRandomDistribution](gkrandomdistribution.md) class itself implements a uniform distribution—for more specialized distributions use one of the subclasses [GKGaussianDistribution](gkgaussiandistribution.md) and [GKShuffledDistribution](gkshuffleddistribution.md).

In a *uniform* distribution, the probability of generating any number in a specified range (between the values of the distribution’s [lowestValue](gkrandomdistribution/lowestvalue.md) and [highestValue](gkrandomdistribution/highestvalue.md) properties) is approximately equal. In other words, there is no bias toward any possible outcome. To generate random numbers in this range, use the methods from the [GKRandom](gkrandom.md) protocol listed in Generating Random Numbers below.

For more information on choosing and using randomizers in GameplayKit, read [Randomization](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/RandomSources.html#//apple_ref/doc/uid/TP40015172-CH9) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Creating a Random Distribution

- [initWithRandomSource:lowestValue:highestValue:](gkrandomdistribution/init%28randomsource_lowestvalue_highestvalue_%29.md): Initializes a uniform random distribution with the specified lower and upper bounds, using the specified source randomizer.
- [distributionWithLowestValue:highestValue:](gkrandomdistribution/init%28lowestvalue_highestvalue_%29.md): Creates a random distribution with the specified lower and upper bounds, using the Arc4 randomizer.

### Creating Specific Random Distributions

- [d6](gkrandomdistribution/d6%28%29.md): Creates a random distribution equivalent to a six-sided die.
- [d20](gkrandomdistribution/d20%28%29.md): Creates a random distribution equivalent to a twenty-sided die.
- [distributionForDieWithSideCount:](gkrandomdistribution/init%28fordiewithsidecount_%29.md): Creates a random distribution equivalent to a die with the specified number of sides.

### Generating Random Numbers

- [nextInt](gkrandomdistribution/nextint%28%29.md): Generates and returns a new random integer within the bounds of the distribution.
- [nextIntWithUpperBound:](gkrandomdistribution/nextint%28upperbound_%29.md): Generates and returns a new random integer within the bounds of the distribution and less than the specified limit.
- [nextUniform](gkrandomdistribution/nextuniform%28%29.md): Generates and returns a new random floating-point value within the characteristics of the distribution.
- [nextBool](gkrandomdistribution/nextbool%28%29.md): Generates and returns a new random Boolean value within the characteristics of the distribution.

### Working with Characteristics of a Distribution

- [lowestValue](gkrandomdistribution/lowestvalue.md): The lowest value to be produced by the distribution.
- [highestValue](gkrandomdistribution/highestvalue.md): The highest value to be produced by the distribution.
- [numberOfPossibleOutcomes](gkrandomdistribution/numberofpossibleoutcomes.md): The number of unique values the distribution can generate.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [GKGaussianDistribution](gkgaussiandistribution.md)
- [GKShuffledDistribution](gkshuffleddistribution.md)

### Conforms To

- [GKRandom](gkrandom.md)

## See Also

### Randomization

- [GKRandom](gkrandom.md): The common interface for all randomization classes in (or usable with) GameplayKit.
- [GKRandomSource](gkrandomsource.md): The superclass for all basic randomization classes in GameplayKit.
- [GKARC4RandomSource](gkarc4randomsource.md): A basic random number generator implementing the ARC4 algorithm, which is suitable for most gameplay mechanics.
- [GKLinearCongruentialRandomSource](gklinearcongruentialrandomsource.md): A basic random number generator implementing the linear congruential generator algorithm, which is faster but less random than the default random source.
- [GKMersenneTwisterRandomSource](gkmersennetwisterrandomsource.md): A basic random number generator implementing the Mersenne Twister algorithm, which is more random, but slower than the default random source.
- [GKGaussianDistribution](gkgaussiandistribution.md): A generator for random numbers that follow a *Gaussian distribution* (also known as a *normal distribution*) across multiple samplings.
- [GKShuffledDistribution](gkshuffleddistribution.md): A generator for random numbers that are uniformly distributed across many samplings, but where short sequences of similar values are unlikely.
