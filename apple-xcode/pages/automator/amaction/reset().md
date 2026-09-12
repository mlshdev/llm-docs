> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amaction/reset()](https://developer.apple.com/documentation/automator/amaction/reset())

# reset() (Swift)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Resets the action to its initial state.

## Declaration

```swift
func reset()
```

<a id="Discussion"></a>

## Discussion

Resetting causes the action to release its output generated from the current execution of the workflow.

## See Also

### Controlling the Action

- [run(withInput:)](run%28withinput_%29.md): Requests the action to perform its task using the specified input.
- [runAsynchronously(withInput:)](runasynchronously%28withinput_%29.md): Causes Automator to wait for notification that the action has completed execution, which allows the action to perform an asynchronous operation.
- [finishRunningWithError(\_:)](finishrunningwitherror%28__%29.md): Causes the action to stop running and return an error, which, in turn, causes the workflow to stop.
- [willFinishRunning()](willfinishrunning%28%29.md): Provides an opportunity for an action to perform cleanup operations, such as closing windows and deallocating memory.
- [stop()](stop%28%29.md): Stops the action from running.

# reset (Objective-C)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Resets the action to its initial state.

## Declaration

```objectivec
- (void) reset;
```

<a id="Discussion"></a>

## Discussion

Resetting causes the action to release its output generated from the current execution of the workflow.

## See Also

### Controlling the Action

- [runWithInput:error:](run%28withinput_%29.md): Requests the action to perform its task using the specified input.
- [runAsynchronouslyWithInput:](runasynchronously%28withinput_%29.md): Causes Automator to wait for notification that the action has completed execution, which allows the action to perform an asynchronous operation.
- [finishRunningWithError:](finishrunningwitherror%28__%29.md): Causes the action to stop running and return an error, which, in turn, causes the workflow to stop.
- [willFinishRunning](willfinishrunning%28%29.md): Provides an opportunity for an action to perform cleanup operations, such as closing windows and deallocating memory.
- [stop](stop%28%29.md): Stops the action from running.
