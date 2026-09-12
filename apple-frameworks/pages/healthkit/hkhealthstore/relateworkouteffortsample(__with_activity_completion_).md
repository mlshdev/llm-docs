> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkhealthstore/relateworkouteffortsample(_:with:activity:completion:)](https://developer.apple.com/documentation/healthkit/hkhealthstore/relateworkouteffortsample(_:with:activity:completion:))

# relateWorkoutEffortSample(\_:with:activity:completion:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
func relateWorkoutEffortSample(_ sample: HKSample, with workout: HKWorkout, activity: HKWorkoutActivity?, completion: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func relateWorkoutEffortSample(_ sample: HKSample, with workout: HKWorkout, activity: HKWorkoutActivity?) async throws -> Bool
```

# relateWorkoutEffortSample:withWorkout:activity:completion: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
- (void) relateWorkoutEffortSample:(HKSample *) sample withWorkout:(HKWorkout *) workout activity:(HKWorkoutActivity *) activity completion:(void (^)(BOOL success, NSError *error)) completion;
```
