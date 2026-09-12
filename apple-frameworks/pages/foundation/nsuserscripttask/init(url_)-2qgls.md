> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuserscripttask/init(url:)-2qgls](https://developer.apple.com/documentation/foundation/nsuserscripttask/init(url:)-2qgls)

# init(url:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** macOS 10.8+

Return a user script task instance given a URL for a script file.

## Declaration

```swift
init(url: URL) throws
```

## Parameters

- `url`: The script URL.

<a id="return-value"></a>

## Return Value

An instance of an `NSUserScriptTask` subclass or `nil` if the file does not appear to match any of the known types.

<a id="Discussion"></a>

## Discussion

The returned object will be of one of the specific sub-classes ([NSUserUnixTask](../nsuserunixtask.md), [NSUserAppleScriptTask](../nsuserapplescripttask.md), and [NSUserAutomatorTask](../nsuserautomatortask.md)), or `nil` if the file does not appear to match any of the known types.

If invoked from a subclass, the result will be that class or `nil`.

> **Handling Errors in Swift**

>  In Swift, this API is imported as an initializer and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Specifying the Script

- [scriptURL](scripturl.md): The URL of the script file.

# initWithURL:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Return a user script task instance given a URL for a script file.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) url error:(NSError **) error;
```

## Parameters

- `url`: The script URL.
- `error`: A return by-reference error that specifies any error in loading the script.

<a id="return-value"></a>

## Return Value

An instance of an `NSUserScriptTask` subclass or `nil` if the file does not appear to match any of the known types.

<a id="Discussion"></a>

## Discussion

The returned object will be of one of the specific sub-classes ([NSUserUnixTask](../nsuserunixtask.md), [NSUserAppleScriptTask](../nsuserapplescripttask.md), and [NSUserAutomatorTask](../nsuserautomatortask.md)), or `nil` if the file does not appear to match any of the known types.

If invoked from a subclass, the result will be that class or `nil`.

> **Handling Errors in Swift**

>  In Swift, this API is imported as an initializer and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Specifying the Script

- [scriptURL](scripturl.md): The URL of the script file.
