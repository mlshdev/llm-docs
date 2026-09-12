> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseenvelope/evaluate(x:)](https://developer.apple.com/documentation/phase/phaseenvelope/evaluate(x:))

# evaluate(x:) (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Provides the height of the envelope for an input value.

## Declaration

```swift
func evaluate(x: Double) -> Double
```

## Parameters

- `x`: A value within the envelope’s domain. The envelope clamps this parameter to a value within [domain](domain.md).

<a id="return-value"></a>

## Return Value

The curve’s height for the argument *x* value.

## See Also

### Inspecting the Envelope

- [segments](segments.md): An array of the envelope’s segments.
- [startPoint](startpoint.md): The starting point along the envelope’s duration.

# evaluateForValue: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Provides the height of the envelope for an input value.

## Declaration

```objectivec
- (double) evaluateForValue:(double) x;
```

## Parameters

- `x`: A value within the envelope’s domain. The envelope clamps this parameter to a value within [domain](domain.md).

<a id="return-value"></a>

## Return Value

The curve’s height for the argument *x* value.

## See Also

### Inspecting the Envelope

- [segments](segments.md): An array of the envelope’s segments.
- [startPoint](startpoint.md): The starting point along the envelope’s duration.
