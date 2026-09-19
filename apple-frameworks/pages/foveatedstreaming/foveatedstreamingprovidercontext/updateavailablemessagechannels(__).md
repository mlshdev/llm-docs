> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingprovidercontext/updateavailablemessagechannels(_:)

# updateAvailableMessageChannels(\_:)

**Framework:** Foveated Streaming  
**Kind:** Instance Method  
**Availability:** visionOS 27.0+

Notifies the host app that the list of available message channels has updated.

## Declaration

```swift
@MainActor final func updateAvailableMessageChannels(_ channelIDs: [FoveatedStreamingSession.MessageChannel.ID])
```
