> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoclassid

# IOUserVideoClassID

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit 27.0+ beta

Video class identifiers of an video object.

## Declaration

```objectivec
enum IOUserVideoClassID : uint32_t;
```

## Topics

### Identifying VideoDriverKit types

- [Object](iouservideoclassid/object.md): Beta. The class identifier for the `IOUserVideoObject` class.
- [Driver](iouservideoclassid/driver.md): Beta. The class identifier for the `IOUserVideoDriver` class.
- [Box](iouservideoclassid/box.md): Beta. The class identifier for the `IOUserVideoBox` class.
- [Clock](iouservideoclassid/clock.md): Beta. The class identifier for the `IOUserVideoClockDevice` class.
- [Buffer](iouservideoclassid/buffer.md): Beta. The class identifier for the `IOUserVideoBuffer` class.
- [Device](iouservideoclassid/device.md): Beta. The class identifier for the `IOUserVideoDevice` class.
- [Stream](iouservideoclassid/stream.md): Beta. The class identifier for the `IOUserVideoStream` class.

### Identifying generic control types

- [Control](iouservideoclassid/control.md): Beta. The class identifier for the `IOUserVideoControl` class.
- [BooleanControl](iouservideoclassid/booleancontrol.md): Beta. The class identifier for the `IOUserVideoBooleanControl` class.
- [LevelControl](iouservideoclassid/levelcontrol.md): Beta. The class identifier for the `IOUserVideoLevelControl` class.
- [SliderControl](iouservideoclassid/slidercontrol.md): Beta. The class identifier for the `IOUserVideoSliderControl` class.
- [SelectorControl](iouservideoclassid/selectorcontrol.md): Beta. The class identifier for the `IOUserVideoSelectorControl` class.

### Identifying volume control types

- [VolumeControl](iouservideoclassid/volumecontrol.md): Beta. The class identifier for the `IOUserVideoVolumeControl` class.
- [MuteControl](iouservideoclassid/mutecontrol.md): Beta. The class identifier for the `IOUserVideoMuteControl` class.
- [LFEVolumeControl](iouservideoclassid/lfevolumecontrol.md): Beta. A subclass of the `IOUserVideoLevelControl` class for an LFE channel that results from bass management.
- [LFEMuteControl](iouservideoclassid/lfemutecontrol.md): Beta. A Boolean control where true means that mute is enabled, making that LFE element inaudible.
- [LineLevelControl](iouservideoclassid/linelevelcontrol.md): Beta. A video selector control that identifies the nominal line level for the element.

### Identifying data control types

- [DataSourceControl](iouservideoclassid/datasourcecontrol.md): Beta. A video selector control that identifies where the data for the element is coming from.
- [DataDestinationControl](iouservideoclassid/datadestinationcontrol.md): Beta. A video selector control that identifies where the data for the element is going.

### Identifying miscellaneous control types

- [ClipLightControl](iouservideoclassid/cliplightcontrol.md): Beta. A Boolean control where true means that the signal for the element has exceeded the sample range.
- [ClockSourceControl](iouservideoclassid/clocksourcecontrol.md): Beta. A video selector control that identifies where the timing info for the object is coming from.
- [DirectionControl](iouservideoclassid/directioncontrol.md): Beta. The class identifier for the `IOUserVideoDirectionControl` class.
- [HighPassFilterControl](iouservideoclassid/highpassfiltercontrol.md): Beta. A video selector control that indicates the setting for the high pass filter on the given element.
- [JackControl](iouservideoclassid/jackcontrol.md): Beta. A Boolean control where true means something is plugged into that element.
- [ListenbackControl](iouservideoclassid/listenbackcontrol.md): Beta. An `IOUserVideoBooleanControl` where true means that the listenback channel is audible.
- [PhantomPowerControl](iouservideoclassid/phantompowercontrol.md): Beta. A Boolean control where true means that the element’s hardware has phantom power enabled.
- [PhaseInvertControl](iouservideoclassid/phaseinvertcontrol.md): Beta. A Boolean control where true means that the phase of the signal on the given element is being inverted by 180 degrees.
- [SoloControl](iouservideoclassid/solocontrol.md): Beta. A Boolean control where true means that solo is enabled, making just that element audible and the other elements inaudible.
- [StereoPanControl](iouservideoclassid/stereopancontrol.md): Beta. The class identifier for the `IOUserVideoStereoPanControl` class.
- [TalkbackControl](iouservideoclassid/talkbackcontrol.md): Beta. A Boolean control where true means that the talkback channel is enabled.

## See Also

### Getting information about the class

- [GetClassID](../iouservideobooleancontrol/getclassid.md): Beta. Gets the class identifier of the object
- [GetBaseClassID](../iouservideobooleancontrol/getbaseclassid.md): Beta. Gets the class identifier of the base class object
