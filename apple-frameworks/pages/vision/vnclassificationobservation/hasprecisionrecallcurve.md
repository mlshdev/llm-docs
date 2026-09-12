> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnclassificationobservation/hasprecisionrecallcurve](https://developer.apple.com/documentation/vision/vnclassificationobservation/hasprecisionrecallcurve)

# hasPrecisionRecallCurve (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A Boolean variable indicating whether the observation contains precision and recall curves.

## Declaration

```swift
var hasPrecisionRecallCurve: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Precision refers to the percentage of your classification results that are relevant, while recall refers to the percentage of total relevant results correctly classified.

If this property is [true](https://developer.apple.com/documentation/swift/true), then you can call precision and recall-related methods in this observation. If this property is [false](https://developer.apple.com/documentation/swift/false), then the  precision and recall-related methods won’t return meaningful data.

## See Also

### Measuring Confidence and Precision

- [hasMinimumPrecision(\_:forRecall:)](hasminimumprecision%28__forrecall_%29.md): Determines whether the observation for a specific recall has a minimum precision value.
- [hasMinimumRecall(\_:forPrecision:)](hasminimumrecall%28__forprecision_%29.md): Determines whether the observation for a specific precision has a minimum recall value.

# hasPrecisionRecallCurve (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A Boolean variable indicating whether the observation contains precision and recall curves.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL hasPrecisionRecallCurve;
```

<a id="Discussion"></a>

## Discussion

Precision refers to the percentage of your classification results that are relevant, while recall refers to the percentage of total relevant results correctly classified.

If this property is [true](https://developer.apple.com/documentation/swift/true), then you can call precision and recall-related methods in this observation. If this property is [false](https://developer.apple.com/documentation/swift/false), then the  precision and recall-related methods won’t return meaningful data.

## See Also

### Measuring Confidence and Precision

- [hasMinimumPrecision:forRecall:](hasminimumprecision%28__forrecall_%29.md): Determines whether the observation for a specific recall has a minimum precision value.
- [hasMinimumRecall:forPrecision:](hasminimumrecall%28__forprecision_%29.md): Determines whether the observation for a specific precision has a minimum recall value.
