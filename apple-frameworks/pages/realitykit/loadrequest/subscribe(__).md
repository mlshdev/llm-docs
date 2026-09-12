> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/loadrequest/subscribe(_:)](https://developer.apple.com/documentation/realitykit/loadrequest/subscribe(_:))

# subscribe(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Attaches the specified subscriber to this publisher.

## Declaration

```swift
func subscribe<S>(_ subscriber: S) where Output == S.Input, S : Subscriber, S.Failure == any Error
```

## Parameters

- `subscriber`: The subscriber to attach to this publisher. After attaching, the subscriber can start to receive values.

<a id="discussion"></a>

## Discussion

Always call this function instead of `Publisher/receive(subscriber:)`. Adopters of `Publisher` must implement `Publisher/receive(subscriber:)`. The implementation of `Publisher/subscribe(_:)-4u8kn` provided by `Publisher` calls through to `Publisher/receive(subscriber:)`.
