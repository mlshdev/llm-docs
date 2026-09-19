> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avmusictrack/looprange

# loopRange (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The timestamp range for the loop, in beats.

## Declaration

```swift
var loopRange: AVBeatRange { get set }
```

<a id="Discussion"></a>

## Discussion

You set the loop by specifying its beat range.

## See Also

### Configuring the Looping State

- [isLoopingEnabled](isloopingenabled.md): A Boolean value that indicates whether the track is in a looping state.
- [numberOfLoops](numberofloops.md): The number of times the track’s loop repeats.

# loopRange (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The timestamp range for the loop, in beats.

## Declaration

```objectivec
@property (nonatomic) AVBeatRange loopRange;
```

<a id="Discussion"></a>

## Discussion

You set the loop by specifying its beat range.

## See Also

### Configuring the Looping State

- [loopingEnabled](isloopingenabled.md): A Boolean value that indicates whether the track is in a looping state.
- [numberOfLoops](numberofloops.md): The number of times the track’s loop repeats.
