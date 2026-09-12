> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayernode/schedulebuffer(_:attime:options:completioncallbacktype:completionhandler:)-3ewd3](https://developer.apple.com/documentation/avfaudio/avaudioplayernode/schedulebuffer(_:attime:options:completioncallbacktype:completionhandler:)-3ewd3)

# scheduleBuffer(\_:atTime:options:completionCallbackType:completionHandler:)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Schedules playing samples from an audio buffer.

## Declaration

```swift
func scheduleBuffer(_ buffer: AVAudioPCMBuffer, atTime when: AVAudioTime? = nil, options: AVAudioPlayerNodeBufferOptions = [], completionCallbackType callbackType: AVAudioPlayerNodeCompletionCallbackType, completionHandler: (@Sendable () -> Void)?)
```

## Parameters

- `buffer`: The buffer to play.
- `when`: The time at which to play the buffer. Nil means “follow previous command”.
- `options`: Options for looping, interrupting, etc.
- `callbackType`: Specifies when the completion handler is called.
- `completionHandler`: Called after the buffer has been consumed, rendered, or played back. May be nil.
