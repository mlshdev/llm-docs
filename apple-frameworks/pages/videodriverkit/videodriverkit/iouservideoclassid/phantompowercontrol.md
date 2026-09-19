> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoclassid/phantompowercontrol

# PhantomPowerControl

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 27.0+ beta

A Boolean control where true means that the element’s hardware has phantom power enabled.

## Declaration

```objectivec
PhantomPowerControl
```

## See Also

### Identifying miscellaneous control types

- [ClipLightControl](cliplightcontrol.md): Beta. A Boolean control where true means that the signal for the element has exceeded the sample range.
- [ClockSourceControl](clocksourcecontrol.md): Beta. A video selector control that identifies where the timing info for the object is coming from.
- [DirectionControl](directioncontrol.md): Beta. The class identifier for the `IOUserVideoDirectionControl` class.
- [HighPassFilterControl](highpassfiltercontrol.md): Beta. A video selector control that indicates the setting for the high pass filter on the given element.
- [JackControl](jackcontrol.md): Beta. A Boolean control where true means something is plugged into that element.
- [ListenbackControl](listenbackcontrol.md): Beta. An `IOUserVideoBooleanControl` where true means that the listenback channel is audible.
- [PhaseInvertControl](phaseinvertcontrol.md): Beta. A Boolean control where true means that the phase of the signal on the given element is being inverted by 180 degrees.
- [SoloControl](solocontrol.md): Beta. A Boolean control where true means that solo is enabled, making just that element audible and the other elements inaudible.
- [StereoPanControl](stereopancontrol.md): Beta. The class identifier for the `IOUserVideoStereoPanControl` class.
- [TalkbackControl](talkbackcontrol.md): Beta. A Boolean control where true means that the talkback channel is enabled.
