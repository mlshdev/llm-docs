> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoclassid/linelevelcontrol

# LineLevelControl

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 27.0+ beta

A video selector control that identifies the nominal line level for the element.

## Declaration

```objectivec
LineLevelControl
```

<a id="discussion"></a>

## Discussion

Note that this is not a gain stage but rather indicating the voltage standard (if any) used for the element, such as +4dBu, -10dBV, or instrument.

## See Also

### Identifying volume control types

- [VolumeControl](volumecontrol.md): Beta. The class identifier for the `IOUserVideoVolumeControl` class.
- [MuteControl](mutecontrol.md): Beta. The class identifier for the `IOUserVideoMuteControl` class.
- [LFEVolumeControl](lfevolumecontrol.md): Beta. A subclass of the `IOUserVideoLevelControl` class for an LFE channel that results from bass management.
- [LFEMuteControl](lfemutecontrol.md): Beta. A Boolean control where true means that mute is enabled, making that LFE element inaudible.
