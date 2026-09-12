> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseenvelope/range](https://developer.apple.com/documentation/phase/phaseenvelope/range)

# range (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The bounds of the output value.

## Declaration

```swift
var range: PHASENumericPair { get }
```

<a id="Discussion"></a>

## Discussion

This property is an ordered pair that defines the range of possible output values along the *y* axis for the [evaluate(x:)](evaluate%28x_%29.md) function. The first number in the pair is the minimum output value, and the second number in the pair is the maximum output value.

## See Also

### Bounding the Input

- [domain](domain.md): The range of the envelope’s possible input values.

# range (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The bounds of the output value.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) PHASENumericPair * range;
```

<a id="Discussion"></a>

## Discussion

This property is an ordered pair that defines the range of possible output values along the *y* axis for the [evaluateForValue:](evaluate%28x_%29.md) function. The first number in the pair is the minimum output value, and the second number in the pair is the maximum output value.

## See Also

### Bounding the Input

- [domain](domain.md): The range of the envelope’s possible input values.
