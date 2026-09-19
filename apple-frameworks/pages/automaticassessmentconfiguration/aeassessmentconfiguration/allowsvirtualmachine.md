> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsvirtualmachine

# allowsVirtualMachine (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether the assessment allows running inside a virtual machine.

## Declaration

```swift
var allowsVirtualMachine: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When set to `false`, the assessment session will only start if the device is not a virtual machine, and won’t start if that status can’t be determined. Defaults to `true`, which doesn’t enforce the requirement.

> **Important**

> Setting this to `false` may not block a session in every virtualized environment.

> **See Also**

> [AEAssessmentConfiguration](../aeassessmentconfiguration.md) for the limits that apply to every enablement requirement.

# allowsVirtualMachine (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether the assessment allows running inside a virtual machine.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsVirtualMachine;
```

<a id="discussion"></a>

## Discussion

When set to `false`, the assessment session will only start if the device is not a virtual machine, and won’t start if that status can’t be determined. Defaults to `true`, which doesn’t enforce the requirement.

> **Important**

> Setting this to `false` may not block a session in every virtualized environment.

> **See Also**

> [AEAssessmentConfiguration](../aeassessmentconfiguration.md) for the limits that apply to every enablement requirement.
