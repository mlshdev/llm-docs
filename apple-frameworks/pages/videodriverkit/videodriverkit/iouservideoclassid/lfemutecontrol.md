> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/videodriverkit/iouservideoclassid/lfemutecontrol](https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoclassid/lfemutecontrol)

# LFEMuteControl

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 27.0+

A Boolean control where true means that mute is enabled, making that LFE element inaudible.

## Declaration

```objectivec
LFEMuteControl
```

<a id="discussion"></a>

## Discussion

This control is for LFE channels that result from bass management. Note that LFE channels that are represented as normal audio channels must use an VideoMuteControl.

## See Also

### Identifying volume control types

- [VolumeControl](volumecontrol.md): The class identifier for the `IOUserVideoVolumeControl` class.
- [MuteControl](mutecontrol.md): The class identifier for the `IOUserVideoMuteControl` class.
- [LFEVolumeControl](lfevolumecontrol.md): A subclass of the `IOUserVideoLevelControl` class for an LFE channel that results from bass management.
- [LineLevelControl](linelevelcontrol.md): A video selector control that identifies the nominal line level for the element.
