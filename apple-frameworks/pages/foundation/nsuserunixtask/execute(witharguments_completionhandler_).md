> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuserunixtask/execute(witharguments:completionhandler:)](https://developer.apple.com/documentation/foundation/nsuserunixtask/execute(witharguments:completionhandler:))

# execute(withArguments:completionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Execute the unix script with the specified arguments.

## Declaration

```swift
func execute(withArguments arguments: [String]?, completionHandler handler: NSUserUnixTask.CompletionHandler? = nil)
```

```swift
func execute(withArguments arguments: [String]?) async throws
```

## Parameters

- `arguments`: An array of `NSString` objects containing the script arguments. The arguments do not undergo shell expansion, so you do not need to do special quoting, and shell variables are not resolved.
- `handler`: The completion handler Block that returns the result. See [NSUserUnixTask.CompletionHandler](completionhandler.md).

<a id="Discussion"></a>

## Discussion

This method should be invoked no more than once for a given instance of the class.

If the script completed normally, the completion handler’s `error` parameter will be `nil`.

## See Also

### Related Documentation

- [standardOutput](standardoutput.md): The standard output stream.
- [standardError](standarderror.md): The standard error stream.
- [init(url:)](../nsuserscripttask/init%28url_%29-2qgls.md): Return a user script task instance given a URL for a script file.
- [standardInput](standardinput.md): The standard input stream.

# executeWithArguments:completionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Execute the unix script with the specified arguments.

## Declaration

```objectivec
- (void) executeWithArguments:(NSArray<NSString *> *) arguments completionHandler:(NSUserUnixTaskCompletionHandler) handler;
```

## Parameters

- `arguments`: An array of `NSString` objects containing the script arguments. The arguments do not undergo shell expansion, so you do not need to do special quoting, and shell variables are not resolved.
- `handler`: The completion handler Block that returns the result. See [NSUserUnixTaskCompletionHandler](completionhandler.md).

<a id="Discussion"></a>

## Discussion

This method should be invoked no more than once for a given instance of the class.

If the script completed normally, the completion handler’s `error` parameter will be `nil`.

## See Also

### Related Documentation

- [standardOutput](standardoutput.md): The standard output stream.
- [standardError](standarderror.md): The standard error stream.
- [initWithURL:error:](../nsuserscripttask/init%28url_%29-2qgls.md): Return a user script task instance given a URL for a script file.
- [standardInput](standardinput.md): The standard input stream.
