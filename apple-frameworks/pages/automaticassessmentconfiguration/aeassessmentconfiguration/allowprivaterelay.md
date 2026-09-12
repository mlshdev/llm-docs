> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowprivaterelay](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowprivaterelay)

# allowPrivateRelay

**Interface language:** Objective-C

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property

A Boolean value that indicates whether the assessment allows iCloud Private Relay to be active.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowPrivateRelay;
```

<a id="discussion"></a>

## Discussion

When set to `false`, the assessment session will only start if iCloud Private Relay is not enabled. This requirement is not enforced by default.
