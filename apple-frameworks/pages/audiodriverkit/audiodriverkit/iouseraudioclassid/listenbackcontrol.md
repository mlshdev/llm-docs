> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/audiodriverkit/iouseraudioclassid/listenbackcontrol](https://developer.apple.com/documentation/audiodriverkit/audiodriverkit/iouseraudioclassid/listenbackcontrol)

# ListenbackControl

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 21.0+

The identifier for the audio listenback control class.

## Declaration

```objectivec
ListenbackControl
```

<a id="Discussion"></a>

## Discussion

This class is a subclass of the [IOUserAudioBooleanControl](../../iouseraudiobooleancontrol.md) class where a `true` value indcates an enabled listenback channel. This control is for listenback channels outside of the regular I/O channels. If the listenback channel is among the normal I/O channels, it uses [MuteControl](mutecontrol.md).

## See Also

### Boolean Controls

- [BooleanControl](booleancontrol.md): The identifier for the audio Boolean control class.
- [LFEMuteControl](lfemutecontrol.md): The identifier for the low-frequency effect mute control class.
- [SoloControl](solocontrol.md): The identifier for the audio solo control class.
- [JackControl](jackcontrol.md): The identifier for the audio jack control class.
- [PhantomPowerControl](phantompowercontrol.md): The identifier for the audio phantom power control class.
- [PhaseInvertControl](phaseinvertcontrol.md): The identifier for the audio phase invert control class.
- [ClipLightControl](cliplightcontrol.md): The identifier for the audio clip light control class.
- [TalkbackControl](talkbackcontrol.md): The identifier for the audio talkback control class.
