> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseenvelope/startpoint](https://developer.apple.com/documentation/phase/phaseenvelope/startpoint)

# startPoint (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The starting point along the envelope’s duration.

## Declaration

```swift
var startPoint: simd_double2 { get }
```

<a id="Discussion"></a>

## Discussion

The framework sets the value of this property to the [init(startPoint:segments:)](init%28startpoint_segments_%29.md) argument.

## See Also

### Inspecting the Envelope

- [evaluate(x:)](evaluate%28x_%29.md): Provides the height of the envelope for an input value.
- [segments](segments.md): An array of the envelope’s segments.

# startPoint (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The starting point along the envelope’s duration.

## Declaration

```objectivec
@property (nonatomic, readonly) simd_double2 startPoint;
```

<a id="Discussion"></a>

## Discussion

The framework sets the value of this property to the [initWithStartPoint:segments:](init%28startpoint_segments_%29.md) argument.

## See Also

### Inspecting the Envelope

- [evaluateForValue:](evaluate%28x_%29.md): Provides the height of the envelope for an input value.
- [segments](segments.md): An array of the envelope’s segments.
