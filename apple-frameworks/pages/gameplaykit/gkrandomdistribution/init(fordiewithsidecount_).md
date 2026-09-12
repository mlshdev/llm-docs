> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkrandomdistribution/init(fordiewithsidecount:)](https://developer.apple.com/documentation/gameplaykit/gkrandomdistribution/init(fordiewithsidecount:))

# init(forDieWithSideCount:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a random distribution equivalent to a die with the specified number of sides.

## Declaration

```swift
convenience init(forDieWithSideCount sideCount: Int)
```

## Parameters

- `sideCount`: The count of sides for modeling a die; that is, the highest integer value for the random distribution to generate.

<a id="return-value"></a>

## Return Value

A uniform random distribution that produces values in the range `[1, sideCount]`.

<a id="Discussion"></a>

## Discussion

Creating a random source with this method is equivalent to calling the [init(randomSource:lowestValue:highestValue:)](init%28randomsource_lowestvalue_highestvalue_%29.md) initializer, passing a new instance of the [GKARC4RandomSource](../gkarc4randomsource.md) class for the `source` parameter, and passing 1 and `sideCount` for the `lowestValue` and `highestValue` parameters. Because the newly created distribution uses its own [GKRandomSource](../gkrandomsource.md) instance, the random behavior of the distribution is independent from that of other randomizers.

## See Also

### Creating Specific Random Distributions

- [d6()](d6%28%29.md): Creates a random distribution equivalent to a six-sided die.
- [d20()](d20%28%29.md): Creates a random distribution equivalent to a twenty-sided die.

# distributionForDieWithSideCount: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a random distribution equivalent to a die with the specified number of sides.

## Declaration

```objectivec
+ (instancetype) distributionForDieWithSideCount:(NSInteger) sideCount;
```

## Parameters

- `sideCount`: The count of sides for modeling a die; that is, the highest integer value for the random distribution to generate.

<a id="return-value"></a>

## Return Value

A uniform random distribution that produces values in the range `[1, sideCount]`.

<a id="Discussion"></a>

## Discussion

Creating a random source with this method is equivalent to calling the [initWithRandomSource:lowestValue:highestValue:](init%28randomsource_lowestvalue_highestvalue_%29.md) initializer, passing a new instance of the [GKARC4RandomSource](../gkarc4randomsource.md) class for the `source` parameter, and passing 1 and `sideCount` for the `lowestValue` and `highestValue` parameters. Because the newly created distribution uses its own [GKRandomSource](../gkrandomsource.md) instance, the random behavior of the distribution is independent from that of other randomizers.

## See Also

### Creating Specific Random Distributions

- [d6](d6%28%29.md): Creates a random distribution equivalent to a six-sided die.
- [d20](d20%28%29.md): Creates a random distribution equivalent to a twenty-sided die.
