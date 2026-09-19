> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsaccessibilitylivespeech

# allowsAccessibilityLiveSpeech (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to allow Live Speech during an assessment.

## Declaration

```swift
var allowsAccessibilityLiveSpeech: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Users can enable Live Speech in the Settings app (Accessibility \> Speech \> Live Speech) to type what they want to say and have it spoken aloud. An assessment session disables Live Speech by default, but you can allow it by setting [allowsAccessibilityLiveSpeech](allowsaccessibilitylivespeech.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

# allowsAccessibilityLiveSpeech (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to allow Live Speech during an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsAccessibilityLiveSpeech;
```

<a id="discussion"></a>

## Discussion

Users can enable Live Speech in the Settings app (Accessibility \> Speech \> Live Speech) to type what they want to say and have it spoken aloud. An assessment session disables Live Speech by default, but you can allow it by setting [allowsAccessibilityLiveSpeech](allowsaccessibilitylivespeech.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.
