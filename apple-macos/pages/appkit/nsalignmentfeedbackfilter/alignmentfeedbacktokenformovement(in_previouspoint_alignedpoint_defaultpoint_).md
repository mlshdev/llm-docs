> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsalignmentfeedbackfilter/alignmentfeedbacktokenformovement(in:previouspoint:alignedpoint:defaultpoint:)](https://developer.apple.com/documentation/appkit/nsalignmentfeedbackfilter/alignmentfeedbacktokenformovement(in:previouspoint:alignedpoint:defaultpoint:))

# alignmentFeedbackTokenForMovement(in:previousPoint:alignedPoint:defaultPoint:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Requests a feedback token for the alignment of an object requiring horizontal and vertical movement.

## Declaration

```swift
func alignmentFeedbackTokenForMovement(in view: NSView?, previousPoint: NSPoint, alignedPoint: NSPoint, defaultPoint: NSPoint) -> (any NSAlignmentFeedbackToken)?
```

## Parameters

- `view`: The view ([NSView](../nsview.md)) in which the object was moved.
- `previousPoint`: The location ([NSPoint](https://developer.apple.com/documentation/foundation/nspoint)) of the object prior to its move.
- `alignedPoint`: The new location ([NSPoint](https://developer.apple.com/documentation/foundation/nspoint)) of the object if alignment occurs.
- `defaultPoint`: The current location ([NSPoint](https://developer.apple.com/documentation/foundation/nspoint)) of the object. This is where the user actually moved the object. This location may be offset from the location of the cursor.

<a id="return-value"></a>

## Return Value

A null value if the system determines that the alignment should not occur. Otherwise, a feedback token of type `NSAlignmentFeedbackToken` is returned.

<a id="Discussion"></a>

## Discussion

This method requests a feedback token for the alignment of an object requiring horizontal and vertical movement.

If a feedback token is returned, call [performFeedback(\_:performanceTime:)](performfeedback%28__performancetime_%29.md) to initiate haptic feedback. Then, move the object to its aligned location.

If no feedback token is returned, don’t perform the alignment or request haptic feedback. Even if this joint horizontal and vertical alignment fails, be sure to check other alignments. For example, an individual horizontal or vertical alignment may still be allowed. If no alignments will occur, move the object to its default location.

## See Also

### Related Documentation

- [performFeedback(\_:performanceTime:)](performfeedback%28__performancetime_%29.md): Performs the haptic feedback described by one or more alignment feedback tokens.

### Preparing Haptic Feedback for Alignment

- [alignmentFeedbackTokenForHorizontalMovement(in:previousX:alignedX:defaultX:)](alignmentfeedbacktokenforhorizontalmovement%28in_previousx_alignedx_defaultx_%29.md): Requests a feedback token for the alignment of an object requiring horizontal movement only.
- [alignmentFeedbackTokenForVerticalMovement(in:previousY:alignedY:defaultY:)](alignmentfeedbacktokenforverticalmovement%28in_previousy_alignedy_defaulty_%29.md): Requests a feedback token for the alignment of an object requiring vertical movement only.

# alignmentFeedbackTokenForMovementInView:previousPoint:alignedPoint:defaultPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Requests a feedback token for the alignment of an object requiring horizontal and vertical movement.

## Declaration

```objectivec
- (id<NSAlignmentFeedbackToken>) alignmentFeedbackTokenForMovementInView:(NSView *) view previousPoint:(NSPoint) previousPoint alignedPoint:(NSPoint) alignedPoint defaultPoint:(NSPoint) defaultPoint;
```

## Parameters

- `view`: The view ([NSView](../nsview.md)) in which the object was moved.
- `previousPoint`: The location ([NSPoint](https://developer.apple.com/documentation/foundation/nspoint)) of the object prior to its move.
- `alignedPoint`: The new location ([NSPoint](https://developer.apple.com/documentation/foundation/nspoint)) of the object if alignment occurs.
- `defaultPoint`: The current location ([NSPoint](https://developer.apple.com/documentation/foundation/nspoint)) of the object. This is where the user actually moved the object. This location may be offset from the location of the cursor.

<a id="return-value"></a>

## Return Value

A null value if the system determines that the alignment should not occur. Otherwise, a feedback token of type `NSAlignmentFeedbackToken` is returned.

<a id="Discussion"></a>

## Discussion

This method requests a feedback token for the alignment of an object requiring horizontal and vertical movement.

If a feedback token is returned, call [performFeedback:performanceTime:](performfeedback%28__performancetime_%29.md) to initiate haptic feedback. Then, move the object to its aligned location.

If no feedback token is returned, don’t perform the alignment or request haptic feedback. Even if this joint horizontal and vertical alignment fails, be sure to check other alignments. For example, an individual horizontal or vertical alignment may still be allowed. If no alignments will occur, move the object to its default location.

## See Also

### Related Documentation

- [performFeedback:performanceTime:](performfeedback%28__performancetime_%29.md): Performs the haptic feedback described by one or more alignment feedback tokens.

### Preparing Haptic Feedback for Alignment

- [alignmentFeedbackTokenForHorizontalMovementInView:previousX:alignedX:defaultX:](alignmentfeedbacktokenforhorizontalmovement%28in_previousx_alignedx_defaultx_%29.md): Requests a feedback token for the alignment of an object requiring horizontal movement only.
- [alignmentFeedbackTokenForVerticalMovementInView:previousY:alignedY:defaultY:](alignmentfeedbacktokenforverticalmovement%28in_previousy_alignedy_defaulty_%29.md): Requests a feedback token for the alignment of an object requiring vertical movement only.
