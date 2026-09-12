> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/minsimulatedaperture](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/minsimulatedaperture)

# minSimulatedAperture (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Minimum supported shallow depth of field simulated aperture.

## Declaration

```swift
var minSimulatedAperture: Float { get }
```

<a id="discussion"></a>

## Discussion

On devices that do not support changing the simulated aperture value, this returns a value of `0`.

## See Also

### Determining Cinematic video support

- [isCinematicVideoCaptureSupported](iscinematicvideocapturesupported.md): Indicates whether the format supports Cinematic Video capture.
- [defaultSimulatedAperture](defaultsimulatedaperture.md): Default shallow depth of field simulated aperture.
- [maxSimulatedAperture](maxsimulatedaperture.md): Maximum supported shallow depth of field simulated aperture.
- [videoMaxZoomFactorForCinematicVideo](videomaxzoomfactorforcinematicvideo.md): Indicates the maximum zoom factor available for the [videoZoomFactor](../videozoomfactor.md) property when Cinematic Video capture is enabled on the device input.
- [videoMinZoomFactorForCinematicVideo](videominzoomfactorforcinematicvideo.md): Indicates the minimum zoom factor available for the [videoZoomFactor](../videozoomfactor.md) property when Cinematic Video capture is enabled on the device input.
- [videoFrameRateRangeForCinematicVideo](videoframeraterangeforcinematicvideo.md): Indicates the minimum / maximum frame rates available when Cinematic Video capture is enabled on the device input.

# minSimulatedAperture (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Minimum supported shallow depth of field simulated aperture.

## Declaration

```objectivec
@property (nonatomic, readonly) float minSimulatedAperture;
```

<a id="discussion"></a>

## Discussion

On devices that do not support changing the simulated aperture value, this returns a value of `0`.

## See Also

### Determining Cinematic video support

- [cinematicVideoCaptureSupported](iscinematicvideocapturesupported.md): Indicates whether the format supports Cinematic Video capture.
- [defaultSimulatedAperture](defaultsimulatedaperture.md): Default shallow depth of field simulated aperture.
- [maxSimulatedAperture](maxsimulatedaperture.md): Maximum supported shallow depth of field simulated aperture.
- [videoMaxZoomFactorForCinematicVideo](videomaxzoomfactorforcinematicvideo.md): Indicates the maximum zoom factor available for the [videoZoomFactor](../videozoomfactor.md) property when Cinematic Video capture is enabled on the device input.
- [videoMinZoomFactorForCinematicVideo](videominzoomfactorforcinematicvideo.md): Indicates the minimum zoom factor available for the [videoZoomFactor](../videozoomfactor.md) property when Cinematic Video capture is enabled on the device input.
- [videoFrameRateRangeForCinematicVideo](videoframeraterangeforcinematicvideo.md): Indicates the minimum / maximum frame rates available when Cinematic Video capture is enabled on the device input.
