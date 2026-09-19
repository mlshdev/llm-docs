> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/visionresult/generatepersonsegmentation(_:_:)

# VisionResult.generatePersonSegmentation(\_:\_:)

**Framework:** Vision  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A result from performing a generate person segmentation request.

## Declaration

```swift
case generatePersonSegmentation(GeneratePersonSegmentationRequest, PixelBufferObservation)
```

## See Also

### Getting the image sequence result

- [VisionResult.generatePersonInstanceMask(\_:\_:)](generatepersoninstancemask%28____%29.md): A result from performing a generate person instance mask request.
- [VisionResult.detectDocumentSegmentation(\_:\_:)](detectdocumentsegmentation%28____%29.md): A result from performing a detect document segmentation request.
- [VisionResult.generateIterativeSegmentation(\_:\_:)](generateiterativesegmentation%28____%29.md)
- [VisionResult.recognizeDocuments(\_:\_:)](recognizedocuments%28____%29.md)
