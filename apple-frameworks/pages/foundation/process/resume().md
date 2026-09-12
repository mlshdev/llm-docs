> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/process/resume()](https://developer.apple.com/documentation/foundation/process/resume())

# resume() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Resumes execution of a suspended task.

## Declaration

```swift
func resume() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver was able to resume execution, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

If the system sent multiple [suspend()](suspend%28%29.md) messages to the receiver, an equal number of [resume()](resume%28%29.md) messages must be sent before the task resumes execution.

## See Also

### Running and stopping

- [run()](run%28%29.md): Runs the process with the current environment.
- [interrupt()](interrupt%28%29.md): Sends an interrupt signal to the receiver and all of its subtasks.
- [suspend()](suspend%28%29.md): Suspends execution of the receiver task.
- [terminate()](terminate%28%29.md): Sends a terminate signal to the receiver and all of its subtasks.
- [waitUntilExit()](waituntilexit%28%29.md): Blocks the process until the receiver is finished.

# resume (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Resumes execution of a suspended task.

## Declaration

```objectivec
- (BOOL) resume;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver was able to resume execution, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

If the system sent multiple [suspend](suspend%28%29.md) messages to the receiver, an equal number of [resume](resume%28%29.md) messages must be sent before the task resumes execution.

## See Also

### Running and stopping

- [launchAndReturnError:](run%28%29.md): Runs the process with the current environment.
- [interrupt](interrupt%28%29.md): Sends an interrupt signal to the receiver and all of its subtasks.
- [suspend](suspend%28%29.md): Suspends execution of the receiver task.
- [terminate](terminate%28%29.md): Sends a terminate signal to the receiver and all of its subtasks.
- [waitUntilExit](waituntilexit%28%29.md): Blocks the process until the receiver is finished.
