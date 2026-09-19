> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/requiresreleaseos

# requiresReleaseOS (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether the device must be running a final customer release of the operating system to start an assessment.

## Declaration

```swift
var requiresReleaseOS: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When set to `true`, the assessment session will only start if the device is running a released build of the operating system, rather than a beta, seed, or other prerelease build. Defaults to `false`.

> **See Also**

> [AEAssessmentConfiguration](../aeassessmentconfiguration.md) for the limits that apply to every enablement requirement.

# requiresReleaseOS (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether the device must be running a final customer release of the operating system to start an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL requiresReleaseOS;
```

<a id="discussion"></a>

## Discussion

When set to `true`, the assessment session will only start if the device is running a released build of the operating system, rather than a beta, seed, or other prerelease build. Defaults to `false`.

> **See Also**

> [AEAssessmentConfiguration](../aeassessmentconfiguration.md) for the limits that apply to every enablement requirement.
