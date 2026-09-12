> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiounitsubtype_stereomixer](https://developer.apple.com/documentation/audiotoolbox/kaudiounitsubtype_stereomixer)

# kAudioUnitSubType_StereoMixer (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** macOS

An audio unit that can have any number of input buses, each of which is mono or stereo, and one stereo output bus.

## Declaration

```swift
var kAudioUnitSubType_StereoMixer: UInt32 { get }
```

## See Also

### Constants

- [kAudioUnitSubType_3DMixer](kaudiounitsubtype_3dmixer.md): Deprecated. An audio unit that can have any number of input buses and one output bus. Each input bus can be mono, in which case it can be panned using 3D coordinates and parameters. Stereo input buses pass directly through to the output. Four-channel *ambisonic* inputs are rendered to the output configuration. The single output bus can be configured with 2, 4, 5, 6, 7 or 8 channels.

# kAudioUnitSubType_StereoMixer (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** macOS

An audio unit that can have any number of input buses, each of which is mono or stereo, and one stereo output bus.

## Declaration

```objectivec
kAudioUnitSubType_StereoMixer
```

## See Also

### Constants

- [kAudioUnitSubType_3DMixer](kaudiounitsubtype_3dmixer.md): Deprecated. An audio unit that can have any number of input buses and one output bus. Each input bus can be mono, in which case it can be panned using 3D coordinates and parameters. Stereo input buses pass directly through to the output. Four-channel *ambisonic* inputs are rendered to the output configuration. The single output bus can be configured with 2, 4, 5, 6, 7 or 8 channels.
