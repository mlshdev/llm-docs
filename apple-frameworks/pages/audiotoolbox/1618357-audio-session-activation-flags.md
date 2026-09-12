> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/1618357-audio-session-activation-flags](https://developer.apple.com/documentation/audiotoolbox/1618357-audio-session-activation-flags)

# Audio Session Activation Flags

**Interface languages:** Swift, Objective-C

**Framework:** Audio Toolbox  
**Kind:** API Collection

Flags that provide additional information about your app’s audio intentions upon session activation or deactivation.

## Topics

### Constants

- [kAudioSessionSetActiveFlag_NotifyOthersOnDeactivation](kaudiosessionsetactiveflag_notifyothersondeactivation.md): Deprecated. Indicates that when your audio session deactivates, other audio sessions that had been interrupted by your session can return to their active state.

## See Also

### Audio Session Support

- [Audio Session Property Identifiers](1618455-audio-session-property-identifie.md): Property identifiers used with Audio Session Services in iOS.
- [Audio Session Categories](1618427-audio-session-categories.md): Category identifiers for audio sessions, used as values for the [kAudioSessionProperty_AudioCategory](kaudiosessionproperty_audiocategory.md) property.
- [Audio Session Modes](1618405-audio-session-modes.md): Mode identifiers for audio sessions, used as values for the [kAudioSessionProperty_Mode](kaudiosessionproperty_mode.md) property.
- [Audio Session Category Route Overrides](1618372-audio-session-category-route-ove.md): Specifies whether the default audio route for the `PlayAndRecord` category should be overridden.
- [Audio Session Interruption States](1618425-audio-session-interruption-state.md): Identifiers used with the [AudioSessionInterruptionListener](audiosessioninterruptionlistener.md) callback function in iOS to indicate that an audio interruption has started or stopped.
- [AudioSessionInterruptionType](audiosessioninterruptiontype.md): Values that indicate the nature of the interruption that ended.
