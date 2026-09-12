> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsession/uploadtask(withresumedata:)](https://developer.apple.com/documentation/foundation/urlsession/uploadtask(withresumedata:))

# uploadTask(withResumeData:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates an upload task from a resume data blob. Requires the server to support the latest resumable uploads Internet-Draft from the HTTP Working Group, found at https://datatracker.ietf.org/doc/draft-ietf-httpbis-resumable-upload/ If resuming from an upload file, the file must still exist and be unmodified. If the upload cannot be successfully resumed, URLSession:task:didCompleteWithError: will be called.

## Declaration

```swift
func uploadTask(withResumeData resumeData: Data) -> URLSessionUploadTask
```

## Parameters

- `resumeData`: Resume data blob from an incomplete upload, such as data returned by the cancelByProducingResumeData: method.

<a id="return-value"></a>

## Return Value

A new session upload task, or nil if the resumeData is invalid.

## Mentioned In

- [Pausing and resuming uploads](../pausing-and-resuming-uploads.md)

## See Also

### Adding upload tasks to a session

- [Building a resumable upload server with SwiftNIO](../building-a-resumable-upload-server-with-swiftnio.md): Support HTTP resumable upload protocol in SwiftNIO by translating resumable uploads to regular uploads.
- [uploadTask(with:from:)](uploadtask%28with_from_%29.md): Creates a task that performs an HTTP request for the specified URL request object and uploads the provided data.
- [uploadTask(with:from:completionHandler:)](uploadtask%28with_from_completionhandler_%29.md): Creates a task that performs an HTTP request for the specified URL request object, uploads the provided data, and calls a handler upon completion.
- [uploadTask(with:fromFile:)](uploadtask%28with_fromfile_%29.md): Creates a task that performs an HTTP request for uploading the specified file.
- [uploadTask(with:fromFile:completionHandler:)](uploadtask%28with_fromfile_completionhandler_%29.md): Creates a task that performs an HTTP request for uploading the specified file, then calls a handler upon completion.
- [uploadTask(withStreamedRequest:)](uploadtask%28withstreamedrequest_%29.md): Creates a task that performs an HTTP request for uploading data based on the specified URL request.
- [uploadTask(withResumeData:completionHandler:)](uploadtask%28withresumedata_completionhandler_%29.md): Creates a URLSessionUploadTask from a resume data blob. If resuming from an upload file, the file must still exist and be unmodified.
- [URLSessionUploadTask](../urlsessionuploadtask.md): A URL session task that uploads data to the network in a request body.
- [URLSessionDataDelegate](../urlsessiondatadelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to data and upload tasks.

# uploadTaskWithResumeData: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates an upload task from a resume data blob. Requires the server to support the latest resumable uploads Internet-Draft from the HTTP Working Group, found at https://datatracker.ietf.org/doc/draft-ietf-httpbis-resumable-upload/ If resuming from an upload file, the file must still exist and be unmodified. If the upload cannot be successfully resumed, URLSession:task:didCompleteWithError: will be called.

## Declaration

```objectivec
- (NSURLSessionUploadTask *) uploadTaskWithResumeData:(NSData *) resumeData;
```

## Parameters

- `resumeData`: Resume data blob from an incomplete upload, such as data returned by the cancelByProducingResumeData: method.

<a id="return-value"></a>

## Return Value

A new session upload task, or nil if the resumeData is invalid.

## Mentioned In

- [Pausing and resuming uploads](../pausing-and-resuming-uploads.md)

## See Also

### Adding upload tasks to a session

- [uploadTaskWithRequest:fromData:](uploadtask%28with_from_%29.md): Creates a task that performs an HTTP request for the specified URL request object and uploads the provided data.
- [uploadTaskWithRequest:fromData:completionHandler:](uploadtask%28with_from_completionhandler_%29.md): Creates a task that performs an HTTP request for the specified URL request object, uploads the provided data, and calls a handler upon completion.
- [uploadTaskWithRequest:fromFile:](uploadtask%28with_fromfile_%29.md): Creates a task that performs an HTTP request for uploading the specified file.
- [uploadTaskWithRequest:fromFile:completionHandler:](uploadtask%28with_fromfile_completionhandler_%29.md): Creates a task that performs an HTTP request for uploading the specified file, then calls a handler upon completion.
- [uploadTaskWithStreamedRequest:](uploadtask%28withstreamedrequest_%29.md): Creates a task that performs an HTTP request for uploading data based on the specified URL request.
- [uploadTaskWithResumeData:completionHandler:](uploadtask%28withresumedata_completionhandler_%29.md): Creates a URLSessionUploadTask from a resume data blob. If resuming from an upload file, the file must still exist and be unmodified.
- [NSURLSessionUploadTask](../urlsessionuploadtask.md): A URL session task that uploads data to the network in a request body.
- [NSURLSessionDataDelegate](../urlsessiondatadelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to data and upload tasks.
