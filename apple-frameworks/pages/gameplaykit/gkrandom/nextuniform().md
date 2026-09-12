> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkrandom/nextuniform()](https://developer.apple.com/documentation/gameplaykit/gkrandom/nextuniform())

# nextUniform() (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Generates and returns a new random floating-point value.

## Declaration

```swift
func nextUniform() -> Float
```

<a id="return-value"></a>

## Return Value

A random floating-point value in the range `[0.0, 1.0]`.

<a id="Discussion"></a>

## Discussion

The distribution of multiple samplings is uniform within the range `[0.0, 1.0]`; that is, the probability of this method returning any one value is approximately equal to that of returning any other value.

Typically, custom classes implementing this protocol should implement the [nextUniform()](nextuniform%28%29.md) method based on the value returned by the [nextInt(upperBound:)](nextint%28upperbound_%29.md) method. Alternative implementations are possible, but may lead to less uniform results.

## See Also

### Generating Random Numbers

- [nextInt()](nextint%28%29.md): Generates and returns a new random integer.
- [nextInt(upperBound:)](nextint%28upperbound_%29.md): Generates and returns a new random integer less than the specified limit.
- [nextBool()](nextbool%28%29.md): Generates and returns a new random Boolean value.

# nextUniform (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Generates and returns a new random floating-point value.

## Declaration

```objectivec
- (float) nextUniform;
```

<a id="return-value"></a>

## Return Value

A random floating-point value in the range `[0.0, 1.0]`.

<a id="Discussion"></a>

## Discussion

The distribution of multiple samplings is uniform within the range `[0.0, 1.0]`; that is, the probability of this method returning any one value is approximately equal to that of returning any other value.

Typically, custom classes implementing this protocol should implement the [nextUniform](nextuniform%28%29.md) method based on the value returned by the [nextIntWithUpperBound:](nextint%28upperbound_%29.md) method. Alternative implementations are possible, but may lead to less uniform results.

## See Also

### Generating Random Numbers

- [nextInt](nextint%28%29.md): Generates and returns a new random integer.
- [nextIntWithUpperBound:](nextint%28upperbound_%29.md): Generates and returns a new random integer less than the specified limit.
- [nextBool](nextbool%28%29.md): Generates and returns a new random Boolean value.
