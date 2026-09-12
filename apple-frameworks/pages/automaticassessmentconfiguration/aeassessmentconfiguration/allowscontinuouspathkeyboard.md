> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowscontinuouspathkeyboard](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowscontinuouspathkeyboard)

# allowsContinuousPathKeyboard (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A Boolean value that indicates whether to allow Slide to Type to operate during an assessment.

## Declaration

```swift
var allowsContinuousPathKeyboard: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Users can turn on Slide to Type in the Settings app (General \> Keyboard). An assessment session disables this feature by default, but you can allow it by setting [allowsContinuousPathKeyboard](allowscontinuouspathkeyboard.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

## See Also

### Allowing typing assistance

- [allowsKeyboardShortcuts](allowskeyboardshortcuts.md): A Boolean value that indicates whether to allow keyboard shortcuts during an assessment.
- [allowsPredictiveKeyboard](allowspredictivekeyboard.md): A Boolean value that indicates whether to enable the predictive keyboard during an assessment.
- [allowsPasswordAutoFill](allowspasswordautofill.md): A Boolean value that indicates whether to allow password autofill during an assessment.

# allowsContinuousPathKeyboard (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+

A Boolean value that indicates whether to allow Slide to Type to operate during an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsContinuousPathKeyboard;
```

<a id="Discussion"></a>

## Discussion

Users can turn on Slide to Type in the Settings app (General \> Keyboard). An assessment session disables this feature by default, but you can allow it by setting [allowsContinuousPathKeyboard](allowscontinuouspathkeyboard.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

## See Also

### Allowing typing assistance

- [allowsKeyboardShortcuts](allowskeyboardshortcuts.md): A Boolean value that indicates whether to allow keyboard shortcuts during an assessment.
- [allowsPredictiveKeyboard](allowspredictivekeyboard.md): A Boolean value that indicates whether to enable the predictive keyboard during an assessment.
- [allowsPasswordAutoFill](allowspasswordautofill.md): A Boolean value that indicates whether to allow password autofill during an assessment.
