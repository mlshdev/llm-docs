> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationchannel/send(_:)

# send(\_:)

**Framework:** Foundation Models  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Sends a generation event on the channel.

## Declaration

```swift
nonisolated(nonsending) func send(_ event: LanguageModelExecutorGenerationChannel.Event) async
```

## Parameters

- `event`: The event to send.

## See Also

### Sending an event

- [LanguageModelExecutorGenerationChannel.Event](event.md): A generation event sent on a generation channel.
