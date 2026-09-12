> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowlockdownmode](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowlockdownmode)

# allowLockdownMode

**Interface language:** Objective-C

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property

A Boolean value that indicates whether the assessment allows Lockdown Mode to be active.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowLockdownMode;
```

<a id="discussion"></a>

## Discussion

When set to `false`, the assessment session will only start if Lockdown Mode is not enabled on the device. This requirement is not enforced by default.
