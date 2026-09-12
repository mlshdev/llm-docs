> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkrandomdistribution/init(lowestvalue:highestvalue:)](https://developer.apple.com/documentation/gameplaykit/gkrandomdistribution/init(lowestvalue:highestvalue:))

# init(lowestValue:highestValue:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a random distribution with the specified lower and upper bounds, using the Arc4 randomizer.

## Declaration

```swift
convenience init(lowestValue lowestInclusive: Int, highestValue highestInclusive: Int)
```

## Parameters

- `lowestInclusive`: The lowest value to be produced by the distribution.
- `highestInclusive`: The highest value to be produced by the distribution.

<a id="return-value"></a>

## Return Value

A new random distribution.

<a id="Discussion"></a>

## Discussion

Creating a random source with this method is equivalent to calling the [init(randomSource:lowestValue:highestValue:)](init%28randomsource_lowestvalue_highestvalue_%29.md) initializer and passing a new instance of the [GKARC4RandomSource](../gkarc4randomsource.md) class for the `source` parameter. Because the newly created distribution uses its own [GKRandomSource](../gkrandomsource.md) instance, the random behavior of the distribution is independent from that of other randomizers.

## See Also

### Creating a Random Distribution

- [init(randomSource:lowestValue:highestValue:)](init%28randomsource_lowestvalue_highestvalue_%29.md): Initializes a uniform random distribution with the specified lower and upper bounds, using the specified source randomizer.

# distributionWithLowestValue:highestValue: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a random distribution with the specified lower and upper bounds, using the Arc4 randomizer.

## Declaration

```objectivec
+ (instancetype) distributionWithLowestValue:(NSInteger) lowestInclusive highestValue:(NSInteger) highestInclusive;
```

## Parameters

- `lowestInclusive`: The lowest value to be produced by the distribution.
- `highestInclusive`: The highest value to be produced by the distribution.

<a id="return-value"></a>

## Return Value

A new random distribution.

<a id="Discussion"></a>

## Discussion

Creating a random source with this method is equivalent to calling the [initWithRandomSource:lowestValue:highestValue:](init%28randomsource_lowestvalue_highestvalue_%29.md) initializer and passing a new instance of the [GKARC4RandomSource](../gkarc4randomsource.md) class for the `source` parameter. Because the newly created distribution uses its own [GKRandomSource](../gkrandomsource.md) instance, the random behavior of the distribution is independent from that of other randomizers.

## See Also

### Creating a Random Distribution

- [initWithRandomSource:lowestValue:highestValue:](init%28randomsource_lowestvalue_highestvalue_%29.md): Initializes a uniform random distribution with the specified lower and upper bounds, using the specified source randomizer.
