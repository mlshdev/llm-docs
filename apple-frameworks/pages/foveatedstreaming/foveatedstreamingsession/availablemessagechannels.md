> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingsession/availablemessagechannels](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/availablemessagechannels)

# availableMessageChannels

**Framework:** Foveated Streaming  
**Kind:** Instance Property  
**Availability:** visionOS 26.4+

A list of all available message channels in this session.

## Declaration

```swift
@MainActor final var availableMessageChannels: Set<FoveatedStreamingSession.MessageChannel.ID> { get }
```

<a id="discussion"></a>

## Discussion

Observe this property to know when the endpoint creates a new message channel. Message channels can only be initialized by the endpoint.

For example, you can observe the available message channels by employing [withObservationTracking(\_:onChange:)](https://developer.apple.com/documentation/observation/withobservationtracking%28_:onchange:%29).

```swift
@MainActor
private func monitorAvailableChannels() {
    withObservationTracking {
        for channelId in session.availableMessageChannels {
            // Get the message channel.
        }
    } onChange: {
        Task { @MainActor in
            self.monitorAvailableChannels()
        }
    }
}
```
