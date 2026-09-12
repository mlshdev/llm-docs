> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariapplication/showpreferencesforextension(withidentifier:completionhandler:)](https://developer.apple.com/documentation/safariservices/sfsafariapplication/showpreferencesforextension(withidentifier:completionhandler:))

# showPreferencesForExtension(withIdentifier:completionHandler:) (Swift)

**Framework:** Safari Services  
**Kind:** Type Method  
**Availability:** macOS 10.12+

Launches Safari and opens the preferences panel for a Safari app extension.

## Declaration

```swift
class func showPreferencesForExtension(withIdentifier identifier: String, completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
class func showPreferencesForExtension(withIdentifier identifier: String) async throws
```

## Parameters

- `identifier`: The identifier for a Safari app extension in your app bundle.
- `completionHandler`: A completion handler called after the operation completes. The completion handler takes the following parameter:

  - **error**: If an error occurred, this parameter describes the error. If the operation succeeded, this parameter holds `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func showPreferencesForExtension(withIdentifier identifier: String) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Working with Windows

- [getActiveWindow(completionHandler:)](getactivewindow%28completionhandler_%29.md): Calls the completion handler with the active browser window.
- [openWindow(with:completionHandler:)](openwindow%28with_completionhandler_%29.md): Opens a new window with the desired webpage.

# showPreferencesForExtensionWithIdentifier:completionHandler: (Objective-C)

**Framework:** Safari Services  
**Kind:** Type Method  
**Availability:** macOS 10.12+

Launches Safari and opens the preferences panel for a Safari app extension.

## Declaration

```objectivec
+ (void) showPreferencesForExtensionWithIdentifier:(NSString *) identifier completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `identifier`: The identifier for a Safari app extension in your app bundle.
- `completionHandler`: A completion handler called after the operation completes. The completion handler takes the following parameter:

  - **error**: If an error occurred, this parameter describes the error. If the operation succeeded, this parameter holds `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func showPreferencesForExtension(withIdentifier identifier: String) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Working with Windows

- [getActiveWindowWithCompletionHandler:](getactivewindow%28completionhandler_%29.md): Calls the completion handler with the active browser window.
- [openWindowWithURL:completionHandler:](openwindow%28with_completionhandler_%29.md): Opens a new window with the desired webpage.
