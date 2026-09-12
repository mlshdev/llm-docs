> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/trackrectanglerequest/init(detectedrectangle:_:frameanalysisspacing:)](https://developer.apple.com/documentation/vision/trackrectanglerequest/init(detectedrectangle:_:frameanalysisspacing:))

# init(detectedRectangle:\_:frameAnalysisSpacing:)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Creates a rectangle tracking request.

## Declaration

```swift
init(detectedRectangle: any QuadrilateralProviding & VisionObservation, _ revision: TrackRectangleRequest.Revision? = nil, frameAnalysisSpacing: CMTime? = nil)
```
