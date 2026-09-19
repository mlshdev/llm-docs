> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsaccessibilityvoiceover

# allowsAccessibilityVoiceOver (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to allow VoiceOver during an assessment.

## Declaration

```swift
var allowsAccessibilityVoiceOver: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Users can enable VoiceOver in the Settings app (Accessibility \> VoiceOver) to receive spoken descriptions of on-screen elements and gestures for navigating the interface. An assessment session **does not** disable VoiceOver by default, but you can disable it by setting [allowsAccessibilityVoiceOver](allowsaccessibilityvoiceover.md) to `NO` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

# allowsAccessibilityVoiceOver (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to allow VoiceOver during an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsAccessibilityVoiceOver;
```

<a id="discussion"></a>

## Discussion

Users can enable VoiceOver in the Settings app (Accessibility \> VoiceOver) to receive spoken descriptions of on-screen elements and gestures for navigating the interface. An assessment session **does not** disable VoiceOver by default, but you can disable it by setting [allowsAccessibilityVoiceOver](allowsaccessibilityvoiceover.md) to `NO` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.
