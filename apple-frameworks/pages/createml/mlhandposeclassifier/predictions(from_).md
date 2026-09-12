> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandposeclassifier/predictions(from:)](https://developer.apple.com/documentation/createml/mlhandposeclassifier/predictions(from:))

# predictions(from:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Generates an array of hand pose predictions for each image in a URL array.

## Declaration

```swift
func predictions(from images: [URL]) throws -> [[(label: String, confidence: Double)]]
```

## Parameters

- `images`: An array of image file URLs.

<a id="return-value"></a>

## Return Value

An array of a prediction tuple arrays.

<a id="discussion"></a>

## Discussion

Each prediction consists of an array of tuples that pair a classification label with the model’s confidence for that label. The method returns an array of prediction arrays, where each element of the outer array is the prediction for the corresponding URL element in `images`.

## See Also

### Testing a hand pose classifier

- [prediction(from:)](prediction%28from_%29.md): Generates a hand pose prediction for an image.
