> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/cropresizelayer/init(coordinatesarenormalized:spatialscale:extrapolationvalue:samplingmode:boxcoordinatemode:)](https://developer.apple.com/documentation/accelerate/bnns/cropresizelayer/init(coordinatesarenormalized:spatialscale:extrapolationvalue:samplingmode:boxcoordinatemode:))

# init(coordinatesAreNormalized:spatialScale:extrapolationValue:samplingMode:boxCoordinateMode:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns a new crop-resize layer.

> Use the BNNSGraph API instead.

## Declaration

```swift
init(coordinatesAreNormalized: Bool, spatialScale: Float, extrapolationValue: Float = 0, samplingMode: BNNS.CropResizeLayer.LinearSamplingMode = .default, boxCoordinateMode: BNNS.CropResizeLayer.BoxCoordinateMode)
```
