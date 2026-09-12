> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/process/suspend()](https://developer.apple.com/documentation/foundation/process/suspend())

# suspend() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Suspends execution of the receiver task.

## Declaration

```swift
func suspend() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver was successfully suspended, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Multiple [suspend()](suspend%28%29.md) messages can be sent, but they must be balanced with an equal number of [resume()](resume%28%29.md) messages before the task resumes execution.

## See Also

### Running and stopping

- [run()](run%28%29.md): Runs the process with the current environment.
- [interrupt()](interrupt%28%29.md): Sends an interrupt signal to the receiver and all of its subtasks.
- [resume()](resume%28%29.md): Resumes execution of a suspended task.
- [terminate()](terminate%28%29.md): Sends a terminate signal to the receiver and all of its subtasks.
- [waitUntilExit()](waituntilexit%28%29.md): Blocks the process until the receiver is finished.

# suspend (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Suspends execution of the receiver task.

## Declaration

```objectivec
- (BOOL) suspend;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver was successfully suspended, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Multiple [suspend](suspend%28%29.md) messages can be sent, but they must be balanced with an equal number of [resume](resume%28%29.md) messages before the task resumes execution.

## See Also

### Running and stopping

- [launchAndReturnError:](run%28%29.md): Runs the process with the current environment.
- [interrupt](interrupt%28%29.md): Sends an interrupt signal to the receiver and all of its subtasks.
- [resume](resume%28%29.md): Resumes execution of a suspended task.
- [terminate](terminate%28%29.md): Sends a terminate signal to the receiver and all of its subtasks.
- [waitUntilExit](waituntilexit%28%29.md): Blocks the process until the receiver is finished.
