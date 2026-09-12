> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mltrainingsession/phase](https://developer.apple.com/documentation/createml/mltrainingsession/phase)

# phase

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The training session’s current state.

## Declaration

```swift
final var phase: MLPhase { get }
```

## See Also

### Checking a training session’s progress

- [MLPhase](../mlphase.md): The possible states of a training session.
- [iteration](iteration.md): The iteration number of a training session’s phase.
- [checkpoints](checkpoints.md): An array of checkpoints the training session has created so far.
