> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkapplewalkingsteadinessminimumquantityforclassification](https://developer.apple.com/documentation/healthkit/hkapplewalkingsteadinessminimumquantityforclassification)

# HKAppleWalkingSteadinessMinimumQuantityForClassification

**Interface language:** Objective-C

**Framework:** HealthKit  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

Returns the minimum score for the steadiness of the user’s gait based on the provided classification.

## Declaration

```objectivec
extern HKQuantity *HKAppleWalkingSteadinessMinimumQuantityForClassification(HKAppleWalkingSteadinessClassification classification);
```

## Parameters

- `classification`: The classification to look up.

<a id="Discussion"></a>

## Discussion

Call this method to look up the minimum Walking Steadiness value for a given classification. It returns an [HKQuantity](hkquantity.md) instance that contains a percentage value between `0.0` and `1.0`.

## See Also

### Walking steadiness classifications

- [HKAppleWalkingSteadinessClassification](hkapplewalkingsteadinessclassification.md): A classification of a score based on the steadiness of the user’s gait.
- [HKAppleWalkingSteadinessClassificationForQuantity](hkapplewalkingsteadinessclassificationforquantity.md): Provides a classification for a score that measures the steadiness of the user’s gait.
- [HKAppleWalkingSteadinessMaximumQuantityForClassification](hkapplewalkingsteadinessmaximumquantityforclassification.md): Returns the maximum score for the steadiness of the user’s gait based on the provided classification.
