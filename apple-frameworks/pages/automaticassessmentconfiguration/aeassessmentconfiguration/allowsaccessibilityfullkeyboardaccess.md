> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsaccessibilityfullkeyboardaccess](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsaccessibilityfullkeyboardaccess)

# allowsAccessibilityFullKeyboardAccess (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to allow Full Keyboard Access during an assessment.

## Declaration

```swift
var allowsAccessibilityFullKeyboardAccess: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Users can enable Full Keyboard Access in the Settings app (Accessibility \> Keyboard \> Full Keyboard Access) to navigate and operate the system using only the keyboard. An assessment session **does not** disable Full Keyboard Access by default, but you can disable it by setting [allowsAccessibilityFullKeyboardAccess](allowsaccessibilityfullkeyboardaccess.md) to `NO` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

# allowsAccessibilityFullKeyboardAccess (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to allow Full Keyboard Access during an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsAccessibilityFullKeyboardAccess;
```

<a id="discussion"></a>

## Discussion

Users can enable Full Keyboard Access in the Settings app (Accessibility \> Keyboard \> Full Keyboard Access) to navigate and operate the system using only the keyboard. An assessment session **does not** disable Full Keyboard Access by default, but you can disable it by setting [allowsAccessibilityFullKeyboardAccess](allowsaccessibilityfullkeyboardaccess.md) to `NO` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.
