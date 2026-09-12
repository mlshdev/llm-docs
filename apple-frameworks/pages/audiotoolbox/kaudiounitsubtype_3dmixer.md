> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiounitsubtype_3dmixer](https://developer.apple.com/documentation/audiotoolbox/kaudiounitsubtype_3dmixer)

# kAudioUnitSubType_3DMixer (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** macOS 10.3+ (deprecated in 10.10)

An audio unit that can have any number of input buses and one output bus. Each input bus can be mono, in which case it can be panned using 3D coordinates and parameters. Stereo input buses pass directly through to the output. Four-channel *ambisonic* inputs are rendered to the output configuration. The single output bus can be configured with 2, 4, 5, 6, 7 or 8 channels.

> no longer supported

## Declaration

```swift
var kAudioUnitSubType_3DMixer: UInt32 { get }
```

## See Also

### Constants

- [kAudioUnitSubType_StereoMixer](kaudiounitsubtype_stereomixer.md): An audio unit that can have any number of input buses, each of which is mono or stereo, and one stereo output bus.

# kAudioUnitSubType_3DMixer (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** macOS 10.3+ (deprecated in 10.10)

An audio unit that can have any number of input buses and one output bus. Each input bus can be mono, in which case it can be panned using 3D coordinates and parameters. Stereo input buses pass directly through to the output. Four-channel *ambisonic* inputs are rendered to the output configuration. The single output bus can be configured with 2, 4, 5, 6, 7 or 8 channels.

> no longer supported

## Declaration

```objectivec
kAudioUnitSubType_3DMixer
```

## See Also

### Constants

- [kAudioUnitSubType_StereoMixer](kaudiounitsubtype_stereomixer.md): An audio unit that can have any number of input buses, each of which is mono or stereo, and one stereo output bus.
