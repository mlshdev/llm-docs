> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideochannellabel

# IOUserVideoChannelLabel

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit 27.0+ beta

These constants are to set the preferred channel layout on video device.

## Declaration

```objectivec
enum IOUserVideoChannelLabel : uint32_t;
```

<a id="overview"></a>

## Overview

These channel labels attempt to list all labels in common use. Due to the ambiguities in channel labeling by various groups, there may be some overlap or duplication in the labels below. Use the label which most clearly describes what you mean.

## Topics

### Left channels

- [Left](iouservideochannellabel/left.md): Beta.
- [LeftCenter](iouservideochannellabel/leftcenter.md): Beta.
- [LeftTopFront](iouservideochannellabel/lefttopfront.md): Beta.
- [VerticalHeightLeft](iouservideochannellabel/verticalheightleft.md): Beta. WAVE: “Top Front Left”
- [LeftTopMiddle](iouservideochannellabel/lefttopmiddle.md): Beta.
- [LeftTopRear](iouservideochannellabel/lefttoprear.md): Beta.
- [LeftTotal](iouservideochannellabel/lefttotal.md): Beta. matrix encoded 4 channels
- [LeftWide](iouservideochannellabel/leftwide.md): Beta.

### Right channels

- [Right](iouservideochannellabel/right.md): Beta.
- [RightCenter](iouservideochannellabel/rightcenter.md): Beta.
- [RightTopFront](iouservideochannellabel/righttopfront.md): Beta.
- [VerticalHeightRight](iouservideochannellabel/verticalheightright.md): Beta. WAVE: “Top Front Right”
- [RightTopMiddle](iouservideochannellabel/righttopmiddle.md): Beta.
- [RightTopRear](iouservideochannellabel/righttoprear.md): Beta.
- [RightTotal](iouservideochannellabel/righttotal.md): Beta. matrix encoded 4 channels
- [RightWide](iouservideochannellabel/rightwide.md): Beta.

### Center channels

- [Center](iouservideochannellabel/center.md): Beta.
- [CenterTopFront](iouservideochannellabel/centertopfront.md): Beta.
- [VerticalHeightCenter](iouservideochannellabel/verticalheightcenter.md): Beta. WAVE: “Top Front Center”
- [CenterTopMiddle](iouservideochannellabel/centertopmiddle.md): Beta.
- [CenterTopRear](iouservideochannellabel/centertoprear.md): Beta.

### Back channels

- [TopBackCenter](iouservideochannellabel/topbackcenter.md): Beta.
- [TopCenterSurround](iouservideochannellabel/topcentersurround.md): Beta.
- [TopBackLeft](iouservideochannellabel/topbackleft.md): Beta.
- [TopBackRight](iouservideochannellabel/topbackright.md): Beta.

### Surround channels

- [CenterSurround](iouservideochannellabel/centersurround.md): Beta. WAVE: “Back Center” or plain “Rear Surround”
- [CenterSurroundDirect](iouservideochannellabel/centersurrounddirect.md): Beta. back center, non diffuse
- [LeftSurround](iouservideochannellabel/leftsurround.md): Beta.
- [LeftSurroundDirect](iouservideochannellabel/leftsurrounddirect.md): Beta.
- [RearSurroundLeft](iouservideochannellabel/rearsurroundleft.md): Beta.
- [RearSurroundRight](iouservideochannellabel/rearsurroundright.md): Beta.
- [RightSurround](iouservideochannellabel/rightsurround.md): Beta.
- [RightSurroundDirect](iouservideochannellabel/rightsurrounddirect.md): Beta.

### Low-Frequency Effects channels

- [LFE2](iouservideochannellabel/lfe2.md): Beta.
- [LFEScreen](iouservideochannellabel/lfescreen.md): Beta.

### Monaural channels

- [Mono](iouservideochannellabel/mono.md): Beta.

### Alternate content channels

- [ClickTrack](iouservideochannellabel/clicktrack.md): Beta.
- [DialogCentricMix](iouservideochannellabel/dialogcentricmix.md): Beta.
- [ForeignLanguage](iouservideochannellabel/foreignlanguage.md): Beta.
- [HearingImpaired](iouservideochannellabel/hearingimpaired.md): Beta.
- [Haptic](iouservideochannellabel/haptic.md): Beta.
- [Narration](iouservideochannellabel/narration.md): Beta.

### Mid/side recording

- [MS_Mid](iouservideochannellabel/ms_mid.md): Beta.
- [MS_Side](iouservideochannellabel/ms_side.md): Beta.

### X/Y recording channels

- [XY_X](iouservideochannellabel/xy_x.md): Beta.
- [XY_Y](iouservideochannellabel/xy_y.md): Beta.

### First-order ambisonic channels

- [Ambisonic_W](iouservideochannellabel/ambisonic_w.md): Beta.
- [Ambisonic_X](iouservideochannellabel/ambisonic_x.md): Beta.
- [Ambisonic_Y](iouservideochannellabel/ambisonic_y.md): Beta.
- [Ambisonic_Z](iouservideochannellabel/ambisonic_z.md): Beta.

### Binaural recording

- [BinauralLeft](iouservideochannellabel/binauralleft.md): Beta.
- [BinauralRight](iouservideochannellabel/binauralright.md): Beta.

### Headphone channels

- [HeadphonesLeft](iouservideochannellabel/headphonesleft.md): Beta.
- [HeadphonesRight](iouservideochannellabel/headphonesright.md): Beta.

### Unnumbered discrete channels

- [Discrete](iouservideochannellabel/discrete.md): Beta.

### Numbered discrete channels

- [Discrete_0](iouservideochannellabel/discrete_0.md): Beta.
- [Discrete_1](iouservideochannellabel/discrete_1.md): Beta.
- [Discrete_2](iouservideochannellabel/discrete_2.md): Beta.
- [Discrete_3](iouservideochannellabel/discrete_3.md): Beta.
- [Discrete_4](iouservideochannellabel/discrete_4.md): Beta.
- [Discrete_5](iouservideochannellabel/discrete_5.md): Beta.
- [Discrete_6](iouservideochannellabel/discrete_6.md): Beta.
- [Discrete_7](iouservideochannellabel/discrete_7.md): Beta.
- [Discrete_8](iouservideochannellabel/discrete_8.md): Beta.
- [Discrete_9](iouservideochannellabel/discrete_9.md): Beta.
- [Discrete_10](iouservideochannellabel/discrete_10.md): Beta.
- [Discrete_11](iouservideochannellabel/discrete_11.md): Beta.
- [Discrete_12](iouservideochannellabel/discrete_12.md): Beta.
- [Discrete_13](iouservideochannellabel/discrete_13.md): Beta.
- [Discrete_14](iouservideochannellabel/discrete_14.md): Beta.
- [Discrete_15](iouservideochannellabel/discrete_15.md): Beta.
- [Discrete_65535](iouservideochannellabel/discrete_65535.md): Beta.

### Generic high order ambisonics ACN channel

- [HOA_ACN](iouservideochannellabel/hoa_acn.md): Beta.

### Numbered high order ambisonics ACN channels

- [HOA_ACN_0](iouservideochannellabel/hoa_acn_0.md): Beta.
- [HOA_ACN_1](iouservideochannellabel/hoa_acn_1.md): Beta.
- [HOA_ACN_2](iouservideochannellabel/hoa_acn_2.md): Beta.
- [HOA_ACN_3](iouservideochannellabel/hoa_acn_3.md): Beta.
- [HOA_ACN_4](iouservideochannellabel/hoa_acn_4.md): Beta.
- [HOA_ACN_5](iouservideochannellabel/hoa_acn_5.md): Beta.
- [HOA_ACN_6](iouservideochannellabel/hoa_acn_6.md): Beta.
- [HOA_ACN_7](iouservideochannellabel/hoa_acn_7.md): Beta.
- [HOA_ACN_8](iouservideochannellabel/hoa_acn_8.md): Beta.
- [HOA_ACN_9](iouservideochannellabel/hoa_acn_9.md): Beta.
- [HOA_ACN_10](iouservideochannellabel/hoa_acn_10.md): Beta.
- [HOA_ACN_11](iouservideochannellabel/hoa_acn_11.md): Beta.
- [HOA_ACN_12](iouservideochannellabel/hoa_acn_12.md): Beta.
- [HOA_ACN_13](iouservideochannellabel/hoa_acn_13.md): Beta.
- [HOA_ACN_14](iouservideochannellabel/hoa_acn_14.md): Beta.
- [HOA_ACN_15](iouservideochannellabel/hoa_acn_15.md): Beta.
- [HOA_ACN_65024](iouservideochannellabel/hoa_acn_65024.md): Beta.

### Special values

- [Unused](iouservideochannellabel/unused.md): Beta. channel is present, but has no intended use or destination
- [Unknown](iouservideochannellabel/unknown.md): Beta. unknown or unspecified other use
- [UseCoordinates](iouservideochannellabel/usecoordinates.md): Beta. channel is described by the mCoordinates fields.

### Reserved values

- [BeginReserved](iouservideochannellabel/beginreserved.md): Beta.
- [EndReserved](iouservideochannellabel/endreserved.md): Beta.

## See Also

### Working with channel layouts

- [SetPreferredChannelsForStereo](../iouservideodevice/setpreferredchannelsforstereo.md): Beta. Sets the channel indices for the preferred stereo pair
- [GetPreferredChannelsForStereo](../iouservideodevice/getpreferredchannelsforstereo.md): Beta. Gets the channel indices for the preferred stereo pair.
- [SetPreferredInputChannelLayout](../iouservideodevice/setpreferredinputchannellayout.md): Beta. Sets the input channel layout with IOUserVideoChannelLabel values
- [SetPreferredOutputChannelLayout](../iouservideodevice/setpreferredoutputchannellayout.md): Beta. Sets the output channel layout.
