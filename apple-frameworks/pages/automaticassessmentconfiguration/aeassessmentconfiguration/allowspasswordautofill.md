> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowspasswordautofill](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowspasswordautofill)

# allowsPasswordAutoFill (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A Boolean value that indicates whether to allow password autofill during an assessment.

## Declaration

```swift
var allowsPasswordAutoFill: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Users can store passwords for use with Password Autofill by turning on the feature in the Settings app (General \> Passwords \> AutoFill Passwords). An assessment session disables Password Autofill by default, but you can allow it by setting [allowsPasswordAutoFill](allowspasswordautofill.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

## See Also

### Allowing typing assistance

- [allowsContinuousPathKeyboard](allowscontinuouspathkeyboard.md): A Boolean value that indicates whether to allow Slide to Type to operate during an assessment.
- [allowsKeyboardShortcuts](allowskeyboardshortcuts.md): A Boolean value that indicates whether to allow keyboard shortcuts during an assessment.
- [allowsPredictiveKeyboard](allowspredictivekeyboard.md): A Boolean value that indicates whether to enable the predictive keyboard during an assessment.

# allowsPasswordAutoFill (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+

A Boolean value that indicates whether to allow password autofill during an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsPasswordAutoFill;
```

<a id="Discussion"></a>

## Discussion

Users can store passwords for use with Password Autofill by turning on the feature in the Settings app (General \> Passwords \> AutoFill Passwords). An assessment session disables Password Autofill by default, but you can allow it by setting [allowsPasswordAutoFill](allowspasswordautofill.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

## See Also

### Allowing typing assistance

- [allowsContinuousPathKeyboard](allowscontinuouspathkeyboard.md): A Boolean value that indicates whether to allow Slide to Type to operate during an assessment.
- [allowsKeyboardShortcuts](allowskeyboardshortcuts.md): A Boolean value that indicates whether to allow keyboard shortcuts during an assessment.
- [allowsPredictiveKeyboard](allowspredictivekeyboard.md): A Boolean value that indicates whether to enable the predictive keyboard during an assessment.
