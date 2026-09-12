> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/process/run()](https://developer.apple.com/documentation/foundation/process/run())

# run() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Runs the process with the current environment.

## Declaration

```swift
func run() throws
```

## See Also

### Running and stopping

- [interrupt()](interrupt%28%29.md): Sends an interrupt signal to the receiver and all of its subtasks.
- [resume()](resume%28%29.md): Resumes execution of a suspended task.
- [suspend()](suspend%28%29.md): Suspends execution of the receiver task.
- [terminate()](terminate%28%29.md): Sends a terminate signal to the receiver and all of its subtasks.
- [waitUntilExit()](waituntilexit%28%29.md): Blocks the process until the receiver is finished.

# launchAndReturnError: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Runs the process with the current environment.

## Declaration

```objectivec
- (BOOL) launchAndReturnError:(NSError **) error;
```

## See Also

### Running and stopping

- [interrupt](interrupt%28%29.md): Sends an interrupt signal to the receiver and all of its subtasks.
- [resume](resume%28%29.md): Resumes execution of a suspended task.
- [suspend](suspend%28%29.md): Suspends execution of the receiver task.
- [terminate](terminate%28%29.md): Sends a terminate signal to the receiver and all of its subtasks.
- [waitUntilExit](waituntilexit%28%29.md): Blocks the process until the receiver is finished.
