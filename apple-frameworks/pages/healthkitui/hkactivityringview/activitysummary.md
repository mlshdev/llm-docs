> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkitui/hkactivityringview/activitysummary](https://developer.apple.com/documentation/healthkitui/hkactivityringview/activitysummary)

# activitySummary (Swift)

**Framework:** HealthKitUI  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.0+ · visionOS 1.0+

The active summary displayed by the activity ring view.

## Declaration

```swift
var activitySummary: HKActivitySummary? { get set }
```

<a id="Discussion"></a>

## Discussion

Any changes made directly to this property are not animated. To animate changes, use # [setActivitySummary(\_:animated:)](setactivitysummary%28__animated_%29.md) instead.

## See Also

### Setting the activity summary

- [setActivitySummary(\_:animated:)](setactivitysummary%28__animated_%29.md): Sets the activity summary displayed by the activity ring view.

# activitySummary (Objective-C)

**Framework:** HealthKitUI  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.0+ · visionOS 1.0+

The active summary displayed by the activity ring view.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) HKActivitySummary * activitySummary;
```

<a id="Discussion"></a>

## Discussion

Any changes made directly to this property are not animated. To animate changes, use # [setActivitySummary:animated:](setactivitysummary%28__animated_%29.md) instead.

## See Also

### Setting the activity summary

- [setActivitySummary:animated:](setactivitysummary%28__animated_%29.md): Sets the activity summary displayed by the activity ring view.
