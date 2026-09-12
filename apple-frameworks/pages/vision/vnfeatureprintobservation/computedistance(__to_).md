> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnfeatureprintobservation/computedistance(_:to:)](https://developer.apple.com/documentation/vision/vnfeatureprintobservation/computedistance(_:to:))

# computeDistance(\_:to:) (Swift)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Computes the distance between two feature print observations.

## Declaration

```swift
func computeDistance(_ outDistance: UnsafeMutablePointer<Float>, to featurePrint: VNFeaturePrintObservation) throws
```

## Parameters

- `outDistance`: A pointer to store the calculated distance value.
- `featurePrint`: The feature print object whose distance to calculate.

<a id="Discussion"></a>

## Discussion

Shorter distances indicate greater similarity between feature prints.

# computeDistance:toFeaturePrintObservation:error: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Computes the distance between two feature print observations.

## Declaration

```objectivec
- (BOOL) computeDistance:(float *) outDistance toFeaturePrintObservation:(VNFeaturePrintObservation *) featurePrint error:(NSError **) error;
```

## Parameters

- `outDistance`: A pointer to store the calculated distance value.
- `featurePrint`: The feature print object whose distance to calculate.
- `error`: An optional error pointer. If an error occurs, the system populates the pointer with an `NSError` describing the details of the error.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation is successful, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Shorter distances indicate greater similarity between feature prints.
