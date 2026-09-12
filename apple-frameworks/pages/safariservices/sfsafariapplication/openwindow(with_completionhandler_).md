> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariapplication/openwindow(with:completionhandler:)](https://developer.apple.com/documentation/safariservices/sfsafariapplication/openwindow(with:completionhandler:))

# openWindow(with:completionHandler:) (Swift)

**Framework:** Safari Services  
**Kind:** Type Method  
**Availability:** macOS 10.12+

Opens a new window with the desired webpage.

## Declaration

```swift
class func openWindow(with url: URL, completionHandler: (@Sendable (SFSafariWindow?) -> Void)? = nil)
```

```swift
class func openWindow(with url: URL) async -> SFSafariWindow?
```

## Parameters

- `url`: The URL to navigate to. The URL scheme must be `http` or `https`.
- `completionHandler`: A block to call when the URL is loaded in a new window.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func openWindow(with url: URL) async -> SFSafariWindow?
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Working with Windows

- [getActiveWindow(completionHandler:)](getactivewindow%28completionhandler_%29.md): Calls the completion handler with the active browser window.
- [showPreferencesForExtension(withIdentifier:completionHandler:)](showpreferencesforextension%28withidentifier_completionhandler_%29.md): Launches Safari and opens the preferences panel for a Safari app extension.

# openWindowWithURL:completionHandler: (Objective-C)

**Framework:** Safari Services  
**Kind:** Type Method  
**Availability:** macOS 10.12+

Opens a new window with the desired webpage.

## Declaration

```objectivec
+ (void) openWindowWithURL:(NSURL *) url completionHandler:(void (^)(SFSafariWindow *window)) completionHandler;
```

## Parameters

- `url`: The URL to navigate to. The URL scheme must be `http` or `https`.
- `completionHandler`: A block to call when the URL is loaded in a new window.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func openWindow(with url: URL) async -> SFSafariWindow?
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Working with Windows

- [getActiveWindowWithCompletionHandler:](getactivewindow%28completionhandler_%29.md): Calls the completion handler with the active browser window.
- [showPreferencesForExtensionWithIdentifier:completionHandler:](showpreferencesforextension%28withidentifier_completionhandler_%29.md): Launches Safari and opens the preferences panel for a Safari app extension.
