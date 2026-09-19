> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoclassid/mutecontrol

# MuteControl

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 27.0+ beta

The class identifier for the `IOUserVideoMuteControl` class.

## Declaration

```objectivec
MuteControl
```

## See Also

### Identifying volume control types

- [VolumeControl](volumecontrol.md): Beta. The class identifier for the `IOUserVideoVolumeControl` class.
- [LFEVolumeControl](lfevolumecontrol.md): Beta. A subclass of the `IOUserVideoLevelControl` class for an LFE channel that results from bass management.
- [LFEMuteControl](lfemutecontrol.md): Beta. A Boolean control where true means that mute is enabled, making that LFE element inaudible.
- [LineLevelControl](linelevelcontrol.md): Beta. A video selector control that identifies the nominal line level for the element.
