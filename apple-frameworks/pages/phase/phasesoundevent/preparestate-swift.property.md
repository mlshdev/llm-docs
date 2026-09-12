> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasesoundevent/preparestate-swift.property](https://developer.apple.com/documentation/phase/phasesoundevent/preparestate-swift.property)

# prepareState (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The status of sound-event preparation.

## Declaration

```swift
var prepareState: PHASESoundEvent.PrepareState { get }
```

## See Also

### Preparing Playback

- [prepare(completion:)](prepare%28completion_%29.md): Enables a sound event to play and runs the argument code when the sound event plays back.
- [PHASESoundEvent.PrepareHandlerReason](preparehandlerreason.md): Indicates the results of sound-event preparation.
- [PHASESoundEvent.PrepareState](preparestate-swift.enum.md): Indicates the state of sound-event preparation.

# prepareState (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The status of sound-event preparation.

## Declaration

```objectivec
@property (readonly) PHASESoundEventPrepareState prepareState;
```

## See Also

### Preparing Playback

- [prepareWithCompletion:](prepare%28completion_%29.md): Enables a sound event to play and runs the argument code when the sound event plays back.
- [PHASESoundEventPrepareHandlerReason](preparehandlerreason.md): Indicates the results of sound-event preparation.
- [PHASESoundEventPrepareState](preparestate-swift.enum.md): Indicates the state of sound-event preparation.
