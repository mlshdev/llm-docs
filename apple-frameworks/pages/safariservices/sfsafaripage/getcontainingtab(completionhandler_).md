> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafaripage/getcontainingtab(completionhandler:)](https://developer.apple.com/documentation/safariservices/sfsafaripage/getcontainingtab(completionhandler:))

# getContainingTab(completionHandler:) (Swift)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.14.4+

## Declaration

```swift
func getContainingTab(completionHandler: @escaping @Sendable (SFSafariTab) -> Void)
```

```swift
func containingTab() async -> SFSafariTab
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func containingTab() async -> SFSafariTab
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Instance Methods

- [getScreenshotOfVisibleArea(completionHandler:)](getscreenshotofvisiblearea%28completionhandler_%29.md)

# getContainingTabWithCompletionHandler: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.14.4+

## Declaration

```objectivec
- (void) getContainingTabWithCompletionHandler:(void (^)(SFSafariTab *tab)) completionHandler;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func containingTab() async -> SFSafariTab
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Instance Methods

- [getScreenshotOfVisibleAreaWithCompletionHandler:](getscreenshotofvisiblearea%28completionhandler_%29.md)
