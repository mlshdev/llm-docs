> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptcommand/suspendexecution()](https://developer.apple.com/documentation/foundation/nsscriptcommand/suspendexecution())

# suspendExecution() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Suspends the execution of the receiver.

## Declaration

```swift
func suspendExecution()
```

<a id="Discussion"></a>

## Discussion

Suspends the execution of the receiver only if the receiver is being executed in the current thread by Cocoa scripting’s built-in Apple event handling (that is, the receiver would be returned by `[NSScriptCommand currentCommand]`)—otherwise, does nothing. A matching invocation of [resumeExecution(withResult:)](resumeexecution%28withresult_%29.md) must be made.

> **Important**

>  The script command handler that is being executed when this method is invoked must return before the subsequent invocation of [resumeExecution(withResult:)](resumeexecution%28withresult_%29.md). That is, it is not valid to suspend a command’s execution and then resume it immediately.

Another command can execute while a command is suspended.

## See Also

### Suspending and resuming commands

- [resumeExecution(withResult:)](resumeexecution%28withresult_%29.md): If a successful, unmatched, invocation of [suspendExecution()](suspendexecution%28%29.md) has been made, resume the execution of the command.

# suspendExecution (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Suspends the execution of the receiver.

## Declaration

```objectivec
- (void) suspendExecution;
```

<a id="Discussion"></a>

## Discussion

Suspends the execution of the receiver only if the receiver is being executed in the current thread by Cocoa scripting’s built-in Apple event handling (that is, the receiver would be returned by `[NSScriptCommand currentCommand]`)—otherwise, does nothing. A matching invocation of [resumeExecutionWithResult:](resumeexecution%28withresult_%29.md) must be made.

> **Important**

>  The script command handler that is being executed when this method is invoked must return before the subsequent invocation of [resumeExecutionWithResult:](resumeexecution%28withresult_%29.md). That is, it is not valid to suspend a command’s execution and then resume it immediately.

Another command can execute while a command is suspended.

## See Also

### Suspending and resuming commands

- [resumeExecutionWithResult:](resumeexecution%28withresult_%29.md): If a successful, unmatched, invocation of [suspendExecution](suspendexecution%28%29.md) has been made, resume the execution of the command.
