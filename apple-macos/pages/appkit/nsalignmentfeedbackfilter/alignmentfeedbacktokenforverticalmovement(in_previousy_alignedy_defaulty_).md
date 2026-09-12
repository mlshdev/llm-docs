> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsalignmentfeedbackfilter/alignmentfeedbacktokenforverticalmovement(in:previousy:alignedy:defaulty:)](https://developer.apple.com/documentation/appkit/nsalignmentfeedbackfilter/alignmentfeedbacktokenforverticalmovement(in:previousy:alignedy:defaulty:))

# alignmentFeedbackTokenForVerticalMovement(in:previousY:alignedY:defaultY:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Requests a feedback token for the alignment of an object requiring vertical movement only.

## Declaration

```swift
func alignmentFeedbackTokenForVerticalMovement(in view: NSView?, previousY: CGFloat, alignedY: CGFloat, defaultY: CGFloat) -> (any NSAlignmentFeedbackToken)?
```

## Parameters

- `view`: The view ([NSView](../nsview.md)) in which the object was moved.
- `previousY`: The vertical location ([CGFloat](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct)) of the object prior to its move.
- `alignedY`: The new vertical location ([CGFloat](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct)) of the object if alignment occurs.
- `defaultY`: The current vertical location ([CGFloat](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct)) of the object. This is where the user actually moved the object. This location may be offset from the location of the cursor.

<a id="return-value"></a>

## Return Value

If the system determines that the alignment should not occur, a null value is returned. Otherwise, a feedback token of type `NSAlignmentFeedbackToken` is returned.

<a id="Discussion"></a>

## Discussion

This method requests a feedback token for the alignment of an object requiring vertical movement only.

If a feedback token is returned, call [performFeedback(\_:performanceTime:)](performfeedback%28__performancetime_%29.md) to initiate haptic feedback. Then, move the object to its aligned location.

If no feedback token is returned, don’t perform the vertical alignment or request haptic feedback. Even if this vertical alignment fails, be sure to check other alignments. For example, a horizontal alignment may still be allowed. If no alignments will occur, move the object to its default location.

## See Also

### Related Documentation

- [performFeedback(\_:performanceTime:)](performfeedback%28__performancetime_%29.md): Performs the haptic feedback described by one or more alignment feedback tokens.

### Preparing Haptic Feedback for Alignment

- [alignmentFeedbackTokenForMovement(in:previousPoint:alignedPoint:defaultPoint:)](alignmentfeedbacktokenformovement%28in_previouspoint_alignedpoint_defaultpoint_%29.md): Requests a feedback token for the alignment of an object requiring horizontal and vertical movement.
- [alignmentFeedbackTokenForHorizontalMovement(in:previousX:alignedX:defaultX:)](alignmentfeedbacktokenforhorizontalmovement%28in_previousx_alignedx_defaultx_%29.md): Requests a feedback token for the alignment of an object requiring horizontal movement only.

# alignmentFeedbackTokenForVerticalMovementInView:previousY:alignedY:defaultY: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Requests a feedback token for the alignment of an object requiring vertical movement only.

## Declaration

```objectivec
- (id<NSAlignmentFeedbackToken>) alignmentFeedbackTokenForVerticalMovementInView:(NSView *) view previousY:(CGFloat) previousY alignedY:(CGFloat) alignedY defaultY:(CGFloat) defaultY;
```

## Parameters

- `view`: The view ([NSView](../nsview.md)) in which the object was moved.
- `previousY`: The vertical location ([CGFloat](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct)) of the object prior to its move.
- `alignedY`: The new vertical location ([CGFloat](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct)) of the object if alignment occurs.
- `defaultY`: The current vertical location ([CGFloat](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct)) of the object. This is where the user actually moved the object. This location may be offset from the location of the cursor.

<a id="return-value"></a>

## Return Value

If the system determines that the alignment should not occur, a null value is returned. Otherwise, a feedback token of type `NSAlignmentFeedbackToken` is returned.

<a id="Discussion"></a>

## Discussion

This method requests a feedback token for the alignment of an object requiring vertical movement only.

If a feedback token is returned, call [performFeedback:performanceTime:](performfeedback%28__performancetime_%29.md) to initiate haptic feedback. Then, move the object to its aligned location.

If no feedback token is returned, don’t perform the vertical alignment or request haptic feedback. Even if this vertical alignment fails, be sure to check other alignments. For example, a horizontal alignment may still be allowed. If no alignments will occur, move the object to its default location.

## See Also

### Related Documentation

- [performFeedback:performanceTime:](performfeedback%28__performancetime_%29.md): Performs the haptic feedback described by one or more alignment feedback tokens.

### Preparing Haptic Feedback for Alignment

- [alignmentFeedbackTokenForMovementInView:previousPoint:alignedPoint:defaultPoint:](alignmentfeedbacktokenformovement%28in_previouspoint_alignedpoint_defaultpoint_%29.md): Requests a feedback token for the alignment of an object requiring horizontal and vertical movement.
- [alignmentFeedbackTokenForHorizontalMovementInView:previousX:alignedX:defaultX:](alignmentfeedbacktokenforhorizontalmovement%28in_previousx_alignedx_defaultx_%29.md): Requests a feedback token for the alignment of an object requiring horizontal movement only.
