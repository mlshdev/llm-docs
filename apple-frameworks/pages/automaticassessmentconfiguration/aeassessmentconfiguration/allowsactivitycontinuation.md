> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsactivitycontinuation](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsactivitycontinuation)

# allowsActivityContinuation (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A Boolean value that indicates whether to allow Handoff during an assessment.

## Declaration

```swift
var allowsActivityContinuation: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Handoff lets users start an activity on one device and seamlessly resume the activity on another. Users control whether a device participates in Handoff by turning the feature on or off in the Settings app (General \> AirPlay & Handoff \> Handoff). An assessment disables this feature by default, but you can allow users undergoing an assessment to continue to use Handoff by setting [allowsActivityContinuation](allowsactivitycontinuation.md) to `true`.

# allowsActivityContinuation (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+

A Boolean value that indicates whether to allow Handoff during an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsActivityContinuation;
```

<a id="Discussion"></a>

## Discussion

Handoff lets users start an activity on one device and seamlessly resume the activity on another. Users control whether a device participates in Handoff by turning the feature on or off in the Settings app (General \> AirPlay & Handoff \> Handoff). An assessment disables this feature by default, but you can allow users undergoing an assessment to continue to use Handoff by setting [allowsActivityContinuation](allowsactivitycontinuation.md) to `true`.
