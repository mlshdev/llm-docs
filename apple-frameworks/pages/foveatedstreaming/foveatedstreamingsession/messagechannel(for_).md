> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingsession/messagechannel(for:)](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/messagechannel(for:))

# messageChannel(for:)

**Framework:** Foveated Streaming  
**Kind:** Instance Method  
**Availability:** visionOS 26.4+

Creates or retrieves a message channel for the given message channel ID.

## Declaration

```swift
@MainActor final func messageChannel(for channelID: FoveatedStreamingSession.MessageChannel.ID) -> FoveatedStreamingSession.MessageChannel?
```

## Parameters

- `channelID`: The ID of the requested message channel.

<a id="return-value"></a>

## Return Value

The requested message channel if the session is connected and the channel ID is valid, otherwise `nil`.

<a id="discussion"></a>

## Discussion

If a channel with the given ID already exists, returns the existing channel. Otherwise, creates a new channel and opens it asynchronously.
