> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlobjectdetector/detectedobjects

# MLObjectDetector.DetectedObjects

**Framework:** Create ML  
**Kind:** Type Alias  
**Availability:** macOS 10.15+

An array of annotations that represent the items an object detector found in an image.

## Declaration

```swift
typealias DetectedObjects = [MLObjectDetector.ObjectAnnotation]
```

## See Also

### Testing an object detector

- [prediction(from:)](prediction%28from_%29.md): Locates objects in an image and generates an annotation for each object it detects.
- [predictions(from:)](predictions%28from_%29.md): Locates objects in an array of images and generates an array of annotation collections, one for each input image.
- [MLObjectDetector.ObjectAnnotation](objectannotation.md): The label, location, and confidence score of an item the object detector found in an image.
