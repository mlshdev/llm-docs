> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/audiodriverkit/iouseraudioclassid/phaseinvertcontrol](https://developer.apple.com/documentation/audiodriverkit/audiodriverkit/iouseraudioclassid/phaseinvertcontrol)

# PhaseInvertControl

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 21.0+

The identifier for the audio phase invert control class.

## Declaration

```objectivec
PhaseInvertControl
```

<a id="Discussion"></a>

## Discussion

This class is a subclass of the [IOUserAudioBooleanControl](../../iouseraudiobooleancontrol.md) class where a `true` value indcates a phase inversion of the given element’s signal by 180 degrees.

## See Also

### Boolean Controls

- [BooleanControl](booleancontrol.md): The identifier for the audio Boolean control class.
- [LFEMuteControl](lfemutecontrol.md): The identifier for the low-frequency effect mute control class.
- [SoloControl](solocontrol.md): The identifier for the audio solo control class.
- [JackControl](jackcontrol.md): The identifier for the audio jack control class.
- [PhantomPowerControl](phantompowercontrol.md): The identifier for the audio phantom power control class.
- [ClipLightControl](cliplightcontrol.md): The identifier for the audio clip light control class.
- [TalkbackControl](talkbackcontrol.md): The identifier for the audio talkback control class.
- [ListenbackControl](listenbackcontrol.md): The identifier for the audio listenback control class.
