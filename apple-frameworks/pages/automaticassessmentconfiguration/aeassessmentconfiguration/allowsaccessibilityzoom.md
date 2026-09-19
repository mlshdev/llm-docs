> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsaccessibilityzoom

# allowsAccessibilityZoom (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to allow Zoom during an assessment.

## Declaration

```swift
var allowsAccessibilityZoom: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Users can enable Zoom in the Settings app (Accessibility \> Zoom) to magnify the screen. An assessment session **does not** disable Zoom by default, but you can disable it by setting [allowsAccessibilityZoom](allowsaccessibilityzoom.md) to `NO` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

# allowsAccessibilityZoom (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to allow Zoom during an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsAccessibilityZoom;
```

<a id="discussion"></a>

## Discussion

Users can enable Zoom in the Settings app (Accessibility \> Zoom) to magnify the screen. An assessment session **does not** disable Zoom by default, but you can disable it by setting [allowsAccessibilityZoom](allowsaccessibilityzoom.md) to `NO` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.
