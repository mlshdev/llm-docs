> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudio3dmixingsourcemode/ambiencebed](https://developer.apple.com/documentation/avfaudio/avaudio3dmixingsourcemode/ambiencebed)

# AVAudio3DMixingSourceMode.ambienceBed (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The input channels spread around the listener as far-field sources that anchor to global space.

## Declaration

```swift
case ambienceBed
```

<a id="Discussion"></a>

## Discussion

The rendering depends on listener orientation, but not on listener position. The audio channel layout of the bus specifies the directions of the input channels. The direction of the source node controls the rotation of the bed in the global space.

## See Also

### Source Modes

- [AVAudio3DMixingSourceMode.spatializeIfMono](spatializeifmono.md): A mono input bus that renders as a point source at the location of the source node.
- [AVAudio3DMixingSourceMode.bypass](bypass.md): A mode that does no spatial rendering.
- [AVAudio3DMixingSourceMode.pointSource](pointsource.md): All channels of the bus render as a single source at the location of the source node.

# AVAudio3DMixingSourceModeAmbienceBed (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The input channels spread around the listener as far-field sources that anchor to global space.

## Declaration

```objectivec
AVAudio3DMixingSourceModeAmbienceBed
```

<a id="Discussion"></a>

## Discussion

The rendering depends on listener orientation, but not on listener position. The audio channel layout of the bus specifies the directions of the input channels. The direction of the source node controls the rotation of the bed in the global space.

## See Also

### Source Modes

- [AVAudio3DMixingSourceModeSpatializeIfMono](spatializeifmono.md): A mono input bus that renders as a point source at the location of the source node.
- [AVAudio3DMixingSourceModeBypass](bypass.md): A mode that does no spatial rendering.
- [AVAudio3DMixingSourceModePointSource](pointsource.md): All channels of the bus render as a single source at the location of the source node.
