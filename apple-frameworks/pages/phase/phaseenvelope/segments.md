> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phaseenvelope/segments

# segments (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An array of the envelope’s segments.

## Declaration

```swift
var segments: [PHASEEnvelopeSegment] { get }
```

<a id="Discussion"></a>

## Discussion

The framework sets the value of this property to the [init(startPoint:segments:)](init%28startpoint_segments_%29.md) argument.

## See Also

### Inspecting the Envelope

- [evaluate(x:)](evaluate%28x_%29.md): Provides the height of the envelope for an input value.
- [startPoint](startpoint.md): The starting point along the envelope’s duration.

# segments (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An array of the envelope’s segments.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<PHASEEnvelopeSegment *> * segments;
```

<a id="Discussion"></a>

## Discussion

The framework sets the value of this property to the [initWithStartPoint:segments:](init%28startpoint_segments_%29.md) argument.

## See Also

### Inspecting the Envelope

- [evaluateForValue:](evaluate%28x_%29.md): Provides the height of the envelope for an input value.
- [startPoint](startpoint.md): The starting point along the envelope’s duration.
