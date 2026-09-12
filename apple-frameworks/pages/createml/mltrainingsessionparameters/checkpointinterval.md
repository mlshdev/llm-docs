> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mltrainingsessionparameters/checkpointinterval](https://developer.apple.com/documentation/createml/mltrainingsessionparameters/checkpointinterval)

# checkpointInterval

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The number of iterations the session completes before it saves a checkpoint.

## Declaration

```swift
var checkpointInterval: Int
```

## See Also

### Configuring the session’s parameters

- [sessionDirectory](sessiondirectory.md): The location in the file system where the session stores its progress.
- [reportInterval](reportinterval.md): The number of iterations the session completes before it reports its progress.
- [iterations](iterations.md): The maximum number of iterations for the training session.
