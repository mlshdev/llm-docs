> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsaccessibilitybackgroundsounds](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsaccessibilitybackgroundsounds)

# allowsAccessibilityBackgroundSounds (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to allow Background Sounds during an assessment.

## Declaration

```swift
var allowsAccessibilityBackgroundSounds: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Users can enable Background Sounds in the Settings app (Accessibility \> Audio & Visual \> Background Sounds) to play ambient sounds that can mask unwanted environmental noise. An assessment session disables Background Sounds by default, but you can allow it by setting [allowsAccessibilityBackgroundSounds](allowsaccessibilitybackgroundsounds.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

# allowsAccessibilityBackgroundSounds (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to allow Background Sounds during an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsAccessibilityBackgroundSounds;
```

<a id="discussion"></a>

## Discussion

Users can enable Background Sounds in the Settings app (Accessibility \> Audio & Visual \> Background Sounds) to play ambient sounds that can mask unwanted environmental noise. An assessment session disables Background Sounds by default, but you can allow it by setting [allowsAccessibilityBackgroundSounds](allowsaccessibilitybackgroundsounds.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.
