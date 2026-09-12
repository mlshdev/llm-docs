> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amaction/willfinishrunning()](https://developer.apple.com/documentation/automator/amaction/willfinishrunning())

# willFinishRunning() (Swift)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.5+

Provides an opportunity for an action to perform cleanup operations, such as closing windows and deallocating memory.

## Declaration

```swift
func willFinishRunning()
```

<a id="Discussion"></a>

## Discussion

Overridde this method in actions that need to make asynchronous calls. Automator invokes this method when the action is about to complete its run phase.

## See Also

### Controlling the Action

- [run(withInput:)](run%28withinput_%29.md): Requests the action to perform its task using the specified input.
- [runAsynchronously(withInput:)](runasynchronously%28withinput_%29.md): Causes Automator to wait for notification that the action has completed execution, which allows the action to perform an asynchronous operation.
- [finishRunningWithError(\_:)](finishrunningwitherror%28__%29.md): Causes the action to stop running and return an error, which, in turn, causes the workflow to stop.
- [stop()](stop%28%29.md): Stops the action from running.
- [reset()](reset%28%29.md): Resets the action to its initial state.

# willFinishRunning (Objective-C)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.5+

Provides an opportunity for an action to perform cleanup operations, such as closing windows and deallocating memory.

## Declaration

```objectivec
- (void) willFinishRunning;
```

<a id="Discussion"></a>

## Discussion

Overridde this method in actions that need to make asynchronous calls. Automator invokes this method when the action is about to complete its run phase.

## See Also

### Controlling the Action

- [runWithInput:error:](run%28withinput_%29.md): Requests the action to perform its task using the specified input.
- [runAsynchronouslyWithInput:](runasynchronously%28withinput_%29.md): Causes Automator to wait for notification that the action has completed execution, which allows the action to perform an asynchronous operation.
- [finishRunningWithError:](finishrunningwitherror%28__%29.md): Causes the action to stop running and return an error, which, in turn, causes the workflow to stop.
- [stop](stop%28%29.md): Stops the action from running.
- [reset](reset%28%29.md): Resets the action to its initial state.
