> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/videodriverkit/iouservideoclassid/volumecontrol](https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoclassid/volumecontrol)

# VolumeControl

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 27.0+

The class identifier for the `IOUserVideoVolumeControl` class.

## Declaration

```objectivec
VolumeControl
```

## See Also

### Identifying volume control types

- [MuteControl](mutecontrol.md): The class identifier for the `IOUserVideoMuteControl` class.
- [LFEVolumeControl](lfevolumecontrol.md): A subclass of the `IOUserVideoLevelControl` class for an LFE channel that results from bass management.
- [LFEMuteControl](lfemutecontrol.md): A Boolean control where true means that mute is enabled, making that LFE element inaudible.
- [LineLevelControl](linelevelcontrol.md): A video selector control that identifies the nominal line level for the element.
