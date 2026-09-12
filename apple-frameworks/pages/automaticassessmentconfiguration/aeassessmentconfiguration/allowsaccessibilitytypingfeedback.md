> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsaccessibilitytypingfeedback](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsaccessibilitytypingfeedback)

# allowsAccessibilityTypingFeedback (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A Boolean value that indicates whether to allow accessibility typing feedback during an assessment.

## Declaration

```swift
var allowsAccessibilityTypingFeedback: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Users can enable typing feedback features in the Settings app (Accessibility \> Keyboards & Typing \> Typing Feedback)  to receive audio feedback when typing. An assessment session disables these accessibility typing feedback features by default, but you can allow them by setting [allowsAccessibilityTypingFeedback](allowsaccessibilitytypingfeedback.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

# allowsAccessibilityTypingFeedback (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A Boolean value that indicates whether to allow accessibility typing feedback during an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsAccessibilityTypingFeedback;
```

<a id="discussion"></a>

## Discussion

Users can enable typing feedback features in the Settings app (Accessibility \> Keyboards & Typing \> Typing Feedback)  to receive audio feedback when typing. An assessment session disables these accessibility typing feedback features by default, but you can allow them by setting [allowsAccessibilityTypingFeedback](allowsaccessibilitytypingfeedback.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.
