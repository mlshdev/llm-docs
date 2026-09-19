> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/requiressip

# requiresSIP (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether System Integrity Protection (SIP) must be enabled to start an assessment.

## Declaration

```swift
var requiresSIP: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When set to `true`, the assessment session will only start if System Integrity Protection is enabled on the device. Defaults to `false`.

> **Important**

> The framework can’t reliably detect whether SIP is enabled on systems where the user has administrator privileges, so setting `requiresSIP` to `true` may not block a session when SIP is in fact disabled. It also doesn’t indicate whether the system was modified while SIP was previously disabled.

> **See Also**

> [AEAssessmentConfiguration](../aeassessmentconfiguration.md) for the limits that apply to every enablement requirement.

# requiresSIP (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether System Integrity Protection (SIP) must be enabled to start an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL requiresSIP;
```

<a id="discussion"></a>

## Discussion

When set to `true`, the assessment session will only start if System Integrity Protection is enabled on the device. Defaults to `false`.

> **Important**

> The framework can’t reliably detect whether SIP is enabled on systems where the user has administrator privileges, so setting `requiresSIP` to `true` may not block a session when SIP is in fact disabled. It also doesn’t indicate whether the system was modified while SIP was previously disabled.

> **See Also**

> [AEAssessmentConfiguration](../aeassessmentconfiguration.md) for the limits that apply to every enablement requirement.
