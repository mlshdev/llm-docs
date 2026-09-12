> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuserapplescripttask/execute(withappleevent:completionhandler:)](https://developer.apple.com/documentation/foundation/nsuserapplescripttask/execute(withappleevent:completionhandler:))

# execute(withAppleEvent:completionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Execute the AppleScript script by sending it the specified Apple event.

## Declaration

```swift
func execute(withAppleEvent event: NSAppleEventDescriptor?, completionHandler handler: NSUserAppleScriptTask.CompletionHandler? = nil)
```

```swift
func execute(withAppleEvent event: NSAppleEventDescriptor?) async throws -> NSAppleEventDescriptor
```

## Parameters

- `event`: The Apple event.
- `handler`: The completion handler Block that returns the result or an error. See [NSUserAppleScriptTask.CompletionHandler](completionhandler.md).

<a id="Discussion"></a>

## Discussion

Pass `nil` as `event` to execute the script’s default “run” handler.

This method should be invoked no more than once for a given instance of the class.

If the script completed normally, the completion handler’s `error` parameter will be `nil`.

## See Also

### Related Documentation

- [init(url:)](../nsuserscripttask/init%28url_%29-2qgls.md): Return a user script task instance given a URL for a script file.

# executeWithAppleEvent:completionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Execute the AppleScript script by sending it the specified Apple event.

## Declaration

```objectivec
- (void) executeWithAppleEvent:(NSAppleEventDescriptor *) event completionHandler:(NSUserAppleScriptTaskCompletionHandler) handler;
```

## Parameters

- `event`: The Apple event.
- `handler`: The completion handler Block that returns the result or an error. See [NSUserAppleScriptTaskCompletionHandler](completionhandler.md).

<a id="Discussion"></a>

## Discussion

Pass `nil` as `event` to execute the script’s default “run” handler.

This method should be invoked no more than once for a given instance of the class.

If the script completed normally, the completion handler’s `error` parameter will be `nil`.

## See Also

### Related Documentation

- [initWithURL:error:](../nsuserscripttask/init%28url_%29-2qgls.md): Return a user script task instance given a URL for a script file.
