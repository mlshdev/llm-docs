> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/annotatedbatch/init(features:annotations:)

# init(features:annotations:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates an annotated batch.

## Declaration

```swift
init(features: MLShapedArray<Scalar>, annotations: MLShapedArray<Scalar>)
```

## Parameters

- `features`: A shaped array of features.
- `annotations`: A shaped array of annotations.

<a id="discussion"></a>

## Discussion

The features and annotations must have the same rank, and the first dimensions must be equal.
