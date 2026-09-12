> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amaction/runasynchronously(withinput:)](https://developer.apple.com/documentation/automator/amaction/runasynchronously(withinput:))

# runAsynchronously(withInput:) (Swift)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.5+

Causes Automator to wait for notification that the action has completed execution, which allows the action to perform an asynchronous operation.

## Declaration

```swift
func runAsynchronously(withInput input: Any?)
```

## Parameters

- `input`: The input for the action. Should contain one or more objects compatible with one of the types specified in the action’s [selectedInputType](selectedinputtype.md) property.

<a id="Discussion"></a>

## Discussion

Override this method in actions that need to make asynchronous calls. After [runAsynchronously(withInput:)](runasynchronously%28withinput_%29.md) is invoked, Automator doesn’t continue until the action invokes [finishRunningWithError(\_:)](finishrunningwitherror%28__%29.md). In your override of this method, you can make an asynchronous call, wait to be notified of its completion, then invoke [finishRunningWithError(\_:)](finishrunningwitherror%28__%29.md) to signal to Automator that the action has completed.

> **Warning**

>  Failure to invoke [finishRunningWithError(\_:)](finishrunningwitherror%28__%29.md) can cause a workflow to stall indefinitely.

For actions that don’t need to make asynchronous calls, use [runWithInput:fromAction:error:](runwithinput_fromaction_error_.md) instead.

## See Also

### Controlling the Action

- [run(withInput:)](run%28withinput_%29.md): Requests the action to perform its task using the specified input.
- [finishRunningWithError(\_:)](finishrunningwitherror%28__%29.md): Causes the action to stop running and return an error, which, in turn, causes the workflow to stop.
- [willFinishRunning()](willfinishrunning%28%29.md): Provides an opportunity for an action to perform cleanup operations, such as closing windows and deallocating memory.
- [stop()](stop%28%29.md): Stops the action from running.
- [reset()](reset%28%29.md): Resets the action to its initial state.

# runAsynchronouslyWithInput: (Objective-C)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.5+

Causes Automator to wait for notification that the action has completed execution, which allows the action to perform an asynchronous operation.

## Declaration

```objectivec
- (void) runAsynchronouslyWithInput:(id) input;
```

## Parameters

- `input`: The input for the action. Should contain one or more objects compatible with one of the types specified in the action’s [selectedInputType](selectedinputtype.md) property.

<a id="Discussion"></a>

## Discussion

Override this method in actions that need to make asynchronous calls. After [runAsynchronouslyWithInput:](runasynchronously%28withinput_%29.md) is invoked, Automator doesn’t continue until the action invokes [finishRunningWithError:](finishrunningwitherror%28__%29.md). In your override of this method, you can make an asynchronous call, wait to be notified of its completion, then invoke [finishRunningWithError:](finishrunningwitherror%28__%29.md) to signal to Automator that the action has completed.

> **Warning**

>  Failure to invoke [finishRunningWithError:](finishrunningwitherror%28__%29.md) can cause a workflow to stall indefinitely.

For actions that don’t need to make asynchronous calls, use [runWithInput:fromAction:error:](runwithinput_fromaction_error_.md) instead.

## See Also

### Controlling the Action

- [runWithInput:error:](run%28withinput_%29.md): Requests the action to perform its task using the specified input.
- [finishRunningWithError:](finishrunningwitherror%28__%29.md): Causes the action to stop running and return an error, which, in turn, causes the workflow to stop.
- [willFinishRunning](willfinishrunning%28%29.md): Provides an opportunity for an action to perform cleanup operations, such as closing windows and deallocating memory.
- [stop](stop%28%29.md): Stops the action from running.
- [reset](reset%28%29.md): Resets the action to its initial state.
