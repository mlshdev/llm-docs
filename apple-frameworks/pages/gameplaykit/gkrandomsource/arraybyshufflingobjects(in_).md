> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkrandomsource/arraybyshufflingobjects(in:)](https://developer.apple.com/documentation/gameplaykit/gkrandomsource/arraybyshufflingobjects(in:))

# arrayByShufflingObjects(in:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns an array whose contents are the same as those of the specified array, but in a random order determined by the random source.

## Declaration

```swift
func arrayByShufflingObjects(in array: [Any]) -> [Any]
```

## Parameters

- `array`: An array of objects.

<a id="return-value"></a>

## Return Value

An array whose contents have been randomly shuffled.

<a id="Discussion"></a>

## Discussion

Use this method with an instance of [GKRandomSource](../gkrandomsource.md) (or of one of its subclasses) to randomly rearrange the contents of an array. For example, in a card game you might use this method to randomize an array of card objects.

# arrayByShufflingObjectsInArray: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns an array whose contents are the same as those of the specified array, but in a random order determined by the random source.

## Declaration

```objectivec
- (NSArray *) arrayByShufflingObjectsInArray:(NSArray *) array;
```

## Parameters

- `array`: An array of objects.

<a id="return-value"></a>

## Return Value

An array whose contents have been randomly shuffled.

<a id="Discussion"></a>

## Discussion

Use this method with an instance of [GKRandomSource](../gkrandomsource.md) (or of one of its subclasses) to randomly rearrange the contents of an array. For example, in a card game you might use this method to randomize an array of card objects.
