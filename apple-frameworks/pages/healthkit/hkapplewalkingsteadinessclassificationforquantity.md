> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkapplewalkingsteadinessclassificationforquantity](https://developer.apple.com/documentation/healthkit/hkapplewalkingsteadinessclassificationforquantity)

# HKAppleWalkingSteadinessClassificationForQuantity

**Interface language:** Objective-C

**Framework:** HealthKit  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

Provides a classification for a score that measures the steadiness of the user’s gait.

## Declaration

```objectivec
extern BOOL HKAppleWalkingSteadinessClassificationForQuantity(HKQuantity *value, HKAppleWalkingSteadinessClassification *classificationOut, NSError **errorOut);
```

## Parameters

- `value`: An [HKQuantity](hkquantity.md) instance that contains a percentage value between `0.0` and `1.0`. Use the [HKUnit](hkunit.md) class’s [percentUnit](hkunit/percent%28%29.md) method to define the units for these values.
- `classificationOut`: A [HKAppleWalkingSteadinessClassificationForQuantity](hkapplewalkingsteadinessclassificationforquantity.md) reference, which the method sets if the classification is successful.
- `errorOut`: A [NSError](../foundation/nserror.md) reference, which the method sets if it can’t convert the `value` parameter into a classification. You can pass `nil` if you don’t want to receive error information.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the method successfully classified the value. If an error occurred, it returns [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Use this method to get the Walking Steadiness classification for an [HKQuantityTypeIdentifierAppleWalkingSteadiness](hkquantitytypeidentifier/applewalkingsteadiness.md) sample.

## See Also

### Walking steadiness classifications

- [HKAppleWalkingSteadinessClassification](hkapplewalkingsteadinessclassification.md): A classification of a score based on the steadiness of the user’s gait.
- [HKAppleWalkingSteadinessMaximumQuantityForClassification](hkapplewalkingsteadinessmaximumquantityforclassification.md): Returns the maximum score for the steadiness of the user’s gait based on the provided classification.
- [HKAppleWalkingSteadinessMinimumQuantityForClassification](hkapplewalkingsteadinessminimumquantityforclassification.md): Returns the minimum score for the steadiness of the user’s gait based on the provided classification.
