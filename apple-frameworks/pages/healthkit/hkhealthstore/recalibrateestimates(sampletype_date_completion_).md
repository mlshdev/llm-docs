> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkhealthstore/recalibrateestimates(sampletype:date:completion:)](https://developer.apple.com/documentation/healthkit/hkhealthstore/recalibrateestimates(sampletype:date:completion:))

# recalibrateEstimates(sampleType:date:completion:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

Recalibrates the prediction algorithm used to calculate the specified sample type.

## Declaration

```swift
func recalibrateEstimates(sampleType: HKSampleType, date: Date, completion: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func recalibrateEstimates(sampleType: HKSampleType, date: Date) async throws
```

## Parameters

- `sampleType`: The sample type to recalibrate.
- `date`: The effective date for the recalibration.
- `completion`: A completion block that the system calls after recalibrating the data used by the prediction algorithm. The system passes the following parameters:

  - **`success`**: A Boolean value that indicates whether the system successfully recalibrated the sample type’s estimates.
  - **`error`**: If `success` is [false](https://developer.apple.com/documentation/swift/false), this parameter contains error information; otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

Your app can use this method to recalibrate HealthKitʼs prediction algorithms after an event that may significantly affect their results. For example, you can recalibrate the [sixMinuteWalkTestDistance](../hkquantitytypeidentifier/sixminutewalktestdistance.md) type to use only data collected after a mobility-impacting health event, such as surgery or an injury. Recalibrating [sixMinuteWalkTestDistance](../hkquantitytypeidentifier/sixminutewalktestdistance.md) after such an event may yield more accurate estimates during the recovery period.

> **Warning**

>  Before calling this method, your app must include the `com.apple.developer.healthkit.recalibrate-estimates` entitlement. Also, you must request both share and read access to all the data types you pass to the `sampleType` parameter. If you haven’t completed all of these steps, recalibration fails with an [HKError.Code.errorAuthorizationDenied](../hkerror/code/errorauthorizationdenied.md) error.

Check the [HKSampleType](../hksampletype.md) class’s [allowsRecalibrationForEstimates](../hksampletype/allowsrecalibrationforestimates.md) method to see if a given sample type supports recalibrating the algorithm.

The following sample code recalibrates the estimates for the six-minute walk test.

```swift
// Access the HealthKit Store.
let healthStore = HKHealthStore()

// Get the six-minute walk test type.
let sixMinuteWalkType = HKQuantityType(.sixMinuteWalkTestDistance)

// Verify that the type supports resetting estimates.
if sixMinuteWalkType.allowsRecalibrationForEstimates {
    
    // Reset the estimate.
    healthStore.recalibrateEstimates(sampleType: sixMinuteWalkType, date: Date()) { (success, error) in
        
        // Check the success value.
        if !success {
            if let error = error {
                // Handle errors here.
            }
        }
    }
}
```

# recalibrateEstimatesForSampleType:atDate:completion: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

Recalibrates the prediction algorithm used to calculate the specified sample type.

## Declaration

```objectivec
- (void) recalibrateEstimatesForSampleType:(HKSampleType *) sampleType atDate:(NSDate *) date completion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `sampleType`: The sample type to recalibrate.
- `date`: The effective date for the recalibration.
- `completion`: A completion block that the system calls after recalibrating the data used by the prediction algorithm. The system passes the following parameters:

  - **`success`**: A Boolean value that indicates whether the system successfully recalibrated the sample type’s estimates.
  - **`error`**: If `success` is [false](https://developer.apple.com/documentation/swift/false), this parameter contains error information; otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

Your app can use this method to recalibrate HealthKitʼs prediction algorithms after an event that may significantly affect their results. For example, you can recalibrate the [HKQuantityTypeIdentifierSixMinuteWalkTestDistance](../hkquantitytypeidentifier/sixminutewalktestdistance.md) type to use only data collected after a mobility-impacting health event, such as surgery or an injury. Recalibrating [HKQuantityTypeIdentifierSixMinuteWalkTestDistance](../hkquantitytypeidentifier/sixminutewalktestdistance.md) after such an event may yield more accurate estimates during the recovery period.

> **Warning**

>  Before calling this method, your app must include the `com.apple.developer.healthkit.recalibrate-estimates` entitlement. Also, you must request both share and read access to all the data types you pass to the `sampleType` parameter. If you haven’t completed all of these steps, recalibration fails with an [HKErrorAuthorizationDenied](../hkerror/code/errorauthorizationdenied.md) error.

Check the [HKSampleType](../hksampletype.md) class’s [allowsRecalibrationForEstimates](../hksampletype/allowsrecalibrationforestimates.md) method to see if a given sample type supports recalibrating the algorithm.

The following sample code recalibrates the estimates for the six-minute walk test.

```swift
// Access the HealthKit Store.
let healthStore = HKHealthStore()

// Get the six-minute walk test type.
let sixMinuteWalkType = HKQuantityType(.sixMinuteWalkTestDistance)

// Verify that the type supports resetting estimates.
if sixMinuteWalkType.allowsRecalibrationForEstimates {
    
    // Reset the estimate.
    healthStore.recalibrateEstimates(sampleType: sixMinuteWalkType, date: Date()) { (success, error) in
        
        // Check the success value.
        if !success {
            if let error = error {
                // Handle errors here.
            }
        }
    }
}
```
