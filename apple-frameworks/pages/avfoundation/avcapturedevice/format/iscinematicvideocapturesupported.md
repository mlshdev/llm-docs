> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/iscinematicvideocapturesupported](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/iscinematicvideocapturesupported)

# isCinematicVideoCaptureSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Indicates whether the format supports Cinematic Video capture.

## Declaration

```swift
var isCinematicVideoCaptureSupported: Bool { get }
```

<a id="discussion"></a>

## Discussion

This property returns `true` if the format supports Cinematic Video that produces a controllable, simulated depth of field and adds beautiful focus transitions for a cinema-grade look.

## See Also

### Determining Cinematic video support

- [defaultSimulatedAperture](defaultsimulatedaperture.md): Default shallow depth of field simulated aperture.
- [minSimulatedAperture](minsimulatedaperture.md): Minimum supported shallow depth of field simulated aperture.
- [maxSimulatedAperture](maxsimulatedaperture.md): Maximum supported shallow depth of field simulated aperture.
- [videoMaxZoomFactorForCinematicVideo](videomaxzoomfactorforcinematicvideo.md): Indicates the maximum zoom factor available for the [videoZoomFactor](../videozoomfactor.md) property when Cinematic Video capture is enabled on the device input.
- [videoMinZoomFactorForCinematicVideo](videominzoomfactorforcinematicvideo.md): Indicates the minimum zoom factor available for the [videoZoomFactor](../videozoomfactor.md) property when Cinematic Video capture is enabled on the device input.
- [videoFrameRateRangeForCinematicVideo](videoframeraterangeforcinematicvideo.md): Indicates the minimum / maximum frame rates available when Cinematic Video capture is enabled on the device input.

# cinematicVideoCaptureSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Indicates whether the format supports Cinematic Video capture.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isCinematicVideoCaptureSupported) BOOL cinematicVideoCaptureSupported;
```

<a id="discussion"></a>

## Discussion

This property returns `true` if the format supports Cinematic Video that produces a controllable, simulated depth of field and adds beautiful focus transitions for a cinema-grade look.

## See Also

### Determining Cinematic video support

- [defaultSimulatedAperture](defaultsimulatedaperture.md): Default shallow depth of field simulated aperture.
- [minSimulatedAperture](minsimulatedaperture.md): Minimum supported shallow depth of field simulated aperture.
- [maxSimulatedAperture](maxsimulatedaperture.md): Maximum supported shallow depth of field simulated aperture.
- [videoMaxZoomFactorForCinematicVideo](videomaxzoomfactorforcinematicvideo.md): Indicates the maximum zoom factor available for the [videoZoomFactor](../videozoomfactor.md) property when Cinematic Video capture is enabled on the device input.
- [videoMinZoomFactorForCinematicVideo](videominzoomfactorforcinematicvideo.md): Indicates the minimum zoom factor available for the [videoZoomFactor](../videozoomfactor.md) property when Cinematic Video capture is enabled on the device input.
- [videoFrameRateRangeForCinematicVideo](videoframeraterangeforcinematicvideo.md): Indicates the minimum / maximum frame rates available when Cinematic Video capture is enabled on the device input.
