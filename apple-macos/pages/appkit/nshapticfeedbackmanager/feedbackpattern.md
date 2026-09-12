> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nshapticfeedbackmanager/feedbackpattern](https://developer.apple.com/documentation/appkit/nshapticfeedbackmanager/feedbackpattern)

# NSHapticFeedbackManager.FeedbackPattern (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.11+

A pattern of haptic feedback to be provided to the user.

## Declaration

```swift
enum FeedbackPattern
```

## Topics

### Constants

- [NSHapticFeedbackManager.FeedbackPattern.generic](feedbackpattern/generic.md): A general haptic feedback pattern. Use this when no other feedback patterns apply.
- [NSHapticFeedbackManager.FeedbackPattern.alignment](feedbackpattern/alignment.md): A haptic feedback pattern to be used in response to the alignment of an object the user is dragging around. For example, this pattern of feedback could be used in a drawing app when the user drags a shape into alignment with another shape. Other scenarios where this type of feedback could be used might include scaling an object to fit within specific dimensions, positioning an object at a preferred location, or reaching the beginning/minimum or end/maximum of something, such as a track view in an audio/video app.
- [NSHapticFeedbackManager.FeedbackPattern.levelChange](feedbackpattern/levelchange.md): A haptic feedback pattern to be used as the user moves between discrete levels of pressure. This pattern of feedback is used by multilevel accelerator buttons (class [NSMultiLevelAcceleratorButton](../nsmultilevelacceleratorbutton.md)).

### Initializers

- [init(rawValue:)](feedbackpattern/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [NSHapticFeedbackManager.PerformanceTime](performancetime.md): A time at which to provide haptic feedback to the user.

# NSHapticFeedbackPattern (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.11+

A pattern of haptic feedback to be provided to the user.

## Declaration

```objectivec
enum NSHapticFeedbackPattern : NSInteger;
```

## Topics

### Constants

- [NSHapticFeedbackPatternGeneric](feedbackpattern/generic.md): A general haptic feedback pattern. Use this when no other feedback patterns apply.
- [NSHapticFeedbackPatternAlignment](feedbackpattern/alignment.md): A haptic feedback pattern to be used in response to the alignment of an object the user is dragging around. For example, this pattern of feedback could be used in a drawing app when the user drags a shape into alignment with another shape. Other scenarios where this type of feedback could be used might include scaling an object to fit within specific dimensions, positioning an object at a preferred location, or reaching the beginning/minimum or end/maximum of something, such as a track view in an audio/video app.
- [NSHapticFeedbackPatternLevelChange](feedbackpattern/levelchange.md): A haptic feedback pattern to be used as the user moves between discrete levels of pressure. This pattern of feedback is used by multilevel accelerator buttons (class [NSMultiLevelAcceleratorButton](../nsmultilevelacceleratorbutton.md)).

## See Also

### Enumerations

- [NSHapticFeedbackPerformanceTime](performancetime.md): A time at which to provide haptic feedback to the user.
