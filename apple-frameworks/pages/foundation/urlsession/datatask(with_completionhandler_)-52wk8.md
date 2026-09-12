> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsession/datatask(with:completionhandler:)-52wk8](https://developer.apple.com/documentation/foundation/urlsession/datatask(with:completionhandler:)-52wk8)

# dataTask(with:completionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a task that retrieves the contents of the specified URL, then calls a handler upon completion.

## Declaration

```swift
func dataTask(with url: URL, completionHandler: @escaping @Sendable (Data?, URLResponse?, (any Error)?) -> Void) -> URLSessionDataTask
```

## Parameters

- `url`: The URL to be retrieved.
- `completionHandler`: The completion handler to call when the load request is complete. This handler is executed on the delegate queue.

  If you pass `nil`, only the session delegate methods are called when the task completes, making this method equivalent to the [dataTask(with:)](datatask%28with_%29-7jpys.md) method.

  This completion handler takes the following parameters:

  - **`data`**: The data returned by the server.
  - **`response`**: An object that provides response metadata, such as HTTP headers and status code. If you are making an HTTP or HTTPS request, the returned object is actually an [HTTPURLResponse](../httpurlresponse.md) object.
  - **`error`**: An error object that indicates why the request failed, or `nil` if the request was successful.

<a id="return-value"></a>

## Return Value

The new session data task.

## Mentioned In

- [Processing URL session data task results with Combine](../processing-url-session-data-task-results-with-combine.md)

<a id="Discussion"></a>

## Discussion

After you create the task, you must start it by calling its [resume()](../urlsessiontask/resume%28%29.md) method.

By using the completion handler, the task bypasses calls to delegate methods for response and data delivery, and instead provides any resulting [NSData](../nsdata.md), [URLResponse](../urlresponse.md), and [NSError](../nserror.md) objects inside the completion handler. Delegate methods for handling authentication challenges, however, are still called.

You should pass a `nil` completion handler *only* when creating tasks in sessions whose delegates include a [urlSession(\_:dataTask:didReceive:)](../urlsessiondatadelegate/urlsession%28__datatask_didreceive_%29.md) method.

If the request completes successfully, the `data` parameter of the completion handler block contains the resource data, and the `error` parameter is `nil`. If the request fails, the `data` parameter is `nil` and the `error` parameter contain information about the failure. If a response from the server is received, regardless of whether the request completes successfully or fails, the `response` parameter contains that information.

## See Also

### Adding data tasks to a session

- [dataTask(with:)](datatask%28with_%29-10dy7.md): Creates a task that retrieves the contents of the specified URL.
- [dataTask(with:)](datatask%28with_%29-7jpys.md): Creates a task that retrieves the contents of a URL based on the specified URL request object.
- [dataTask(with:completionHandler:)](datatask%28with_completionhandler_%29-e6xv.md): Creates a task that retrieves the contents of a URL based on the specified URL request object, and calls a handler upon completion.
- [URLSessionDataTask](../urlsessiondatatask.md): A URL session task that returns downloaded data directly to the app in memory.
- [URLSessionDataDelegate](../urlsessiondatadelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to data and upload tasks.

# dataTaskWithURL:completionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a task that retrieves the contents of the specified URL, then calls a handler upon completion.

## Declaration

```objectivec
- (NSURLSessionDataTask *) dataTaskWithURL:(NSURL *) url completionHandler:(void (^)(NSData *data, NSURLResponse *response, NSError *error)) completionHandler;
```

## Parameters

- `url`: The URL to be retrieved.
- `completionHandler`: The completion handler to call when the load request is complete. This handler is executed on the delegate queue.

  If you pass `nil`, only the session delegate methods are called when the task completes, making this method equivalent to the [dataTaskWithRequest:](datatask%28with_%29-7jpys.md) method.

  This completion handler takes the following parameters:

  - **`data`**: The data returned by the server.
  - **`response`**: An object that provides response metadata, such as HTTP headers and status code. If you are making an HTTP or HTTPS request, the returned object is actually an [NSHTTPURLResponse](../httpurlresponse.md) object.
  - **`error`**: An error object that indicates why the request failed, or `nil` if the request was successful.

<a id="return-value"></a>

## Return Value

The new session data task.

## Mentioned In

- [Processing URL session data task results with Combine](../processing-url-session-data-task-results-with-combine.md)

<a id="Discussion"></a>

## Discussion

After you create the task, you must start it by calling its [resume](../urlsessiontask/resume%28%29.md) method.

By using the completion handler, the task bypasses calls to delegate methods for response and data delivery, and instead provides any resulting [NSData](../nsdata.md), [NSURLResponse](../urlresponse.md), and [NSError](../nserror.md) objects inside the completion handler. Delegate methods for handling authentication challenges, however, are still called.

You should pass a `nil` completion handler *only* when creating tasks in sessions whose delegates include a [URLSession:dataTask:didReceiveData:](../urlsessiondatadelegate/urlsession%28__datatask_didreceive_%29.md) method.

If the request completes successfully, the `data` parameter of the completion handler block contains the resource data, and the `error` parameter is `nil`. If the request fails, the `data` parameter is `nil` and the `error` parameter contain information about the failure. If a response from the server is received, regardless of whether the request completes successfully or fails, the `response` parameter contains that information.

## See Also

### Adding data tasks to a session

- [dataTaskWithURL:](datatask%28with_%29-10dy7.md): Creates a task that retrieves the contents of the specified URL.
- [dataTaskWithRequest:](datatask%28with_%29-7jpys.md): Creates a task that retrieves the contents of a URL based on the specified URL request object.
- [dataTaskWithRequest:completionHandler:](datatask%28with_completionhandler_%29-e6xv.md): Creates a task that retrieves the contents of a URL based on the specified URL request object, and calls a handler upon completion.
- [NSURLSessionDataTask](../urlsessiondatatask.md): A URL session task that returns downloaded data directly to the app in memory.
- [NSURLSessionDataDelegate](../urlsessiondatadelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to data and upload tasks.
