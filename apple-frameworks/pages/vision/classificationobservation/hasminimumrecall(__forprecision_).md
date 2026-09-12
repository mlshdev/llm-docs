> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/classificationobservation/hasminimumrecall(_:forprecision:)](https://developer.apple.com/documentation/vision/classificationobservation/hasminimumrecall(_:forprecision:))

# hasMinimumRecall(\_:forPrecision:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Determines whether the observation has a minimum recall value for a specific precision.

## Declaration

```swift
func hasMinimumRecall(_ minimumRecall: Float, forPrecision precision: Float) -> Bool
```

## Parameters

- `minimumRecall`: The minimum desired percentage of all positive classifications that the algorithm correctly classifies.
- `precision`: The percentage of correct positive classifications.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the classification observation achieves a minimum recall value for a specific precision.

<a id="Discussion"></a>

## Discussion

The following example uses the `hasMinimumRecall(_:forPrecision)` method to perform a high-precision filter on the results of a `ClassifyImageRequest`.

```swift
let results = try await request.perform(on: image)
    .filter { $0.hasMinimumRecall(0.01, forPrecision: 0.9) }
```

A high-precision filter retains a smaller number of observations, with less chance to contain false positives. Testing can help determine the balance point between the `minimumRecall` and `precision` values to return the best results for a specific use case.

## See Also

### Determining precision and recall

- [hasMinimumPrecision(\_:forRecall:)](hasminimumprecision%28__forrecall_%29.md): Determines whether the observation has a minimum precision value for a specific recall.
