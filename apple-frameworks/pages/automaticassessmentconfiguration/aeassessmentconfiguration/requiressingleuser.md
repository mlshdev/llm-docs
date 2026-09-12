> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/requiressingleuser](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/requiressingleuser)

# requiresSingleUser (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether only a single user account must be logged in to start an assessment.

## Declaration

```swift
var requiresSingleUser: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When set to `true`, the assessment session will only start if there is exactly one user account logged in on the device. This requirement is disabled by default.

# requiresSingleUser (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether only a single user account must be logged in to start an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL requiresSingleUser;
```

<a id="discussion"></a>

## Discussion

When set to `true`, the assessment session will only start if there is exactly one user account logged in on the device. This requirement is disabled by default.
