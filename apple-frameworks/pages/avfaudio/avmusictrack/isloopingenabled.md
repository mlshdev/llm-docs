> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmusictrack/isloopingenabled](https://developer.apple.com/documentation/avfaudio/avmusictrack/isloopingenabled)

# isLoopingEnabled (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the track is in a looping state.

## Declaration

```swift
var isLoopingEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If you don’t set [loopRange](looprange.md), the framework loops the full track.

## See Also

### Configuring the Looping State

- [loopRange](looprange.md): The timestamp range for the loop, in beats.
- [numberOfLoops](numberofloops.md): The number of times the track’s loop repeats.

# loopingEnabled (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the track is in a looping state.

## Declaration

```objectivec
@property (nonatomic, getter=isLoopingEnabled) BOOL loopingEnabled;
```

<a id="Discussion"></a>

## Discussion

If you don’t set [loopRange](looprange.md), the framework loops the full track.

## See Also

### Configuring the Looping State

- [loopRange](looprange.md): The timestamp range for the loop, in beats.
- [numberOfLoops](numberofloops.md): The number of times the track’s loop repeats.
