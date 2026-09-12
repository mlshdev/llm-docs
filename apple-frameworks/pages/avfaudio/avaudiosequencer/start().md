> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosequencer/start()](https://developer.apple.com/documentation/avfaudio/avaudiosequencer/start())

# start() (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Starts the sequencer’s player.

## Declaration

```swift
func start() throws
```

<a id="Discussion"></a>

## Discussion

If you don’t call [prepareToPlay()](preparetoplay%28%29.md), the framework calls it and then starts the player.

## See Also

### Operating an Audio Sequencer

- [prepareToPlay()](preparetoplay%28%29.md): Gets ready to play the sequence by prerolling all events.
- [stop()](stop%28%29.md): Stops the sequencer’s player.

# startAndReturnError: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Starts the sequencer’s player.

## Declaration

```objectivec
- (BOOL) startAndReturnError:(NSError **) outError;
```

<a id="Discussion"></a>

## Discussion

If you don’t call [prepareToPlay](preparetoplay%28%29.md), the framework calls it and then starts the player.

## See Also

### Operating an Audio Sequencer

- [prepareToPlay](preparetoplay%28%29.md): Gets ready to play the sequence by prerolling all events.
- [stop](stop%28%29.md): Stops the sequencer’s player.
