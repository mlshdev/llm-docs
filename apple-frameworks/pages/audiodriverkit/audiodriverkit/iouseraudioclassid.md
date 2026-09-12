> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/audiodriverkit/iouseraudioclassid](https://developer.apple.com/documentation/audiodriverkit/audiodriverkit/iouseraudioclassid)

# IOUserAudioClassID

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit 21.0+

An identifier for the type of audio object.

## Declaration

```objectivec
enum IOUserAudioClassID : uint32_t;
```

## Topics

### General Objects

- [Object](iouseraudioclassid/object.md): The identifier for the audio object class.

### Device and Driver Objects

- [Device](iouseraudioclassid/device.md): The identifier for the audio device class.
- [Driver](iouseraudioclassid/driver.md): The identifier for the audio driver class.

### Clock Objects

- [Clock](iouseraudioclassid/clock.md): The identifier for the audio clock class.

### Container Obects

- [Box](iouseraudioclassid/box.md): The identifier for the audio box class.

### Stream Objects

- [Stream](iouseraudioclassid/stream.md): The identifier for the audio stream class.

### General Controls

- [Control](iouseraudioclassid/control.md): The identifier for the audio control class.

### Slider Controls

- [SliderControl](iouseraudioclassid/slidercontrol.md): The identifier for the audio slider control class.

### Level and Volume Control Objects

- [LevelControl](iouseraudioclassid/levelcontrol.md): The identifier for the audio level control class.
- [VolumeControl](iouseraudioclassid/volumecontrol.md): The identifier for the audio volume control class.
- [LFEVolumeControl](iouseraudioclassid/lfevolumecontrol.md): The identifier for the low-frequency effect volume control class.

### Boolean Controls

- [BooleanControl](iouseraudioclassid/booleancontrol.md): The identifier for the audio Boolean control class.
- [LFEMuteControl](iouseraudioclassid/lfemutecontrol.md): The identifier for the low-frequency effect mute control class.
- [SoloControl](iouseraudioclassid/solocontrol.md): The identifier for the audio solo control class.
- [JackControl](iouseraudioclassid/jackcontrol.md): The identifier for the audio jack control class.
- [PhantomPowerControl](iouseraudioclassid/phantompowercontrol.md): The identifier for the audio phantom power control class.
- [PhaseInvertControl](iouseraudioclassid/phaseinvertcontrol.md): The identifier for the audio phase invert control class.
- [ClipLightControl](iouseraudioclassid/cliplightcontrol.md): The identifier for the audio clip light control class.
- [TalkbackControl](iouseraudioclassid/talkbackcontrol.md): The identifier for the audio talkback control class.
- [ListenbackControl](iouseraudioclassid/listenbackcontrol.md): The identifier for the audio listenback control class.

### Mute Controls

- [MuteControl](iouseraudioclassid/mutecontrol.md): The identifier for the audio mute control class.

### Selector Controls

- [SelectorControl](iouseraudioclassid/selectorcontrol.md): The identifier for the audio selector control class.
- [DataDestinationControl](iouseraudioclassid/datadestinationcontrol.md): The identifier for the audio data destination control class.
- [DataSourceControl](iouseraudioclassid/datasourcecontrol.md): The identifier for the audio data source control class.
- [ClockSourceControl](iouseraudioclassid/clocksourcecontrol.md): The identifier for the audio clock source control class.
- [HighPassFilterControl](iouseraudioclassid/highpassfiltercontrol.md): The identifier for the audio high pass filter control class.
- [LineLevelControl](iouseraudioclassid/linelevelcontrol.md): The identifier for the audio line level control class.

### Channel Controls

- [StereoPanControl](iouseraudioclassid/stereopancontrol.md): The identifier for the stereo pan control class.

## See Also

### Getting Information About the Class

- [GetClassID](../iouseraudiobooleancontrol/getclassid.md): Gets the audio class identifier of the object.
- [GetBaseClassID](../iouseraudiobooleancontrol/getbaseclassid.md): Gets the audio class identifier of the base class object.
