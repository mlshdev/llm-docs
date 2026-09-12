> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontaskdelegate/urlsession(_:task:willperformhttpredirection:newrequest:completionhandler:)](https://developer.apple.com/documentation/foundation/urlsessiontaskdelegate/urlsession(_:task:willperformhttpredirection:newrequest:completionhandler:))

# urlSession(\_:task:willPerformHTTPRedirection:newRequest:completionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the remote server requested an HTTP redirect.

## Declaration

```swift
optional func urlSession(_ session: URLSession, task: URLSessionTask, willPerformHTTPRedirection response: HTTPURLResponse, newRequest request: URLRequest, completionHandler: @escaping @Sendable (URLRequest?) -> Void)
```

```swift
optional func urlSession(_ session: URLSession, task: URLSessionTask, willPerformHTTPRedirection response: HTTPURLResponse, newRequest request: URLRequest) async -> URLRequest?
```

## Parameters

- `session`: The session containing the task whose request resulted in a redirect.
- `task`: The task whose request resulted in a redirect.
- `response`: An object containing the server’s response to the original request.
- `request`: A URL request object filled out with the new location.
- `completionHandler`: A block that your handler should call with either the value of the `request` parameter, a modified URL request object, or `NULL` to refuse the redirect and return the body of the redirect response.

## Mentioned In

- [Downloading files in the background](../downloading-files-in-the-background.md)

<a id="Discussion"></a>

## Discussion

This method is called *only* for tasks in default and ephemeral sessions. Tasks in background sessions automatically follow redirects.

# URLSession:task:willPerformHTTPRedirection:newRequest:completionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the remote server requested an HTTP redirect.

## Declaration

```objectivec
- (void) URLSession:(NSURLSession *) session task:(NSURLSessionTask *) task willPerformHTTPRedirection:(NSHTTPURLResponse *) response newRequest:(NSURLRequest *) request completionHandler:(void (^)(NSURLRequest *)) completionHandler;
```

## Parameters

- `session`: The session containing the task whose request resulted in a redirect.
- `task`: The task whose request resulted in a redirect.
- `response`: An object containing the server’s response to the original request.
- `request`: A URL request object filled out with the new location.
- `completionHandler`: A block that your handler should call with either the value of the `request` parameter, a modified URL request object, or `NULL` to refuse the redirect and return the body of the redirect response.

## Mentioned In

- [Downloading files in the background](../downloading-files-in-the-background.md)

<a id="Discussion"></a>

## Discussion

This method is called *only* for tasks in default and ephemeral sessions. Tasks in background sessions automatically follow redirects.
