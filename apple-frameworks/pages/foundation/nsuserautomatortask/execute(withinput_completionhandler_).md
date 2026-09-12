> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuserautomatortask/execute(withinput:completionhandler:)](https://developer.apple.com/documentation/foundation/nsuserautomatortask/execute(withinput:completionhandler:))

# execute(withInput:completionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Execute the Automator workflow by providing it as securely coded input.

## Declaration

```swift
func execute(withInput input: (any NSSecureCoding)?, completionHandler handler: NSUserAutomatorTask.CompletionHandler? = nil)
```

```swift
func execute(withInput input: (any NSSecureCoding)?) async throws -> Any
```

## Parameters

- `input`: The automator task.
- `handler`: The completion handler Block that returns the result or an error. See [NSUserAutomatorTask.CompletionHandler](completionhandler.md).

<a id="Discussion"></a>

## Discussion

The Automator workflow will execute using the [variables](variables.md) property values.

This method should be invoked no more than once for a given instance of the class.

If the script completed normally, the completion handler’s `error` parameter will be `nil`.

## See Also

### Related Documentation

- [init(url:)](../nsuserscripttask/init%28url_%29-2qgls.md): Return a user script task instance given a URL for a script file.

### Executing Automator Tasks

- [variables](variables.md): The variables required by the Automator workflow.

# executeWithInput:completionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Execute the Automator workflow by providing it as securely coded input.

## Declaration

```objectivec
- (void) executeWithInput:(id<NSSecureCoding>) input completionHandler:(NSUserAutomatorTaskCompletionHandler) handler;
```

## Parameters

- `input`: The automator task.
- `handler`: The completion handler Block that returns the result or an error. See [NSUserAutomatorTaskCompletionHandler](completionhandler.md).

<a id="Discussion"></a>

## Discussion

The Automator workflow will execute using the [variables](variables.md) property values.

This method should be invoked no more than once for a given instance of the class.

If the script completed normally, the completion handler’s `error` parameter will be `nil`.

## See Also

### Related Documentation

- [initWithURL:error:](../nsuserscripttask/init%28url_%29-2qgls.md): Return a user script task instance given a URL for a script file.

### Executing Automator Tasks

- [variables](variables.md): The variables required by the Automator workflow.
