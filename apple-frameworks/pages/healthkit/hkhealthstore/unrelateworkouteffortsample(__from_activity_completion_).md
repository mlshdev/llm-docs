> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkhealthstore/unrelateworkouteffortsample(_:from:activity:completion:)](https://developer.apple.com/documentation/healthkit/hkhealthstore/unrelateworkouteffortsample(_:from:activity:completion:))

# unrelateWorkoutEffortSample(\_:from:activity:completion:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
func unrelateWorkoutEffortSample(_ sample: HKSample, from workout: HKWorkout, activity: HKWorkoutActivity?, completion: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func unrelateWorkoutEffortSample(_ sample: HKSample, from workout: HKWorkout, activity: HKWorkoutActivity?) async throws -> Bool
```

# unrelateWorkoutEffortSample:fromWorkout:activity:completion: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
- (void) unrelateWorkoutEffortSample:(HKSample *) sample fromWorkout:(HKWorkout *) workout activity:(HKWorkoutActivity *) activity completion:(void (^)(BOOL success, NSError *error)) completion;
```
