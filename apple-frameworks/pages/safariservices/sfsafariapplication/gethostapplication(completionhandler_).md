> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariapplication/gethostapplication(completionhandler:)](https://developer.apple.com/documentation/safariservices/sfsafariapplication/gethostapplication(completionhandler:))

# getHostApplication(completionHandler:) (Swift)

**Framework:** Safari Services  
**Kind:** Type Method  
**Availability:** macOS 10.13+

## Declaration

```swift
class func getHostApplication(completionHandler: @escaping @Sendable (NSRunningApplication) -> Void)
```

```swift
class func hostApplication() async -> NSRunningApplication
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func hostApplication() async -> NSRunningApplication
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Type Methods

- [getAllWindows(completionHandler:)](getallwindows%28completionhandler_%29.md)

# getHostApplicationWithCompletionHandler: (Objective-C)

**Framework:** Safari Services  
**Kind:** Type Method  
**Availability:** macOS 10.13+

## Declaration

```objectivec
+ (void) getHostApplicationWithCompletionHandler:(void (^)(NSRunningApplication *hostApplication)) completionHandler;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func hostApplication() async -> NSRunningApplication
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Type Methods

- [getAllWindowsWithCompletionHandler:](getallwindows%28completionhandler_%29.md)
