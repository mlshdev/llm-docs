> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnclassificationobservation/hasminimumprecision(_:forrecall:)](https://developer.apple.com/documentation/vision/vnclassificationobservation/hasminimumprecision(_:forrecall:))

# hasMinimumPrecision(\_:forRecall:) (Swift)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Determines whether the observation for a specific recall has a minimum precision value.

## Declaration

```swift
func hasMinimumPrecision(_ minimumPrecision: Float, forRecall recall: Float) -> Bool
```

## Parameters

- `minimumPrecision`: The minimum percentage of classification results that are relevant.
- `recall`: The percentage of relevant results that the algorithm correctly classified.

<a id="return-value"></a>

## Return Value

A Boolean indicating whether or not this classification observation provides a minimum percentage of relevant results that meet the desired recall criterion.

## See Also

### Measuring Confidence and Precision

- [hasPrecisionRecallCurve](hasprecisionrecallcurve.md): A Boolean variable indicating whether the observation contains precision and recall curves.
- [hasMinimumRecall(\_:forPrecision:)](hasminimumrecall%28__forprecision_%29.md): Determines whether the observation for a specific precision has a minimum recall value.

# hasMinimumPrecision:forRecall: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Determines whether the observation for a specific recall has a minimum precision value.

## Declaration

```objectivec
- (BOOL) hasMinimumPrecision:(float) minimumPrecision forRecall:(float) recall;
```

## Parameters

- `minimumPrecision`: The minimum percentage of classification results that are relevant.
- `recall`: The percentage of relevant results that the algorithm correctly classified.

<a id="return-value"></a>

## Return Value

A Boolean indicating whether or not this classification observation provides a minimum percentage of relevant results that meet the desired recall criterion.

## See Also

### Measuring Confidence and Precision

- [hasPrecisionRecallCurve](hasprecisionrecallcurve.md): A Boolean variable indicating whether the observation contains precision and recall curves.
- [hasMinimumRecall:forPrecision:](hasminimumrecall%28__forprecision_%29.md): Determines whether the observation for a specific precision has a minimum recall value.
