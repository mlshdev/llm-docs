> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mljob/phase](https://developer.apple.com/documentation/createml/mljob/phase)

# phase

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Phase publisher.

## Declaration

```swift
final var phase: AnyPublisher<MLPhase, Never> { get }
```

## See Also

### Receiving progress updates

- [checkpoints](checkpoints.md): A publisher that sends a checkpoint for each of the session’s checkpoint intervals.
- [result](result.md): A publisher that provides a result when the training session has finished.
