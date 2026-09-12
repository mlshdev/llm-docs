> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsession/data(from:delegate:)](https://developer.apple.com/documentation/foundation/urlsession/data(from:delegate:))

# data(from:delegate:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Retrieves the contents of a URL and delivers the data asynchronously.

## Declaration

```swift
func data(from url: URL, delegate: (any URLSessionTaskDelegate)? = nil) async throws -> (Data, URLResponse)
```

## Parameters

- `url`: The URL to retrieve.
- `delegate`: A delegate that receives life cycle and authentication challenge callbacks as the transfer progresses.

<a id="return-value"></a>

## Return Value

An asynchronously-delivered tuple that contains the URL contents as a [Data](../data.md) instance, and a [URLResponse](../urlresponse.md).

<a id="Discussion"></a>

## Discussion

Use this method to wait until the session finishes transferring data and receive it in a single [Data](../data.md) instance. To process the bytes as the session receives them, use [bytes(from:delegate:)](bytes%28from_delegate_%29.md).

## See Also

### Performing asynchronous transfers

- [bytes(for:delegate:)](bytes%28for_delegate_%29.md): Retrieves the contents of a URL based on the specified URL request and delivers an asynchronous sequence of bytes.
- [bytes(from:delegate:)](bytes%28from_delegate_%29.md): Retrieves the contents of a given URL and delivers an asynchronous sequence of bytes.
- [URLSession.AsyncBytes](asyncbytes.md): An asynchronous sequence of bytes.
- [data(for:delegate:)](data%28for_delegate_%29.md): Downloads the contents of a URL based on the specified URL request and delivers the data asynchronously.
- [data(for:)](data%28for_%29.md): Convenience method to load data using a URLRequest, creates and resumes a URLSessionDataTask internally.
- [data(from:)](data%28from_%29.md): Convenience method to load data using a URL, creates and resumes a URLSessionDataTask internally.
- [download(for:delegate:)](download%28for_delegate_%29.md): Retrieves the contents of a URL based on the specified URL request and delivers the URL of the saved file asynchronously.
- [download(from:delegate:)](download%28from_delegate_%29.md): Retrieves the contents of a URL and delivers the URL of the saved file asynchronously.
- [download(resumeFrom:delegate:)](download%28resumefrom_delegate_%29.md): Resumes a previously-paused download and delivers the URL of the saved file asynchronously.
- [upload(for:from:delegate:)](upload%28for_from_delegate_%29.md): Uploads data to a URL based on the specified URL request and delivers the result asynchronously.
- [upload(for:fromFile:delegate:)](upload%28for_fromfile_delegate_%29.md): Uploads data to a URL and delivers the result asynchronously.
- [upload(for:from:)](upload%28for_from_%29.md): Convenience method to upload data using a URLRequest, creates and resumes a URLSessionUploadTask internally.
- [upload(for:fromFile:)](upload%28for_fromfile_%29.md): Convenience method to upload data using a URLRequest, creates and resumes a URLSessionUploadTask internally.
- [URLSessionTaskDelegate](../urlsessiontaskdelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events.
