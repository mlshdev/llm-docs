> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmedicationdoseevent/unit](https://developer.apple.com/documentation/healthkit/hkmedicationdoseevent/unit)

# unit (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The unit that the system associates with the medication when the person logs the dose.

## Declaration

```swift
@NSCopying var unit: HKUnit { get }
```

<a id="discussion"></a>

## Discussion

This ensures that the dose quantity is recorded with the correct measurement unit.

# unit (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The unit that the system associates with the medication when the person logs the dose.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nonnull) HKUnit * unit;
```

<a id="discussion"></a>

## Discussion

This ensures that the dose quantity is recorded with the correct measurement unit.
