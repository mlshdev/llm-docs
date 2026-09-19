> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/visionresult/generatepersoninstancemask(_:_:)

# VisionResult.generatePersonInstanceMask(\_:\_:)

**Framework:** Vision  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A result from performing a generate person instance mask request.

## Declaration

```swift
case generatePersonInstanceMask(GeneratePersonInstanceMaskRequest, InstanceMaskObservation?)
```

## See Also

### Getting the image sequence result

- [VisionResult.generatePersonSegmentation(\_:\_:)](generatepersonsegmentation%28____%29.md): A result from performing a generate person segmentation request.
- [VisionResult.detectDocumentSegmentation(\_:\_:)](detectdocumentsegmentation%28____%29.md): A result from performing a detect document segmentation request.
- [VisionResult.generateIterativeSegmentation(\_:\_:)](generateiterativesegmentation%28____%29.md)
- [VisionResult.recognizeDocuments(\_:\_:)](recognizedocuments%28____%29.md)
