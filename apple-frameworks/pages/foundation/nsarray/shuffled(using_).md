> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/shuffled(using:)](https://developer.apple.com/documentation/foundation/nsarray/shuffled(using:))

# shuffled(using:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Returns a new array that lists this array’s elements in a random order, using the specified random source.

## Declaration

```swift
func shuffled(using randomSource: GKRandomSource) -> [Any]
```

## Parameters

- `randomSource`: A GameplayKit random source object.

<a id="return-value"></a>

## Return Value

A new array that lists this array’s elements in a random order.

<a id="Discussion"></a>

## Discussion

Use the `randomSource` parameter to influence the random shuffling. For example, to reproduce a series of shuffles for testing, you can create a [GKARC4RandomSource](../../gameplaykit/gkarc4randomsource.md) object using the [seed](../../gameplaykit/gkarc4randomsource/seed.md) value of a previously used random source.

This method is equivalent to the [GKRandomSource](../../gameplaykit/gkrandomsource.md) method [arrayByShufflingObjects(in:)](../../gameplaykit/gkrandomsource/arraybyshufflingobjects%28in_%29.md), but as an [NSArray](../nsarray.md) method it preserves generic type parameters.

## See Also

### Randomly Shuffling an Array

- [shuffled()](shuffled%28%29.md): Returns a new array that lists this array’s elements in a random order.

# shuffledArrayWithRandomSource: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Returns a new array that lists this array’s elements in a random order, using the specified random source.

## Declaration

```objectivec
- (NSArray<id> *) shuffledArrayWithRandomSource:(GKRandomSource *) randomSource;
```

## Parameters

- `randomSource`: A GameplayKit random source object.

<a id="return-value"></a>

## Return Value

A new array that lists this array’s elements in a random order.

<a id="Discussion"></a>

## Discussion

Use the `randomSource` parameter to influence the random shuffling. For example, to reproduce a series of shuffles for testing, you can create a [GKARC4RandomSource](../../gameplaykit/gkarc4randomsource.md) object using the [seed](../../gameplaykit/gkarc4randomsource/seed.md) value of a previously used random source.

This method is equivalent to the [GKRandomSource](../../gameplaykit/gkrandomsource.md) method [arrayByShufflingObjectsInArray:](../../gameplaykit/gkrandomsource/arraybyshufflingobjects%28in_%29.md), but as an [NSArray](../nsarray.md) method it preserves generic type parameters.

## See Also

### Randomly Shuffling an Array

- [shuffledArray](shuffled%28%29.md): Returns a new array that lists this array’s elements in a random order.
