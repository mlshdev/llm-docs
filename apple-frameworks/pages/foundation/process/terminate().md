> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/process/terminate()](https://developer.apple.com/documentation/foundation/process/terminate())

# terminate() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sends a terminate signal to the receiver and all of its subtasks.

## Declaration

```swift
func terminate()
```

<a id="Discussion"></a>

## Discussion

If the task terminates as a result, which is the default behavior, an [didTerminateNotification](didterminatenotification.md) gets sent to the default notification center. This method has no effect if the receiver was already launched and has already finished executing. If the receiver hasn’t been launched yet, this method raises an `NSInvalidArgumentException`.

It’s not always possible to terminate the receiver because it might be ignoring the terminate signal. The [terminate()](terminate%28%29.md) method sends `SIGTERM`.

## See Also

### Related Documentation

- [launch()](launch%28%29.md): Deprecated. Launches the task represented by the receiver.
- [launchedProcess(launchPath:arguments:)](launchedprocess%28launchpath_arguments_%29.md): Deprecated. Creates and launches a task with a specified executable and arguments.
- [terminationStatus](terminationstatus.md): The exit status the receiver’s executable returns.

### Running and stopping

- [run()](run%28%29.md): Runs the process with the current environment.
- [interrupt()](interrupt%28%29.md): Sends an interrupt signal to the receiver and all of its subtasks.
- [resume()](resume%28%29.md): Resumes execution of a suspended task.
- [suspend()](suspend%28%29.md): Suspends execution of the receiver task.
- [waitUntilExit()](waituntilexit%28%29.md): Blocks the process until the receiver is finished.

# terminate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sends a terminate signal to the receiver and all of its subtasks.

## Declaration

```objectivec
- (void) terminate;
```

<a id="Discussion"></a>

## Discussion

If the task terminates as a result, which is the default behavior, an [NSTaskDidTerminateNotification](didterminatenotification.md) gets sent to the default notification center. This method has no effect if the receiver was already launched and has already finished executing. If the receiver hasn’t been launched yet, this method raises an `NSInvalidArgumentException`.

It’s not always possible to terminate the receiver because it might be ignoring the terminate signal. The [terminate](terminate%28%29.md) method sends `SIGTERM`.

## See Also

### Related Documentation

- [launch](launch%28%29.md): Deprecated. Launches the task represented by the receiver.
- [launchedTaskWithLaunchPath:arguments:](launchedprocess%28launchpath_arguments_%29.md): Deprecated. Creates and launches a task with a specified executable and arguments.
- [terminationStatus](terminationstatus.md): The exit status the receiver’s executable returns.

### Running and stopping

- [launchAndReturnError:](run%28%29.md): Runs the process with the current environment.
- [interrupt](interrupt%28%29.md): Sends an interrupt signal to the receiver and all of its subtasks.
- [resume](resume%28%29.md): Resumes execution of a suspended task.
- [suspend](suspend%28%29.md): Suspends execution of the receiver task.
- [waitUntilExit](waituntilexit%28%29.md): Blocks the process until the receiver is finished.
