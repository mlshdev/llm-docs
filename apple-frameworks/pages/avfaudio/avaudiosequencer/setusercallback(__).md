> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosequencer/setusercallback(_:)](https://developer.apple.com/documentation/avfaudio/avaudiosequencer/setusercallback(_:))

# setUserCallback(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Adds a callback that the sequencer calls each time it encounters a user event during playback.

## Declaration

```swift
func setUserCallback(_ userCallback: AVAudioSequencerUserCallback?)
```

## Parameters

- `userCallback`: The user callback that the system calls.

<a id="Discussion"></a>

## Discussion

The system calls the same callback for events that occur on any track in the sequencer. Set the callback to `nil` to disable it.

## See Also

### Setting the User Callback

- [AVAudioSequencerUserCallback](../avaudiosequencerusercallback.md): A callback the sequencer calls asynchronously during playback when it encounters a user event.

# setUserCallback: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Adds a callback that the sequencer calls each time it encounters a user event during playback.

## Declaration

```objectivec
- (void) setUserCallback:(AVAudioSequencerUserCallback) userCallback;
```

## Parameters

- `userCallback`: The user callback that the system calls.

<a id="Discussion"></a>

## Discussion

The system calls the same callback for events that occur on any track in the sequencer. Set the callback to `nil` to disable it.

## See Also

### Setting the User Callback

- [AVAudioSequencerUserCallback](../avaudiosequencerusercallback.md): A callback the sequencer calls asynchronously during playback when it encounters a user event.
