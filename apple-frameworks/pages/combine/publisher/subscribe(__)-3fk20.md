> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/subscribe(_:)-3fk20](https://developer.apple.com/documentation/combine/publisher/subscribe(_:)-3fk20)

# subscribe(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Attaches the specified subject to this publisher.

## Declaration

```swift
func subscribe<S>(_ subject: S) -> AnyCancellable where S : Subject, Self.Failure == S.Failure, Self.Output == S.Output
```

## Parameters

- `subject`: The subject to attach to this publisher.

## Mentioned In

- [Controlling Publishing with Connectable Publishers](../controlling-publishing-with-connectable-publishers.md)

## See Also

### Working with subscribers

- [receive(subscriber:)](receive%28subscriber_%29.md): Attaches the specified subscriber to this publisher.
- [subscribe(\_:)](subscribe%28__%29-4u8kn.md): Attaches the specified subscriber to this publisher.
