> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnclassificationobservation/hasminimumrecall(_:forprecision:)](https://developer.apple.com/documentation/vision/vnclassificationobservation/hasminimumrecall(_:forprecision:))

# hasMinimumRecall(\_:forPrecision:) (Swift)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Determines whether the observation for a specific precision has a minimum recall value.

## Declaration

```swift
func hasMinimumRecall(_ minimumRecall: Float, forPrecision precision: Float) -> Bool
```

## Parameters

- `minimumRecall`: The minimum percentage of relevant results that the algorithm correctly classified.
- `precision`: The percentage of classification results that are relevant.

<a id="return-value"></a>

## Return Value

A Boolean indicating whether or not this classification observation provides a minimum percentage of relevant results that meet the desired precision criterion.

## See Also

### Measuring Confidence and Precision

- [hasPrecisionRecallCurve](hasprecisionrecallcurve.md): A Boolean variable indicating whether the observation contains precision and recall curves.
- [hasMinimumPrecision(\_:forRecall:)](hasminimumprecision%28__forrecall_%29.md): Determines whether the observation for a specific recall has a minimum precision value.

# hasMinimumRecall:forPrecision: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Determines whether the observation for a specific precision has a minimum recall value.

## Declaration

```objectivec
- (BOOL) hasMinimumRecall:(float) minimumRecall forPrecision:(float) precision;
```

## Parameters

- `minimumRecall`: The minimum percentage of relevant results that the algorithm correctly classified.
- `precision`: The percentage of classification results that are relevant.

<a id="return-value"></a>

## Return Value

A Boolean indicating whether or not this classification observation provides a minimum percentage of relevant results that meet the desired precision criterion.

## See Also

### Measuring Confidence and Precision

- [hasPrecisionRecallCurve](hasprecisionrecallcurve.md): A Boolean variable indicating whether the observation contains precision and recall curves.
- [hasMinimumPrecision:forRecall:](hasminimumprecision%28__forrecall_%29.md): Determines whether the observation for a specific recall has a minimum precision value.
