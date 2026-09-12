> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafaritab/getpageswithcompletionhandler(_:)](https://developer.apple.com/documentation/safariservices/sfsafaritab/getpageswithcompletionhandler(_:))

# getPagesWithCompletionHandler(\_:) (Swift)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Calls the completion handler with all of the tab’s active and preloading pages.

## Declaration

```swift
func getPagesWithCompletionHandler(_ completionHandler: @escaping @Sendable ([SFSafariPage]?) -> Void)
```

```swift
func pages() async -> [SFSafariPage]?
```

## Parameters

- `completionHandler`: A block to call when the tab’s pages are retrieved.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func pages() async -> [SFSafariPage]?
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

The tab’s pages include the active page and other pages that Safari might be loading in the background; for example, Top Hits.

## See Also

### Accessing Pages

- [getActivePage(completionHandler:)](getactivepage%28completionhandler_%29.md): Calls the completion handler passing the active page in the tab.

# getPagesWithCompletionHandler: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Calls the completion handler with all of the tab’s active and preloading pages.

## Declaration

```objectivec
- (void) getPagesWithCompletionHandler:(void (^)(NSArray<SFSafariPage *> *pages)) completionHandler;
```

## Parameters

- `completionHandler`: A block to call when the tab’s pages are retrieved.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func pages() async -> [SFSafariPage]?
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

The tab’s pages include the active page and other pages that Safari might be loading in the background; for example, Top Hits.

## See Also

### Accessing Pages

- [getActivePageWithCompletionHandler:](getactivepage%28completionhandler_%29.md): Calls the completion handler passing the active page in the tab.
