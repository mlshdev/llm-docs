> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mltrainingsession/removecheckpoints(_:)](https://developer.apple.com/documentation/createml/mltrainingsession/removecheckpoints(_:))

# removeCheckpoints(\_:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Removes the checkpoints that satisfy your closure from the training session.

## Declaration

```swift
final func removeCheckpoints(_ predicate: (MLCheckpoint) -> Bool) throws
```

## Parameters

- `predicate`: A closure that returns a Boolean indicating whether to remove a checkpoint.
