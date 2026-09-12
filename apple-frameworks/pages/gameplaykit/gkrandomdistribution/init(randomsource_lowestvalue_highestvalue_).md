> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkrandomdistribution/init(randomsource:lowestvalue:highestvalue:)](https://developer.apple.com/documentation/gameplaykit/gkrandomdistribution/init(randomsource:lowestvalue:highestvalue:))

# init(randomSource:lowestValue:highestValue:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a uniform random distribution with the specified lower and upper bounds, using the specified source randomizer.

## Declaration

```swift
init(randomSource source: any GKRandom, lowestValue lowestInclusive: Int, highestValue highestInclusive: Int)
```

## Parameters

- `source`: A randomizer that produces raw random values for use by the distribution. A randomizer is any object implementing the [GKRandom](../gkrandom.md) protocol, which can be a random source algorithm such as the [GKARC4RandomSource](../gkarc4randomsource.md) class or another random distribution.
- `lowestInclusive`: The lowest value to be produced by the distribution.
- `highestInclusive`: The highest value to be produced by the distribution.

<a id="return-value"></a>

## Return Value

A new random distribution.

<a id="Discussion"></a>

## Discussion

A random distribution works by mapping the values produced by the `source` randomizer to the range and characteristics specified by the distribution. Multiple distributions can share the same source, with the side effect that retrieving a random value through one distribution affects the sequence of random numbers produced by the source.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## See Also

### Creating a Random Distribution

- [init(lowestValue:highestValue:)](init%28lowestvalue_highestvalue_%29.md): Creates a random distribution with the specified lower and upper bounds, using the Arc4 randomizer.

# initWithRandomSource:lowestValue:highestValue: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a uniform random distribution with the specified lower and upper bounds, using the specified source randomizer.

## Declaration

```objectivec
- (instancetype) initWithRandomSource:(id<GKRandom>) source lowestValue:(NSInteger) lowestInclusive highestValue:(NSInteger) highestInclusive;
```

## Parameters

- `source`: A randomizer that produces raw random values for use by the distribution. A randomizer is any object implementing the [GKRandom](../gkrandom.md) protocol, which can be a random source algorithm such as the [GKARC4RandomSource](../gkarc4randomsource.md) class or another random distribution.
- `lowestInclusive`: The lowest value to be produced by the distribution.
- `highestInclusive`: The highest value to be produced by the distribution.

<a id="return-value"></a>

## Return Value

A new random distribution.

<a id="Discussion"></a>

## Discussion

A random distribution works by mapping the values produced by the `source` randomizer to the range and characteristics specified by the distribution. Multiple distributions can share the same source, with the side effect that retrieving a random value through one distribution affects the sequence of random numbers produced by the source.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## See Also

### Creating a Random Distribution

- [distributionWithLowestValue:highestValue:](init%28lowestvalue_highestvalue_%29.md): Creates a random distribution with the specified lower and upper bounds, using the Arc4 randomizer.
