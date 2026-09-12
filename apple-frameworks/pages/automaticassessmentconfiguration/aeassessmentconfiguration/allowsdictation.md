> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsdictation](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsdictation)

# allowsDictation (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to allow the use of dictation during an assessment.

## Declaration

```swift
var allowsDictation: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

By turning on Enable Dictation (General \> Keyboard in the Settings app on iOS and iPadOS), users can speak into their device and have the words they speak converted to text. An assessment session disables this feature by default, but you can allow it by setting [allowsDictation](allowsdictation.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

## See Also

### Allowing accessibility

- [allowsAccessibilitySpeech](allowsaccessibilityspeech.md): Deprecated. A Boolean value that indicates whether to allow the speech-related accessibility features during an assessment.

# allowsDictation (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to allow the use of dictation during an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsDictation;
```

<a id="Discussion"></a>

## Discussion

By turning on Enable Dictation (General \> Keyboard in the Settings app on iOS and iPadOS), users can speak into their device and have the words they speak converted to text. An assessment session disables this feature by default, but you can allow it by setting [allowsDictation](allowsdictation.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

## See Also

### Allowing accessibility

- [allowsAccessibilitySpeech](allowsaccessibilityspeech.md): Deprecated. A Boolean value that indicates whether to allow the speech-related accessibility features during an assessment.
