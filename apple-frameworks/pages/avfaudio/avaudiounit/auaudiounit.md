> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounit/auaudiounit](https://developer.apple.com/documentation/avfaudio/avaudiounit/auaudiounit)

# AUAudioUnit

**Interface language:** Objective-C

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
@property (nonatomic, readonly) AUAudioUnit * AUAudioUnit;
```

<a id="discussion"></a>

## Discussion

An AUAudioUnit wrapping or underlying the implementation’s AudioUnit.

This provides an AUAudioUnit which either wraps or underlies the implementation’s AudioUnit, depending on how that audio unit is packaged. Applications can interact with this AUAudioUnit to control custom properties, select presets, change parameters, etc.

```
As with the audioUnit property, no operations that may conflict with state maintained by the
engine should be performed directly on the audio unit. These include changing initialization
state, stream formats, channel layouts or connections to other audio units.
```
