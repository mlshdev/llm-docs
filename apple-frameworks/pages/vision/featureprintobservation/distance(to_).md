> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/featureprintobservation/distance(to:)

# distance(to:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Computes the distance between two feature print observations.

## Declaration

```swift
func distance(to featurePrint: FeaturePrintObservation) throws -> Double
```

## Parameters

- `featurePrint`: The feature print object to calculate the distance to.

<a id="return-value"></a>

## Return Value

The distance between two observations. Shorter distances indicate greater similarity between feature prints.
