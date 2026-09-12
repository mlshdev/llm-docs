> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/shuffled()](https://developer.apple.com/documentation/foundation/nsarray/shuffled())

# shuffled() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Returns a new array that lists this array’s elements in a random order.

## Declaration

```swift
func shuffled() -> [Any]
```

<a id="return-value"></a>

## Return Value

A new array that lists this array’s elements in a random order.

<a id="Discussion"></a>

## Discussion

Calling this method is equivalent to calling the [shuffled(using:)](shuffled%28using_%29.md) method and passing the system [sharedRandom()](../../gameplaykit/gkrandomsource/sharedrandom%28%29.md) random source. To influence the random shuffling or to be able to deterministically reproduce a series of shuffles, create your own [GKRandomSource](../../gameplaykit/gkrandomsource.md) object.

## See Also

### Randomly Shuffling an Array

- [shuffled(using:)](shuffled%28using_%29.md): Returns a new array that lists this array’s elements in a random order, using the specified random source.

# shuffledArray (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Returns a new array that lists this array’s elements in a random order.

## Declaration

```objectivec
- (NSArray<id> *) shuffledArray;
```

<a id="return-value"></a>

## Return Value

A new array that lists this array’s elements in a random order.

<a id="Discussion"></a>

## Discussion

Calling this method is equivalent to calling the [shuffledArrayWithRandomSource:](shuffled%28using_%29.md) method and passing the system [sharedRandom](../../gameplaykit/gkrandomsource/sharedrandom%28%29.md) random source. To influence the random shuffling or to be able to deterministically reproduce a series of shuffles, create your own [GKRandomSource](../../gameplaykit/gkrandomsource.md) object.

## See Also

### Randomly Shuffling an Array

- [shuffledArrayWithRandomSource:](shuffled%28using_%29.md): Returns a new array that lists this array’s elements in a random order, using the specified random source.
