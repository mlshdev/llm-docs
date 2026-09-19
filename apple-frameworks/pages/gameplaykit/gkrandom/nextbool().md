> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gameplaykit/gkrandom/nextbool()

# nextBool() (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Generates and returns a new random Boolean value.

## Declaration

```swift
func nextBool() -> Bool
```

<a id="return-value"></a>

## Return Value

A random Boolean value.

<a id="Discussion"></a>

## Discussion

Typically, custom classes implementing this protocol should implement the [nextBool()](nextbool%28%29.md) method based on the value returned by the [nextInt(upperBound:)](nextint%28upperbound_%29.md) method. Alternative implementations are possible, but may lead to less uniform results.

## See Also

### Generating Random Numbers

- [nextInt()](nextint%28%29.md): Generates and returns a new random integer.
- [nextInt(upperBound:)](nextint%28upperbound_%29.md): Generates and returns a new random integer less than the specified limit.
- [nextUniform()](nextuniform%28%29.md): Generates and returns a new random floating-point value.

# nextBool (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Generates and returns a new random Boolean value.

## Declaration

```objectivec
- (BOOL) nextBool;
```

<a id="return-value"></a>

## Return Value

A random Boolean value.

<a id="Discussion"></a>

## Discussion

Typically, custom classes implementing this protocol should implement the [nextBool](nextbool%28%29.md) method based on the value returned by the [nextIntWithUpperBound:](nextint%28upperbound_%29.md) method. Alternative implementations are possible, but may lead to less uniform results.

## See Also

### Generating Random Numbers

- [nextInt](nextint%28%29.md): Generates and returns a new random integer.
- [nextIntWithUpperBound:](nextint%28upperbound_%29.md): Generates and returns a new random integer less than the specified limit.
- [nextUniform](nextuniform%28%29.md): Generates and returns a new random floating-point value.
