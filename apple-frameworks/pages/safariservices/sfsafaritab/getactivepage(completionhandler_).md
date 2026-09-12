> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafaritab/getactivepage(completionhandler:)](https://developer.apple.com/documentation/safariservices/sfsafaritab/getactivepage(completionhandler:))

# getActivePage(completionHandler:) (Swift)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Calls the completion handler passing the active page in the tab.

## Declaration

```swift
func getActivePage(completionHandler: @escaping @Sendable (SFSafariPage?) -> Void)
```

```swift
func activePage() async -> SFSafariPage?
```

## Parameters

- `completionHandler`: A block to call when the active page is retrieved.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func activePage() async -> SFSafariPage?
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Accessing Pages

- [getPagesWithCompletionHandler(\_:)](getpageswithcompletionhandler%28__%29.md): Calls the completion handler with all of the tab’s active and preloading pages.

# getActivePageWithCompletionHandler: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Calls the completion handler passing the active page in the tab.

## Declaration

```objectivec
- (void) getActivePageWithCompletionHandler:(void (^)(SFSafariPage *activePage)) completionHandler;
```

## Parameters

- `completionHandler`: A block to call when the active page is retrieved.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func activePage() async -> SFSafariPage?
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Accessing Pages

- [getPagesWithCompletionHandler:](getpageswithcompletionhandler%28__%29.md): Calls the completion handler with all of the tab’s active and preloading pages.
