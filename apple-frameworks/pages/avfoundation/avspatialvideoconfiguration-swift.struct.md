> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avspatialvideoconfiguration-swift.struct](https://developer.apple.com/documentation/avfoundation/avspatialvideoconfiguration-swift.struct)

# AVSpatialVideoConfiguration

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
struct AVSpatialVideoConfiguration
```

## Topics

### Creating a configuration

- [init()](avspatialvideoconfiguration-swift.struct/init%28%29.md): Initializes an AVSpatialVideoConfiguration instance with all the properties set to nil.
- [init(formatDescription:)](avspatialvideoconfiguration-swift.struct/init%28formatdescription_%29.md): Initializes an AVSpatialVideoConfiguration with a format description.
- [nonSpatial](avspatialvideoconfiguration-swift.struct/nonspatial.md): A non-spatial video configuration.

### Modifying the configuration

- [cameraCalibrationDataLensCollection](avspatialvideoconfiguration-swift.struct/cameracalibrationdatalenscollection.md): Specifies intrinsic and extrinsic parameters for single or multiple lenses.
- [cameraSystemBaseline](avspatialvideoconfiguration-swift.struct/camerasystembaseline.md): Specifies the distance between centers of the lenses of the camera system that created the video.
- [disparityAdjustment](avspatialvideoconfiguration-swift.struct/disparityadjustment.md): Specifies a relative shift of the left and right images, which changes the zero parallax plane.
- [horizontalFieldOfView](avspatialvideoconfiguration-swift.struct/horizontalfieldofview.md): Specifies horizontal field of view in thousandths of a degree. Can be nil if the value is unknown.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting the video composition

- [renderSize](avvideocomposition/rendersize.md): The size at which the video composition should render.
- [renderScale](avvideocomposition/renderscale.md): The scale at which the video composition should render.
- [frameDuration](avvideocomposition/frameduration.md): A time interval for which the video composition should render composed video frames.
- [animationTool](avvideocomposition/animationtool.md): A video composition tool to use with Core Animation in offline rendering.
- [colorPrimaries](avvideocomposition/colorprimaries.md): The color primaries used for video composition.
- [colorTransferFunction](avvideocomposition/colortransferfunction.md): The transfer function used for video composition.
- [colorYCbCrMatrix](avvideocomposition/colorycbcrmatrix.md): The YCbCr matrix used for video composition.
- [customVideoCompositorClass](avvideocomposition/customvideocompositorclass.md): A custom compositor class to use.
- [outputBufferDescription](avvideocomposition/outputbufferdescription-3ayt8.md): The output buffers of the video composition can be specified with the outputBufferDescription. The value is an array of an array of CMTag objects that describes the output buffers.
- [spatialVideoConfigurations](avvideocomposition/spatialvideoconfigurations-80iab.md): Indicates the spatial configurations that are available to associate with the output of the video composition.
