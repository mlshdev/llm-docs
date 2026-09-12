> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlobjectdetector/prediction(from:)](https://developer.apple.com/documentation/createml/mlobjectdetector/prediction(from:))

# prediction(from:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Locates objects in an image and generates an annotation for each object it detects.

## Declaration

```swift
func prediction(from image: URL) throws -> MLObjectDetector.DetectedObjects
```

## Parameters

- `image`: The URL for the image file where you want the object detector to look for objects.

<a id="return-value"></a>

## Return Value

An [MLObjectDetector.DetectedObjects](detectedobjects.md) instance — which is an [MLObjectDetector.ObjectAnnotation](objectannotation.md) array — where each annotation represents an item the object detector found in the image.

## See Also

### Testing an object detector

- [predictions(from:)](predictions%28from_%29.md): Locates objects in an array of images and generates an array of annotation collections, one for each input image.
- [MLObjectDetector.DetectedObjects](detectedobjects.md): An array of annotations that represent the items an object detector found in an image.
- [MLObjectDetector.ObjectAnnotation](objectannotation.md): The label, location, and confidence score of an item the object detector found in an image.
