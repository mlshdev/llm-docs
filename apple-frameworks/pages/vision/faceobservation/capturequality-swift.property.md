> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/faceobservation/capturequality-swift.property](https://developer.apple.com/documentation/vision/faceobservation/capturequality-swift.property)

# captureQuality

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The quality of the face capture.

## Declaration

```swift
var captureQuality: FaceObservation.CaptureQuality?
```

<a id="discussion"></a>

## Discussion

This value is nil for face observations produced by a `DetectFaceRectanglesRequest` analysis. Use [DetectFaceCaptureQualityRequest](../detectfacecapturequalityrequest.md) to detect capture quality.

## See Also

### Getting the capture quality

- [FaceObservation.CaptureQuality](capturequality-swift.struct.md): An indicator of the quality of a face capture.
