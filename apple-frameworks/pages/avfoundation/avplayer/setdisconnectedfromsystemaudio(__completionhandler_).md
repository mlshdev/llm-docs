> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/setdisconnectedfromsystemaudio(_:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avplayer/setdisconnectedfromsystemaudio(_:completionhandler:))

# setDisconnectedFromSystemAudio(\_:completionHandler:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Changes whether the player is disconnected from system audio. This method allows you to dynamically change the player’s system audio connection. The operation is asynchronous. Each call to this method will invoke its own completion handler when the operation completes. When changing from `false` to `true`, you should typically call this method first, then deactivate the `AVAudioSession` to allow other audio to resume.

## Declaration

```swift
nonisolated func setDisconnectedFromSystemAudio(_ disconnected: Bool, completionHandler: (@Sendable () -> Void)? = nil)
```

## Parameters

- `disconnected`: `true` to disconnect from system audio, `false` to connect to it.
- `completionHandler`: A block that is called when the connection state change is complete. This block is called on an arbitrary queue. Defaults to `nil`.

<a id="Using-the-completion-handler"></a>

## Using the completion handler

In a scenario where changing the value from `false` to `true` should also allow other system audio to resume, you should only deactivate the audio session once the player has disconnected from system audio.

```swift
// Disconnect from system audio and let other audio resume
player.setDisconnectedFromSystemAudio(true) {
	try AVAudioSession.sharedInstance().setActive(false, options: .notifyOthersOnDeactivation)
}
```
