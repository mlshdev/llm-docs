> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/videomaxzoomfactorforcinematicvideo](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/videomaxzoomfactorforcinematicvideo)

# videoMaxZoomFactorForCinematicVideo (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Indicates the maximum zoom factor available for the [videoZoomFactor](../videozoomfactor.md) property when Cinematic Video capture is enabled on the device input.

## Declaration

```swift
var videoMaxZoomFactorForCinematicVideo: CGFloat { get }
```

<a id="discussion"></a>

## Discussion

Devices support a limited zoom range when Cinematic Video capture is active. If this device format does not support Cinematic Video capture, this property returns `1.0`.

## See Also

### Determining Cinematic video support

- [isCinematicVideoCaptureSupported](iscinematicvideocapturesupported.md): Indicates whether the format supports Cinematic Video capture.
- [defaultSimulatedAperture](defaultsimulatedaperture.md): Default shallow depth of field simulated aperture.
- [minSimulatedAperture](minsimulatedaperture.md): Minimum supported shallow depth of field simulated aperture.
- [maxSimulatedAperture](maxsimulatedaperture.md): Maximum supported shallow depth of field simulated aperture.
- [videoMinZoomFactorForCinematicVideo](videominzoomfactorforcinematicvideo.md): Indicates the minimum zoom factor available for the [videoZoomFactor](../videozoomfactor.md) property when Cinematic Video capture is enabled on the device input.
- [videoFrameRateRangeForCinematicVideo](videoframeraterangeforcinematicvideo.md): Indicates the minimum / maximum frame rates available when Cinematic Video capture is enabled on the device input.

# videoMaxZoomFactorForCinematicVideo (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Indicates the maximum zoom factor available for the [videoZoomFactor](../videozoomfactor.md) property when Cinematic Video capture is enabled on the device input.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat videoMaxZoomFactorForCinematicVideo;
```

<a id="discussion"></a>

## Discussion

Devices support a limited zoom range when Cinematic Video capture is active. If this device format does not support Cinematic Video capture, this property returns `1.0`.

## See Also

### Determining Cinematic video support

- [cinematicVideoCaptureSupported](iscinematicvideocapturesupported.md): Indicates whether the format supports Cinematic Video capture.
- [defaultSimulatedAperture](defaultsimulatedaperture.md): Default shallow depth of field simulated aperture.
- [minSimulatedAperture](minsimulatedaperture.md): Minimum supported shallow depth of field simulated aperture.
- [maxSimulatedAperture](maxsimulatedaperture.md): Maximum supported shallow depth of field simulated aperture.
- [videoMinZoomFactorForCinematicVideo](videominzoomfactorforcinematicvideo.md): Indicates the minimum zoom factor available for the [videoZoomFactor](../videozoomfactor.md) property when Cinematic Video capture is enabled on the device input.
- [videoFrameRateRangeForCinematicVideo](videoframeraterangeforcinematicvideo.md): Indicates the minimum / maximum frame rates available when Cinematic Video capture is enabled on the device input.
