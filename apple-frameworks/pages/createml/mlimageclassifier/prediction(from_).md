> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlimageclassifier/prediction(from:)

# prediction(from:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · visionOS 1.0+

Generates a prediction for an image.

## Declaration

```swift
func prediction(from image: CGImage) throws -> String
```

## Parameters

- `image`: The image that you want the model to classify.

<a id="return-value"></a>

## Return Value

A prediction label for the image.

## See Also

### Testing an image classifier

- [predictions(from:)](predictions%28from_%29.md): Generates predictions for an array of images.
