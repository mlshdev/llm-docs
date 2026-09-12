> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1473081-sound_manager_attribute_selector](https://developer.apple.com/documentation/coreservices/1473081-sound_manager_attribute_selector)

# Sound Manager Attribute Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify feature availability information for the Sound Manager.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltSoundAttr](1473081-sound_manager_attribute_selector/gestaltsoundattr.md): The Gestalt selector which you pass to the `Gestalt` function.
- [gestaltStereoCapability](1473081-sound_manager_attribute_selector/gestaltstereocapability.md): Set if the built-in sound hardware is able to produce stereo sounds.
- [gestaltStereoMixing](1473081-sound_manager_attribute_selector/gestaltstereomixing.md): Set if the built-in sound hardware mixes both left and right channels of stereo sound into a single audio signal for the internal speaker.
- [gestaltSoundIOMgrPresent](1473081-sound_manager_attribute_selector/gestaltsoundiomgrpresent.md): Set if the Sound Input Manager is available.
- [gestaltBuiltInSoundInput](1473081-sound_manager_attribute_selector/gestaltbuiltinsoundinput.md): Set if a built-in sound input device is available.
- [gestaltHasSoundInputDevice](1473081-sound_manager_attribute_selector/gestalthassoundinputdevice.md): Set if a sound input device is available. This device can be either built-in or external.
- [gestaltPlayAndRecord](1473081-sound_manager_attribute_selector/gestaltplayandrecord.md)
- [gestalt16BitSoundIO](1473081-sound_manager_attribute_selector/gestalt16bitsoundio.md)
- [gestaltStereoInput](1473081-sound_manager_attribute_selector/gestaltstereoinput.md)
- [gestaltLineLevelInput](1473081-sound_manager_attribute_selector/gestaltlinelevelinput.md)
- [gestaltSndPlayDoubleBuffer](1473081-sound_manager_attribute_selector/gestaltsndplaydoublebuffer.md)
- [gestaltMultiChannels](1473081-sound_manager_attribute_selector/gestaltmultichannels.md)
- [gestalt16BitAudioSupport](1473081-sound_manager_attribute_selector/gestalt16bitaudiosupport.md)
