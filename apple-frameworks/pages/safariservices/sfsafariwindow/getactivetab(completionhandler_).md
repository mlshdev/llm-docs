> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariwindow/getactivetab(completionhandler:)](https://developer.apple.com/documentation/safariservices/sfsafariwindow/getactivetab(completionhandler:))

# getActiveTab(completionHandler:) (Swift)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Calls the completion handler with the active tab in the target window.

## Declaration

```swift
func getActiveTab(completionHandler: @escaping @Sendable (SFSafariTab?) -> Void)
```

```swift
func activeTab() async -> SFSafariTab?
```

## Parameters

- `completionHandler`: A block called after the active tab is retrieved.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func activeTab() async -> SFSafariTab?
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Working with Tabs

- [openTab(with:makeActiveIfPossible:completionHandler:)](opentab%28with_makeactiveifpossible_completionhandler_%29.md): Opens a tab at the end of the tab bar.

# getActiveTabWithCompletionHandler: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Calls the completion handler with the active tab in the target window.

## Declaration

```objectivec
- (void) getActiveTabWithCompletionHandler:(void (^)(SFSafariTab *activeTab)) completionHandler;
```

## Parameters

- `completionHandler`: A block called after the active tab is retrieved.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func activeTab() async -> SFSafariTab?
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Working with Tabs

- [openTabWithURL:makeActiveIfPossible:completionHandler:](opentab%28with_makeactiveifpossible_completionhandler_%29.md): Opens a tab at the end of the tab bar.
