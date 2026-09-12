> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudio3dmixingsourcemode/bypass](https://developer.apple.com/documentation/avfaudio/avaudio3dmixingsourcemode/bypass)

# AVAudio3DMixingSourceMode.bypass (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A mode that does no spatial rendering.

## Declaration

```swift
case bypass
```

<a id="Discussion"></a>

## Discussion

If input and output audio channel layouts are equivalent, the framework copies all input channels directly to corresponding output channels. If the input and output audio channel layouts differ, the framework mixes according to the [kAudioFormatProperty_MatrixMixMap](../../audiotoolbox/kaudioformatproperty_matrixmixmap.md) property of the layouts. It applies no occlusion, obstruction, or reverb in this mode.

## See Also

### Source Modes

- [AVAudio3DMixingSourceMode.spatializeIfMono](spatializeifmono.md): A mono input bus that renders as a point source at the location of the source node.
- [AVAudio3DMixingSourceMode.pointSource](pointsource.md): All channels of the bus render as a single source at the location of the source node.
- [AVAudio3DMixingSourceMode.ambienceBed](ambiencebed.md): The input channels spread around the listener as far-field sources that anchor to global space.

# AVAudio3DMixingSourceModeBypass (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A mode that does no spatial rendering.

## Declaration

```objectivec
AVAudio3DMixingSourceModeBypass
```

<a id="Discussion"></a>

## Discussion

If input and output audio channel layouts are equivalent, the framework copies all input channels directly to corresponding output channels. If the input and output audio channel layouts differ, the framework mixes according to the [kAudioFormatProperty_MatrixMixMap](../../audiotoolbox/kaudioformatproperty_matrixmixmap.md) property of the layouts. It applies no occlusion, obstruction, or reverb in this mode.

## See Also

### Source Modes

- [AVAudio3DMixingSourceModeSpatializeIfMono](spatializeifmono.md): A mono input bus that renders as a point source at the location of the source node.
- [AVAudio3DMixingSourceModePointSource](pointsource.md): All channels of the bus render as a single source at the location of the source node.
- [AVAudio3DMixingSourceModeAmbienceBed](ambiencebed.md): The input channels spread around the listener as far-field sources that anchor to global space.
