> Snapshot-pinned source payload for Apple watchOS snapshot-4bff84466040; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/watchkit/wkinterfaceactivityring/setactivitysummary(_:animated:)

# setActivitySummary(\_:animated:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.2+

Sets the activity summary displayed by the activity ring view.

## Declaration

```swift
func setActivitySummary(_ activitySummary: HKActivitySummary?, animated: Bool)
```

## Parameters

- `activitySummary`: The new activity summary.
- `animated`: If [true](https://developer.apple.com/documentation/swift/true), the change is animated.

# setActivitySummary:animated: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.2+

Sets the activity summary displayed by the activity ring view.

## Declaration

```objectivec
- (void) setActivitySummary:(HKActivitySummary *) activitySummary animated:(BOOL) animated;
```

## Parameters

- `activitySummary`: The new activity summary.
- `animated`: If [true](https://developer.apple.com/documentation/swift/true), the change is animated.
