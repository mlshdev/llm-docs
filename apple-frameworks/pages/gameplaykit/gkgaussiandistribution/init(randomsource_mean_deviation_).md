> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgaussiandistribution/init(randomsource:mean:deviation:)](https://developer.apple.com/documentation/gameplaykit/gkgaussiandistribution/init(randomsource:mean:deviation:))

# init(randomSource:mean:deviation:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a Gaussian random distribution with the specified mean and deviation, using the specified source randomizer.

## Declaration

```swift
init(randomSource source: any GKRandom, mean: Float, deviation: Float)
```

## Parameters

- `source`: A randomizer that produces raw random values for use by the distribution. A randomizer is any object implementing the [GKRandom](../gkrandom.md) protocol, which can be a random source algorithm such as the [GKARC4RandomSource](../gkarc4randomsource.md) class or another random distribution.
- `mean`: The mean value of the distribution (also called the *expected value* or *median*).
- `deviation`: The standard deviation of the distribution (also called *sigma*).

<a id="return-value"></a>

## Return Value

A new random distribution.

<a id="Discussion"></a>

## Discussion

Using this initializer creates a Gaussian distribution whose range is determined by the specified `mean` and `deviation` values. The [lowestValue](../gkrandomdistribution/lowestvalue.md) property of the newly created distribution is set to three deviations below the mean (`lowest = mean - 3 * deviation`) and the [highestValue](../gkrandomdistribution/highestvalue.md) property is set to three deviations above the mean (`highest = mean + 3 * deviation`).

A random distribution works by mapping the values produced by the `source` randomizer to the range and characteristics specified by the distribution. Multiple distributions can share the same source, with the side effect that retrieving a random value through one distribution affects the sequence of random numbers produced by the source.

## See Also

### Creating a Random Distribution

- [init(randomSource:lowestValue:highestValue:)](init%28randomsource_lowestvalue_highestvalue_%29.md): Initializes a Gaussian random distribution with the specified lower and upper bounds, using the specified source randomizer.

# initWithRandomSource:mean:deviation: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a Gaussian random distribution with the specified mean and deviation, using the specified source randomizer.

## Declaration

```objectivec
- (instancetype) initWithRandomSource:(id<GKRandom>) source mean:(float) mean deviation:(float) deviation;
```

## Parameters

- `source`: A randomizer that produces raw random values for use by the distribution. A randomizer is any object implementing the [GKRandom](../gkrandom.md) protocol, which can be a random source algorithm such as the [GKARC4RandomSource](../gkarc4randomsource.md) class or another random distribution.
- `mean`: The mean value of the distribution (also called the *expected value* or *median*).
- `deviation`: The standard deviation of the distribution (also called *sigma*).

<a id="return-value"></a>

## Return Value

A new random distribution.

<a id="Discussion"></a>

## Discussion

Using this initializer creates a Gaussian distribution whose range is determined by the specified `mean` and `deviation` values. The [lowestValue](../gkrandomdistribution/lowestvalue.md) property of the newly created distribution is set to three deviations below the mean (`lowest = mean - 3 * deviation`) and the [highestValue](../gkrandomdistribution/highestvalue.md) property is set to three deviations above the mean (`highest = mean + 3 * deviation`).

A random distribution works by mapping the values produced by the `source` randomizer to the range and characteristics specified by the distribution. Multiple distributions can share the same source, with the side effect that retrieving a random value through one distribution affects the sequence of random numbers produced by the source.

## See Also

### Creating a Random Distribution

- [initWithRandomSource:lowestValue:highestValue:](init%28randomsource_lowestvalue_highestvalue_%29.md): Initializes a Gaussian random distribution with the specified lower and upper bounds, using the specified source randomizer.
