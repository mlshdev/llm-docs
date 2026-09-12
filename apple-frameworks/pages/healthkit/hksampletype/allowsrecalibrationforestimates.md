> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hksampletype/allowsrecalibrationforestimates](https://developer.apple.com/documentation/healthkit/hksampletype/allowsrecalibrationforestimates)

# allowsRecalibrationForEstimates (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that indicates whether HealthKit supports recalibrating the prediction algorithm used to produce estimates for this sample type.

## Declaration

```swift
var allowsRecalibrationForEstimates: Bool { get }
```

<a id="Discussion"></a>

## Discussion

To recalibrate the data for this sample type, call the [HKHealthStore](../hkhealthstore.md) class’s [recalibrateEstimates(sampleType:date:completion:)](../hkhealthstore/recalibrateestimates%28sampletype_date_completion_%29.md) method.

# allowsRecalibrationForEstimates (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that indicates whether HealthKit supports recalibrating the prediction algorithm used to produce estimates for this sample type.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL allowsRecalibrationForEstimates;
```

<a id="Discussion"></a>

## Discussion

To recalibrate the data for this sample type, call the [HKHealthStore](../hkhealthstore.md) class’s [recalibrateEstimatesForSampleType:atDate:completion:](../hkhealthstore/recalibrateestimates%28sampletype_date_completion_%29.md) method.
