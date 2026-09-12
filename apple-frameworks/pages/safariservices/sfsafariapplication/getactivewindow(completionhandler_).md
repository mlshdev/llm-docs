> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariapplication/getactivewindow(completionhandler:)](https://developer.apple.com/documentation/safariservices/sfsafariapplication/getactivewindow(completionhandler:))

# getActiveWindow(completionHandler:) (Swift)

**Framework:** Safari Services  
**Kind:** Type Method  
**Availability:** macOS 10.12+

Calls the completion handler with the active browser window.

## Declaration

```swift
class func getActiveWindow(completionHandler: @escaping @Sendable (SFSafariWindow?) -> Void)
```

```swift
class func activeWindow() async -> SFSafariWindow?
```

## Parameters

- `completionHandler`: A block to call when the active browser window is returned.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func activeWindow() async -> SFSafariWindow?
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

If there is no active Safari window, the value of `activeWindow` is `nil`, and the completion handler is not called.

## See Also

### Working with Windows

- [openWindow(with:completionHandler:)](openwindow%28with_completionhandler_%29.md): Opens a new window with the desired webpage.
- [showPreferencesForExtension(withIdentifier:completionHandler:)](showpreferencesforextension%28withidentifier_completionhandler_%29.md): Launches Safari and opens the preferences panel for a Safari app extension.

# getActiveWindowWithCompletionHandler: (Objective-C)

**Framework:** Safari Services  
**Kind:** Type Method  
**Availability:** macOS 10.12+

Calls the completion handler with the active browser window.

## Declaration

```objectivec
+ (void) getActiveWindowWithCompletionHandler:(void (^)(SFSafariWindow *activeWindow)) completionHandler;
```

## Parameters

- `completionHandler`: A block to call when the active browser window is returned.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func activeWindow() async -> SFSafariWindow?
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

If there is no active Safari window, the value of `activeWindow` is `nil`, and the completion handler is not called.

## See Also

### Working with Windows

- [openWindowWithURL:completionHandler:](openwindow%28with_completionhandler_%29.md): Opens a new window with the desired webpage.
- [showPreferencesForExtensionWithIdentifier:completionHandler:](showpreferencesforextension%28withidentifier_completionhandler_%29.md): Launches Safari and opens the preferences panel for a Safari app extension.
