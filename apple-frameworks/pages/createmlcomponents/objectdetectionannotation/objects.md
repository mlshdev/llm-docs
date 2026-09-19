> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/objectdetectionannotation/objects

# objects

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The list of object annotations in the image.

## Declaration

```swift
let objects: [ObjectDetectionAnnotation<Label>.Annotation]
```

## See Also

### Getting the properties

- [imageFileName](imagefilename.md): The name of the image file.
- [ObjectDetectionAnnotation.Annotation](annotation.md): The annotation represented by an object label and its bounding box.
- [prominentObject](prominentobject.md): The most prominent object in the image.
