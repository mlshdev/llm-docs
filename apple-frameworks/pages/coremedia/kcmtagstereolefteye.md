> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmtagstereolefteye](https://developer.apple.com/documentation/coremedia/kcmtagstereolefteye)

# kCMTagStereoLeftEye

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A value for a stereo tag indicating the video track has a left eye layer.

## Declaration

```objectivec
extern const CMTag kCMTagStereoLeftEye;
```

<a id="Discussion"></a>

## Discussion

This value is for use in tags with the [kCMTagCategory_StereoView](cmtagcategory/kcmtagcategory_stereoview.md) category.

## See Also

### 3D Video Data

- [kCMTagStereoInterpretationOrderReversed](kcmtagstereointerpretationorderreversed.md): A value for a stereo interpretation tag indicating the video data for the left and right eyes are reversed.
- [kCMTagStereoLeftAndRightEye](kcmtagstereoleftandrighteye.md): A value for a stereo tag indicating the video track has left and right eye layers.
- [kCMTagStereoRightEye](kcmtagstereorighteye.md): A value for a stereo tag indicating the video track has a right eye layer.
- [kCMTagStereoNone](kcmtagstereonone.md): A value for a stereo tag indicating the video track has no eye layer data.
