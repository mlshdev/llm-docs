> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkrandomdistribution/nextbool()](https://developer.apple.com/documentation/gameplaykit/gkrandomdistribution/nextbool())

# nextBool() (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Generates and returns a new random Boolean value within the characteristics of the distribution.

## Declaration

```swift
func nextBool() -> Bool
```

<a id="return-value"></a>

## Return Value

A random Boolean value.

<a id="Discussion"></a>

## Discussion

When using the [GKRandomDistribution](../gkrandomdistribution.md) class directly, generated Boolean values are uniform—any call to this method has an equal chance of returning [true](https://developer.apple.com/documentation/swift/true) or [false](https://developer.apple.com/documentation/swift/false). Subclasses of [GKRandomDistribution](../gkrandomdistribution.md) can alter the relative probability of generating either value.

## See Also

### Generating Random Numbers

- [nextInt()](nextint%28%29.md): Generates and returns a new random integer within the bounds of the distribution.
- [nextInt(upperBound:)](nextint%28upperbound_%29.md): Generates and returns a new random integer within the bounds of the distribution and less than the specified limit.
- [nextUniform()](nextuniform%28%29.md): Generates and returns a new random floating-point value within the characteristics of the distribution.

# nextBool (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Generates and returns a new random Boolean value within the characteristics of the distribution.

## Declaration

```objectivec
- (BOOL) nextBool;
```

<a id="return-value"></a>

## Return Value

A random Boolean value.

<a id="Discussion"></a>

## Discussion

When using the [GKRandomDistribution](../gkrandomdistribution.md) class directly, generated Boolean values are uniform—any call to this method has an equal chance of returning [true](https://developer.apple.com/documentation/swift/true) or [false](https://developer.apple.com/documentation/swift/false). Subclasses of [GKRandomDistribution](../gkrandomdistribution.md) can alter the relative probability of generating either value.

## See Also

### Generating Random Numbers

- [nextInt](nextint%28%29.md): Generates and returns a new random integer within the bounds of the distribution.
- [nextIntWithUpperBound:](nextint%28upperbound_%29.md): Generates and returns a new random integer within the bounds of the distribution and less than the specified limit.
- [nextUniform](nextuniform%28%29.md): Generates and returns a new random floating-point value within the characteristics of the distribution.
