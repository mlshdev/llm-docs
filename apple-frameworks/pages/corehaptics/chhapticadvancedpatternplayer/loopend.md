> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticadvancedpatternplayer/loopend](https://developer.apple.com/documentation/corehaptics/chhapticadvancedpatternplayer/loopend)

# loopEnd (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The time at which to end looping haptic playback.

## Declaration

```swift
var loopEnd: TimeInterval { get set }
```

## See Also

### Setting Playback Properties

- [loopEnabled](loopenabled.md): A Boolean that determines whether the haptic repeats itself on completion.
- [playbackRate](playbackrate.md): The playback rate of the haptic player.
- [completionHandler](completionhandler.md): A completion block that runs after the haptic finishes playing.
- [CHHapticAdvancedPatternPlayerCompletionHandler](../chhapticadvancedpatternplayercompletionhandler.md): A typealias for the completion handler to run after a haptic finishes playback.

# loopEnd (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The time at which to end looping haptic playback.

## Declaration

```objectivec
@property (readwrite) NSTimeInterval loopEnd;
```

## See Also

### Setting Playback Properties

- [loopEnabled](loopenabled.md): A Boolean that determines whether the haptic repeats itself on completion.
- [playbackRate](playbackrate.md): The playback rate of the haptic player.
- [completionHandler](completionhandler.md): A completion block that runs after the haptic finishes playing.
- [CHHapticAdvancedPatternPlayerCompletionHandler](../chhapticadvancedpatternplayercompletionhandler.md): A typealias for the completion handler to run after a haptic finishes playback.
