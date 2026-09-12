> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticadvancedpatternplayercompletionhandler](https://developer.apple.com/documentation/corehaptics/chhapticadvancedpatternplayercompletionhandler)

# CHHapticAdvancedPatternPlayerCompletionHandler (Swift)

**Framework:** Core Haptics  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

A typealias for the completion handler to run after a haptic finishes playback.

## Declaration

```swift
typealias CHHapticAdvancedPatternPlayerCompletionHandler = ((any Error)?) -> Void
```

## See Also

### Setting Playback Properties

- [loopEnabled](chhapticadvancedpatternplayer/loopenabled.md): A Boolean that determines whether the haptic repeats itself on completion.
- [loopEnd](chhapticadvancedpatternplayer/loopend.md): The time at which to end looping haptic playback.
- [playbackRate](chhapticadvancedpatternplayer/playbackrate.md): The playback rate of the haptic player.
- [completionHandler](chhapticadvancedpatternplayer/completionhandler.md): A completion block that runs after the haptic finishes playing.

# CHHapticAdvancedPatternPlayerCompletionHandler (Objective-C)

**Framework:** Core Haptics  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

A typealias for the completion handler to run after a haptic finishes playback.

## Declaration

```objectivec
typedef void (^)(NSError *) CHHapticAdvancedPatternPlayerCompletionHandler;
```

## See Also

### Setting Playback Properties

- [loopEnabled](chhapticadvancedpatternplayer/loopenabled.md): A Boolean that determines whether the haptic repeats itself on completion.
- [loopEnd](chhapticadvancedpatternplayer/loopend.md): The time at which to end looping haptic playback.
- [playbackRate](chhapticadvancedpatternplayer/playbackrate.md): The playback rate of the haptic player.
- [completionHandler](chhapticadvancedpatternplayer/completionhandler.md): A completion block that runs after the haptic finishes playing.
