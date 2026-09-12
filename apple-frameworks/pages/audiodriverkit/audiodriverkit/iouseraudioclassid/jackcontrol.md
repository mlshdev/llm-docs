> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/audiodriverkit/iouseraudioclassid/jackcontrol](https://developer.apple.com/documentation/audiodriverkit/audiodriverkit/iouseraudioclassid/jackcontrol)

# JackControl

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 21.0+

The identifier for the audio jack control class.

## Declaration

```objectivec
JackControl
```

<a id="Discussion"></a>

## Discussion

This class is a subclass of the [IOUserAudioBooleanControl](../../iouseraudiobooleancontrol.md) class where a `true` value indcates the presence of something plugged into the element.

## See Also

### Boolean Controls

- [BooleanControl](booleancontrol.md): The identifier for the audio Boolean control class.
- [LFEMuteControl](lfemutecontrol.md): The identifier for the low-frequency effect mute control class.
- [SoloControl](solocontrol.md): The identifier for the audio solo control class.
- [PhantomPowerControl](phantompowercontrol.md): The identifier for the audio phantom power control class.
- [PhaseInvertControl](phaseinvertcontrol.md): The identifier for the audio phase invert control class.
- [ClipLightControl](cliplightcontrol.md): The identifier for the audio clip light control class.
- [TalkbackControl](talkbackcontrol.md): The identifier for the audio talkback control class.
- [ListenbackControl](listenbackcontrol.md): The identifier for the audio listenback control class.
