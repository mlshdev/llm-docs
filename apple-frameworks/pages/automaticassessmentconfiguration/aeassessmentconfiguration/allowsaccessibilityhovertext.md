> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsaccessibilityhovertext

# allowsAccessibilityHoverText (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to allow Hover Text during an assessment.

## Declaration

```swift
var allowsAccessibilityHoverText: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Users can enable Hover Text in the Settings app (Accessibility \> Zoom \> Hover Text) to magnify text under the pointer. An assessment session **does not** disable Hover Text by default, but you can disable it by setting [allowsAccessibilityHoverText](allowsaccessibilityhovertext.md) to `NO` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

This property governs Hover Typing as well as Hover Text.

# allowsAccessibilityHoverText (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to allow Hover Text during an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsAccessibilityHoverText;
```

<a id="discussion"></a>

## Discussion

Users can enable Hover Text in the Settings app (Accessibility \> Zoom \> Hover Text) to magnify text under the pointer. An assessment session **does not** disable Hover Text by default, but you can disable it by setting [allowsAccessibilityHoverText](allowsaccessibilityhovertext.md) to `NO` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

This property governs Hover Typing as well as Hover Text.
