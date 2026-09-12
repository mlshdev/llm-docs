> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkrandom/nextint()](https://developer.apple.com/documentation/gameplaykit/gkrandom/nextint())

# nextInt() (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Generates and returns a new random integer.

## Declaration

```swift
func nextInt() -> Int
```

<a id="return-value"></a>

## Return Value

A random integer value in the range `[INT32_MIN, INT32_MAX]`.

<a id="discussion"></a>

## Discussion

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## See Also

### Generating Random Numbers

- [nextInt(upperBound:)](nextint%28upperbound_%29.md): Generates and returns a new random integer less than the specified limit.
- [nextUniform()](nextuniform%28%29.md): Generates and returns a new random floating-point value.
- [nextBool()](nextbool%28%29.md): Generates and returns a new random Boolean value.

# nextInt (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Generates and returns a new random integer.

## Declaration

```objectivec
- (NSInteger) nextInt;
```

<a id="return-value"></a>

## Return Value

A random integer value in the range `[INT32_MIN, INT32_MAX]`.

<a id="discussion"></a>

## Discussion

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## See Also

### Generating Random Numbers

- [nextIntWithUpperBound:](nextint%28upperbound_%29.md): Generates and returns a new random integer less than the specified limit.
- [nextUniform](nextuniform%28%29.md): Generates and returns a new random floating-point value.
- [nextBool](nextbool%28%29.md): Generates and returns a new random Boolean value.
