> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsprivaterelay](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsprivaterelay)

# allowsPrivateRelay (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether the assessment allows iCloud Private Relay to be active.

## Declaration

```swift
var allowsPrivateRelay: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When set to `false`, the assessment session will only start if iCloud Private Relay is not enabled, and won’t start if that status can’t be determined. Defaults to `true`, which doesn’t enforce the requirement.

# allowsPrivateRelay (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether the assessment allows iCloud Private Relay to be active.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsPrivateRelay;
```

<a id="discussion"></a>

## Discussion

When set to `false`, the assessment session will only start if iCloud Private Relay is not enabled, and won’t start if that status can’t be determined. Defaults to `true`, which doesn’t enforce the requirement.
