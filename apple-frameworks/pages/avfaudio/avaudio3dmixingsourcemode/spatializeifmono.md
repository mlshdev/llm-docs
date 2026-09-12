> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudio3dmixingsourcemode/spatializeifmono](https://developer.apple.com/documentation/avfaudio/avaudio3dmixingsourcemode/spatializeifmono)

# AVAudio3DMixingSourceMode.spatializeIfMono (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A mono input bus that renders as a point source at the location of the source node.

## Declaration

```swift
case spatializeIfMono
```

<a id="Discussion"></a>

## Discussion

The system bypasses an input bus with more than one channel. This is equivalent to [AVAudio3DMixingSourceMode.pointSource](pointsource.md) for a mono bus and [AVAudio3DMixingSourceMode.bypass](bypass.md) for a bus with more than one channel.

## See Also

### Source Modes

- [AVAudio3DMixingSourceMode.bypass](bypass.md): A mode that does no spatial rendering.
- [AVAudio3DMixingSourceMode.pointSource](pointsource.md): All channels of the bus render as a single source at the location of the source node.
- [AVAudio3DMixingSourceMode.ambienceBed](ambiencebed.md): The input channels spread around the listener as far-field sources that anchor to global space.

# AVAudio3DMixingSourceModeSpatializeIfMono (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A mono input bus that renders as a point source at the location of the source node.

## Declaration

```objectivec
AVAudio3DMixingSourceModeSpatializeIfMono
```

<a id="Discussion"></a>

## Discussion

The system bypasses an input bus with more than one channel. This is equivalent to [AVAudio3DMixingSourceModePointSource](pointsource.md) for a mono bus and [AVAudio3DMixingSourceModeBypass](bypass.md) for a bus with more than one channel.

## See Also

### Source Modes

- [AVAudio3DMixingSourceModeBypass](bypass.md): A mode that does no spatial rendering.
- [AVAudio3DMixingSourceModePointSource](pointsource.md): All channels of the bus render as a single source at the location of the source node.
- [AVAudio3DMixingSourceModeAmbienceBed](ambiencebed.md): The input channels spread around the listener as far-field sources that anchor to global space.
