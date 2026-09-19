> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsaccessibilityspokencontent

# allowsAccessibilitySpokenContent (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to allow Spoken Content during an assessment.

## Declaration

```swift
var allowsAccessibilitySpokenContent: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Users can enable Spoken Content in the Settings app (Accessibility \> Read & Speak) to have text read aloud. This includes Speak Selection, Speak Screen, and related features. An assessment session disables Spoken Content by default, but you can allow it by setting [allowsAccessibilitySpokenContent](allowsaccessibilityspokencontent.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

# allowsAccessibilitySpokenContent (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to allow Spoken Content during an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsAccessibilitySpokenContent;
```

<a id="discussion"></a>

## Discussion

Users can enable Spoken Content in the Settings app (Accessibility \> Read & Speak) to have text read aloud. This includes Speak Selection, Speak Screen, and related features. An assessment session disables Spoken Content by default, but you can allow it by setting [allowsAccessibilitySpokenContent](allowsaccessibilityspokencontent.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.
