> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudio3dmixingpointsourceinheadmode/bypass](https://developer.apple.com/documentation/avfaudio/avaudio3dmixingpointsourceinheadmode/bypass)

# AVAudio3DMixingPointSourceInHeadMode.bypass (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The point source distributes into each output channel inside the head of the listener.

## Declaration

```swift
case bypass
```

<a id="Discussion"></a>

## Discussion

This option enables transitions between traditional, nonspatialized rendering and spatialized sources outside of the listener’s head.

## See Also

### In-Head Modes

- [AVAudio3DMixingPointSourceInHeadMode.mono](mono.md): The point source remains a single mono source inside the head of the listener regardless of the channels it consists of.

# AVAudio3DMixingPointSourceInHeadModeBypass (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The point source distributes into each output channel inside the head of the listener.

## Declaration

```objectivec
AVAudio3DMixingPointSourceInHeadModeBypass
```

<a id="Discussion"></a>

## Discussion

This option enables transitions between traditional, nonspatialized rendering and spatialized sources outside of the listener’s head.

## See Also

### In-Head Modes

- [AVAudio3DMixingPointSourceInHeadModeMono](mono.md): The point source remains a single mono source inside the head of the listener regardless of the channels it consists of.
