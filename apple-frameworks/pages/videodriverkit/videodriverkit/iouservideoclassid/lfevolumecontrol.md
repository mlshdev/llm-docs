> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/videodriverkit/iouservideoclassid/lfevolumecontrol](https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoclassid/lfevolumecontrol)

# LFEVolumeControl

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 27.0+

A subclass of the `IOUserVideoLevelControl` class for an LFE channel that results from bass management.

## Declaration

```objectivec
LFEVolumeControl
```

<a id="discussion"></a>

## Discussion

If a driver represents LFE channels as normal audio channels, it must use [VolumeControl](volumecontrol.md) to manipulate the level.

## See Also

### Identifying volume control types

- [VolumeControl](volumecontrol.md): The class identifier for the `IOUserVideoVolumeControl` class.
- [MuteControl](mutecontrol.md): The class identifier for the `IOUserVideoMuteControl` class.
- [LFEMuteControl](lfemutecontrol.md): A Boolean control where true means that mute is enabled, making that LFE element inaudible.
- [LineLevelControl](linelevelcontrol.md): A video selector control that identifies the nominal line level for the element.
