> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsaccessibilityspeech](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsaccessibilityspeech)

# allowsAccessibilitySpeech (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0)

A Boolean value that indicates whether to allow the speech-related accessibility features during an assessment.

## Declaration

```swift
var allowsAccessibilitySpeech: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

A device reads text aloud for users who need it. In particular, users can enable the following features from Accessibility \> Spoken Content in the Settings app on iOS and iPadOS:

- Speak Selection
- Speak Screen
- Typing Feedback \> Speak Words

An assessment session disables these features by default, but you can allow them by setting [allowsAccessibilitySpeech](allowsaccessibilityspeech.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

## See Also

### Allowing accessibility

- [allowsDictation](allowsdictation.md): A Boolean value that indicates whether to allow the use of dictation during an assessment.

# allowsAccessibilitySpeech (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0)

A Boolean value that indicates whether to allow the speech-related accessibility features during an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsAccessibilitySpeech;
```

<a id="Discussion"></a>

## Discussion

A device reads text aloud for users who need it. In particular, users can enable the following features from Accessibility \> Spoken Content in the Settings app on iOS and iPadOS:

- Speak Selection
- Speak Screen
- Typing Feedback \> Speak Words

An assessment session disables these features by default, but you can allow them by setting [allowsAccessibilitySpeech](allowsaccessibilityspeech.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

## See Also

### Allowing accessibility

- [allowsDictation](allowsdictation.md): A Boolean value that indicates whether to allow the use of dictation during an assessment.
