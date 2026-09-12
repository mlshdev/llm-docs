> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/process/interrupt()](https://developer.apple.com/documentation/foundation/process/interrupt())

# interrupt() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sends an interrupt signal to the receiver and all of its subtasks.

## Declaration

```swift
func interrupt()
```

<a id="Discussion"></a>

## Discussion

If the task terminates as a result, which is the default behavior, an [didTerminateNotification](didterminatenotification.md) gets sent to the default notification center. This method has no effect if the receiver was already launched and has already finished executing. If the system hasn’t launched the receiver, this method raises an `NSInvalidArgumentException`.

It isn’t always possible to interrupt the receiver because it might be ignoring the interrupt signal. The [interrupt()](interrupt%28%29.md) method sends `SIGINT`.

## See Also

### Running and stopping

- [run()](run%28%29.md): Runs the process with the current environment.
- [resume()](resume%28%29.md): Resumes execution of a suspended task.
- [suspend()](suspend%28%29.md): Suspends execution of the receiver task.
- [terminate()](terminate%28%29.md): Sends a terminate signal to the receiver and all of its subtasks.
- [waitUntilExit()](waituntilexit%28%29.md): Blocks the process until the receiver is finished.

# interrupt (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sends an interrupt signal to the receiver and all of its subtasks.

## Declaration

```objectivec
- (void) interrupt;
```

<a id="Discussion"></a>

## Discussion

If the task terminates as a result, which is the default behavior, an [NSTaskDidTerminateNotification](didterminatenotification.md) gets sent to the default notification center. This method has no effect if the receiver was already launched and has already finished executing. If the system hasn’t launched the receiver, this method raises an `NSInvalidArgumentException`.

It isn’t always possible to interrupt the receiver because it might be ignoring the interrupt signal. The [interrupt](interrupt%28%29.md) method sends `SIGINT`.

## See Also

### Running and stopping

- [launchAndReturnError:](run%28%29.md): Runs the process with the current environment.
- [resume](resume%28%29.md): Resumes execution of a suspended task.
- [suspend](suspend%28%29.md): Suspends execution of the receiver task.
- [terminate](terminate%28%29.md): Sends a terminate signal to the receiver and all of its subtasks.
- [waitUntilExit](waituntilexit%28%29.md): Blocks the process until the receiver is finished.
