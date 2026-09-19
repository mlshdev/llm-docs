> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/messagechannel/disconnect()

# disconnect()

**Framework:** Foveated Streaming  
**Kind:** Instance Method  
**Availability:** visionOS 26.4+

Manually disconnects and closes the data channel.

## Declaration

```swift
func disconnect()
```

<a id="discussion"></a>

## Discussion

Sets the [channelStatus](channelstatus-swift.property.md) to [FoveatedStreamingSession.MessageChannel.ChannelStatus.closed](channelstatus-swift.enum/closed.md).
