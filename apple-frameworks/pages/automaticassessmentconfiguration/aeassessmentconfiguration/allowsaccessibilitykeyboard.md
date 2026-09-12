> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsaccessibilitykeyboard](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsaccessibilitykeyboard)

# allowsAccessibilityKeyboard (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 26.1+ · macOS 26.1+

A Boolean value that indicates whether to allow the Accessibility Keyboard during an assessment.

## Declaration

```swift
var allowsAccessibilityKeyboard: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Users can enable the Accessibility Keyboard in the Settings app (Accessibility \> Keyboard \> Accessibility Keyboard) to access an on-screen keyboard. An assessment session **does not** disable the Accessibility Keyboard by default, but you can disable it by setting [allowsAccessibilityKeyboard](allowsaccessibilitykeyboard.md) to `NO` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

> **Note**

> To allow the full Accessibility Keyboard with alternative input methods (such as Dwell Control), you must also set [allowsAccessibilityAlternativeInputMethods](allowsaccessibilityalternativeinputmethods.md) to `YES`.

# allowsAccessibilityKeyboard (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 26.1+ · macOS 26.1+

A Boolean value that indicates whether to allow the Accessibility Keyboard during an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsAccessibilityKeyboard;
```

<a id="discussion"></a>

## Discussion

Users can enable the Accessibility Keyboard in the Settings app (Accessibility \> Keyboard \> Accessibility Keyboard) to access an on-screen keyboard. An assessment session **does not** disable the Accessibility Keyboard by default, but you can disable it by setting [allowsAccessibilityKeyboard](allowsaccessibilitykeyboard.md) to `NO` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

> **Note**

> To allow the full Accessibility Keyboard with alternative input methods (such as Dwell Control), you must also set [allowsAccessibilityAlternativeInputMethods](allowsaccessibilityalternativeinputmethods.md) to `YES`.
