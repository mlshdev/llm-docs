> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsession/uploadtask(with:fromfile:completionhandler:)](https://developer.apple.com/documentation/foundation/urlsession/uploadtask(with:fromfile:completionhandler:))

# uploadTask(with:fromFile:completionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a task that performs an HTTP request for uploading the specified file, then calls a handler upon completion.

## Declaration

```swift
func uploadTask(with request: URLRequest, fromFile fileURL: URL, completionHandler: @escaping @Sendable (Data?, URLResponse?, (any Error)?) -> Void) -> URLSessionUploadTask
```

## Parameters

- `request`: A URL request object that provides the URL, cache policy, request type, and so on. The body stream and body data in this request object are ignored.
- `fileURL`: The URL of the file to upload.
- `completionHandler`: The completion handler to call when the load request is complete. This handler is executed on the delegate queue.

  If you pass `nil`, only the session delegate methods are called when the task completes, making this method equivalent to the [uploadTask(with:fromFile:)](uploadtask%28with_fromfile_%29.md) method.

  This completion handler takes the following parameters:

  - **`data`**: The data returned by the server.
  - **`response`**: An object that provides response metadata, such as HTTP headers and status code. If you are making an HTTP or HTTPS request, the returned object is actually an [HTTPURLResponse](../httpurlresponse.md) object.
  - **`error`**: An error object that indicates why the request failed, or `nil` if the request was successful.

<a id="return-value"></a>

## Return Value

The new session upload task.

<a id="Discussion"></a>

## Discussion

An HTTP upload request is any request that contains a request body, such as a `POST` or `PUT` request. Upload tasks require you to create a request object so that you can provide metadata for the upload, like HTTP request headers.

Unlike [uploadTask(with:fromFile:)](uploadtask%28with_fromfile_%29.md), this method returns the response body after it has been received in full, and does not require you to write a custom delegate to obtain the response body.

By using a completion handler, the task bypasses calls to delegate methods for response and data delivery, and instead provides any resulting data, response, or error inside the completion handler. Delegate methods for handling authentication challenges, however, are still called.

Typically you usually pass a `nil` completion handler only when creating tasks in sessions whose delegates include a [urlSession(\_:dataTask:didReceive:)](../urlsessiondatadelegate/urlsession%28__datatask_didreceive_%29.md) method. However, if you do not need the response data, use key-value observing to watch for changes to the task’s status to determine when it completes.

After you create the task, you must start it by calling its [resume()](../urlsessiontask/resume%28%29.md) method.

If the request completes successfully, the `data` parameter of the completion handler block contains the resource data, and the `error` parameter is `nil`. If the request fails, the `data` parameter is `nil,` and the `error` parameter contains information about the failure. If a response from the server is received, regardless of whether the request completes successfully or fails, the `response` parameter contains that information.

## See Also

### Adding upload tasks to a session

- [Building a resumable upload server with SwiftNIO](../building-a-resumable-upload-server-with-swiftnio.md): Support HTTP resumable upload protocol in SwiftNIO by translating resumable uploads to regular uploads.
- [uploadTask(with:from:)](uploadtask%28with_from_%29.md): Creates a task that performs an HTTP request for the specified URL request object and uploads the provided data.
- [uploadTask(with:from:completionHandler:)](uploadtask%28with_from_completionhandler_%29.md): Creates a task that performs an HTTP request for the specified URL request object, uploads the provided data, and calls a handler upon completion.
- [uploadTask(with:fromFile:)](uploadtask%28with_fromfile_%29.md): Creates a task that performs an HTTP request for uploading the specified file.
- [uploadTask(withStreamedRequest:)](uploadtask%28withstreamedrequest_%29.md): Creates a task that performs an HTTP request for uploading data based on the specified URL request.
- [uploadTask(withResumeData:)](uploadtask%28withresumedata_%29.md): Creates an upload task from a resume data blob. Requires the server to support the latest resumable uploads Internet-Draft from the HTTP Working Group, found at https://datatracker.ietf.org/doc/draft-ietf-httpbis-resumable-upload/ If resuming from an upload file, the file must still exist and be unmodified. If the upload cannot be successfully resumed, URLSession:task:didCompleteWithError: will be called.
- [uploadTask(withResumeData:completionHandler:)](uploadtask%28withresumedata_completionhandler_%29.md): Creates a URLSessionUploadTask from a resume data blob. If resuming from an upload file, the file must still exist and be unmodified.
- [URLSessionUploadTask](../urlsessionuploadtask.md): A URL session task that uploads data to the network in a request body.
- [URLSessionDataDelegate](../urlsessiondatadelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to data and upload tasks.

# uploadTaskWithRequest:fromFile:completionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a task that performs an HTTP request for uploading the specified file, then calls a handler upon completion.

## Declaration

```objectivec
- (NSURLSessionUploadTask *) uploadTaskWithRequest:(NSURLRequest *) request fromFile:(NSURL *) fileURL completionHandler:(void (^)(NSData *data, NSURLResponse *response, NSError *error)) completionHandler;
```

## Parameters

- `request`: A URL request object that provides the URL, cache policy, request type, and so on. The body stream and body data in this request object are ignored.
- `fileURL`: The URL of the file to upload.
- `completionHandler`: The completion handler to call when the load request is complete. This handler is executed on the delegate queue.

  If you pass `nil`, only the session delegate methods are called when the task completes, making this method equivalent to the [uploadTaskWithRequest:fromFile:](uploadtask%28with_fromfile_%29.md) method.

  This completion handler takes the following parameters:

  - **`data`**: The data returned by the server.
  - **`response`**: An object that provides response metadata, such as HTTP headers and status code. If you are making an HTTP or HTTPS request, the returned object is actually an [NSHTTPURLResponse](../httpurlresponse.md) object.
  - **`error`**: An error object that indicates why the request failed, or `nil` if the request was successful.

<a id="return-value"></a>

## Return Value

The new session upload task.

<a id="Discussion"></a>

## Discussion

An HTTP upload request is any request that contains a request body, such as a `POST` or `PUT` request. Upload tasks require you to create a request object so that you can provide metadata for the upload, like HTTP request headers.

Unlike [uploadTaskWithRequest:fromFile:](uploadtask%28with_fromfile_%29.md), this method returns the response body after it has been received in full, and does not require you to write a custom delegate to obtain the response body.

By using a completion handler, the task bypasses calls to delegate methods for response and data delivery, and instead provides any resulting data, response, or error inside the completion handler. Delegate methods for handling authentication challenges, however, are still called.

Typically you usually pass a `nil` completion handler only when creating tasks in sessions whose delegates include a [URLSession:dataTask:didReceiveData:](../urlsessiondatadelegate/urlsession%28__datatask_didreceive_%29.md) method. However, if you do not need the response data, use key-value observing to watch for changes to the task’s status to determine when it completes.

After you create the task, you must start it by calling its [resume](../urlsessiontask/resume%28%29.md) method.

If the request completes successfully, the `data` parameter of the completion handler block contains the resource data, and the `error` parameter is `nil`. If the request fails, the `data` parameter is `nil,` and the `error` parameter contains information about the failure. If a response from the server is received, regardless of whether the request completes successfully or fails, the `response` parameter contains that information.

## See Also

### Adding upload tasks to a session

- [uploadTaskWithRequest:fromData:](uploadtask%28with_from_%29.md): Creates a task that performs an HTTP request for the specified URL request object and uploads the provided data.
- [uploadTaskWithRequest:fromData:completionHandler:](uploadtask%28with_from_completionhandler_%29.md): Creates a task that performs an HTTP request for the specified URL request object, uploads the provided data, and calls a handler upon completion.
- [uploadTaskWithRequest:fromFile:](uploadtask%28with_fromfile_%29.md): Creates a task that performs an HTTP request for uploading the specified file.
- [uploadTaskWithStreamedRequest:](uploadtask%28withstreamedrequest_%29.md): Creates a task that performs an HTTP request for uploading data based on the specified URL request.
- [uploadTaskWithResumeData:](uploadtask%28withresumedata_%29.md): Creates an upload task from a resume data blob. Requires the server to support the latest resumable uploads Internet-Draft from the HTTP Working Group, found at https://datatracker.ietf.org/doc/draft-ietf-httpbis-resumable-upload/ If resuming from an upload file, the file must still exist and be unmodified. If the upload cannot be successfully resumed, URLSession:task:didCompleteWithError: will be called.
- [uploadTaskWithResumeData:completionHandler:](uploadtask%28withresumedata_completionhandler_%29.md): Creates a URLSessionUploadTask from a resume data blob. If resuming from an upload file, the file must still exist and be unmodified.
- [NSURLSessionUploadTask](../urlsessionuploadtask.md): A URL session task that uploads data to the network in a request body.
- [NSURLSessionDataDelegate](../urlsessiondatadelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to data and upload tasks.
