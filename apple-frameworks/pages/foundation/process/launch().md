> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/process/launch()](https://developer.apple.com/documentation/foundation/process/launch())

# launch() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Launches the task represented by the receiver.

> Use [run()](run%28%29.md) instead.

## Declaration

```swift
func launch()
```

<a id="Discussion"></a>

## Discussion

Raises an `NSInvalidArgumentException` if the launch path has not been set or is invalid or if it fails to create a process.

## See Also

### Related Documentation

- [waitUntilExit()](waituntilexit%28%29.md): Blocks the process until the receiver is finished.
- [terminate()](terminate%28%29.md): Sends a terminate signal to the receiver and all of its subtasks.

### Deprecated

- [launchedProcess(launchPath:arguments:)](launchedprocess%28launchpath_arguments_%29.md): Deprecated. Creates and launches a task with a specified executable and arguments.
- [currentDirectoryPath](currentdirectorypath.md): Deprecated. Sets the current directory for the receiver.
- [launchPath](launchpath.md): Deprecated. Sets the receiver’s executable.

# launch (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Launches the task represented by the receiver.

> Use [launchAndReturnError:](run%28%29.md) instead.

## Declaration

```objectivec
- (void) launch;
```

<a id="Discussion"></a>

## Discussion

Raises an `NSInvalidArgumentException` if the launch path has not been set or is invalid or if it fails to create a process.

## See Also

### Related Documentation

- [waitUntilExit](waituntilexit%28%29.md): Blocks the process until the receiver is finished.
- [terminate](terminate%28%29.md): Sends a terminate signal to the receiver and all of its subtasks.

### Deprecated

- [launchedTaskWithLaunchPath:arguments:](launchedprocess%28launchpath_arguments_%29.md): Deprecated. Creates and launches a task with a specified executable and arguments.
- [currentDirectoryPath](currentdirectorypath.md): Deprecated. Sets the current directory for the receiver.
- [launchPath](launchpath.md): Deprecated. Sets the receiver’s executable.
