> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mltrainingsessionparameters/sessiondirectory

# sessionDirectory

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The location in the file system where the session stores its progress.

## Declaration

```swift
let sessionDirectory: URL?
```

## See Also

### Configuring the session’s parameters

- [reportInterval](reportinterval.md): The number of iterations the session completes before it reports its progress.
- [checkpointInterval](checkpointinterval.md): The number of iterations the session completes before it saves a checkpoint.
- [iterations](iterations.md): The maximum number of iterations for the training session.
