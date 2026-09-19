> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkworkout/init(activitytype:startdate:enddate:duration:totalenergyburned:totaldistance:metadata:)

# init(activityType:startDate:endDate:duration:totalEnergyBurned:totalDistance:metadata:)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 17.0) · iPadOS 8.0+ (deprecated in 17.0) · Mac Catalyst 13.0+ (deprecated in 16.0) · macOS 13.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 10.0)

## Declaration

```swift
convenience init(activityType workoutActivityType: HKWorkoutActivityType, startDate: Date, endDate: Date, duration: TimeInterval, totalEnergyBurned: HKQuantity?, totalDistance: HKQuantity?, metadata: [String : Any]?)
```
