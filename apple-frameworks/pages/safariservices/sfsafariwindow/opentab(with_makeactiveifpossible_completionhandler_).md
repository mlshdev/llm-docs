> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariwindow/opentab(with:makeactiveifpossible:completionhandler:)](https://developer.apple.com/documentation/safariservices/sfsafariwindow/opentab(with:makeactiveifpossible:completionhandler:))

# openTab(with:makeActiveIfPossible:completionHandler:) (Swift)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Opens a tab at the end of the tab bar.

## Declaration

```swift
func openTab(with url: URL, makeActiveIfPossible activateTab: Bool, completionHandler: (@Sendable (SFSafariTab?) -> Void)? = nil)
```

```swift
func openTab(with url: URL, makeActiveIfPossible activateTab: Bool) async -> SFSafariTab?
```

## Parameters

- `url`: The URL to navigate to.
- `activateTab`: [true](https://developer.apple.com/documentation/swift/true) to make the tab active; otherwise [false](https://developer.apple.com/documentation/swift/false).
- `completionHandler`: A block called after the tab is opened.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func openTab(with url: URL, makeActiveIfPossible activateTab: Bool) async -> SFSafariTab?
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

If the extension cannot access the URL, no tab is opened.

## See Also

### Working with Tabs

- [getActiveTab(completionHandler:)](getactivetab%28completionhandler_%29.md): Calls the completion handler with the active tab in the target window.

# openTabWithURL:makeActiveIfPossible:completionHandler: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Opens a tab at the end of the tab bar.

## Declaration

```objectivec
- (void) openTabWithURL:(NSURL *) url makeActiveIfPossible:(BOOL) activateTab completionHandler:(void (^)(SFSafariTab *tab)) completionHandler;
```

## Parameters

- `url`: The URL to navigate to.
- `activateTab`: [true](https://developer.apple.com/documentation/swift/true) to make the tab active; otherwise [false](https://developer.apple.com/documentation/swift/false).
- `completionHandler`: A block called after the tab is opened.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func openTab(with url: URL, makeActiveIfPossible activateTab: Bool) async -> SFSafariTab?
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

If the extension cannot access the URL, no tab is opened.

## See Also

### Working with Tabs

- [getActiveTabWithCompletionHandler:](getactivetab%28completionhandler_%29.md): Calls the completion handler with the active tab in the target window.
