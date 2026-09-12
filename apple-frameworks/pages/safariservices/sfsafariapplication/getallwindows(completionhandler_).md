> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariapplication/getallwindows(completionhandler:)](https://developer.apple.com/documentation/safariservices/sfsafariapplication/getallwindows(completionhandler:))

# getAllWindows(completionHandler:) (Swift)

**Framework:** Safari Services  
**Kind:** Type Method  
**Availability:** macOS 10.14.4+

## Declaration

```swift
class func getAllWindows(completionHandler: @escaping @Sendable ([SFSafariWindow]) -> Void)
```

```swift
class func allWindows() async -> [SFSafariWindow]
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func allWindows() async -> [SFSafariWindow]
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Type Methods

- [getHostApplication(completionHandler:)](gethostapplication%28completionhandler_%29.md)

# getAllWindowsWithCompletionHandler: (Objective-C)

**Framework:** Safari Services  
**Kind:** Type Method  
**Availability:** macOS 10.14.4+

## Declaration

```objectivec
+ (void) getAllWindowsWithCompletionHandler:(void (^)(NSArray<SFSafariWindow *> *windows)) completionHandler;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func allWindows() async -> [SFSafariWindow]
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Type Methods

- [getHostApplicationWithCompletionHandler:](gethostapplication%28completionhandler_%29.md)
