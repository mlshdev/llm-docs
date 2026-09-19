> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlhandposeclassifier/prediction(from:)

# prediction(from:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Generates a hand pose prediction for an image.

## Declaration

```swift
func prediction(from image: URL) throws -> [(label: String, confidence: Double)]
```

## Parameters

- `image`: An image file URL.

<a id="return-value"></a>

## Return Value

An array of prediction tuples.

<a id="discussion"></a>

## Discussion

Each prediction consists of an array of tuples that pair a classification label with the model’s confidence in that label.

## See Also

### Testing a hand pose classifier

- [predictions(from:)](predictions%28from_%29.md): Generates an array of hand pose predictions for each image in a URL array.
