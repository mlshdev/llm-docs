> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkhealthstore/splittotalenergy(_:start:end:resultshandler:)](https://developer.apple.com/documentation/healthkit/hkhealthstore/splittotalenergy(_:start:end:resultshandler:))

# splitTotalEnergy(\_:start:end:resultsHandler:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 11.0) · iPadOS 9.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 13.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 4.0)

Calculates the active and resting energy burned based on the total energy burned over the given duration.

> No longer supported

## Declaration

```swift
func splitTotalEnergy(_ totalEnergy: HKQuantity, start startDate: Date, end endDate: Date, resultsHandler: @escaping @Sendable (HKQuantity?, HKQuantity?, (any Error)?) -> Void)
```

## Parameters

- `totalEnergy`: A quantity object containing the total energy burned during the specified time period.
- `startDate`: A date object representing the activity’s start time.
- `endDate`: A date object representing the activity’s end time.
- `resultsHandler`: A block that is called as soon as the calculations are complete. This block is passed the following parameters:

  - **restingEnergy**: A quantity object containing the resting portion of the total energy.
  - **activeEnergy**: A quantity object containing the active portion of the total energy.
  - **error**: An error object. If an error occurred, this object contains information about the error; otherwise, it is set to `nil`.

<a id="Discussion"></a>

## Discussion

This method operates asynchronously. As soon as the calculation is finished, it calls the completion block on a background queue.

This method splits the total calories into the active and resting calories, based on the user’s estimated resting metabolic rate and the activity’s duration. Use the resulting values to create samples representing both the active and resting energy burned.

Active energy samples contribute to Apple Watch’s activity monitoring.

## See Also

### Managing workouts

- [recoverActiveWorkoutSession(completion:)](recoveractiveworkoutsession%28completion_%29.md): Recovers an active workout session.

# splitTotalEnergy:startDate:endDate:resultsHandler: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 11.0) · iPadOS 9.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 13.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 4.0)

Calculates the active and resting energy burned based on the total energy burned over the given duration.

> No longer supported

## Declaration

```objectivec
- (void) splitTotalEnergy:(HKQuantity *) totalEnergy startDate:(NSDate *) startDate endDate:(NSDate *) endDate resultsHandler:(void (^)(HKQuantity *restingEnergy, HKQuantity *activeEnergy, NSError *error)) resultsHandler;
```

## Parameters

- `totalEnergy`: A quantity object containing the total energy burned during the specified time period.
- `startDate`: A date object representing the activity’s start time.
- `endDate`: A date object representing the activity’s end time.
- `resultsHandler`: A block that is called as soon as the calculations are complete. This block is passed the following parameters:

  - **restingEnergy**: A quantity object containing the resting portion of the total energy.
  - **activeEnergy**: A quantity object containing the active portion of the total energy.
  - **error**: An error object. If an error occurred, this object contains information about the error; otherwise, it is set to `nil`.

<a id="Discussion"></a>

## Discussion

This method operates asynchronously. As soon as the calculation is finished, it calls the completion block on a background queue.

This method splits the total calories into the active and resting calories, based on the user’s estimated resting metabolic rate and the activity’s duration. Use the resulting values to create samples representing both the active and resting energy burned.

Active energy samples contribute to Apple Watch’s activity monitoring.

## See Also

### Managing workouts

- [recoverActiveWorkoutSessionWithCompletion:](recoveractiveworkoutsession%28completion_%29.md): Recovers an active workout session.
