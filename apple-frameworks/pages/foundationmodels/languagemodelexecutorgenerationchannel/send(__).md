> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelexecutorgenerationchannel/send(_:)](https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationchannel/send(_:))

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
