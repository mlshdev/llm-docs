> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafaripage/getscreenshotofvisiblearea(completionhandler:)](https://developer.apple.com/documentation/safariservices/sfsafaripage/getscreenshotofvisiblearea(completionhandler:))

# getScreenshotOfVisibleArea(completionHandler:) (Swift)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.14.4+

## Declaration

```swift
func getScreenshotOfVisibleArea(completionHandler: @escaping @Sendable (NSImage?) -> Void)
```

```swift
func screenshotOfVisibleArea() async -> NSImage?
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func screenshotOfVisibleArea() async -> NSImage?
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Instance Methods

- [getContainingTab(completionHandler:)](getcontainingtab%28completionhandler_%29.md)

# getScreenshotOfVisibleAreaWithCompletionHandler: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.14.4+

## Declaration

```objectivec
- (void) getScreenshotOfVisibleAreaWithCompletionHandler:(void (^)(NSImage *image)) completionHandler;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func screenshotOfVisibleArea() async -> NSImage?
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Instance Methods

- [getContainingTabWithCompletionHandler:](getcontainingtab%28completionhandler_%29.md)
