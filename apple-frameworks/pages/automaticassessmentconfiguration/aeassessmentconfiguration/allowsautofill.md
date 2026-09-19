> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsautofill

# allowsAutoFill (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to allow autofill during an assessment.

## Declaration

```swift
var allowsAutoFill: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Users can enable autofill in System Settings (Passwords \> Password Options \> AutoFill Passwords and Passkeys). An assessment session disables autofill by default, but you can allow it by setting [allowsAutoFill](allowsautofill.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

# allowsAutoFill (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to allow autofill during an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsAutoFill;
```

<a id="discussion"></a>

## Discussion

Users can enable autofill in System Settings (Passwords \> Password Options \> AutoFill Passwords and Passkeys). An assessment session disables autofill by default, but you can allow it by setting [allowsAutoFill](allowsautofill.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.
