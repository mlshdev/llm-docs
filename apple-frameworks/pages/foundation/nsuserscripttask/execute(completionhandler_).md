> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuserscripttask/execute(completionhandler:)](https://developer.apple.com/documentation/foundation/nsuserscripttask/execute(completionhandler:))

# execute(completionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Executes the script with no input and ignoring any result.

## Declaration

```swift
func execute(completionHandler handler: NSUserScriptTask.CompletionHandler? = nil)
```

```swift
func execute() async throws
```

## Parameters

- `handler`: The completion handler Block that returns the result or an error. See [NSUserScriptTask.CompletionHandler](completionhandler.md).

<a id="Discussion"></a>

## Discussion

This method should be invoked no more than once for a given instance of the class.

If the script completed normally, the completion handler’s `error` parameter will be `nil`.

## See Also

### Related Documentation

- [init(url:)](init%28url_%29-2qgls.md): Return a user script task instance given a URL for a script file.

# executeWithCompletionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Executes the script with no input and ignoring any result.

## Declaration

```objectivec
- (void) executeWithCompletionHandler:(NSUserScriptTaskCompletionHandler) handler;
```

## Parameters

- `handler`: The completion handler Block that returns the result or an error. See [NSUserScriptTaskCompletionHandler](completionhandler.md).

<a id="Discussion"></a>

## Discussion

This method should be invoked no more than once for a given instance of the class.

If the script completed normally, the completion handler’s `error` parameter will be `nil`.

## See Also

### Related Documentation

- [initWithURL:error:](init%28url_%29-2qgls.md): Return a user script task instance given a URL for a script file.
