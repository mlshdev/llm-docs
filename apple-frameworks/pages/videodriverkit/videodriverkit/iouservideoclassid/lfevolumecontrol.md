> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoclassid/lfevolumecontrol

# LFEVolumeControl

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 27.0+ beta

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

- [VolumeControl](volumecontrol.md): Beta. The class identifier for the `IOUserVideoVolumeControl` class.
- [MuteControl](mutecontrol.md): Beta. The class identifier for the `IOUserVideoMuteControl` class.
- [LFEMuteControl](lfemutecontrol.md): Beta. A Boolean control where true means that mute is enabled, making that LFE element inaudible.
- [LineLevelControl](linelevelcontrol.md): Beta. A video selector control that identifies the nominal line level for the element.
