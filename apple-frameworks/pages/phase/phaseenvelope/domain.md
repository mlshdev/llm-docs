> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseenvelope/domain](https://developer.apple.com/documentation/phase/phaseenvelope/domain)

# domain (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The range of the envelope’s possible input values.

## Declaration

```swift
var domain: PHASENumericPair { get }
```

<a id="Discussion"></a>

## Discussion

This property is an ordered pair that describes input values along the *x* axis for which the [evaluate(x:)](evaluate%28x_%29.md) function can produce a non-zero output. The first number in the pair is the minimum input value, and the second number in the pair is the maximum input value.

When an envelope graphs volume over time, the framework scales the domain by [unitsPerSecond](../phaseengine/unitspersecond.md).  Likewise, when an envelope graphs volume over distance, the framework scales this property by [unitsPerMeter](../phaseengine/unitspermeter.md).

## See Also

### Bounding the Input

- [range](range.md): The bounds of the output value.

# domain (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The range of the envelope’s possible input values.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) PHASENumericPair * domain;
```

<a id="Discussion"></a>

## Discussion

This property is an ordered pair that describes input values along the *x* axis for which the [evaluateForValue:](evaluate%28x_%29.md) function can produce a non-zero output. The first number in the pair is the minimum input value, and the second number in the pair is the maximum input value.

When an envelope graphs volume over time, the framework scales the domain by [unitsPerSecond](../phaseengine/unitspersecond.md).  Likewise, when an envelope graphs volume over distance, the framework scales this property by [unitsPerMeter](../phaseengine/unitspermeter.md).

## See Also

### Bounding the Input

- [range](range.md): The bounds of the output value.
