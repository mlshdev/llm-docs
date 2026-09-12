> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticadvancedpatternplayer/completionhandler](https://developer.apple.com/documentation/corehaptics/chhapticadvancedpatternplayer/completionhandler)

# completionHandler (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A completion block that runs after the haptic finishes playing.

## Declaration

```swift
var completionHandler: CHHapticAdvancedPatternPlayerCompletionHandler { get set }
```

## See Also

### Setting Playback Properties

- [loopEnabled](loopenabled.md): A Boolean that determines whether the haptic repeats itself on completion.
- [loopEnd](loopend.md): The time at which to end looping haptic playback.
- [playbackRate](playbackrate.md): The playback rate of the haptic player.
- [CHHapticAdvancedPatternPlayerCompletionHandler](../chhapticadvancedpatternplayercompletionhandler.md): A typealias for the completion handler to run after a haptic finishes playback.

# completionHandler (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A completion block that runs after the haptic finishes playing.

## Declaration

```objectivec
@property (readwrite) CHHapticAdvancedPatternPlayerCompletionHandler completionHandler;
```

## See Also

### Setting Playback Properties

- [loopEnabled](loopenabled.md): A Boolean that determines whether the haptic repeats itself on completion.
- [loopEnd](loopend.md): The time at which to end looping haptic playback.
- [playbackRate](playbackrate.md): The playback rate of the haptic player.
- [CHHapticAdvancedPatternPlayerCompletionHandler](../chhapticadvancedpatternplayercompletionhandler.md): A typealias for the completion handler to run after a haptic finishes playback.
