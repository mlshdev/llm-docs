> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseenvelope/init(startpoint:segments:)](https://developer.apple.com/documentation/phase/phaseenvelope/init(startpoint:segments:))

# init(startPoint:segments:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates an envelope with a start point and segments.

## Declaration

```swift
init?(startPoint: simd_double2, segments: [PHASEEnvelopeSegment])
```

## Parameters

- `startPoint`: The start point of the envelope.
- `segments`: An array of segments.

<a id="Discussion"></a>

## Discussion

For an empty `segments` argument, the resulting envelope contains one segment where the end point matches the start point. If the `segments` argument contains more than one segment, the resulting [segments](segments.md) array sorts in ascending order on the *x* value.

> **Important**

>  The start point’s *x* value must be less than or equal to the segment with the lowest *x* value of all other `segments`, otherwise this function returns `nil`.

# initWithStartPoint:segments: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates an envelope with a start point and segments.

## Declaration

```objectivec
- (instancetype) initWithStartPoint:(simd_double2) startPoint segments:(NSArray<PHASEEnvelopeSegment *> *) segments;
```

## Parameters

- `startPoint`: The start point of the envelope.
- `segments`: An array of segments.

<a id="Discussion"></a>

## Discussion

For an empty `segments` argument, the resulting envelope contains one segment where the end point matches the start point. If the `segments` argument contains more than one segment, the resulting [segments](segments.md) array sorts in ascending order on the *x* value.

> **Important**

>  The start point’s *x* value must be less than or equal to the segment with the lowest *x* value of all other `segments`, otherwise this function returns `nil`.
