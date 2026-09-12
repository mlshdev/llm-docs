> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtmotionestimationsessioncreationoption_detecttruemotion](https://developer.apple.com/documentation/videotoolbox/kvtmotionestimationsessioncreationoption_detecttruemotion)

# kVTMotionEstimationSessionCreationOption_DetectTrueMotion

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Global Variable

Enable multi pass true motion detection.

## Declaration

```objectivec
extern CFStringRef const kVTMotionEstimationSessionCreationOption_DetectTrueMotion;
```

<a id="discussion"></a>

## Discussion

Renamed to `kVTMotionEstimationSessionCreationOption_UseMultiPassSearch`.

## See Also

### Creating a session

- [VTMotionEstimationSessionCreate](vtmotionestimationsessioncreate.md): Creates a session you use to generate a pixel buffer of motion vectors from two pixel buffers.
- [kVTMotionEstimationSessionCreationOption_Label](kvtmotionestimationsessioncreationoption_label.md): A label you use to log and track resources.
- [kVTMotionEstimationSessionCreationOption_MotionVectorSize](kvtmotionestimationsessioncreationoption_motionvectorsize.md): The size of the search blocks that motion estimation session uses.
- [kVTMotionEstimationSessionCreationOption_UseMultiPassSearch](kvtmotionestimationsessioncreationoption_usemultipasssearch.md): An option to use for higher quality motion estimation.
