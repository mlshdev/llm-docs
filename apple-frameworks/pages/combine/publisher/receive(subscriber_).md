> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/receive(subscriber:)](https://developer.apple.com/documentation/combine/publisher/receive(subscriber:))

# receive(subscriber:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Attaches the specified subscriber to this publisher.

## Declaration

```swift
func receive<S>(subscriber: S) where S : Subscriber, Self.Failure == S.Failure, Self.Output == S.Input
```

## Parameters

- `subscriber`: The subscriber to attach to this [Publisher](../publisher.md), after which it can receive values.

<a id="discussion"></a>

## Discussion

Implementations of [Publisher](../publisher.md) must implement this method.

The provided implementation of [subscribe(\_:)](subscribe%28__%29-4u8kn.md)calls this method.

## See Also

### Working with subscribers

- [subscribe(\_:)](subscribe%28__%29-4u8kn.md): Attaches the specified subscriber to this publisher.
- [subscribe(\_:)](subscribe%28__%29-3fk20.md): Attaches the specified subject to this publisher.
