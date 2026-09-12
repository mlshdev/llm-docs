> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsaccessibilityswitchcontrol](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsaccessibilityswitchcontrol)

# allowsAccessibilitySwitchControl (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to allow Switch Control during an assessment.

## Declaration

```swift
var allowsAccessibilitySwitchControl: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Users can enable Switch Control in the Settings app (Accessibility \> Switch Control) to control their device using adaptive switches. An assessment session **does not** disable Switch Control by default, but you can disable it by setting [allowsAccessibilitySwitchControl](allowsaccessibilityswitchcontrol.md) to `NO` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

> **Note**

> To allow Switch Control with alternative input methods (such as Dwell Control), you must also set [allowsAccessibilityAlternativeInputMethods](allowsaccessibilityalternativeinputmethods.md) to `YES`.

# allowsAccessibilitySwitchControl (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to allow Switch Control during an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsAccessibilitySwitchControl;
```

<a id="discussion"></a>

## Discussion

Users can enable Switch Control in the Settings app (Accessibility \> Switch Control) to control their device using adaptive switches. An assessment session **does not** disable Switch Control by default, but you can disable it by setting [allowsAccessibilitySwitchControl](allowsaccessibilityswitchcontrol.md) to `NO` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

> **Note**

> To allow Switch Control with alternative input methods (such as Dwell Control), you must also set [allowsAccessibilityAlternativeInputMethods](allowsaccessibilityalternativeinputmethods.md) to `YES`.
