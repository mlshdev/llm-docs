> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/subscribe(_:)-4u8kn](https://developer.apple.com/documentation/combine/publisher/subscribe(_:)-4u8kn)

# subscribe(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Attaches the specified subscriber to this publisher.

## Declaration

```swift
func subscribe<S>(_ subscriber: S) where S : Subscriber, Self.Failure == S.Failure, Self.Output == S.Input
```

## Parameters

- `subscriber`: The subscriber to attach to this publisher. After attaching, the subscriber can start to receive values.

<a id="discussion"></a>

## Discussion

Always call this function instead of [receive(subscriber:)](receive%28subscriber_%29.md). Adopters of [Publisher](../publisher.md) must implement [receive(subscriber:)](receive%28subscriber_%29.md). The implementation of [subscribe(\_:)](subscribe%28__%29-4u8kn.md) provided by [Publisher](../publisher.md) calls through to [receive(subscriber:)](receive%28subscriber_%29.md).

## See Also

### Working with subscribers

- [receive(subscriber:)](receive%28subscriber_%29.md): Attaches the specified subscriber to this publisher.
- [subscribe(\_:)](subscribe%28__%29-3fk20.md): Attaches the specified subject to this publisher.
