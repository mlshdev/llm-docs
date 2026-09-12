> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowspredictivekeyboard](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowspredictivekeyboard)

# allowsPredictiveKeyboard (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 18.0+ · macOS 15.0+

A Boolean value that indicates whether to enable the predictive keyboard during an assessment.

## Declaration

```swift
var allowsPredictiveKeyboard: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Users can turn on the Predictive Keyboard feature in the Settings app (General \> Keyboard). An assessment session disables this feature by default, but you can allow it by setting [allowsPredictiveKeyboard](allowspredictivekeyboard.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

## See Also

### Allowing typing assistance

- [allowsContinuousPathKeyboard](allowscontinuouspathkeyboard.md): A Boolean value that indicates whether to allow Slide to Type to operate during an assessment.
- [allowsKeyboardShortcuts](allowskeyboardshortcuts.md): A Boolean value that indicates whether to allow keyboard shortcuts during an assessment.
- [allowsPasswordAutoFill](allowspasswordautofill.md): A Boolean value that indicates whether to allow password autofill during an assessment.

# allowsPredictiveKeyboard (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 18.0+ · macOS 15.0+

A Boolean value that indicates whether to enable the predictive keyboard during an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsPredictiveKeyboard;
```

<a id="Discussion"></a>

## Discussion

Users can turn on the Predictive Keyboard feature in the Settings app (General \> Keyboard). An assessment session disables this feature by default, but you can allow it by setting [allowsPredictiveKeyboard](allowspredictivekeyboard.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

## See Also

### Allowing typing assistance

- [allowsContinuousPathKeyboard](allowscontinuouspathkeyboard.md): A Boolean value that indicates whether to allow Slide to Type to operate during an assessment.
- [allowsKeyboardShortcuts](allowskeyboardshortcuts.md): A Boolean value that indicates whether to allow keyboard shortcuts during an assessment.
- [allowsPasswordAutoFill](allowspasswordautofill.md): A Boolean value that indicates whether to allow password autofill during an assessment.
