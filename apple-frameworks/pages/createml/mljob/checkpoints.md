> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mljob/checkpoints](https://developer.apple.com/documentation/createml/mljob/checkpoints)

# checkpoints

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A publisher that sends a checkpoint for each of the session’s checkpoint intervals.

## Declaration

```swift
final var checkpoints: AnyPublisher<MLCheckpoint, Never> { get }
```

## See Also

### Receiving progress updates

- [result](result.md): A publisher that provides a result when the training session has finished.
- [phase](phase.md): Phase publisher.
