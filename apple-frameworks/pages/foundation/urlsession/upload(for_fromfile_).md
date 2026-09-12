> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsession/upload(for:fromfile:)](https://developer.apple.com/documentation/foundation/urlsession/upload(for:fromfile:))

# upload(for:fromFile:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Convenience method to upload data using a URLRequest, creates and resumes a URLSessionUploadTask internally.

## Declaration

```swift
func upload(for request: URLRequest, fromFile fileURL: URL) async throws -> (Data, URLResponse)
```

## Parameters

- `request`: The URLRequest for which to upload data.
- `fileURL`: File to upload.

<a id="return-value"></a>

## Return Value

Data and response.

## Mentioned In

- [Pausing and resuming uploads](../pausing-and-resuming-uploads.md)

## See Also

### Performing asynchronous transfers

- [bytes(for:delegate:)](bytes%28for_delegate_%29.md): Retrieves the contents of a URL based on the specified URL request and delivers an asynchronous sequence of bytes.
- [bytes(from:delegate:)](bytes%28from_delegate_%29.md): Retrieves the contents of a given URL and delivers an asynchronous sequence of bytes.
- [URLSession.AsyncBytes](asyncbytes.md): An asynchronous sequence of bytes.
- [data(for:delegate:)](data%28for_delegate_%29.md): Downloads the contents of a URL based on the specified URL request and delivers the data asynchronously.
- [data(from:delegate:)](data%28from_delegate_%29.md): Retrieves the contents of a URL and delivers the data asynchronously.
- [data(for:)](data%28for_%29.md): Convenience method to load data using a URLRequest, creates and resumes a URLSessionDataTask internally.
- [data(from:)](data%28from_%29.md): Convenience method to load data using a URL, creates and resumes a URLSessionDataTask internally.
- [download(for:delegate:)](download%28for_delegate_%29.md): Retrieves the contents of a URL based on the specified URL request and delivers the URL of the saved file asynchronously.
- [download(from:delegate:)](download%28from_delegate_%29.md): Retrieves the contents of a URL and delivers the URL of the saved file asynchronously.
- [download(resumeFrom:delegate:)](download%28resumefrom_delegate_%29.md): Resumes a previously-paused download and delivers the URL of the saved file asynchronously.
- [upload(for:from:delegate:)](upload%28for_from_delegate_%29.md): Uploads data to a URL based on the specified URL request and delivers the result asynchronously.
- [upload(for:fromFile:delegate:)](upload%28for_fromfile_delegate_%29.md): Uploads data to a URL and delivers the result asynchronously.
- [upload(for:from:)](upload%28for_from_%29.md): Convenience method to upload data using a URLRequest, creates and resumes a URLSessionUploadTask internally.
- [URLSessionTaskDelegate](../urlsessiontaskdelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events.
