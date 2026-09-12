> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsalignmentfeedbackfilter/alignmentfeedbacktokenforhorizontalmovement(in:previousx:alignedx:defaultx:)](https://developer.apple.com/documentation/appkit/nsalignmentfeedbackfilter/alignmentfeedbacktokenforhorizontalmovement(in:previousx:alignedx:defaultx:))

# alignmentFeedbackTokenForHorizontalMovement(in:previousX:alignedX:defaultX:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Requests a feedback token for the alignment of an object requiring horizontal movement only.

## Declaration

```swift
func alignmentFeedbackTokenForHorizontalMovement(in view: NSView?, previousX: CGFloat, alignedX: CGFloat, defaultX: CGFloat) -> (any NSAlignmentFeedbackToken)?
```

## Parameters

- `view`: The view ([NSView](../nsview.md)) in which the object was moved.
- `previousX`: The horizontal location ([CGFloat](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct)) of the object prior to its move.
- `alignedX`: The new horizontal location ([CGFloat](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct)) of the object if alignment occurs.
- `defaultX`: The current horizontal location ([CGFloat](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct)) of the object. This is where the user actually moved the object. This location may be offset from the location of the cursor.

<a id="return-value"></a>

## Return Value

If the system determines that the alignment should not occur, a null value is returned. Otherwise, a feedback token of type `NSAlignmentFeedbackToken` is returned.

<a id="Discussion"></a>

## Discussion

This method requests a feedback token for the alignment of an object requiring horizontal movement only.

If a feedback token is returned, call [performFeedback(\_:performanceTime:)](performfeedback%28__performancetime_%29.md) to initiate haptic feedback. Then, move the object to its aligned location.

If no feedback token is returned, don’t perform the horizontal alignment or request haptic feedback. Even if this horizontal alignment fails, be sure to check other alignments. For example, a vertical alignment may still be allowed. If no alignments will occur, move the object to its default location.

## See Also

### Related Documentation

- [performFeedback(\_:performanceTime:)](performfeedback%28__performancetime_%29.md): Performs the haptic feedback described by one or more alignment feedback tokens.

### Preparing Haptic Feedback for Alignment

- [alignmentFeedbackTokenForMovement(in:previousPoint:alignedPoint:defaultPoint:)](alignmentfeedbacktokenformovement%28in_previouspoint_alignedpoint_defaultpoint_%29.md): Requests a feedback token for the alignment of an object requiring horizontal and vertical movement.
- [alignmentFeedbackTokenForVerticalMovement(in:previousY:alignedY:defaultY:)](alignmentfeedbacktokenforverticalmovement%28in_previousy_alignedy_defaulty_%29.md): Requests a feedback token for the alignment of an object requiring vertical movement only.

# alignmentFeedbackTokenForHorizontalMovementInView:previousX:alignedX:defaultX: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Requests a feedback token for the alignment of an object requiring horizontal movement only.

## Declaration

```objectivec
- (id<NSAlignmentFeedbackToken>) alignmentFeedbackTokenForHorizontalMovementInView:(NSView *) view previousX:(CGFloat) previousX alignedX:(CGFloat) alignedX defaultX:(CGFloat) defaultX;
```

## Parameters

- `view`: The view ([NSView](../nsview.md)) in which the object was moved.
- `previousX`: The horizontal location ([CGFloat](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct)) of the object prior to its move.
- `alignedX`: The new horizontal location ([CGFloat](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct)) of the object if alignment occurs.
- `defaultX`: The current horizontal location ([CGFloat](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct)) of the object. This is where the user actually moved the object. This location may be offset from the location of the cursor.

<a id="return-value"></a>

## Return Value

If the system determines that the alignment should not occur, a null value is returned. Otherwise, a feedback token of type `NSAlignmentFeedbackToken` is returned.

<a id="Discussion"></a>

## Discussion

This method requests a feedback token for the alignment of an object requiring horizontal movement only.

If a feedback token is returned, call [performFeedback:performanceTime:](performfeedback%28__performancetime_%29.md) to initiate haptic feedback. Then, move the object to its aligned location.

If no feedback token is returned, don’t perform the horizontal alignment or request haptic feedback. Even if this horizontal alignment fails, be sure to check other alignments. For example, a vertical alignment may still be allowed. If no alignments will occur, move the object to its default location.

## See Also

### Related Documentation

- [performFeedback:performanceTime:](performfeedback%28__performancetime_%29.md): Performs the haptic feedback described by one or more alignment feedback tokens.

### Preparing Haptic Feedback for Alignment

- [alignmentFeedbackTokenForMovementInView:previousPoint:alignedPoint:defaultPoint:](alignmentfeedbacktokenformovement%28in_previouspoint_alignedpoint_defaultpoint_%29.md): Requests a feedback token for the alignment of an object requiring horizontal and vertical movement.
- [alignmentFeedbackTokenForVerticalMovementInView:previousY:alignedY:defaultY:](alignmentfeedbacktokenforverticalmovement%28in_previousy_alignedy_defaulty_%29.md): Requests a feedback token for the alignment of an object requiring vertical movement only.
