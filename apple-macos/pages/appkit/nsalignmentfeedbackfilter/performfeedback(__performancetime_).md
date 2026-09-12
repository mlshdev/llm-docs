> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsalignmentfeedbackfilter/performfeedback(_:performancetime:)](https://developer.apple.com/documentation/appkit/nsalignmentfeedbackfilter/performfeedback(_:performancetime:))

# performFeedback(\_:performanceTime:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Performs the haptic feedback described by one or more alignment feedback tokens.

## Declaration

```swift
func performFeedback(_ alignmentFeedbackTokens: [any NSAlignmentFeedbackToken], performanceTime: NSHapticFeedbackManager.PerformanceTime)
```

## Parameters

- `alignmentFeedbackTokens`: One or more feedback tokens prepared for specific alignment locations by calling [alignmentFeedbackTokenForMovement(in:previousPoint:alignedPoint:defaultPoint:)](alignmentfeedbacktokenformovement%28in_previouspoint_alignedpoint_defaultpoint_%29.md), [alignmentFeedbackTokenForHorizontalMovement(in:previousX:alignedX:defaultX:)](alignmentfeedbacktokenforhorizontalmovement%28in_previousx_alignedx_defaultx_%29.md), or [alignmentFeedbackTokenForVerticalMovement(in:previousY:alignedY:defaultY:)](alignmentfeedbacktokenforverticalmovement%28in_previousy_alignedy_defaulty_%29.md). Typically, no more than one feedback token per dimension (horizontal/vertical) should be provided.
- `performanceTime`: The time, of type `NSHapticFeedbackPerformanceTime`, when the feedback should be provided to the user.

<a id="Discussion"></a>

## Discussion

Call this method to initiate haptic feedback to the user. Pass it one or more alignment feedback tokens of type `NSAlignmentFeedbackToken` and a time to execute of type `NSHapticFeedbackPerformanceTime`. Call this method immediately before moving the object to its new aligned position.

## See Also

### Related Documentation

- [NSHapticFeedbackPerformer](../nshapticfeedbackperformer.md): A set of methods and constants that a haptic feedback performer implements.
- [NSHapticFeedbackManager.PerformanceTime](../nshapticfeedbackmanager/performancetime.md): A time at which to provide haptic feedback to the user.

# performFeedback:performanceTime: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Performs the haptic feedback described by one or more alignment feedback tokens.

## Declaration

```objectivec
- (void) performFeedback:(NSArray<id<NSAlignmentFeedbackToken>> *) alignmentFeedbackTokens performanceTime:(NSHapticFeedbackPerformanceTime) performanceTime;
```

## Parameters

- `alignmentFeedbackTokens`: One or more feedback tokens prepared for specific alignment locations by calling [alignmentFeedbackTokenForMovementInView:previousPoint:alignedPoint:defaultPoint:](alignmentfeedbacktokenformovement%28in_previouspoint_alignedpoint_defaultpoint_%29.md), [alignmentFeedbackTokenForHorizontalMovementInView:previousX:alignedX:defaultX:](alignmentfeedbacktokenforhorizontalmovement%28in_previousx_alignedx_defaultx_%29.md), or [alignmentFeedbackTokenForVerticalMovementInView:previousY:alignedY:defaultY:](alignmentfeedbacktokenforverticalmovement%28in_previousy_alignedy_defaulty_%29.md). Typically, no more than one feedback token per dimension (horizontal/vertical) should be provided.
- `performanceTime`: The time, of type `NSHapticFeedbackPerformanceTime`, when the feedback should be provided to the user.

<a id="Discussion"></a>

## Discussion

Call this method to initiate haptic feedback to the user. Pass it one or more alignment feedback tokens of type `NSAlignmentFeedbackToken` and a time to execute of type `NSHapticFeedbackPerformanceTime`. Call this method immediately before moving the object to its new aligned position.

## See Also

### Related Documentation

- [NSHapticFeedbackPerformer](../nshapticfeedbackperformer.md): A set of methods and constants that a haptic feedback performer implements.
- [NSHapticFeedbackPerformanceTime](../nshapticfeedbackmanager/performancetime.md): A time at which to provide haptic feedback to the user.
