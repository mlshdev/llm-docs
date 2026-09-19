> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/process/launchpath

# launchPath (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 27.2)

Sets the receiver’s executable.

> Use [executableURL](executableurl.md) instead.

## Declaration

```swift
var launchPath: String? { get set }
```

## Parameters

- `path`: The path to the executable.

## See Also

### Deprecated

- [launchedProcess(launchPath:arguments:)](launchedprocess%28launchpath_arguments_%29.md): Deprecated. Creates and launches a task with a specified executable and arguments.
- [currentDirectoryPath](currentdirectorypath.md): Deprecated. Sets the current directory for the receiver.
- [launch()](launch%28%29.md): Deprecated. Launches the task represented by the receiver.

# launchPath (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 27.2)

Sets the receiver’s executable.

> Use [executableURL](executableurl.md) instead.

## Declaration

```objectivec
@property (copy, nullable) NSString * launchPath;
```

## Parameters

- `path`: The path to the executable.

## See Also

### Deprecated

- [launchedTaskWithLaunchPath:arguments:](launchedprocess%28launchpath_arguments_%29.md): Deprecated. Creates and launches a task with a specified executable and arguments.
- [currentDirectoryPath](currentdirectorypath.md): Deprecated. Sets the current directory for the receiver.
- [launch](launch%28%29.md): Deprecated. Launches the task represented by the receiver.
