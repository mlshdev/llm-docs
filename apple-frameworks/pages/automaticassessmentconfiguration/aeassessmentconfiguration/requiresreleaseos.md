> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/requiresreleaseos](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/requiresreleaseos)

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

When set to `true`, the assessment session will only start if the device is running a released build of the operating system, rather than a beta, seed, or other prerelease build. This requirement is disabled by default.

> **Important**

> This check is advisory, not a security guarantee. Use this property to steer proctored exams away from prerelease software whose behavior may not match a shipping release; it doesn’t provide a cryptographic attestation of the operating system build.

For stronger runtime assurances, pair this property with [App Attest](https://developer.apple.com/documentation/DeviceCheck) on macOS.

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

When set to `true`, the assessment session will only start if the device is running a released build of the operating system, rather than a beta, seed, or other prerelease build. This requirement is disabled by default.

> **Important**

> This check is advisory, not a security guarantee. Use this property to steer proctored exams away from prerelease software whose behavior may not match a shipping release; it doesn’t provide a cryptographic attestation of the operating system build.

For stronger runtime assurances, pair this property with [App Attest](https://developer.apple.com/documentation/DeviceCheck) on macOS.
