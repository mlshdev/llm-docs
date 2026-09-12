> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiosessioninterruptiontype](https://developer.apple.com/documentation/audiotoolbox/audiosessioninterruptiontype)

# AudioSessionInterruptionType (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Values that indicate the nature of the interruption that ended.

## Declaration

```swift
typealias AudioSessionInterruptionType = UInt32
```

## Topics

### Constants

- [kAudioSessionInterruptionType_ShouldResume](kaudiosessioninterruptiontype_shouldresume.md): Deprecated. Indicates that the interruption that has just ended was one for which it is appropriate to immediately resume playback; for example, an incoming phone call was rejected by the user.
- [kAudioSessionInterruptionType_ShouldNotResume](kaudiosessioninterruptiontype_shouldnotresume.md): Indicates that the interruption that has just ended was one for which it is not appropriate to resume playback; for example, your app had been interrupted by iPod playback.

## See Also

### Audio Session Support

- [Audio Session Property Identifiers](1618455-audio-session-property-identifie.md): Property identifiers used with Audio Session Services in iOS.
- [Audio Session Categories](1618427-audio-session-categories.md): Category identifiers for audio sessions, used as values for the [kAudioSessionProperty_AudioCategory](kaudiosessionproperty_audiocategory.md) property.
- [Audio Session Modes](1618405-audio-session-modes.md): Mode identifiers for audio sessions, used as values for the [kAudioSessionProperty_Mode](kaudiosessionproperty_mode.md) property.
- [Audio Session Category Route Overrides](1618372-audio-session-category-route-ove.md): Specifies whether the default audio route for the `PlayAndRecord` category should be overridden.
- [Audio Session Activation Flags](1618357-audio-session-activation-flags.md): Flags that provide additional information about your app’s audio intentions upon session activation or deactivation.
- [Audio Session Interruption States](1618425-audio-session-interruption-state.md): Identifiers used with the [AudioSessionInterruptionListener](audiosessioninterruptionlistener.md) callback function in iOS to indicate that an audio interruption has started or stopped.

# AudioSessionInterruptionType (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Values that indicate the nature of the interruption that ended.

## Declaration

```objectivec
typedef UInt32 AudioSessionInterruptionType;
```

## Topics

### Constants

- [kAudioSessionInterruptionType_ShouldResume](kaudiosessioninterruptiontype_shouldresume.md): Deprecated. Indicates that the interruption that has just ended was one for which it is appropriate to immediately resume playback; for example, an incoming phone call was rejected by the user.
- [kAudioSessionInterruptionType_ShouldNotResume](kaudiosessioninterruptiontype_shouldnotresume.md): Indicates that the interruption that has just ended was one for which it is not appropriate to resume playback; for example, your app had been interrupted by iPod playback.

## See Also

### Audio Session Support

- [Audio Session Property Identifiers](1618455-audio-session-property-identifie.md): Property identifiers used with Audio Session Services in iOS.
- [Audio Session Categories](1618427-audio-session-categories.md): Category identifiers for audio sessions, used as values for the [kAudioSessionProperty_AudioCategory](kaudiosessionproperty_audiocategory.md) property.
- [Audio Session Modes](1618405-audio-session-modes.md): Mode identifiers for audio sessions, used as values for the [kAudioSessionProperty_Mode](kaudiosessionproperty_mode.md) property.
- [Audio Session Category Route Overrides](1618372-audio-session-category-route-ove.md): Specifies whether the default audio route for the `PlayAndRecord` category should be overridden.
- [Audio Session Activation Flags](1618357-audio-session-activation-flags.md): Flags that provide additional information about your app’s audio intentions upon session activation or deactivation.
- [Audio Session Interruption States](1618425-audio-session-interruption-state.md): Identifiers used with the [AudioSessionInterruptionListener](audiosessioninterruptionlistener.md) callback function in iOS to indicate that an audio interruption has started or stopped.
