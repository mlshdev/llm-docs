> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/detectfacelandmarksrequest/inputfaceobservations

# inputFaceObservations

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An array of face-observation objects to process as part of the request.

## Declaration

```swift
var inputFaceObservations: [FaceObservation]?
```

<a id="Discussion"></a>

## Discussion

The default is `nil`. When `nil`, Vision first performs a [DetectFaceRectanglesRequest](../detectfacerectanglesrequest.md) and processes all faces detected.
