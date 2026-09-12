> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariextension/getbaseuri(completionhandler:)](https://developer.apple.com/documentation/safariservices/sfsafariextension/getbaseuri(completionhandler:))

# getBaseURI(completionHandler:) (Swift)

**Framework:** Safari Services  
**Kind:** Type Method  
**Availability:** macOS 10.14.4+

## Declaration

```swift
class func getBaseURI(completionHandler: @escaping @Sendable (URL?) -> Void)
```

```swift
class func baseURI() async -> URL?
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func baseURI() async -> URL?
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

# getBaseURIWithCompletionHandler: (Objective-C)

**Framework:** Safari Services  
**Kind:** Type Method  
**Availability:** macOS 10.14.4+

## Declaration

```objectivec
+ (void) getBaseURIWithCompletionHandler:(void (^)(NSURL *baseURI)) completionHandler;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func baseURI() async -> URL?
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).
