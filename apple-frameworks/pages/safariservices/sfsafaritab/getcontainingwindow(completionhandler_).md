> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafaritab/getcontainingwindow(completionhandler:)](https://developer.apple.com/documentation/safariservices/sfsafaritab/getcontainingwindow(completionhandler:))

# getContainingWindow(completionHandler:) (Swift)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.14.4+

## Declaration

```swift
func getContainingWindow(completionHandler: @escaping @Sendable (SFSafariWindow?) -> Void)
```

```swift
func containingWindow() async -> SFSafariWindow?
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func containingWindow() async -> SFSafariWindow?
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Instance Methods

- [close()](close%28%29.md)
- [navigate(to:)](navigate%28to_%29.md)

# getContainingWindowWithCompletionHandler: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.14.4+

## Declaration

```objectivec
- (void) getContainingWindowWithCompletionHandler:(void (^)(SFSafariWindow *window)) completionHandler;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func containingWindow() async -> SFSafariWindow?
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Instance Methods

- [close](close%28%29.md)
- [navigateToURL:](navigate%28to_%29.md)
