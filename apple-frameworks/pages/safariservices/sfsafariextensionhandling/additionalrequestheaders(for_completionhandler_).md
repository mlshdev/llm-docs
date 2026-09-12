> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariextensionhandling/additionalrequestheaders(for:completionhandler:)](https://developer.apple.com/documentation/safariservices/sfsafariextensionhandling/additionalrequestheaders(for:completionhandler:))

# additionalRequestHeaders(for:completionHandler:) (Swift)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.13.4+

## Declaration

```swift
optional func additionalRequestHeaders(for url: URL, completionHandler: @escaping @Sendable ([String : String]?) -> Void)
```

```swift
optional func additionalRequestHeaders(for url: URL) async -> [String : String]?
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> optional func additionalRequestHeaders(for url: URL) async -> [String : String]?
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

# additionalRequestHeadersForURL:completionHandler: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.13.4+

## Declaration

```objectivec
- (void) additionalRequestHeadersForURL:(NSURL *) url completionHandler:(void (^)(NSDictionary<NSString *,NSString *> *)) completionHandler;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> optional func additionalRequestHeaders(for url: URL) async -> [String : String]?
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).
