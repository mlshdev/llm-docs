> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkrandomdistribution/nextint()](https://developer.apple.com/documentation/gameplaykit/gkrandomdistribution/nextint())

# nextInt() (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Generates and returns a new random integer within the bounds of the distribution.

## Declaration

```swift
func nextInt() -> Int
```

<a id="return-value"></a>

## Return Value

An integer in the range specified by the distribution’s [lowestValue](lowestvalue.md) and [highestValue](highestvalue.md) properties (inclusive).

<a id="Discussion"></a>

## Discussion

When using the [GKRandomDistribution](../gkrandomdistribution.md) directly, generated numbers are uniform within this range. Subclasses of [GKRandomDistribution](../gkrandomdistribution.md) can alter the relative probability of generating any particular number within the distribution’s range.

## See Also

### Generating Random Numbers

- [nextInt(upperBound:)](nextint%28upperbound_%29.md): Generates and returns a new random integer within the bounds of the distribution and less than the specified limit.
- [nextUniform()](nextuniform%28%29.md): Generates and returns a new random floating-point value within the characteristics of the distribution.
- [nextBool()](nextbool%28%29.md): Generates and returns a new random Boolean value within the characteristics of the distribution.

# nextInt (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Generates and returns a new random integer within the bounds of the distribution.

## Declaration

```objectivec
- (NSInteger) nextInt;
```

<a id="return-value"></a>

## Return Value

An integer in the range specified by the distribution’s [lowestValue](lowestvalue.md) and [highestValue](highestvalue.md) properties (inclusive).

<a id="Discussion"></a>

## Discussion

When using the [GKRandomDistribution](../gkrandomdistribution.md) directly, generated numbers are uniform within this range. Subclasses of [GKRandomDistribution](../gkrandomdistribution.md) can alter the relative probability of generating any particular number within the distribution’s range.

## See Also

### Generating Random Numbers

- [nextIntWithUpperBound:](nextint%28upperbound_%29.md): Generates and returns a new random integer within the bounds of the distribution and less than the specified limit.
- [nextUniform](nextuniform%28%29.md): Generates and returns a new random floating-point value within the characteristics of the distribution.
- [nextBool](nextbool%28%29.md): Generates and returns a new random Boolean value within the characteristics of the distribution.
