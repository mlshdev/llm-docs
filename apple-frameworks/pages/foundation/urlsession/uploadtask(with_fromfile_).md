> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsession/uploadtask(with:fromfile:)](https://developer.apple.com/documentation/foundation/urlsession/uploadtask(with:fromfile:))

# uploadTask(with:fromFile:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a task that performs an HTTP request for uploading the specified file.

## Declaration

```swift
func uploadTask(with request: URLRequest, fromFile fileURL: URL) -> URLSessionUploadTask
```

## Parameters

- `request`: A URL request object that provides the URL, cache policy, request type, and so on. The body stream and body data in this request object are ignored.
- `fileURL`: The URL of the file to upload.

<a id="return-value"></a>

## Return Value

The new session upload task.

<a id="Discussion"></a>

## Discussion

An HTTP upload request is any request that contains a request body, such as a `POST` or `PUT` request. Upload tasks require you to create a request object so that you can provide metadata for the upload, like HTTP request headers.

After you create the task, you must start it by calling its [resume()](../urlsessiontask/resume%28%29.md) method. The task calls methods on the session’s delegate to provide you with the upload’s progress, response metadata, response data, and so on.

## See Also

### Adding upload tasks to a session

- [Building a resumable upload server with SwiftNIO](../building-a-resumable-upload-server-with-swiftnio.md): Support HTTP resumable upload protocol in SwiftNIO by translating resumable uploads to regular uploads.
- [uploadTask(with:from:)](uploadtask%28with_from_%29.md): Creates a task that performs an HTTP request for the specified URL request object and uploads the provided data.
- [uploadTask(with:from:completionHandler:)](uploadtask%28with_from_completionhandler_%29.md): Creates a task that performs an HTTP request for the specified URL request object, uploads the provided data, and calls a handler upon completion.
- [uploadTask(with:fromFile:completionHandler:)](uploadtask%28with_fromfile_completionhandler_%29.md): Creates a task that performs an HTTP request for uploading the specified file, then calls a handler upon completion.
- [uploadTask(withStreamedRequest:)](uploadtask%28withstreamedrequest_%29.md): Creates a task that performs an HTTP request for uploading data based on the specified URL request.
- [uploadTask(withResumeData:)](uploadtask%28withresumedata_%29.md): Creates an upload task from a resume data blob. Requires the server to support the latest resumable uploads Internet-Draft from the HTTP Working Group, found at https://datatracker.ietf.org/doc/draft-ietf-httpbis-resumable-upload/ If resuming from an upload file, the file must still exist and be unmodified. If the upload cannot be successfully resumed, URLSession:task:didCompleteWithError: will be called.
- [uploadTask(withResumeData:completionHandler:)](uploadtask%28withresumedata_completionhandler_%29.md): Creates a URLSessionUploadTask from a resume data blob. If resuming from an upload file, the file must still exist and be unmodified.
- [URLSessionUploadTask](../urlsessionuploadtask.md): A URL session task that uploads data to the network in a request body.
- [URLSessionDataDelegate](../urlsessiondatadelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to data and upload tasks.

# uploadTaskWithRequest:fromFile: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a task that performs an HTTP request for uploading the specified file.

## Declaration

```objectivec
- (NSURLSessionUploadTask *) uploadTaskWithRequest:(NSURLRequest *) request fromFile:(NSURL *) fileURL;
```

## Parameters

- `request`: A URL request object that provides the URL, cache policy, request type, and so on. The body stream and body data in this request object are ignored.
- `fileURL`: The URL of the file to upload.

<a id="return-value"></a>

## Return Value

The new session upload task.

<a id="Discussion"></a>

## Discussion

An HTTP upload request is any request that contains a request body, such as a `POST` or `PUT` request. Upload tasks require you to create a request object so that you can provide metadata for the upload, like HTTP request headers.

After you create the task, you must start it by calling its [resume](../urlsessiontask/resume%28%29.md) method. The task calls methods on the session’s delegate to provide you with the upload’s progress, response metadata, response data, and so on.

## See Also

### Adding upload tasks to a session

- [uploadTaskWithRequest:fromData:](uploadtask%28with_from_%29.md): Creates a task that performs an HTTP request for the specified URL request object and uploads the provided data.
- [uploadTaskWithRequest:fromData:completionHandler:](uploadtask%28with_from_completionhandler_%29.md): Creates a task that performs an HTTP request for the specified URL request object, uploads the provided data, and calls a handler upon completion.
- [uploadTaskWithRequest:fromFile:completionHandler:](uploadtask%28with_fromfile_completionhandler_%29.md): Creates a task that performs an HTTP request for uploading the specified file, then calls a handler upon completion.
- [uploadTaskWithStreamedRequest:](uploadtask%28withstreamedrequest_%29.md): Creates a task that performs an HTTP request for uploading data based on the specified URL request.
- [uploadTaskWithResumeData:](uploadtask%28withresumedata_%29.md): Creates an upload task from a resume data blob. Requires the server to support the latest resumable uploads Internet-Draft from the HTTP Working Group, found at https://datatracker.ietf.org/doc/draft-ietf-httpbis-resumable-upload/ If resuming from an upload file, the file must still exist and be unmodified. If the upload cannot be successfully resumed, URLSession:task:didCompleteWithError: will be called.
- [uploadTaskWithResumeData:completionHandler:](uploadtask%28withresumedata_completionhandler_%29.md): Creates a URLSessionUploadTask from a resume data blob. If resuming from an upload file, the file must still exist and be unmodified.
- [NSURLSessionUploadTask](../urlsessionuploadtask.md): A URL session task that uploads data to the network in a request body.
- [NSURLSessionDataDelegate](../urlsessiondatadelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to data and upload tasks.
