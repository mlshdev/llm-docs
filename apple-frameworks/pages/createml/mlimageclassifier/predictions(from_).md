> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlimageclassifier/predictions(from:)](https://developer.apple.com/documentation/createml/mlimageclassifier/predictions(from:))

# predictions(from:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · visionOS 1.0+

Generates predictions for an array of images.

## Declaration

```swift
func predictions(from images: [URL]) throws -> [String]
```

## Parameters

- `images`: An array of images you want the model to classify.

<a id="return-value"></a>

## Return Value

An array of prediction labels for the images. Each label’s index corresponds to the image’s index in the input array.

## See Also

### Testing an image classifier

- [prediction(from:)](prediction%28from_%29.md): Generates a prediction for an image.
