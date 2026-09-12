> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amaction/finishrunningwitherror(_:)](https://developer.apple.com/documentation/automator/amaction/finishrunningwitherror(_:))

# finishRunningWithError(\_:) (Swift)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.7+

Causes the action to stop running and return an error, which, in turn, causes the workflow to stop.

## Declaration

```swift
func finishRunningWithError(_ error: (any Error)?)
```

## Parameters

- `error`: The error to be returned to Automator.

<a id="Discussion"></a>

## Discussion

Call this method on any action that overrides [runAsynchronously(withInput:)](runasynchronously%28withinput_%29.md) in order to make asynchronous calls. When [finishRunningWithError(\_:)](finishrunningwitherror%28__%29.md) is invoked, it immediately calls [willFinishRunning()](willfinishrunning%28%29.md).

## See Also

### Controlling the Action

- [run(withInput:)](run%28withinput_%29.md): Requests the action to perform its task using the specified input.
- [runAsynchronously(withInput:)](runasynchronously%28withinput_%29.md): Causes Automator to wait for notification that the action has completed execution, which allows the action to perform an asynchronous operation.
- [willFinishRunning()](willfinishrunning%28%29.md): Provides an opportunity for an action to perform cleanup operations, such as closing windows and deallocating memory.
- [stop()](stop%28%29.md): Stops the action from running.
- [reset()](reset%28%29.md): Resets the action to its initial state.

# finishRunningWithError: (Objective-C)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.7+

Causes the action to stop running and return an error, which, in turn, causes the workflow to stop.

## Declaration

```objectivec
- (void) finishRunningWithError:(NSError *) error;
```

## Parameters

- `error`: The error to be returned to Automator.

<a id="Discussion"></a>

## Discussion

Call this method on any action that overrides [runAsynchronouslyWithInput:](runasynchronously%28withinput_%29.md) in order to make asynchronous calls. When [finishRunningWithError:](finishrunningwitherror%28__%29.md) is invoked, it immediately calls [willFinishRunning](willfinishrunning%28%29.md).

## See Also

### Controlling the Action

- [runWithInput:error:](run%28withinput_%29.md): Requests the action to perform its task using the specified input.
- [runAsynchronouslyWithInput:](runasynchronously%28withinput_%29.md): Causes Automator to wait for notification that the action has completed execution, which allows the action to perform an asynchronous operation.
- [willFinishRunning](willfinishrunning%28%29.md): Provides an opportunity for an action to perform cleanup operations, such as closing windows and deallocating memory.
- [stop](stop%28%29.md): Stops the action from running.
- [reset](reset%28%29.md): Resets the action to its initial state.
