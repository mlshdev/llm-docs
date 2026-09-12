> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkout/init(activitytype:startdate:enddate:workoutevents:totalenergyburned:totaldistance:device:metadata:)](https://developer.apple.com/documentation/healthkit/hkworkout/init(activitytype:startdate:enddate:workoutevents:totalenergyburned:totaldistance:device:metadata:))

# init(activityType:startDate:endDate:workoutEvents:totalEnergyBurned:totalDistance:device:metadata:)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ (deprecated in 17.0) · iPadOS 9.0+ (deprecated in 17.0) · Mac Catalyst 13.0+ (deprecated in 16.0) · macOS 13.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 10.0)

## Declaration

```swift
convenience init(activityType workoutActivityType: HKWorkoutActivityType, startDate: Date, endDate: Date, workoutEvents: [HKWorkoutEvent]?, totalEnergyBurned: HKQuantity?, totalDistance: HKQuantity?, device: HKDevice?, metadata: [String : Any]?)
```
