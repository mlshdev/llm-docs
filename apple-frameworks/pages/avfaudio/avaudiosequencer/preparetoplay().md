> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosequencer/preparetoplay()](https://developer.apple.com/documentation/avfaudio/avaudiosequencer/preparetoplay())

# prepareToPlay() (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Gets ready to play the sequence by prerolling all events.

## Declaration

```swift
func prepareToPlay()
```

<a id="Discussion"></a>

## Discussion

The framework invokes this method automatically on play if you don’t call it, but it may delay startup.

## See Also

### Operating an Audio Sequencer

- [start()](start%28%29.md): Starts the sequencer’s player.
- [stop()](stop%28%29.md): Stops the sequencer’s player.

# prepareToPlay (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Gets ready to play the sequence by prerolling all events.

## Declaration

```objectivec
- (void) prepareToPlay;
```

<a id="Discussion"></a>

## Discussion

The framework invokes this method automatically on play if you don’t call it, but it may delay startup.

## See Also

### Operating an Audio Sequencer

- [startAndReturnError:](start%28%29.md): Starts the sequencer’s player.
- [stop](stop%28%29.md): Stops the sequencer’s player.
