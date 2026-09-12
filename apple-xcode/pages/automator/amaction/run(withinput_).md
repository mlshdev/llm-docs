> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amaction/run(withinput:)](https://developer.apple.com/documentation/automator/amaction/run(withinput:))

# run(withInput:) (Swift)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.7+

Requests the action to perform its task using the specified input.

## Declaration

```swift
func run(withInput input: Any?) throws -> Any
```

## Parameters

- `input`: The input for the receiving action. Should contain one or more objects compatible with one of the types specified in the action’s [selectedInputType](selectedinputtype.md) property.

<a id="return-value"></a>

## Return Value

An [NSArray](https://developer.apple.com/documentation/foundation/nsarray) object that contains one or more objects of a data type compatible with a type specified in the receiving action’s `AMProvides` property. If the action doesn’t modify the data passed in `input`, it should return it unchanged. If the action doesn’t have any data to provide, it should return an empty [NSArray](https://developer.apple.com/documentation/foundation/nsarray) object.

<a id="Discussion"></a>

## Discussion

This method is intended to be overridden.

The input and output objects for actions are usually instances of [NSArray](https://developer.apple.com/documentation/foundation/nsarray). If the action encounters problems, it should return by indirection an [NSError](https://developer.apple.com/documentation/foundation/nserror) object that describes the error.

## See Also

### Controlling the Action

- [runAsynchronously(withInput:)](runasynchronously%28withinput_%29.md): Causes Automator to wait for notification that the action has completed execution, which allows the action to perform an asynchronous operation.
- [finishRunningWithError(\_:)](finishrunningwitherror%28__%29.md): Causes the action to stop running and return an error, which, in turn, causes the workflow to stop.
- [willFinishRunning()](willfinishrunning%28%29.md): Provides an opportunity for an action to perform cleanup operations, such as closing windows and deallocating memory.
- [stop()](stop%28%29.md): Stops the action from running.
- [reset()](reset%28%29.md): Resets the action to its initial state.

# runWithInput:error: (Objective-C)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.7+

Requests the action to perform its task using the specified input.

## Declaration

```objectivec
- (id) runWithInput:(id) input error:(NSError **) error;
```

## Parameters

- `input`: The input for the receiving action. Should contain one or more objects compatible with one of the types specified in the action’s [selectedInputType](selectedinputtype.md) property.
- `error`: If an error occurs, the action returns an [NSError](https://developer.apple.com/documentation/foundation/nserror) object in this parameter. For actions running AppleScript code, the following keys may be specified in the [userInfo](https://developer.apple.com/documentation/foundation/nserror/userinfo) property of [NSError](https://developer.apple.com/documentation/foundation/nserror):

  - `OSAScriptErrorNumberKey` (a string constant) — The value for this key is an instance of [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) whose integer value indicates an error code.
  - `OSAScriptErrorMessageKey` (a string constant) — The value for this key is an instance of [NSString](https://developer.apple.com/documentation/foundation/nsstring) describing the error.

<a id="return-value"></a>

## Return Value

An [NSArray](https://developer.apple.com/documentation/foundation/nsarray) object that contains one or more objects of a data type compatible with a type specified in the receiving action’s `AMProvides` property. If the action doesn’t modify the data passed in `input`, it should return it unchanged. If the action doesn’t have any data to provide, it should return an empty [NSArray](https://developer.apple.com/documentation/foundation/nsarray) object. On failure, this method returns `nil`.

<a id="Discussion"></a>

## Discussion

This method is intended to be overridden.

The input and output objects for actions are usually instances of [NSArray](https://developer.apple.com/documentation/foundation/nsarray). If the action encounters problems, it should return by indirection an [NSError](https://developer.apple.com/documentation/foundation/nserror) object that describes the error.

## See Also

### Controlling the Action

- [runAsynchronouslyWithInput:](runasynchronously%28withinput_%29.md): Causes Automator to wait for notification that the action has completed execution, which allows the action to perform an asynchronous operation.
- [finishRunningWithError:](finishrunningwitherror%28__%29.md): Causes the action to stop running and return an error, which, in turn, causes the workflow to stop.
- [willFinishRunning](willfinishrunning%28%29.md): Provides an opportunity for an action to perform cleanup operations, such as closing windows and deallocating memory.
- [stop](stop%28%29.md): Stops the action from running.
- [reset](reset%28%29.md): Resets the action to its initial state.
