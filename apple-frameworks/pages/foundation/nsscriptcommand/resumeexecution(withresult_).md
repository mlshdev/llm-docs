> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptcommand/resumeexecution(withresult:)](https://developer.apple.com/documentation/foundation/nsscriptcommand/resumeexecution(withresult:))

# resumeExecution(withResult:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

If a successful, unmatched, invocation of [suspendExecution()](suspendexecution%28%29.md) has been made, resume the execution of the command.

## Declaration

```swift
func resumeExecution(withResult result: Any?)
```

<a id="Discussion"></a>

## Discussion

Resumes the execution of the command if a successful, unmatched, invocation of [suspendExecution()](suspendexecution%28%29.md) has been made—otherwise, does nothing. The value for `result` is dependent on the segment of command execution that was suspended:

- If [suspendExecution()](suspendexecution%28%29.md) was invoked from within a command handler of one of the command’s receivers, `result` is considered to be the return value of the handler. Unless the command has received a [scriptErrorNumber](scripterrornumber.md) message with a nonzero error number, execution of the command will continue and the command handlers of other receivers will be invoked.
- If [suspendExecution()](suspendexecution%28%29.md) was invoked from within an override of [performDefaultImplementation()](performdefaultimplementation%28%29.md) the result is treated as if it were the return value of the invocation of [performDefaultImplementation()](performdefaultimplementation%28%29.md).

[resumeExecution(withResult:)](resumeexecution%28withresult_%29.md) may be invoked in any thread, not just the one in which the corresponding invocation of [suspendExecution()](suspendexecution%28%29.md) occurred.

> **Important**

>  The script command handler that is being executed when [suspendExecution()](suspendexecution%28%29.md) is invoked must return before you invoke [resumeExecution(withResult:)](resumeexecution%28withresult_%29.md). That is, it is not valid to suspend a command’s execution and then resume it immediately.

## See Also

### Suspending and resuming commands

- [suspendExecution()](suspendexecution%28%29.md): Suspends the execution of the receiver.

# resumeExecutionWithResult: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

If a successful, unmatched, invocation of [suspendExecution](suspendexecution%28%29.md) has been made, resume the execution of the command.

## Declaration

```objectivec
- (void) resumeExecutionWithResult:(id) result;
```

<a id="Discussion"></a>

## Discussion

Resumes the execution of the command if a successful, unmatched, invocation of [suspendExecution](suspendexecution%28%29.md) has been made—otherwise, does nothing. The value for `result` is dependent on the segment of command execution that was suspended:

- If [suspendExecution](suspendexecution%28%29.md) was invoked from within a command handler of one of the command’s receivers, `result` is considered to be the return value of the handler. Unless the command has received a [scriptErrorNumber](scripterrornumber.md) message with a nonzero error number, execution of the command will continue and the command handlers of other receivers will be invoked.
- If [suspendExecution](suspendexecution%28%29.md) was invoked from within an override of [performDefaultImplementation](performdefaultimplementation%28%29.md) the result is treated as if it were the return value of the invocation of [performDefaultImplementation](performdefaultimplementation%28%29.md).

[resumeExecutionWithResult:](resumeexecution%28withresult_%29.md) may be invoked in any thread, not just the one in which the corresponding invocation of [suspendExecution](suspendexecution%28%29.md) occurred.

> **Important**

>  The script command handler that is being executed when [suspendExecution](suspendexecution%28%29.md) is invoked must return before you invoke [resumeExecutionWithResult:](resumeexecution%28withresult_%29.md). That is, it is not valid to suspend a command’s execution and then resume it immediately.

## See Also

### Suspending and resuming commands

- [suspendExecution](suspendexecution%28%29.md): Suspends the execution of the receiver.
