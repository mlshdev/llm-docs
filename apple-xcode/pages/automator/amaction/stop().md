> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amaction/stop()](https://developer.apple.com/documentation/automator/amaction/stop())

# stop() (Swift)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Stops the action from running.

## Declaration

```swift
func stop()
```

<a id="Discussion"></a>

## Discussion

The output acquired by the action during execution of the current workflow is still accessible to Automator.

## See Also

### Controlling the Action

- [run(withInput:)](run%28withinput_%29.md): Requests the action to perform its task using the specified input.
- [runAsynchronously(withInput:)](runasynchronously%28withinput_%29.md): Causes Automator to wait for notification that the action has completed execution, which allows the action to perform an asynchronous operation.
- [finishRunningWithError(\_:)](finishrunningwitherror%28__%29.md): Causes the action to stop running and return an error, which, in turn, causes the workflow to stop.
- [willFinishRunning()](willfinishrunning%28%29.md): Provides an opportunity for an action to perform cleanup operations, such as closing windows and deallocating memory.
- [reset()](reset%28%29.md): Resets the action to its initial state.

# stop (Objective-C)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Stops the action from running.

## Declaration

```objectivec
- (void) stop;
```

<a id="Discussion"></a>

## Discussion

The output acquired by the action during execution of the current workflow is still accessible to Automator.

## See Also

### Controlling the Action

- [runWithInput:error:](run%28withinput_%29.md): Requests the action to perform its task using the specified input.
- [runAsynchronouslyWithInput:](runasynchronously%28withinput_%29.md): Causes Automator to wait for notification that the action has completed execution, which allows the action to perform an asynchronous operation.
- [finishRunningWithError:](finishrunningwitherror%28__%29.md): Causes the action to stop running and return an error, which, in turn, causes the workflow to stop.
- [willFinishRunning](willfinishrunning%28%29.md): Provides an opportunity for an action to perform cleanup operations, such as closing windows and deallocating memory.
- [reset](reset%28%29.md): Resets the action to its initial state.
