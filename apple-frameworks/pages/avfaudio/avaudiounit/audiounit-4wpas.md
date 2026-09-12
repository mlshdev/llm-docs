> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounit/audiounit-4wpas](https://developer.apple.com/documentation/avfaudio/avaudiounit/audiounit-4wpas)

# audioUnit

**Interface language:** Objective-C

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
@property (nonatomic, readonly) AudioUnit audioUnit;
```

<a id="discussion"></a>

## Discussion

Reference to the underlying audio unit.

A reference to the underlying audio unit is provided so that parameters that are not exposed by AVAudioUnit subclasses can be modified using the AudioUnit C API.

```
No operations that may conflict with state maintained by the engine should be performed
directly on the audio unit. These include changing initialization state, stream formats,
channel layouts or connections to other audio units.
```
