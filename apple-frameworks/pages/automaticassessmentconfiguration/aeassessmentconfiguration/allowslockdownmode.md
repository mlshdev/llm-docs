> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowslockdownmode

# allowsLockdownMode (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether the assessment allows Lockdown Mode to be active.

## Declaration

```swift
var allowsLockdownMode: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When set to `false`, the assessment session will only start if Lockdown Mode is not enabled on the device. Defaults to `true`, which doesn’t enforce the requirement.

# allowsLockdownMode (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether the assessment allows Lockdown Mode to be active.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsLockdownMode;
```

<a id="discussion"></a>

## Discussion

When set to `false`, the assessment session will only start if Lockdown Mode is not enabled on the device. Defaults to `true`, which doesn’t enforce the requirement.
