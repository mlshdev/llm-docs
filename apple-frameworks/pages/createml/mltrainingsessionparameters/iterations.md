> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mltrainingsessionparameters/iterations](https://developer.apple.com/documentation/createml/mltrainingsessionparameters/iterations)

# iterations

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The maximum number of iterations for the training session.

## Declaration

```swift
var iterations: Int
```

<a id="discussion"></a>

## Discussion

Each iteration represents a full pass over the training data, also known as an epoch. Training may stop with fewer iterations if training converges. This limit also affects resumed training sessions. To extend training beyond the original limit, increase the limit before resuming.

## See Also

### Configuring the session’s parameters

- [sessionDirectory](sessiondirectory.md): The location in the file system where the session stores its progress.
- [reportInterval](reportinterval.md): The number of iterations the session completes before it reports its progress.
- [checkpointInterval](checkpointinterval.md): The number of iterations the session completes before it saves a checkpoint.
