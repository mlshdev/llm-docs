> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/subject/send(completion:)](https://developer.apple.com/documentation/combine/subject/send(completion:))

# send(completion:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sends a completion signal to the subscriber.

## Declaration

```swift
func send(completion: Subscribers.Completion<Self.Failure>)
```

## Parameters

- `completion`: A `Completion` instance which indicates whether publishing has finished normally or failed with an error.

## Mentioned In

- [Using Combine for Your App’s Asynchronous Code](../using-combine-for-your-app-s-asynchronous-code.md)

## See Also

### Delivering life cycle events to subscribers

- [send(subscription:)](send%28subscription_%29.md): Sends a subscription to the subscriber.
