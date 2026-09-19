> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsaccessibilitylivecaptions

# allowsAccessibilityLiveCaptions (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 26.1+ · macOS 26.1+

A Boolean value that indicates whether to allow Live Captions during an assessment.

## Declaration

```swift
var allowsAccessibilityLiveCaptions: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Users can enable Live Captions in the Settings app (Accessibility \> Live Captions) to receive real-time transcription of spoken audio as text on screen. An assessment session disables Live Captions by default, but you can allow it by setting [allowsAccessibilityLiveCaptions](allowsaccessibilitylivecaptions.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

# allowsAccessibilityLiveCaptions (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 26.1+ · macOS 26.1+

A Boolean value that indicates whether to allow Live Captions during an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsAccessibilityLiveCaptions;
```

<a id="discussion"></a>

## Discussion

Users can enable Live Captions in the Settings app (Accessibility \> Live Captions) to receive real-time transcription of spoken audio as text on screen. An assessment session disables Live Captions by default, but you can allow it by setting [allowsAccessibilityLiveCaptions](allowsaccessibilitylivecaptions.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.
