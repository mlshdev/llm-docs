> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsaccessibilityvoicecontrol](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsaccessibilityvoicecontrol)

# allowsAccessibilityVoiceControl (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to allow Voice Control during an assessment.

## Declaration

```swift
var allowsAccessibilityVoiceControl: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Users can enable Voice Control in the Settings app (Accessibility \> Voice Control) to control their device using voice commands. An assessment session **does not** disable Voice Control by default, but you can disable it by setting [allowsAccessibilityVoiceControl](allowsaccessibilityvoicecontrol.md) to `NO` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

# allowsAccessibilityVoiceControl (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to allow Voice Control during an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsAccessibilityVoiceControl;
```

<a id="discussion"></a>

## Discussion

Users can enable Voice Control in the Settings app (Accessibility \> Voice Control) to control their device using voice commands. An assessment session **does not** disable Voice Control by default, but you can disable it by setting [allowsAccessibilityVoiceControl](allowsaccessibilityvoicecontrol.md) to `NO` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.
