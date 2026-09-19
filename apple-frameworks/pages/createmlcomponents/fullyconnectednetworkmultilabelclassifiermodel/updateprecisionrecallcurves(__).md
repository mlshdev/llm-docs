> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/fullyconnectednetworkmultilabelclassifiermodel/updateprecisionrecallcurves(_:)

# updatePrecisionRecallCurves(\_:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Updates the per-label precision-recall curve using the input data.

## Declaration

```swift
mutating func updatePrecisionRecallCurves(_ input: some Collection<AnnotatedFeature<MLShapedArray<Scalar>, Set<Label>>>) async throws
```

## Parameters

- `input`: A collection of annotated examples.

<a id="discussion"></a>

## Discussion

Call this method before exporting to a Core ML Model and using Vision `VNCoreMLRequest` to make predictions.
