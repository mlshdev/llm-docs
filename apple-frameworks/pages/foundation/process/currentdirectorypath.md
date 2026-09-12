> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/process/currentdirectorypath](https://developer.apple.com/documentation/foundation/process/currentdirectorypath)

# currentDirectoryPath (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Sets the current directory for the receiver.

> Use [currentDirectoryURL](currentdirectoryurl.md) instead.

## Declaration

```swift
var currentDirectoryPath: String { get set }
```

## Parameters

- `path`: The current directory for the task.

<a id="Discussion"></a>

## Discussion

If this method isn’t used, the current directory is inherited from the process that created the receiver. This method raises an `NSInvalidArgumentException` if the receiver has already been launched.

## See Also

### Deprecated

- [launchedProcess(launchPath:arguments:)](launchedprocess%28launchpath_arguments_%29.md): Deprecated. Creates and launches a task with a specified executable and arguments.
- [launchPath](launchpath.md): Deprecated. Sets the receiver’s executable.
- [launch()](launch%28%29.md): Deprecated. Launches the task represented by the receiver.

# currentDirectoryPath (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Sets the current directory for the receiver.

> Use [currentDirectoryURL](currentdirectoryurl.md) instead.

## Declaration

```objectivec
@property (copy) NSString * currentDirectoryPath;
```

## Parameters

- `path`: The current directory for the task.

<a id="Discussion"></a>

## Discussion

If this method isn’t used, the current directory is inherited from the process that created the receiver. This method raises an `NSInvalidArgumentException` if the receiver has already been launched.

## See Also

### Deprecated

- [launchedTaskWithLaunchPath:arguments:](launchedprocess%28launchpath_arguments_%29.md): Deprecated. Creates and launches a task with a specified executable and arguments.
- [launchPath](launchpath.md): Deprecated. Sets the receiver’s executable.
- [launch](launch%28%29.md): Deprecated. Launches the task represented by the receiver.
