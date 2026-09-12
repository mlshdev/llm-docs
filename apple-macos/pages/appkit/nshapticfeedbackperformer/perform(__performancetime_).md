> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nshapticfeedbackperformer/perform(_:performancetime:)](https://developer.apple.com/documentation/appkit/nshapticfeedbackperformer/perform(_:performancetime:))

# perform(\_:performanceTime:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Initiates a specific pattern of haptic feedback to the user.

## Declaration

```swift
func perform(_ pattern: NSHapticFeedbackManager.FeedbackPattern, performanceTime: NSHapticFeedbackManager.PerformanceTime)
```

## Parameters

- `pattern`: A pattern of feedback to be provided to the user. For possible values, see [NSHapticFeedbackManager.FeedbackPattern](../nshapticfeedbackmanager/feedbackpattern.md).
- `performanceTime`: The time when the feedback should be provided to the user. For possible values, see [NSHapticFeedbackManager.PerformanceTime](../nshapticfeedbackmanager/performancetime.md).

<a id="Discussion"></a>

## Discussion

In some cases, the system may override a call to this method. For example, a Force Touch trackpad won’t provide haptic feedback if the user isn’t touching the trackpad.

> **Important**

>  Call this method only in response to user-initiated actions. Ideally, visual feedback, such as a highlight or appearance of an alignment guide, should accompany the feedback.

## See Also

### Related Documentation

- [NSHapticFeedbackManager.PerformanceTime](../nshapticfeedbackmanager/performancetime.md): A time at which to provide haptic feedback to the user.
- [NSHapticFeedbackManager](../nshapticfeedbackmanager.md): An object that provides access to the haptic feedback management attributes on a system with a Force Touch trackpad.
- [NSHapticFeedbackManager.FeedbackPattern](../nshapticfeedbackmanager/feedbackpattern.md): A pattern of haptic feedback to be provided to the user.

# performFeedbackPattern:performanceTime: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initiates a specific pattern of haptic feedback to the user.

## Declaration

```objectivec
- (void) performFeedbackPattern:(NSHapticFeedbackPattern) pattern performanceTime:(NSHapticFeedbackPerformanceTime) performanceTime;
```

## Parameters

- `pattern`: A pattern of feedback to be provided to the user. For possible values, see [NSHapticFeedbackPattern](../nshapticfeedbackmanager/feedbackpattern.md).
- `performanceTime`: The time when the feedback should be provided to the user. For possible values, see [NSHapticFeedbackPerformanceTime](../nshapticfeedbackmanager/performancetime.md).

<a id="Discussion"></a>

## Discussion

In some cases, the system may override a call to this method. For example, a Force Touch trackpad won’t provide haptic feedback if the user isn’t touching the trackpad.

> **Important**

>  Call this method only in response to user-initiated actions. Ideally, visual feedback, such as a highlight or appearance of an alignment guide, should accompany the feedback.

## See Also

### Related Documentation

- [NSHapticFeedbackPerformanceTime](../nshapticfeedbackmanager/performancetime.md): A time at which to provide haptic feedback to the user.
- [NSHapticFeedbackManager](../nshapticfeedbackmanager.md): An object that provides access to the haptic feedback management attributes on a system with a Force Touch trackpad.
- [NSHapticFeedbackPattern](../nshapticfeedbackmanager/feedbackpattern.md): A pattern of haptic feedback to be provided to the user.
