> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkrandom/nextint(upperbound:)](https://developer.apple.com/documentation/gameplaykit/gkrandom/nextint(upperbound:))

# nextInt(upperBound:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Generates and returns a new random integer less than the specified limit.

## Declaration

```swift
func nextInt(upperBound: Int) -> Int
```

## Parameters

- `upperBound`: A limit on the values of random numbers to generate.

<a id="return-value"></a>

## Return Value

A new random integer greater than or equal to zero and less than the value of the `upperBound` parameter.

## See Also

### Generating Random Numbers

- [nextInt()](nextint%28%29.md): Generates and returns a new random integer.
- [nextUniform()](nextuniform%28%29.md): Generates and returns a new random floating-point value.
- [nextBool()](nextbool%28%29.md): Generates and returns a new random Boolean value.

# nextIntWithUpperBound: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Generates and returns a new random integer less than the specified limit.

## Declaration

```objectivec
- (NSUInteger) nextIntWithUpperBound:(NSUInteger) upperBound;
```

## Parameters

- `upperBound`: A limit on the values of random numbers to generate.

<a id="return-value"></a>

## Return Value

A new random integer greater than or equal to zero and less than the value of the `upperBound` parameter.

## See Also

### Generating Random Numbers

- [nextInt](nextint%28%29.md): Generates and returns a new random integer.
- [nextUniform](nextuniform%28%29.md): Generates and returns a new random floating-point value.
- [nextBool](nextbool%28%29.md): Generates and returns a new random Boolean value.
